"use client";
import React, { useRef, useState } from 'react'
import BucketFormRadio from './BucketFormRadio'
import BoxBerryModal from "../modals/BoxBerryModal";
import SdekModal from "../modals/SdekModal";
import { Order } from '../model/types'
import { useAppSelector } from '@/lib/redux/store/hooks';
import classNames from 'classnames';
import styles from "./OrderForm.module.css"

type Props = {
  order: Order
  setOrder: React.Dispatch<React.SetStateAction<Order>>
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const OrderForm = ({ order, setOrder, setModalOpen }: Props) => {
  const [isModalOpenSdek, setIsModalOpenSdek] = useState(false);
  const [isModalOpenBoxBerry, setIsModalOpenBoxBerry] = useState(false);

  function changeOrder(prop: string, value: any) {
    setOrder(x => ({ ...x, [prop]: value }));
  }

  //#region Modals
  function setSdekData(sdek: any) {
    changeOrder("Sdek", sdek);
  }
  function setBoxBerryData(boxBerry: any) {
    changeOrder("BoxBerry", boxBerry);
  }

  function closeModals() {
    setIsModalOpenBoxBerry(false)
    setIsModalOpenSdek(false)
    setModalOpen(false)
  }
  function openModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: "Sdek" | "BoxBerry") {
    e.preventDefault()
    setModalOpen(true)
    switch (name) {
      case "BoxBerry": setIsModalOpenBoxBerry(true); break;
      case 'Sdek': setIsModalOpenSdek(true); break;
    }
  }
  //#endregion

  //#region Logging
  order.Sdek.address && console.log("sdekData >> ", order.Sdek);
  order.BoxBerry.address && console.log("boxBerryData >> ", order.BoxBerry);
  //#endregion

  //#region Order
  const inputTailwind =
    "px-[24px] text-[20px] font-lato h-[68px] max-[600px]:h-[50px] border-2 rounded-2xl border-[#919191] bg-transparent max-[1300px]:rounded-[30px] invalid:border-red-500 text-black";
  const isPickUpPointDelivery = ["BoxBerry", "Sdek"].includes(order.delivery);

  const form = useRef<HTMLFormElement>(null);
  const bucketItems = useAppSelector(({ items }) => items);

  function pay(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setOrder(x => ({ ...x, startPayment: x.startPayment + 1 }));
  }
  //#endregion

  return <section>
    {isModalOpenSdek &&
      <SdekModal
        setSdekData={setSdekData}
        isSdekModalOpen={isModalOpenSdek}
        closeModal={closeModals}
      />}
    {isModalOpenBoxBerry &&
      <BoxBerryModal
        setBoxBerryData={setBoxBerryData}
        isBoxBerryModalOpen={isModalOpenBoxBerry}
        closeModal={closeModals}
      />}

    <h1 className="font-lato text-[25px] uppercase font-extrabold leading-[26px] tracking-[0.01em]">
      <b>Оформление</b> заказа
    </h1>

    <div>
      <h2 className="w-[16ch] font-lato text-[25px] font-extrabold leading-[26px] tracking-[0.01em]">
        Выберите способ доставки
      </h2>

      <BucketFormRadio
        id="Sdek"
        checked={order.delivery === "Sdek"}
        onChange={_ => changeOrder("delivery", "Sdek")}
        className="min-h-[50px]"
      >
        <>
          <span className="block">ПВЗ СДЭК - 350 ₽</span>
          {order.delivery === "Sdek" &&
            <button
              onClick={e => openModal(e, "Sdek")}
              className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-[#000] text-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] text-left"
            >
              {order.Sdek?.PVZ?.Address ?? <>Выбрать на карте...</>}
            </button>}
        </>
      </BucketFormRadio>
      <BucketFormRadio
        id="BoxBerry"
        checked={order.delivery === "BoxBerry"}
        onChange={_ => changeOrder("delivery", "BoxBerry")}
        className="min-h-[50px]"
      >
        <>
          <span className="block">ПВЗ Boxberry - 350 ₽</span>
          {order.delivery === "BoxBerry" &&
            <button
              onClick={e => openModal(e, "BoxBerry")}
              className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-[#000] text-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] text-left"
            >
              {order.BoxBerry?.address ?? <>Выбрать на карте...</>}
            </button>}
        </>
      </BucketFormRadio>
      <BucketFormRadio
        id="personal delivery"
        checked={order.delivery === "personal delivery"}
        onChange={_ => changeOrder("delivery", "personal delivery")}
        className="min-h-[50px]"
      >
        Курьер СДЭК - 350 ₽
      </BucketFormRadio>

      <textarea
        value={order.comment}
        placeholder="Комментарий к заказу"
        rows={3}
        className="block w-full text-[#454545] mt-4 pl-3 pt-2 rounded-sm"
        onChange={x => changeOrder("comment", x.target.value)}
      />
    </div>

    <form
      ref={form}
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
          text-black"
    >
      <input
        placeholder="ФИО"
        type="text"
        value={order.name}
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
        value={order.email}
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
        value={order.phone}
        onChange={({ target }) => changeOrder("phone", target.value)}
        className={classNames(inputTailwind, {
          "col-span-4": isPickUpPointDelivery,
          "col-span-2 row-start-3 mr-[0.8vw]": !isPickUpPointDelivery,
        })}
        name="phone"
      />
      <input
        type="text"
        value={bucketItems
          .map(e => `
                "${e.item.poizonArticul}",
                "${e.item.title}",
                "${e.item.price}",
                "${e.amount}",
                "${e.size?.available?.find(({ sizeKey }) => sizeKey === e.size.chosenSizeKey)?.sizeValue?.[e.size.chosenSizeValue]}",`)
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
            value={order.city}
            onChange={(x) => changeOrder("city", x.target.value)}
            className={`${inputTailwind} col-span-2 row-start-1 max-[1000px]:row-start-4 min-[1000px]:ml-[0.8vw]`}
            name="city"
          />
          <input
            placeholder="Улица, дом"
            value={order.street}
            onChange={(x) => changeOrder("street", x.target.value)}
            className={`${inputTailwind} col-span-2 row-start-2 max-[1000px]:row-start-5 min-[1000px]:ml-[0.8vw]`}
            name="address"
          />
          <input
            placeholder="Корпус"
            value={order.build}
            onChange={(x) => changeOrder("build", x.target.value)}
            className={`${inputTailwind} col-span-1 row-start-3 max-[1000px]:row-start-6 min-[1000px]:ml-[0.8vw] min-[1000px]:mr-[-1rem]`}
            name="build"
          />
          <input
            placeholder="Кв."
            value={order.apartment}
            onChange={(x) => changeOrder("apartment", x.target.value)}
            className={`${inputTailwind} col-span-1 row-start-3 max-[1000px]:row-start-6 min-[1000px]:ml-[0.8vw]`}
            name="appartament"
          />
        </>
      )}

      <div className="flex justify-center col-span-4 max-[1000px]:col-span-2">
        <button
          disabled={
            order.name === "" ||
            order.email === "" ||
            order.phone === "" ||
            (!isPickUpPointDelivery &&
              (order.city === "" ||
                order.street === "" ||
                order.apartment === ""))
          }
          onClick={pay}
          className={classNames(styles.buy, " w-[calc(8ch+10rem)] font-inter rounded-lg py-5 px-8 text-white")}
        >
          Оплатить
        </button>
      </div>
    </form>

  </section>
}

export default OrderForm