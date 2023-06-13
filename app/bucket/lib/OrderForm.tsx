"use client";
import React, { useState } from 'react'
import BucketFormRadio from './BucketFormRadio'
import BoxBerryModal from "../modals/BoxBerryModal";
import SdekModal from "../modals/SdekModal";
import { Order } from '../model/types'
import { useAppSelector } from '@/lib/redux/store/hooks';
import OrderInput from './OrderInput';

type Props = {
  order: Order
  setOrder: React.Dispatch<React.SetStateAction<Order>>
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const OrderForm = ({ order, setOrder, setModalOpen }: Props) => {
  //#region Modals
  const [isModalOpenSdek, setIsModalOpenSdek] = useState(false)
  const [isModalOpenBoxBerry, setIsModalOpenBoxBerry] = useState(false)

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
  const bucketItems = useAppSelector(({ items }) => items);

  function changeOrder(prop: string, value: any) {
    setOrder(x => ({ ...x, [prop]: value }));
  }
  //#endregion

  return <section id='orderForm' className='pt-[5rem]'>
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

    <h1 className="font-noto text-[25px] uppercase font-[500] leading-[26px] tracking-[0.01em]">
      <b className='font-[900]'>Оформление</b> заказа
    </h1>

    <div className='flex'>
      {/* Выбрать способ доставки */}
      <aside className='w-fit'>
        <h2 className="w-[16ch] font-noto text-[25px] font-extrabold leading-[26px] tracking-[0.01em]">
          Способ оплаты
        </h2>
        <BucketFormRadio
          id="card"
          checked={true}
          onChange={() => { }}
          className="min-h-[50px]"
        >
          <span className="block">Картой онлайн</span>
        </BucketFormRadio>


        <h2 className="w-[16ch] font-noto text-[25px] font-extrabold leading-[26px] tracking-[0.01em]">
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
      </aside>

      {/* Заполнить данные заказа  */}
      <form className=" 
          h-min
          grid grid-cols-2 gap-[1.3vw] 
          p-[2rem] max-[600px]:p-[1rem]
          max-[1000px]:!min-w-[80vw]
          max-[1000px]:!gap-[10px]
          max-[600px]:!min-w-[90vw]
          text-black">

        {/* Адрес доставки */}
        <div className='flex flex-col space-y-5'>
          <h2>Адрес доставки</h2>

          <OrderInput
            placeholder="Город"
            value={order.city}
            onChange={(x) => changeOrder("city", x.target.value)}
            name="city"
          />
          <OrderInput
            placeholder="Улица, дом"
            value={order.street}
            onChange={(x) => changeOrder("street", x.target.value)}
            name="address"
          />
          <div className='flex flex-row gap-[20px]'>
            <OrderInput
              placeholder="Корпус"
              value={order.build}
              onChange={(x) => changeOrder("build", x.target.value)}
              name="build"
            />
            <OrderInput
              placeholder="Кв."
              value={order.apartment}
              onChange={(x) => changeOrder("apartment", x.target.value)}
              name="appartament"
            />
          </div>
        </div>

        {/* Контактные данные */}
        <div className='space-y-5'>
          <h2>Контактные данные</h2>

          <OrderInput
            placeholder="ФИО"
            type="text"
            value={order.name}
            onChange={(x) => changeOrder("name", x.target.value)}
            name="FIO"
          />
          <OrderInput
            placeholder="E-mail"
            type="email"
            value={order.email}
            onChange={(x) => changeOrder("email", x.target.value)}
            name="Email"
          />
          <OrderInput
            placeholder="Телефон"
            type="tel"
            value={order.phone}
            onChange={({ target }) => changeOrder("phone", target.value)}
            name="phone"
          />
        </div>

        {/* Комментарии к заказу */}
        <div>
          <h2>Комментарии к заказу</h2>
          <OrderInput
            placeholder="Примечание к заказу"
            value={order.comment}
            onChange={x => changeOrder("comment", x.target.value)}
            name="comment"
          />
        </div>
      </form>
    </div>

  </section>
}

export default OrderForm