import React from 'react'
import { Order } from '../model/types'
import Link from 'next/link'
import classNames from 'classnames'
import styles from "./ToPayment.module.css";
import { useAppSelector } from '@/lib/redux/store/hooks';

const priceSettings = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

type Props = {
  order: Order
}
const ToPayment = ({ order }: Props) => {
  const items = useAppSelector(({ items }) => items);
  const itemsAmount = items.reduce((a, v) => a + v.amount, 0);

  //#region расчёт стоимости
  const itemsPrice = Math.ceil(items.reduce((a, v) => a + v.item.price * v.amount, 0));
  const deliveryPrice = 350;
  const finalPrice = deliveryPrice + itemsPrice;
  //#endregion

  return <section className="space-y-5">
    <h2 className="font-lato text-[25px] font-extrabold leading-[26px] tracking-[0.01em]">
      Ваш заказ
    </h2>
    <p className="font-lato text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] mb-3">
      Товары, {itemsAmount} шт. {itemsPrice.toLocaleString("ru-RU", priceSettings)} ₽
    </p>

    {/* Итог */}
    <div className="space-y-4">
      <h2 className="mt-[1rem] font-lato text-[25px] font-extrabold leading-[26px] tracking-[0.01em]">
        Итого {finalPrice.toLocaleString("ru-RU", priceSettings)} ₽
      </h2>

      <button
        disabled={
          !order.personalDataCheck
          || itemsAmount === 0
          || (order.delivery === "Sdek" && order.Sdek?.PVZ?.Address === undefined)
          || (order.delivery === "BoxBerry" && order.BoxBerry?.address === undefined)}
        className={classNames(styles.buy, "uppercase font-inter w-full bg-white border-2 border-solid border-black rounded-[15px]")}
      // onClick={openOrderModal}
      >
        ОФОРМИТЬ ЗАКАЗ
      </button>

      <p className="font-inter text-[10px] leading-[12.1px] font-extrabold tracking-[0.01em] max-w-[35ch]">
        Нажимая на кнопку “Оформить заказ”, Вы принимаете условия &nbsp;
        <Link href="/privacy" className="underline focus:text-[gray]">
          Публичной оферты
        </Link>
      </p>
    </div>
  </section>
}

export default ToPayment