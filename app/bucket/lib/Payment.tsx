import React from 'react'
import Link from 'next/link'
import { useAppSelector } from '@/lib/redux/store/hooks';
import { useRouter } from 'next/navigation';
import PayBtn from './PayBtn';

const priceSettings = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

type Props = {
  checkOrder: () => boolean
  startPayment: () => void
  setIsMobileForm: React.Dispatch<React.SetStateAction<boolean>>
}
const Payment = ({ checkOrder, startPayment, setIsMobileForm }: Props) => {
  const items = useAppSelector(({ items }) => items);
  const itemsAmount = items.reduce((a, v) => a + v.amount, 0);

  //#region расчёт стоимости
  const itemsPrice = Math.ceil(items.reduce((a, v) => a + v.item.price * v.amount, 0));
  const deliveryPrice = 350;
  const finalPrice = deliveryPrice + itemsPrice;
  const finalPriceStr = finalPrice.toLocaleString("ru-RU", priceSettings)
  const itemsPriceStr = itemsPrice.toLocaleString("ru-RU", priceSettings)
  //#endregion

  //#region вызов оплаты / переход на заказ в мобилке
  const router = useRouter()

  function payOrCompleteForm() {
    const needCompletion = checkOrder()

    if (needCompletion)
      router.push(`/bucket#orderForm`)
    else startPayment()
  }
  function startForm() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileForm(false)
  }
  //#endregion

  return <table className='w-full'>
    <thead>
      <tr>
        <th className='font-noto font-[900] text-[25px] leading-[26px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] pb-[1rem] uppercase text-left'>К оплате</th>
        <th className='font-noto font-[900] text-[25px] leading-[26px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] pb-[1rem] uppercase text-right'>{finalPriceStr}&nbsp;₽</th>
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
          <PayBtn className='max-[1100px]:hidden' onClick={payOrCompleteForm}>Оформить заказ</PayBtn>
          <PayBtn className='min-[1100px]:hidden' onClick={startForm}>Оформить заказ</PayBtn>
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
  </table>
}

const TableRow = (rowName: string, value: string) =>
  <tr>
    <td className='font-noto text-[20px] leading-[34.8px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] font-extralight py-[0.5rem] text-left'>{rowName}</td>
    <td className='font-noto text-[20px] leading-[34.8px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] font-extralight py-[0.5rem] text-right'>{value}</td>
  </tr>

export default Payment