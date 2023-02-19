"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import Link from "next/link";
import BucketItemCard from "./BucketItemCard";
import BucketFormRadio from "./BucketFormRadio";
import BoxBerryModal from "./modals/BoxBerryModal";
import SdekModal from "./modals/SdekModal";
import TestRedux from "./TestRedux";
import styles from "./BucketItemCard.module.css";
import classNames from "classnames";

export type Order = {
  name: string
  phone: string
  email: string
  city: string
  delivery: "SDEK" | "BoxBerry" | "personal delivery"
  personalDataCheck: boolean
}

function BucketPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //#region Заказ
  const [order, setOrder] = useState<Order>({
    name: "",
    phone: "",
    email: "",
    city: "",
    delivery: "SDEK",
    personalDataCheck: true,
  });

  function changeOrder(prop: string, value: any) {
    setOrder((x) => ({ ...x, [prop]: value }));
  }

  const bucketItems = useSelector((state: RootState) => state.items);

  const itemsPrice = Math.ceil(
    bucketItems.reduce((a, v) => a + v.item.price * v.amount, 0)
  ).toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const deliveryPrice = 350;
  const finalPrice = Math.ceil(
    deliveryPrice + bucketItems.reduce((a, v) => a + v.item.price * v.amount, 0)
  ).toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const finalAmount = bucketItems.reduce((a, v) => a + v.amount, 0);
  //#endregion

  //#region СДЭК
  const [sdekData, setSdekData] = useState<any>(null);
  function openSdekModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsModalOpen(true);
  }
  console.log("sdekData >> ", sdekData);
  //#endregion

  //#region BoxBerry
  const [boxBerryData, setBoxBerryData] = useState<any>(null);
  function openBoxBerryModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsModalOpen(true);
  }
  console.log("boxBerryData >> ", boxBerryData);
  //#endregion

  //#region Queries
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

  return (<main className={classNames(
    `w-screen min-h-screen flex bg-[#0E0E0E] pt-[108px] px-[13vw]
      max-[800px]:px-[50px]
      max-[600px]:px-[25px]
      max-[550px]:px-[5px]`,
    {
      relative: isModalOpen === false,
      "overflow-hidden fixed z-[103]": isModalOpen,
    }
  )}>

    <TestRedux />
    <SdekModal
      setSdekData={setSdekData}
      isSdekModalOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
    />
    <BoxBerryModal
      setBoxBerryData={setBoxBerryData}
      isBoxBerryModalOpen={isModalOpen}
      closeModal={() => setIsModalOpen(false)}
    />

    <form className="flex flex-col items-center justify-center w-full mb-12">
      {/* Bucket text */}
      <h1 className="font-montserrat w-full font-bold text-7xl text-[#F5F5F5] mt-2 mb-10">
        Корзина
      </h1>

      {/* items and info block */}
      <div className="grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] w-full gap-6">
        {/* Items */}
        <div
          className="col-span-1 flex flex-col justify-center transition-all border-2 rounded-2xl border-[#919191]
          max-[1300px]:col-start-1
          max-[1300px]:col-end-3
          max-[1300px]:row-start-1
          max-[550px]:border-0
        "
        >
          {bucketItems.map((bucketItem, i, arr) => (
            <div key={bucketItem.item.id}>
              <BucketItemCard bucketItem={bucketItem} />
              {i !== arr.length - 1 && <hr className="mx-[24px]" />}
            </div>
          ))}
        </div>

        {/* Order & Delivery */}
        <div className="col-start-2 col-span-1 row-start-1 row-span-2 flex flex-col h-fit min-h-full w-fit justify-between border-2 rounded-2xl border-[#919191] px-10 pt-[26px] pb-[34px]
          max-[1300px]:col-start-1
          max-[1300px]:col-end-3
          max-[1300px]:row-start-3
          max-[1300px]:max-w-[none]
          max-[1300px]:border-0"
        >
          <div className="space-y-5">
            <div>
              {h2("Ваш заказ")}
              <p className="font-lato text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] mb-3">
                Товары, {finalAmount} шт. {itemsPrice} ₽
              </p>
            </div>

            <div>
              {h2("Выберите способ доставки", "w-[16ch]")}
              <BucketFormRadio
                id={"SDEK"}
                checked={order.delivery === "SDEK"}
                onChange={(_) => changeOrder("delivery", "SDEK")}
              >
                <>
                  <span className="block">ПВЗ СДЭК - 350 ₽</span>
                  {order.delivery === "SDEK" && <button
                    onClick={openSdekModal}
                    className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-[#29D9CE]"
                  >
                    Выбрать на карте...
                  </button>}
                </>
              </BucketFormRadio>
              <BucketFormRadio
                id={"BoxBerry"}
                checked={order.delivery === "BoxBerry"}
                onChange={(_) => changeOrder("delivery", "BoxBerry")}
              >
                <>
                  <span className="block">ПВЗ Boxberry - 350 ₽</span>
                  {order.delivery === "BoxBerry" && <button
                    onClick={openBoxBerryModal}
                    className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-[#29D9CE]"
                  >
                    Выбрать на карте...
                  </button>}
                </>
              </BucketFormRadio>
              <BucketFormRadio
                id={"personal delivery"}
                checked={order.delivery === "personal delivery"}
                onChange={(_) => changeOrder("delivery", "personal delivery")}
              >
                Курьер СДЭК - 350 ₽
              </BucketFormRadio>
            </div>
          </div>

          <div className="space-y-4">
            {h2(`Итого ${finalPrice} ₽`, "mt-[1rem]")}

            <textarea
              placeholder="Комментарий к заказу"
              rows={3}
              className="block w-full text-[#454545] mt-4 pl-3 pt-2 rounded-sm"
            />

            <button
              disabled={!order.personalDataCheck || finalAmount === 0}
              className={styles.buy + " font-inter w-full"}
            >
              Заказать
            </button>

            {/* TODO: Впилить ссылку */}
            <div className="flex flex-row gap-[14px]">
              <input
                className="appearance-none h-[25px] w-[25px] min-w-[25px] m-0 border border-gray-300 rounded-sm align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:before:content-[url(/check.svg)] 
                  focus:outline-none transition duration-200"
                type="checkbox"
                onChange={(x) => changeOrder("personalDataCheck", x.target.checked)}
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
                  className="underline focus:text-[gray]">
                  условиями
                </Link>
                .
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </main>);
}

export default BucketPage;
