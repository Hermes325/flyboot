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
  const [isPaymentStarted, startPayment] = usePayment({ order, setOrder })
  const [isMobileForm, setIsMobileForm] = useState(true)

  return <main className={classNames(
    `w-screen min-h-screen flex flex-col bg-[#f5f5f5] pt-[108px] px-[5.5vw] pb-20
      scroll-smooth
      max-[800px]:!px-[50px]
      max-[600px]:!px-[25px]
      max-[550px]:!px-[10px]`, {
    "relative": !isModalOpen && !isPaymentStarted,
    "overflow-hidden fixed z-[103]": isModalOpen || isPaymentStarted,
  })}>

    {process.env.NEXT_PUBLIC_IS_PROD === undefined &&
      <div className="absolute flex flex-col w-[150px] gap-3 top-[30rem] left-0 z-50 p-[10px_15px] bg-blue-500">
        <button
          onClick={startPayment}
          className="bg-black text-white rounded-[10px] p-[5px]">
          Вызов оплаты
        </button>
        <div className="bg-black text-white rounded-[10px] p-[5px]">
          <TestRedux />
        </div>
      </div>}

    {isMobileForm && <div className="grid grid-cols-[1fr_auto] gap-[1.3vw] relative max-[1100px]:grid-cols-1">
      {/* Заказать с доставкой */}
      <div>
        {/* Увидеть товары */}
        <BucketItems />

        {/* Оформить заказ */}
        <section id='orderForm' className='mb-[100px] max-[1100px]:hidden'>
          <OrderForm order={order} setOrder={setOrder} setModalOpen={setModalOpen} isDesktopForm={true} />
        </section>
      </div>

      {/* Оплата */}
      <div className="      
        sticky
        h-fit min-w-[300px] w-[20vw]
        top-[calc(106px+74px)]
        mt-[106px] mb-[100px] max-[1500px]:mb-[50px]
        max-[1200px]:mt-[73px]
        bg-white
        rounded-[10px]
        max-[1100px]:m-auto
        px-[21px] py-[37px]
        ">
        <Payment
          order={order}
          startPayment={startPayment}
          setIsMobileForm={setIsMobileForm}
        />
      </div>
    </div>}

    {/* Форма заказа в мобилке */}
    {!isMobileForm && <section className='mb-[100px]'>
      <OrderForm order={order} setOrder={setOrder} setModalOpen={setModalOpen} isDesktopForm={false} startPayment={startPayment} />
    </section>}

    {/* Рекомендовать товары */}
    <BucketRecommends />

    {/* Объяснить путь заказа */}
    <BucketHIW />
  </main >
}

export default BucketPage;
