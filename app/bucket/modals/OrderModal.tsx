import React from 'react'
import { Order } from '../page';
import Image from "next/image";
import menu_close_path from "@/public/header-images/close.svg";


type Props = {
  order: Order,
  changeOrder: (prop: string, value: any) => void,
  closeModal: () => any,
  isOrderModalOpen: boolean
}
// Модалка с заказом. 
// Открывается при нажатии кнопки "Заказать"
const OrderModal = ({ order, changeOrder, closeModal, isOrderModalOpen }: Props) => {
  const inputTailwind =
    "px-[24px] text-[20px] font-lato h-[68px] border-2 rounded-2xl border-[#919191] bg-transparent max-[1300px]:rounded-[30px]";
  let isPickUpPointDelivery = ["BoxBerry","Sdek"].includes(order.delivery)

  return (<section className={`${isOrderModalOpen ? "" : "hidden"}`}>

    <div
      onClick={closeModal}
      className="w-screen h-screen top-0 left-0 absolute backdrop-brightness-50 z-[101]" />

    <button
      onClick={closeModal}
      className="cursor-pointer fixed z-[103] right-[5vw] translate-x-[50%] top-[108px] max-mobile:hidden"
    >
      <Image src={menu_close_path} width={100} height={100} alt="закрыть модальное окно" />
    </button>
      <div className="absolute p-[2rem]
          h-min bg-[#e3e3e3] z-[102]
          top-[108px]
          left-[10vw]
          w-[80vw]
          flex
          flex-row
          justify-center
        ">
          <div
          className="
            grid
            grid-cols-10
            gap-[25px]
            w-[min-content]
            min-w-[600px]
          "
          >
            {/*<h1 className="font-montserrat w-full font-bold text-4xl text-[#F5F5F5] mt-2 mb-10">*/}
            {/*  Оформление заказа*/}
            {/*</h1>*/}
            <input
              placeholder="ФИО"
              value={order.name}
              onChange={(x) => changeOrder("name", x.target.value)}
              className={`${inputTailwind} col-span-5 invalid:border-red-500`}
              type="text"
              required
            />
            <input
              placeholder="Телефон"
              value={order.phone}
              onChange={(x) => changeOrder("phone", x.target.value)}
              className={`${inputTailwind} col-span-5 appearance-none invalid:border-red-500`}
              type="number"
              required
            />
            <input
              placeholder="E-mail"
              value={order.email}
              onChange={(x) => changeOrder("email", x.target.value)}
              className={`${inputTailwind} col-span-5 invalid:border-red-500
                ${isPickUpPointDelivery && 'col-span-10'}
              `}
              type="email"
              required
            />
              {!isPickUpPointDelivery &&
                <input
                  placeholder="Город"
                  value={order.city}
                  onChange={(x) => changeOrder("city", x.target.value)}
                  className={`${inputTailwind} col-span-5 invalid:border-red-500`}
                  required
                />
              }
              {!isPickUpPointDelivery &&
                <input
                  placeholder="Улица, дом"
                  value={order.street}
                  onChange={(x) => changeOrder("street", x.target.value)}
                  className={`${inputTailwind} col-span-5 invalid:border-red-500`}
                  required
                />
              }
              {!isPickUpPointDelivery &&
                <input
                  placeholder="Корпус"
                  value={order.build}
                  onChange={(x) => changeOrder("build", x.target.value)}
                  className={`${inputTailwind} col-span-3 invalid:border-red-500`}
                />
              }
              {!isPickUpPointDelivery &&
                <input
                  placeholder="Кв."
                  value={order.apartment}
                  onChange={(x) => changeOrder("apartment", x.target.value)}
                  className={`${inputTailwind} col-span-2 invalid:border-red-500`}
                  required
                />
              }
        </div>
      </div>
  </section>
  )
}

export default OrderModal