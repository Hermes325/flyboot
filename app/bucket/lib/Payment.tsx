import React from 'react'
import { Order } from '../model/types'
import Link from 'next/link'
import classNames from 'classnames'
import styles from "./Payment.module.css";
import { useAppSelector } from '@/lib/redux/store/hooks';
import { useRouter } from 'next/navigation';

const priceSettings = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

type Props = {
  order: Order
  startPayment: () => void
}
const Payment = ({ order, startPayment }: Props) => {
  const items = useAppSelector(({ items }) => items);
  const itemsAmount = items.reduce((a, v) => a + v.amount, 0);

  //#region расчёт стоимости
  const itemsPrice = Math.ceil(items.reduce((a, v) => a + v.item.price * v.amount, 0));
  const deliveryPrice = 350;
  const finalPrice = deliveryPrice + itemsPrice;
  const finalPriceStr = finalPrice.toLocaleString("ru-RU", priceSettings)
  const itemsPriceStr = itemsPrice.toLocaleString("ru-RU", priceSettings)
  //#endregion

  //#region вызов оплаты
  const router = useRouter()

  function payOrCompleteForm() {
    const needCompletion = order.name === ""
      || order.email === ""
      || order.phone === ""
      || order.city === ""
      || order.street === ""
      || order.apartment === ""
      || itemsAmount === 0
      || (order.delivery === "Sdek" && order.Sdek?.PVZ?.Address === undefined)
      || (order.delivery === "BoxBerry" && order.BoxBerry?.address === undefined)

    needCompletion === false
      ? startPayment()
      : router.push(`/bucket#orderForm`)
  }
  //#endregion

  return <table className='w-full'>
    <thead>
      <tr>
        <th className='font-noto text-[25px] font-[900] leading-[26px] tracking-[0.01em] uppercase text-left'>К оплате</th>
        <th className='font-noto text-[25px] font-[900] leading-[26px] tracking-[0.01em] uppercase text-right'>{finalPriceStr}&nbsp;₽</th>
      </tr>
    </thead>
    <tbody>
      {TableRow("Товаров в заказе", `${itemsAmount}`)}
      {TableRow("Товаров на сумму", `${itemsPriceStr} ₽`)}
      {TableRow("Доставка", `${deliveryPrice} ₽`)}
      {TableRow("Итог", `${finalPriceStr} ₽`)}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={2}>
          <button
            onClick={payOrCompleteForm}
            className={classNames(styles.buy, "uppercase font-inter w-full text-white bg-white border-2 border-solid border-black rounded-[15px]")}
          // onClick={openOrderModal}
          >
            ОФОРМИТЬ ЗАКАЗ
          </button>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <p className="font-inter text-[12px] leading-[19px] text-[#AEAEAE]">
            Нажимая на кнопку “Оформить заказ”, Вы принимаете условия &nbsp;
            <Link href="/privacy" className="underline focus:text-[gray]">
              Публичной оферты
            </Link>
          </p>
        </td>
      </tr>
    </tfoot>
  </table >
}

const TableRow = (rowName: string, value: string) =>
  <tr>
    <td className='font-noto text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] text-left'>{rowName}</td>
    <td className='font-noto text-[20px] leading-[34.8px] font-extralight tracking-[0.01em] text-right'>{value}</td>
  </tr>


export default Payment