"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import Link from "next/link";
import BucketItemCard from "./BucketItemCard";
import BucketFormRadio from "./BucketFormRadio";
import BoxBerryModal from "./modals/BoxBerryModal";
import SdekModal from "./modals/SdekModal";
import OrderModal from "./modals/OrderModal";
import TestRedux from "./TestRedux";
import styles from "./BucketItemCard.module.css";
import classNames from "classnames";
import { BucketItem, deleteAllItems } from "@/lib/redux/slices/itemSlice";
import { useRouter } from "next/navigation";
import { ItemPayDto } from "@/pages/api/payurl";
import emailjs from "@emailjs/browser";


// Используется в заказе и при формировании чека
export type Order = {
  name: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  build: string;
  apartment: string;
  delivery: "Sdek" | "BoxBerry" | "personal delivery";
  personalDataCheck: boolean;
  Sdek: any;
  BoxBerry: any;
  startPayment: number;
  comment: string;
};

function BucketPage() {
  //#region Модалки
  const [isModalOpenSdek, setIsModalOpenSdek] = useState(false);
  const [isModalOpenBoxBerry, setIsModalOpenBoxBerry] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const isAnyModalOpen =
    isModalOpenSdek || isModalOpenBoxBerry || isOrderModalOpen;
  //#endregion

  //#region Заказ
  const emptyOrder: Order =
    process.env.NEXT_PUBLIC_IS_PROD === undefined ?
      //* TEST 
      {
        name: "имя",
        phone: "+719581958",
        email: "тест@gmail.com",
        comment: "тестовый комментарий",
        city: "город",
        street: "улица",
        build: "строение",
        apartment: "квартира",
        delivery: "personal delivery",
        personalDataCheck: true,
        Sdek: {},
        BoxBerry: {},
        startPayment: 0,
      } :
      //* PROD
      {
        name: "",
        phone: "",
        email: "",
        comment: "",
        city: "",
        street: "",
        build: "",
        apartment: "",
        delivery: "Sdek",
        personalDataCheck: true,
        Sdek: {},
        BoxBerry: {},
        startPayment: 0,
      };

  const [order, setOrder] = useState<Order>(emptyOrder);

  function changeOrder(prop: string, value: any) {
    setOrder((x) => ({ ...x, [prop]: value }));
  }

  const bucketItems = useSelector((state: RootState) => state.items);

  // Стоимость товаров и стоимость доставки
  const itemsPrice = Math.ceil(
    bucketItems.reduce((a, v) => a + v.item.price * v.amount, 0)
  );
  const deliveryPrice = 350;
  const finalPrice = deliveryPrice + itemsPrice;

  // Количество товаров
  const itemsAmount = bucketItems.reduce((a, v) => a + v.amount, 0);
  const itemsPriceStr = itemsPrice.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const finalPriceStr = finalPrice.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  function openOrderModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsOrderModalOpen(true);
  }

  //#endregion

  //#region Оплата
  const router = useRouter();
  const dispatch = useDispatch();

  function payment() {
    // items + order → options
    let clientDelivery: string;
    switch (order.delivery) {
      case "Sdek":
        clientDelivery = `${order.Sdek?.cityName} ${order.Sdek?.PVZ?.Address}`;
        break;
      case "BoxBerry":
        clientDelivery = order?.BoxBerry?.address;
        break;
      default:
        clientDelivery = `г.${order.city} ул.${order.street} к.${order.build} кв.${order.apartment}`;
        break;
    }

    const getSizeName = (size: BucketItem["size"]) =>
      size.available.find((x) => x.sizeKey === size.chosenSizeKey)?.sizeValue[
      size.chosenSizeValue
      ];

    const options = {
      account: 25060038,
      amount: finalPrice, // 1руб,
      transactionId: "t-" + Date.now(),
      subscriberId: order.email,
      customParams: {
        // товары
        items: bucketItems
          .reduce<BucketItem[]>((arr, curr) => {
            // Одинаковый элемент
            const sameIndex = arr.findIndex(
              ({ item, size }) =>
                item.poizonArticul === curr.item.poizonArticul &&
                size.chosenSizeKey === curr.size.chosenSizeKey &&
                size.chosenSizeValue === curr.size.chosenSizeValue
            );

            if (sameIndex !== -1) {
              arr[sameIndex].amount + curr.amount;
            } else arr.push(curr);
            return arr;
          }, [])
          .map<ItemPayDto>(({ item, size, amount }) => ({
            item_title: item.title,
            item_poizon_articul: item.poizonArticul,
            item_price: item.price,
            item_amount: amount,
            item_size: `${size.chosenSizeKey} ${getSizeName(size)}`,
          }))
          .reduce(
            (arr, item) => ({
              ...arr,
              [`item_${item.item_poizon_articul}`]: JSON.stringify(
                item,
                null,
                0
              ),
            }),
            {}
          ),
        // о клиенте
        client: {
          client_delivery: clientDelivery,
          client_name: order.name,
          client_phone: order.phone,
          client_comment: order.comment,
          client_delivery_method: order.delivery,
        },
      },
    };

    console.log("options >>> ", options);

    const assistant = new (window as any).Assistant.Builder();

    // платёж прошёл успешно
    assistant.setOnSuccessCallback(
      (operationId: string, transactionId: string) => {
        console.log("setOnSuccessCallback");
        dispatch(deleteAllItems());
        setOrder(emptyOrder);
        router.push("/thank-you");
      }
    );

    // платёж не прошёл
    assistant.setOnFailCallback(
      (operationId: string, transactionId: string) => {
        console.log("setOnFailCallback");
      }
    );

    // платёж обрабатывается
    assistant.setOnInProgressCallback(
      function (operationId: string, transactionId: string) {
        console.log("setOnInProgressCallback");
        const emailList = bucketItems
          .reduce<BucketItem[]>((arr, curr) => {
            // Одинаковый элемент
            const sameIndex = arr.findIndex(
              ({ item, size }) =>
                item.poizonArticul === curr.item.poizonArticul &&
                size.chosenSizeKey === curr.size.chosenSizeKey &&
                size.chosenSizeValue === curr.size.chosenSizeValue
            );

            if (sameIndex !== -1) {
              arr[sameIndex].amount + curr.amount;
            } else arr.push(curr);
            return arr;
          }, [])
          .map<ItemPayDto>(({ item, size, amount }) => ({
            item_title: item.title,
            item_poizon_articul: item.poizonArticul,
            item_price: item.price,
            item_amount: amount,
            item_size: `${size.chosenSizeKey} ${getSizeName(size)}`,
          }))
          .map(x => ({
            "name": `${x.item_title} | ${x.item_poizon_articul} | ${x.item_size}`,
            "price": x.item_price,
            "quantity": x.item_amount,
          }))


        const orderData = {

          'FIO': order.name,
          'Email': order.email,
          'phone': order.phone,
          'list': JSON.stringify(emailList, null, 2),
          'delivery_method': order.delivery,
          'address': clientDelivery,
          'comment': order.comment,
        }
        emailjs
          .send(
            "service_meeb64l",
            "template_3i6j7qf",
            orderData,
            "Igg7aXsdDmTo0FNZG"
          )
          .then((result: any) => console.log("result.text", result.text))
          .catch((error: any) => console.error("catch error.text", JSON.stringify(error)))
          .finally(() => console.log("finally"));
      }
    );

    assistant.build(options);
  }

  useEffect(() => {
    if (order.startPayment !== 0) payment();
  }, [order.startPayment]);
  //#endregion

  //#region СДЭК
  function openSdekModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsModalOpenSdek(true);
  }

  function setSdekData(sdek: any) {
    changeOrder("Sdek", sdek);
  }

  if (order.Sdek.address !== undefined) {
    console.log("sdekData >> ", order.Sdek);
  }
  //#endregion

  //#region BoxBerry
  function openBoxBerryModal(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    setIsModalOpenBoxBerry(true);
  }

  function setBoxBerryData(boxBerry: any) {
    changeOrder("BoxBerry", boxBerry);
  }

  if (order.BoxBerry.address !== undefined) {
    console.log("boxBerryData >> ", order.BoxBerry);
  }
  //#endregion

  //#region UI templates
  const h2 = (text: string, className: string = "") => (
    <h2
      className={`${className} font-lato text-[25px] font-extrabold leading-[26px] tracking-[0.01em]`}
    >
      {text}
    </h2>
  );
  //#endregion

  return (
    <main
      className={classNames(
        `w-screen min-h-screen flex bg-[#0E0E0E] pt-[108px] px-[10vw]
      max-[800px]:!px-[50px]
      max-[600px]:!px-[25px]
      max-[550px]:!px-[5px]`,
        {
          relative: !isAnyModalOpen,
          "overflow-hidden fixed z-[103]": isAnyModalOpen,
        }
      )}
    >

      {process.env.NEXT_PUBLIC_IS_PROD === undefined && <TestRedux />}
      {process.env.NEXT_PUBLIC_IS_PROD === undefined && <button
        onClick={() => setOrder(x => ({ ...x, startPayment: ++x.startPayment }))}
        className="absolute bg-slate-500 top-[10rem]">Вызов оплаты
      </button>}

      {isModalOpenSdek && (
        <SdekModal
          setSdekData={setSdekData}
          isSdekModalOpen={isModalOpenSdek}
          closeModal={() => setIsModalOpenSdek(false)}
        />
      )}
      {isModalOpenBoxBerry && (
        <BoxBerryModal
          setBoxBerryData={setBoxBerryData}
          isBoxBerryModalOpen={isModalOpenBoxBerry}
          closeModal={() => setIsModalOpenBoxBerry(false)}
        />
      )}
      {isOrderModalOpen && (
        <OrderModal
          order={order}
          setOrder={setOrder}
          isOrderModalOpen={isOrderModalOpen}
          closeModal={() => setIsOrderModalOpen(false)}
        />
      )}

      <form
        className="flex flex-col items-center justify-center 
    max-[600px]:!justify-start
    w-full mb-12"
      >
        {/* Bucket text */}
        <h1 className="font-montserrat w-full ml-3 font-bold text-7xl text-[#F5F5F5] mt-2 mb-10 px-[5px] max-[600px]:!text-[4rem] max-[500px]:!text-[3.5rem] max-[400px]:!text-[3rem]">
          Корзина
        </h1>

        {/* items and info block */}
        <div className="grid grid-cols-[1fr_auto] w-full gap-6">
          {/* Items */}
          <div
            className="col-span-1 flex flex-col transition-all border-2 rounded-2xl border-[#919191]
          max-[1300px]:!col-start-1
          max-[1300px]:!col-end-3
          max-[1300px]:!row-start-1
          max-[550px]:!border-0
          h-[min-content]
        "
          >
            {bucketItems.map((bucketItem, i, arr) => (
              <div key={`${bucketItem.item.id}-${i}`}>
                <BucketItemCard bucketItem={bucketItem} />
                {i !== arr.length - 1 && <hr className="mx-[24px]" />}
              </div>
            ))}
          </div>

          {/* Order & Delivery */}
          <div
            className="col-start-2 col-span-1 row-start-1 row-span-2 flex flex-col h-fit w-fit min-h-full justify-between
          min-[1300px]:!row-start-1
          min-[1300px]:!row-end-2
          max-[1300px]:!col-start-1
          max-[1300px]:!col-end-3
          max-[1300px]:!row-start-3
          max-[1300px]:!max-w-[none]
          
        "
          >
            <div
              className="
            sticky
            top-[120px]
            border-2 rounded-2xl border-[#919191]
            px-[15px] 
            max-[600px]:!pt-[0px]
            pt-[26px] pb-[34px]
            max-[600px]:!border-0
            
          "
            >
              <div className="space-y-5">
                <div>
                  {h2("Ваш заказ")}
                  <p className="font-lato text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] mb-3">
                    Товары, {itemsAmount} шт. {itemsPriceStr} ₽
                  </p>
                </div>

                <div>
                  {h2("Выберите способ доставки", "w-[16ch]")}
                  <BucketFormRadio
                    id={"Sdek"}
                    checked={order.delivery === "Sdek"}
                    onChange={(_) => changeOrder("delivery", "Sdek")}
                    className="min-h-[50px]"
                  >
                    <>
                      <span className="block">ПВЗ СДЭК - 350 ₽</span>
                      {order.delivery === "Sdek" && (
                        <button
                          onClick={openSdekModal}
                          className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-[#29D9CE] text-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] text-left"
                        >
                          {order.Sdek?.PVZ?.Address ?? <>Выбрать на карте...</>}
                        </button>
                      )}
                    </>
                  </BucketFormRadio>
                  <BucketFormRadio
                    id={"BoxBerry"}
                    checked={order.delivery === "BoxBerry"}
                    onChange={(_) => changeOrder("delivery", "BoxBerry")}
                    className="min-h-[50px]"
                  >
                    <>
                      <span className="block">ПВЗ Boxberry - 350 ₽</span>
                      {order.delivery === "BoxBerry" && (
                        <button
                          onClick={openBoxBerryModal}
                          className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-[#29D9CE] text-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] text-left"
                        >
                          {order.BoxBerry?.address ?? <>Выбрать на карте...</>}
                        </button>
                      )}
                    </>
                  </BucketFormRadio>
                  <BucketFormRadio
                    id={"personal delivery"}
                    checked={order.delivery === "personal delivery"}
                    onChange={(_) =>
                      changeOrder("delivery", "personal delivery")
                    }
                  >
                    Курьер СДЭК - 350 ₽
                  </BucketFormRadio>
                </div>
              </div>


              <div className="space-y-4">
                {h2(`Итого ${finalPriceStr} ₽`, "mt-[1rem]")}

                <textarea
                  value={order.comment}
                  placeholder="Комментарий к заказу"
                  rows={3}
                  className="block w-full text-[#454545] mt-4 pl-3 pt-2 rounded-sm"
                  onChange={x => changeOrder("comment", x.target.value)}
                />

                <button
                  disabled={
                    !order.personalDataCheck
                    || itemsAmount === 0
                    || (order.delivery === "Sdek" && order.Sdek?.PVZ?.Address === undefined)
                    || (order.delivery === "BoxBerry" && order.BoxBerry?.address === undefined)}
                  className={styles.buy + " font-inter w-full"}
                  onClick={openOrderModal}

                //TODO сделать модальное окно//
                >
                  Заказать
                </button>

                <div className="flex flex-row gap-[14px]">
                  <input
                    className="appearance-none h-[25px] w-[25px] min-w-[25px] m-0 border border-gray-300 rounded-sm align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:before:content-[url(/check.svg)]
                  focus:outline-none transition duration-200"
                    type="checkbox"
                    onChange={(x) =>
                      changeOrder("personalDataCheck", x.target.checked)
                    }
                    checked={order.personalDataCheck}
                    id="personalDataCheck"
                  />
                  <label
                    className="font-inter text-[10px] leading-[12.1px] font-extrabold tracking-[0.01em] max-w-[35ch]"
                    htmlFor="personalDataCheck"
                  >
                    Нажимая «Заказать» Вы даете согласие на хранение и обработку
                    ваших персональных данных в соответствии с&nbsp;
                    <Link
                      href="/privacy"
                      className="underline focus:text-[gray]"
                    >
                      условиями
                    </Link>
                    .
                  </label>
                </div>

              </div>

            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default BucketPage;
