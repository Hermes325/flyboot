"use client";
import React, { useState } from 'react'
import BucketFormRadio from './BucketFormRadio'
import BoxBerryModal from "../modals/BoxBerryModal";
import SdekModal from "../modals/SdekModal";
import { Order } from '../model/types'
import OrderInput from './OrderInput';
import creditCard from "@/public/bucket/credit_card.svg"
import Image from 'next/image'
import classNames from 'classnames';

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
  function changeOrder(prop: string, value: any) {
    setOrder(x => ({ ...x, [prop]: value }));
  }
  //#endregion

  return <section id='orderForm' className='mb-[100px]'>
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

    <h1 className="font-noto text-[62px] uppercase font-[500] leading-[74px] mb-[54px]">
      <b className='font-[900]'>Оформление</b> заказа
    </h1>

    <div className='flex gap-[1.3vw]'>
      <aside className='w-fit space-y-5'>
        <H2Styled>Способ оплаты</H2Styled>
        <BucketFormRadio
          id="card"
          checked={true}
          onChange={() => { }}
          showInput={false}
        >
          <div className='flex flex-row justify-between'>
            <span className="block text-white">Картой онлайн</span>

            <Image
              src={creditCard}
              alt="Иконка банковской карты"
              className='bg-cover'
            />
          </div>
        </BucketFormRadio>


        <H2Styled className='!mt-[3rem]'>Способ доставки</H2Styled>
        <BucketFormRadio
          id="Sdek"
          checked={order.delivery === "Sdek"}
          onChange={_ => changeOrder("delivery", "Sdek")}
          className="min-h-[50px]"
        >
          <>
            <span className="block text-white">ПВЗ СДЭК - 350 ₽</span>
            {order.delivery === "Sdek" &&
              <button
                onClick={e => openModal(e, "Sdek")}
                className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] text-left"
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
            <span className="block text-white">ПВЗ Boxberry - 350 ₽</span>
            {order.delivery === "BoxBerry" &&
              <button
                onClick={e => openModal(e, "BoxBerry")}
                className="font-inter text-[15px] leading-[18px] tracking-[0.01em] underline text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] text-left"
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
          max-[600px]:p-[1rem]
          max-[1000px]:!min-w-[80vw]
          max-[1000px]:!gap-[10px]
          max-[600px]:!min-w-[90vw]
          text-black">

        {/* Адрес доставки */}
        <div className='flex flex-col space-y-5'>
          <H2Styled>Адрес доставки</H2Styled>

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
          <div className='flex flex-row gap-[1.3vw]'>
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
          <H2Styled>Контактные данные</H2Styled>

          <OrderInput
            placeholder="ФИО"
            type="text"
            value={order.name}
            onChange={(x) => changeOrder("name", x.target.value)}
            name="FIO"
          />
          <OrderInput
            placeholder="Телефон"
            type="tel"
            value={order.phone}
            onChange={({ target }) => changeOrder("phone", target.value)}
            name="phone"
          />
          <OrderInput
            placeholder="E-mail"
            type="email"
            value={order.email}
            onChange={(x) => changeOrder("email", x.target.value)}
            name="Email"
          />
        </div>

        {/* Комментарии к заказу */}
        <div className='flex flex-col space-y-5 mt-[1rem]'>
          <H2Styled>Комментарии к заказу</H2Styled>
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

const H2Styled = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
  <h2 {...props} className={classNames(
    "text-[20px] leading-[24px]",
    "max-[1500px]:text-[15px] max-[1500px]:leading-[20px]",
    "w-fit font-noto font-[700] uppercase",
    props.className)}
  />
