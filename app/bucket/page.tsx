"use client";
import React, { useState } from "react";
import TestRedux from "./lib/TestRedux";
import classNames from "classnames";
import { Order } from "./model/types";
import BucketItems from "./lib/BucketItems";
import OrderForm from "./lib/OrderForm";
import { emptyOrder } from "./model/emptyOrder";
import usePayment from "./lib/usePayment";
import BucketRecommends from "./lib/BucketRecommends";
import BucketHIW from "./lib/BucketHIW";
import Payment from "./lib/Payment";

function BucketPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [order, setOrder] = useState<Order>(emptyOrder);
  const startPayment = usePayment({ order, setOrder })

  return <main className={classNames(
    `w-screen min-h-screen flex flex-col bg-[#f5f5f5] pt-[108px] px-[5vw]
      scroll-smooth
      max-[800px]:!px-[50px]
      max-[600px]:!px-[25px]
      max-[550px]:!px-[5px]`, {
    "relative": !isModalOpen,
    "overflow-hidden fixed z-[103]": isModalOpen,
  })}>

    {process.env.NEXT_PUBLIC_IS_PROD === undefined &&
      <div className="absolute flex flex-col w-[150px] gap-3 top-[10rem] left-0 z-50 p-[10px_15px] bg-blue-500">
        <button
          onClick={startPayment}
          className="bg-black text-white rounded-[10px] p-[5px]">
          Вызов оплаты
        </button>
        <div className="bg-black text-white rounded-[10px] p-[5px]">
          <TestRedux />
        </div>
      </div>}

    <div className="grid grid-cols-[1fr_auto]">
      {/* Заказать с доставкой */}
      <div>
        {/* Увидеть товары */}
        <BucketItems />

        {/* Оформить заказ */}
        <OrderForm order={order} setOrder={setOrder} setModalOpen={setModalOpen} />
      </div>

      {/* Оплата */}
      <div className="
            sticky
            h-fit
            top-[200px]
            bg-white
            border-2 rounded-[10px]
            px-[15px] pt-[26px] pb-[34px]
            max-[600px]:!pt-[0px]
            max-[600px]:!border-0 
            ">
        <Payment order={order} startPayment={startPayment} />
      </div>
    </div>

    {/* Рекомендовать товары */}
    <BucketRecommends />

    {/* Объяснить путь заказа */}
    <BucketHIW />
  </main >
}

export default BucketPage;
