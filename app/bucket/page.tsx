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

function BucketPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [order, setOrder] = useState<Order>(emptyOrder);
  usePayment({ order, setOrder })

  return <main className={classNames(
    `w-screen min-h-screen flex flex-col bg-[#f5f5f5] pt-[108px] px-[5vw]
      max-[800px]:!px-[50px]
      max-[600px]:!px-[25px]
      max-[550px]:!px-[5px]`, {
    relative: !isModalOpen,
    "overflow-hidden fixed z-[103]": isModalOpen,
  })}>

    {process.env.NEXT_PUBLIC_IS_PROD === undefined && <TestRedux />}
    {process.env.NEXT_PUBLIC_IS_PROD === undefined && <button
      onClick={() => setOrder(x => ({ ...x, startPayment: ++x.startPayment }))}
      className="absolute bg-slate-500 top-[10rem]">Вызов оплаты
    </button>}

    {/* Увидеть товары */}
    <BucketItems order={order} />

    {/* Оформить заказ */}
    <OrderForm order={order} setOrder={setOrder} setModalOpen={setModalOpen} />

    {/* Рекомендовать товары */}
    <BucketRecommends />
    {/* Объяснить путь заказа */}

  </main>
}

export default BucketPage;
