import React from 'react'
import { Order } from '../page';


type Props = {
  order: Order,
  changeOrder: (prop: string, value: any) => void
}
// Модалка с заказом. 
// Открывается при нажатии кнопки "Заказать"
const OrderModal = ({ order, changeOrder }: Props) => {
  const inputTailwind =
    "px-[24px] text-[20px] font-lato h-[68px] border-2 rounded-2xl border-[#919191] bg-transparent max-[1300px]:rounded-[30px]";

  return (<section className="col-span-1 grid grid-cols-2 h-fit gap-y-6 gap-x-6 text-[#919191]
            max-[1300px]:col-start-1
            max-[1300px]:col-end-3
            max-[1300px]:row-start-2
            max-[1300px]:grid-cols-1">

    <h1 className="font-montserrat w-full font-bold text-4xl text-[#F5F5F5] mt-2 mb-10 min-[1300px]:hidden">
      Оформление заказа
    </h1>
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
      placeholder="Ваш город"
      value={order.city}
      onChange={(x) => changeOrder("city", x.target.value)}
      className={`${inputTailwind}`}
    />
  </section>
  )
}

export default OrderModal