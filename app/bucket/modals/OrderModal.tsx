import React from 'react'
import { Order } from '../page';
import Image from "next/image";
import menu_close_path from "@/public/header-images/close.svg";
import classNames from 'classnames';
import styles from "./OrderModal.module.css"


type Props = {
  order: Order,
  changeOrder: (prop: string, value: any) => void,
  closeModal: () => any,
  isOrderModalOpen: boolean
}
// Модалка с заказом. 
// Открывается при нажатии кнопки "Заказать"
const OrderModal = ({ order, changeOrder, closeModal, isOrderModalOpen }: Props) => {
  const inputTailwind = "px-[24px] text-[20px] font-lato h-[68px] max-[600px]:h-[50px] border-2 rounded-2xl border-[#919191] bg-transparent max-[1300px]:rounded-[30px] invalid:border-red-500 text-white";
  const isPickUpPointDelivery = ["BoxBerry", "Sdek"].includes(order.delivery)

  return (<section
    className={classNames({
      "w-full h-screen absolute left-0 top-0 backdrop-blur-lg z-[101]": isOrderModalOpen,
      "hidden": !isOrderModalOpen
    })}>

    {/* Задник */}
    <div
      onClick={closeModal}
      className='w-full h-screen absolute left-0 top-0'
    />

    {/* Закрыть модалку */}
    <button
      onClick={closeModal}
      className="cursor-pointer fixed z-[103] right-[5vw] translate-x-[50%] top-[108px] max-mobile:hidden">
      <Image
        src={menu_close_path}
        width={100}
        height={100}
        alt="закрыть модальное окно" />
    </button>

    <form className=" 
          absolute z-[102] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          h-min bg-[#0E0E0E] p-[2rem] max-[600px]:p-[1rem]
          border-[2px] border-solid border-[#919191] rounded-[15px]
          grid grid-cols-4
          min-[1000px]:min-w-[600px] 
          max-[1000px]:min-w-[80vw]
          max-[1000px]:grid-cols-2 gap-[1.3vw] 
          max-[1000px]:gap-[25px]
          max-[600px]:min-w-[90vw]
          ">
      <input
        placeholder="ФИО"
        type="text"
        value={order.name}
        onChange={(x) => changeOrder("name", x.target.value)}
        className={classNames(inputTailwind, {
          'col-span-4': isPickUpPointDelivery,
          'col-span-2 row-start-1 mr-[0.8vw]': !isPickUpPointDelivery
        })}
      />
      <input
        placeholder="E-mail"
        type="email"
        value={order.email}
        onChange={(x) => changeOrder("email", x.target.value)}
        className={classNames(inputTailwind, {
          'col-span-4': isPickUpPointDelivery,
          'col-span-2 row-start-2 mr-[0.8vw]': !isPickUpPointDelivery
        })}
      />
      <input
        placeholder="Телефон"
        type="tel"
        value={order.phone}
        onChange={(x) => changeOrder("phone", x.target.value)}
        className={classNames(inputTailwind, {
          'col-span-4': isPickUpPointDelivery,
          'col-span-2 row-start-3 mr-[0.8vw]': !isPickUpPointDelivery
        })}
      />
      {!isPickUpPointDelivery && <>
        <input
          placeholder="Город"
          value={order.city}
          onChange={(x) => changeOrder("city", x.target.value)}
          className={`${inputTailwind} col-span-2 row-start-1 max-[1000px]:row-start-4 min-[1000px]:ml-[0.8vw]`}
        />
        <input
          placeholder="Улица, дом"
          value={order.street}
          onChange={(x) => changeOrder("street", x.target.value)}
          className={`${inputTailwind} col-span-2 row-start-2 max-[1000px]:row-start-5 min-[1000px]:ml-[0.8vw]`}
        />
        <input
          placeholder="Корпус"
          value={order.build}
          onChange={(x) => changeOrder("build", x.target.value)}
          className={`${inputTailwind} col-span-1 row-start-3 max-[1000px]:row-start-6 min-[1000px]:ml-[0.8vw] min-[1000px]:mr-[-1rem]`}
        />
        <input
          placeholder="Кв."
          value={order.apartment}
          onChange={(x) => changeOrder("apartment", x.target.value)}
          className={`${inputTailwind} col-span-1 row-start-3 max-[1000px]:row-start-6 min-[1000px]:ml-[0.8vw]`}
        />
      </>}

      <div className={classNames('flex justify-center col-span-4 max-[1000px]:col-span-2')}>
        <button
          onClick={(e) => { e.preventDefault(); closeModal(); }}
          className={styles.buy + " w-[calc(8ch+10rem)] font-inter rounded-lg py-5 px-8"} >
          Оплатить
        </button>
      </div>
    </form>

  </section>)
}

export default OrderModal