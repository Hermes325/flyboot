"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import React, { useState } from "react";
import TestRedux from "./TestRedux";
import BucketItemCard from "./BucketItemCard";
import styles from "./BucketItemCard.module.css"

function BucketPage() {
  const bucketItems = useSelector((state: RootState) => state.items);

  const [order, setOrder] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    delivery: "SDEK" as "SDEK" | "BoxBerry" | "personal delivery",
    personalDataCheck: true
  });

  function changeOrder(prop: string, value: any) {
    setOrder(x => ({ ...x, [prop]: value }))
  }

  const itemsPrice = Math
    .ceil(bucketItems.reduce((a, v) => a + v.item.price * v.amount, 0))
    .toLocaleString('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  const deliveryPrice = 350;
  const finalPrice = Math
    .ceil(deliveryPrice + bucketItems.reduce((a, v) => a + v.item.price * v.amount, 0))
    .toLocaleString('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

  const finalAmount = bucketItems.reduce((a, v) => a + v.amount, 0)


  //#region Queries
  //#endregion

  //#region UI templates
  const inputTailwind = "px-[24px] text-[20px] font-lato h-[68px] border-2 rounded-2xl border-[#919191] bg-transparent"

  const h2 = (text: string, className: string = "") =>
    <h2 className={`${className} font-lato text-[25px] font-extrabold leading-[26px] tracking-[0.01em]`}>
      {text}
    </h2>

  const formRadio = (text: string, prop: string, checked: boolean, propValue: string) =>
    <div className='mt-[14px] flex items-center'>
      <input
        className="appearance-none h-[20px] w-[20px] m-0 mr-[14px] bg-[#F5F5F533] rounded-full align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:bg-[#29D9CE] 
                  focus:outline-none transition duration-200"
        type="radio"
        onChange={_ => changeOrder(prop, propValue)}
        checked={checked}
        id={text} />
      <label
        className="inline-block font-lato text-[20px] leading-[25px] font-extralight tracking-[0.01em]"
        htmlFor={text}>
        {text}
      </label>
    </div>
  //#endregion

  return (<main className="w-screen min-h-screen flex bg-[#0E0E0E] pt-[108px] pr-[13vw] pl-[13vw]
      max-[800px]:pl-[50px] max-[800px]:pr-[50px]
      max-[600px]:pl-[25px] max-[600px]:pr-[25px]
      max-[550px]:pl-[5px]  max-[550px]:pr-[5px]
    ">

    <TestRedux />

    <form className="flex flex-col items-center justify-center w-full mb-12">
      {/* Bucket text */}
      <h1 className="font-montserrat w-full font-bold text-7xl text-[#F5F5F5] mt-2 mb-10">
        Корзина
      </h1>

      {/* items and info block */}
      <div className="grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] w-full gap-6">

        {/* Items */}
        <div className="col-span-1 flex flex-col justify-center transition-all border-2 rounded-2xl border-[#919191]
          max-[1300px]:col-start-1
          max-[1300px]:col-end-3
          max-[1300px]:row-start-1
          max-[550px]:border-0
        ">
          {bucketItems.map((bucketItem, i, arr) => (
            <div key={bucketItem.item.id}>
              <BucketItemCard bucketItem={bucketItem} />
              {i !== arr.length - 1 &&
                <hr className="mx-[24px]" />}
            </div>))}
        </div>

        {/* Contacts */}
        <div className="col-span-1 grid grid-cols-2 h-fit gap-y-6 gap-x-6 text-[#919191]
          max-[1300px]:col-start-1
          max-[1300px]:col-end-3
          max-[1300px]:row-start-2
          max-[1300px]:grid-cols-1
        ">
          <h1 className="font-montserrat w-full font-bold text-4xl text-[#F5F5F5] mt-2 mb-10
            min-[1300px]:hidden
          ">Оформление заказа</h1>
          <input
            placeholder="Ваше имя"
            value={order.name}
            onChange={(x) => changeOrder("name", x.target.value)}
            className={`${inputTailwind} max-[1300px]:rounded-[30px] invalid:border-red-500`}
            type="text"
          />
          <input
            placeholder="Ваш телефон"
            value={order.phone}
            onChange={(x) => changeOrder("phone", x.target.value)}
            className={`${inputTailwind} max-[1300px]:rounded-[30px] invalid:border-red-500`}
            type="tel"
          />
          <input
            placeholder="Ваш e-mail"
            value={order.email}
            onChange={(x) => changeOrder("email", x.target.value)}
            className={`${inputTailwind} max-[1300px]:rounded-[30px] invalid:border-red-500`}
            type="email"
          />
          <input
            placeholder="Ваш город"
            value={order.city}
            onChange={(x) => changeOrder("city", x.target.value)}
            className={`${inputTailwind} max-[1300px]:rounded-[30px] invalid:border-red-500`}
            type="email"
          />
        </div>

        {/* Order & Delivery */}
        <div className="col-start-2 col-span-1 row-start-1 row-span-2 flex flex-col h-fit w-fit justify-between border-2 rounded-2xl border-[#919191] px-10 pt-[26px] pb-[34px]
          max-[1300px]:col-start-1
          max-[1300px]:col-end-3
          max-[1300px]:row-start-3
          max-[1300px]:max-w-[none]
          max-[1300px]:border-0
        ">
          <div>
            {h2("Ваш заказ")}
            <p className="font-lato text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] mb-3">
              Товары, {finalAmount} шт. {itemsPrice} ₽
            </p>
          </div>

          <div>
            {h2("Выберите способ доставки", "w-[16ch]")}
            {formRadio("ПВЗ СДЭК - 350 ₽", "delivery", order.delivery === "SDEK", "SDEK")}
            {formRadio("ПВЗ Boxberry - 350 ₽", "delivery", order.delivery === "BoxBerry", "BoxBerry")}
            {formRadio("Курьер СДЭК - 350 ₽", "delivery", order.delivery === "personal delivery", "personal delivery")}
          </div>

          {h2(`Итого ${finalPrice} ₽`, "mt-[1rem]")}

          <textarea
            placeholder="Комментарий к заказу"
            rows={3}
            className="block w-full text-[#454545] mt-4 pl-3 pt-2" />

          <button
            disabled={!order.personalDataCheck || finalAmount === 0}
            className={styles.buy + " font-inter"}>
            Заказать
          </button>

          {/* Впилить ссылку */}
          <div className="flex flex-row gap-[14px]">
            <input
              className="appearance-none h-[25px] w-[25px] min-w-[25px] m-0 border border-gray-300 rounded-sm align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:before:content-[url(/check.svg)] 
                  focus:outline-none transition duration-200"
              type="checkbox"
              onChange={x => changeOrder("personalDataCheck", x.target.checked)}
              checked={order.personalDataCheck}
              id="personalDataCheck" />
            <label
              className="font-inter text-[10px] leading-[12.1px] font-extrabold tracking-[0.01em] max-w-[35ch]"
              htmlFor="personalDataCheck">
              Нажимая «Заказать» Вы даете согласие на хранение и обработку ваших персональных данных в соответствии с&nbsp;
              <a
                href="https://sneakerhead.ru/privacy/"
                className="underline focus:text-[gray]">условиями</a>.
            </label>
          </div>
        </div>
      </div>
    </form>

  </main >)
}

export default BucketPage;
