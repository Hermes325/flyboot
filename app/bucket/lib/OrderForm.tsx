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
import PayBtn from './PayBtn';
import Link from 'next/link';

type Props = {
  order: Order
  isDesktopForm: true
  setOrder: React.Dispatch<React.SetStateAction<Order>>
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
} | {
  order: Order
  isDesktopForm: false
  setOrder: React.Dispatch<React.SetStateAction<Order>>
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  startPayment: () => void
}
const OrderForm = (props: Props) => {
  const { order, setOrder, setModalOpen, isDesktopForm } = props

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
  const [errs, setErr] = useState<{ field: string, reason: string }[]>([])
  function changeOrder(prop: string, value: any) {
    setOrder(x => ({ ...x, [prop]: value }));
  }

  function errsHas(field: string): boolean {
    return errs.some(x => x.field === field)
  }
  function checkField(field: string, isErr: boolean, reason: string) {
    isErr && setErr(x => [...x, { field, reason }])
    return isErr
  }
  function payOrCompleteForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErr([])
    const needCompletion =
      checkField("name", order.name === "", "Заполните имя")
      || checkField("email", order.email === "", "Введите корректный email")
      || checkField("phone", order.phone === "", "Введите телефон")
      || checkField("city", order.city === "", "Введите название города")
      || checkField("street", order.street === "", "Введите название улицы")
      || checkField("apartment", order.apartment === "", "Номер квартиры")
      || checkField("Sdek", order.delivery === "Sdek" && order.Sdek?.PVZ?.Address === undefined, "Выберите ПВЗ СДЭК")
      || checkField("BoxBerry", order.delivery === "BoxBerry" && order.BoxBerry?.address === undefined, "Выберите ПВЗ BoxBerry")

    if (needCompletion === false && props.isDesktopForm === false)
      props.startPayment()
    else
      console.log(needCompletion, "прошла проверка");
  }
  //#endregion

  return <>
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

    <h1 className="
      font-noto uppercase font-[500] mb-[54px]
      text-[62px] leading-[74px]
      max-[1100px]:text-[30px] max-[1100px]:leading-[41px]
    ">
      <b className='font-[900]'>Оформление</b> заказа
    </h1>

    <form
      className="grid gap-[1.3vw] max-[1100px]:px-[32px] grid-cols-[1fr_auto] max-[1100px]:grid-cols-1"
      onSubmit={payOrCompleteForm}>
      <div className='w-fit space-y-5 max-[1100px]:!w-full'>
        <H2Styled>Способ оплаты</H2Styled>
        <BucketFormRadio
          id="card"
          checked={true}
          onChange={() => { }}
          showInput={false}
        >
          <div className='flex flex-row justify-between'>
            <span className="block text-white text-[20px] leading-[50px] max-[1500px]:text-[15px]">Картой онлайн</span>

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
          isError={errs.map(x => x.field).includes("Sdek")}
        >
          <>
            <span className="block text-white text-[20px] leading-[50px] max-[1500px]:text-[15px]">ПВЗ СДЭК - 350&nbsp;₽</span>
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
          isError={errsHas("BoxBerry")}
        >
          <>
            <span className="block text-white text-[20px] leading-[50px] max-[1500px]:text-[15px]">ПВЗ Boxberry - 350&nbsp;₽</span>
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
          Курьер СДЭК - 350&nbsp;₽
        </BucketFormRadio>
      </div>

      {/* Заполнить данные заказа  */}
      <div className=" 
        h-min
        grid grid-cols-2 
        min-[1100px]:gap-[1.3vw]
        max-[1100px]:mt-[2rem]
        max-[1100px]:!gap-[2rem]
        max-[1100px]:grid-cols-1">

        {/* Адрес доставки */}
        <div className='flex flex-col space-y-5'>
          <H2Styled>Адрес доставки</H2Styled>

          <OrderInput
            placeholder="Город"
            value={order.city}
            className={classNames({ "border-red-500": errsHas("city") })}
            onChange={(x) => changeOrder("city", x.target.value)}
            name="city"
          />
          <OrderInput
            placeholder="Улица, дом"
            value={order.street}
            className={classNames({ "border-red-500": errsHas("street") })}
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
              className={classNames({ "border-red-500": errsHas("apartment") })}
              onChange={(x) => changeOrder("apartment", x.target.value)}
              name="apartament"
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
            className={classNames({ "border-red-500": errsHas("name") })}
            onChange={(x) => changeOrder("name", x.target.value)}
            name="FIO"
          />
          <OrderInput
            placeholder="Телефон"
            type="tel"
            value={order.phone}
            className={classNames({ "border-red-500": errsHas("phone") })}
            onChange={({ target }) => changeOrder("phone", target.value)}
            name="phone"
          />
          <OrderInput
            placeholder="E-mail"
            type="email"
            value={order.email}
            className={classNames({ "border-red-500": errsHas("email") })}
            onChange={(x) => changeOrder("email", x.target.value)}
            name="email"
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
      </div>

      {/* Оплата на мобилке */}
      {isDesktopForm === false && <div className='col-span-2 max-[1100px]:col-span-1 flex flex-col space-y-5 mt-[1rem]'>
        {errs.length > 0 && <p className='text-red-500'>{errs[0].reason}</p>}
        <PayBtn className='bg-black' type='submit'>Оплатить</PayBtn>
        <p className="font-inter text-[12px] leading-[19px] text-[#AEAEAE]">
          Нажимая на кнопку “Оформить заказ”, Вы принимаете условия &nbsp;
          <Link href="/privacy" className="underline focus:text-[gray]">
            Публичной оферты
          </Link>
        </p>
      </div>}
    </form>
  </>
}

export default OrderForm

const H2Styled = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
  <h2 {...props} className={classNames(
    "text-[20px] leading-[24px]",
    "max-[1500px]:text-[15px] max-[1500px]:leading-[20px]",
    "w-fit font-noto font-[700] uppercase",
    props.className)}
  />
