"use client";
import React, { useRef, useState } from "react";
import { Order } from "../page";
import Image from "next/image";
import menu_close_path from "@/public/header-images/close_bl.png";
import classNames from "classnames";
import styles from "./OrderModal.module.css";
import emailjs from "@emailjs/browser";
import type { RootState } from "@/lib/redux/store/store";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  order: Order;
  setOrder: React.Dispatch<Order>;
  closeModal: () => any;
  isOrderModalOpen: boolean;
};
// Модалка с заказом.
// Открывается при нажатии кнопки "Заказать"
const OrderModal = ({
  order,
  setOrder,
  closeModal,
  isOrderModalOpen,
}: Props) => {
  const inputTailwind =
    "px-[24px] text-[20px] font-lato h-[68px] max-[600px]:h-[50px] border-2 rounded-2xl border-[#919191] bg-transparent max-[1300px]:rounded-[30px] invalid:border-red-500 text-black";
  const isPickUpPointDelivery = ["BoxBerry", "Sdek"].includes(order.delivery);

  const form = useRef<HTMLFormElement>(null);
  const [localOrder, setLocalOrder] = useState<Order>(order);
  function changeOrder(prop: string, value: any) {
    setLocalOrder((x) => ({ ...x, [prop]: value }));
  }

  const bucketItems = useSelector((state: RootState) => state.items);

  function pay(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    // if (form.current) {
      // console.log("наш лог",new FormData(form.current))
      // emailjs
      //   .sendForm(
      //     "service_meeb64l",
      //     "template_3i6j7qf",
      //     form.current,
      //     "Igg7aXsdDmTo0FNZG"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
    // }

    setOrder({ ...localOrder, startPayment: order.startPayment + 1 });
    closeModal();
  }

  return (
    <section
      className={classNames({
        "w-full h-screen absolute left-0 top-0 backdrop-blur-lg z-[101]":
          isOrderModalOpen,
        hidden: !isOrderModalOpen,
      })}
    >
      {/* Задник */}
      <div
        onClick={closeModal}
        className="w-full h-screen absolute left-0 top-0"
      />

      {/* Закрыть модалку */}
      <button
        onClick={closeModal}
        className="cursor-pointer fixed z-[103] right-[5vw] translate-x-[50%] top-[108px] max-mobile:hidden"
      >
        <Image
          src={menu_close_path}
          width={50}
          height={50}
          alt="закрыть модальное окно"
        />
      </button>

      <form
        className=" 
          absolute z-[102] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          h-min bg-[#fff] p-[2rem] max-[600px]:p-[1rem]
          border-[2px] border-solid border-[#000] rounded-[15px]
          grid grid-cols-4 gap-[1.3vw] 
          max-h-[400px]
          min-[1000px]:!min-w-[600px] 
          max-[1000px]:!min-w-[80vw]
          max-[1000px]:!gap-[10px]
          max-[1000px]:!grid-cols-2 
          max-[600px]:!min-w-[90vw]
          max-[600px]:!translate-y-[-75%]
          text-black  
          
          "
        ref={form}

      >
        <input
          placeholder="ФИО"
          type="text"
          value={localOrder.name}
          onChange={(x) => changeOrder("name", x.target.value)}
          className={classNames(inputTailwind, {
            "col-span-4": isPickUpPointDelivery,
            "col-span-2 row-start-1 mr-[0.8vw]": !isPickUpPointDelivery,
          })}
          name="FIO"
        />
        <input
          placeholder="E-mail"
          type="email"
          value={localOrder.email}
          onChange={(x) => changeOrder("email", x.target.value)}
          className={classNames(inputTailwind, {
            "col-span-4": isPickUpPointDelivery,
            "col-span-2 row-start-2 mr-[0.8vw]": !isPickUpPointDelivery,
          })}
          name="Email"
        />
        <input
          placeholder="Телефон"
          type="tel"
          value={localOrder.phone}
          onChange={(x) => changeOrder("phone", x.target.value)}
          className={classNames(inputTailwind, {
            "col-span-4": isPickUpPointDelivery,
            "col-span-2 row-start-3 mr-[0.8vw]": !isPickUpPointDelivery,
          })}
          name="phone"
        />
        <input
          type="text"
          value={bucketItems
            .map(
              (e) =>
                `
                "${e.item.poizonArticul}",
                "${e.item.title}",
                "${e.item.price}",
                "${e.amount}",
                "${
                  e.size?.available?.find(
                    (x) => x.sizeKey === e.size.chosenSizeKey
                  )?.sizeValue?.[e.size.chosenSizeValue]
                }",
                `
            )
            .join("\n")}
          className="hidden"
          name="list"
        />
        <input
          type="text"
          value={order.delivery}
          className="hidden"
          name="delivery"
        />
        <input
          type="text"
          value={`${order.Sdek?.cityName} ${order.Sdek?.PVZ?.Address}`}
          className="hidden"
          name="Sdek"
        />
        <input
          type="text"
          value={order?.BoxBerry?.address}
          className="hidden"
          name="BoxBerry"
        />
        <input
          type="text"
          value={order.comment}
          className="hidden"
          name="comment"
        />
        {!isPickUpPointDelivery && (
          <>
            <input
              placeholder="Город"
              value={localOrder.city}
              onChange={(x) => changeOrder("city", x.target.value)}
              className={`${inputTailwind} col-span-2 row-start-1 max-[1000px]:row-start-4 min-[1000px]:ml-[0.8vw]`}
              name="city"
            />
            <input
              placeholder="Улица, дом"
              value={localOrder.street}
              onChange={(x) => changeOrder("street", x.target.value)}
              className={`${inputTailwind} col-span-2 row-start-2 max-[1000px]:row-start-5 min-[1000px]:ml-[0.8vw]`}
              name="address"
            />
            <input
              placeholder="Корпус"
              value={localOrder.build}
              onChange={(x) => changeOrder("build", x.target.value)}
              className={`${inputTailwind} col-span-1 row-start-3 max-[1000px]:row-start-6 min-[1000px]:ml-[0.8vw] min-[1000px]:mr-[-1rem]`}
              name="build"
            />
            <input
              placeholder="Кв."
              value={localOrder.apartment}
              onChange={(x) => changeOrder("apartment", x.target.value)}
              className={`${inputTailwind} col-span-1 row-start-3 max-[1000px]:row-start-6 min-[1000px]:ml-[0.8vw]`}
              name="appartament"
            />
          </>
        )}

        <div
          className={classNames(
            "flex justify-center col-span-4 max-[1000px]:col-span-2"
          )}
        >
          <button
            disabled={
              localOrder.name === "" ||
              localOrder.email === "" ||
              localOrder.phone === "" ||
              (!isPickUpPointDelivery &&
                (localOrder.city === "" ||
                  localOrder.street === "" ||
                  localOrder.apartment === ""))
            }
            onClick={pay}
            className={
              styles.buy +
              " w-[calc(8ch+10rem)] font-inter rounded-lg py-5 px-8 text-white"
            }
          >
            Оплатить
          </button>
        </div>
      </form>
    </section>
  );
};

export default OrderModal;
