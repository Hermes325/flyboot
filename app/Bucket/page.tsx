"use client";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import React, { useState } from "react";
import TestRedux from "./TestRedux";

function page() {
  const items = useSelector((state: RootState) => state.items);

  const [order, setOrder] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    delivery: "CDEK" as "CDEK" | "BoxBerry",
    personalDataCheck: true
  });

  function changeOrder(prop: string, value: any) {
    setOrder(x => ({ ...x, [prop]: value }))
  }

  const finalPrice = items.reduce((a, v) => a + v.price, 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  //#region Queries
  //#endregion

  //#region UI templates
  const inputTailwind = "px-[24px] text-[20px] font-lato h-[68px] border-2 rounded-2xl border-[#919191] bg-transparent"

  const h2 = (text: string) =>
    <h2 className="font-lato text-[25px] font-extrabold leading-[105%] my-[14px] tracking-[0.01em]">
      {text}
    </h2>

  const formRadio = (text: string, prop: string, checked: boolean, propValue: string) =>
    <div className='mb-1.5' key={prop}>
      <input
        className="appearance-none h-[20px] w-[20px] m-0 mr-[29px] bg-[#F5F5F533] rounded-full align-top cursor-pointer
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

  const formCheck = (text: string, prop: string, checked: boolean) =>
    <div key={prop} className="flex flex-row gap-[14px]">
      <input
        className="appearance-none h-[25px] w-[25px] m-0 border border-gray-300 rounded-sm align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:before:content-[url(/check.svg)] 
                  focus:outline-none transition duration-200"
        type="checkbox"
        onChange={x => changeOrder(prop, x.target.checked)}
        checked={checked}
        id={text} />
      <label
        className="font-inter text-[10px] leading-[12.1px] font-extrabold"
        htmlFor={text}>
        {text}
      </label>
    </div>
  //#endregion

  return (<main className="w-screen min-h-screen flex justify-center bg-[#0E0E0E]">

    <TestRedux />

    <form className="flex flex-col items-center justify-center max-w-[1280px] w-full mb-12">
      {/* Bucket text Корзина */}
      <h1 className="font-montserrat w-full font-bold text-7xl text-white mt-2 mb-10">
        Корзина
      </h1>

      {/* items and info block */}
      <div className="grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] w-full gap-6 min-h-[60vh]">

        {/* Items */}
        <div className="col-span-1 flex flex-col border-2 rounded-2xl border-[#919191]">
          {items.map((x) => (
            <div key={x.poizonId} className="w-full h-[136px]">
              {x.slug}
            </div>))}
        </div>

        {/* Contacts */}
        <div className="col-span-1 grid grid-cols-2 h-fit gap-y-6 gap-x-14 text-[#919191]">
          <input
            placeholder="Ваше имя"
            value={order.name}
            onChange={(x) => changeOrder("name", x.target.value)}
            className={`${inputTailwind} invalid:border-red-500`}
            type="text"
          />
          <input
            placeholder="Ваш телефон"
            value={order.phone}
            onChange={(x) => changeOrder("phone", x.target.value)}
            className={`${inputTailwind} invalid:border-red-500`}
            type="tel"
          />
          <input
            placeholder="Ваш e-mail"
            value={order.email}
            onChange={(x) => changeOrder("email", x.target.value)}
            className={`${inputTailwind} invalid:border-red-500`}
            type="email"
          />
          <input
            placeholder="Ваш e-mail"
            value={order.city}
            onChange={(x) => changeOrder("city", x.target.value)}
            className={`${inputTailwind} invalid:border-red-500`}
            type="email"
          />
        </div>

        {/* Order & Delivery */}
        <div className="col-start-2 col-span-1 row-start-1 row-span-2 flex flex-col min-h-[60vh] h-fit justify-between max-w-[25vw] border-2 rounded-2xl border-[#919191] px-10 py-4">
          {h2("Ваш заказ")}
          <p className="font-lato text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] mb-3">
            Товары, {items.length} шт. {finalPrice} ₽
          </p>

          {h2("Выберите способ доставки")}
          {formRadio("СДЭК (ПВЗ) - 350 ₽", "delivery", order.delivery === "CDEK", "CDEK")}
          {formRadio("Boxberry (ПВЗ) - 350 ₽", "delivery", order.delivery === "BoxBerry", "BoxBerry")}

          {h2(`Итого ${finalPrice} ₽`)}
          <textarea
            cols={4}
            placeholder="Комментарий к заказу"
            className="block w-full" />
          <button
            className="block">
            Заказать
          </button>
          {formCheck("Нажимая «Заказать» Вы даете согласие на хранение и обработку ваших персональных данных в соответствии с условиями.",
            "personalDataCheck",
            order.personalDataCheck)}
        </div>
      </div>
    </form>

  </main>)
}

export default page;
