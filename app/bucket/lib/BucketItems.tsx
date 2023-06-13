import React from 'react'
import BucketItemCard from './BucketItemCard'
import { useAppSelector } from '@/lib/redux/store/hooks';
import ToPayment from './ToPayment';
import { Order } from '../model/types';

type Props = {
  order: Order
}
const BucketItems = ({ order }: Props) => {
  const bucketItems = useAppSelector(({ items }) => items);

  return <>
    <h1 className="font-lato text-[25px] uppercase font-extrabold leading-[26px] tracking-[0.01em]">
      Ваш <b>Заказ</b>
    </h1>

    <section className="w-full mb-12 flex flex-col items-center justify-center max-[600px]:!justify-start">
      {/* items and info block */}
      <div className="grid grid-cols-[1fr_auto] w-full gap-6">
        {/* Items */}
        <div className="col-span-1 flex flex-col transition-all border-2 rounded-2xl border-[#919191]
          max-[1300px]:!col-start-1 max-[1300px]:!col-end-3 max-[1300px]:!row-start-1
          max-[550px]:!border-0
          h-[min-content]
        ">
          {bucketItems.map((bucketItem, i) =>
            <BucketItemCard key={`${bucketItem.item.id}-${i}`} bucketItem={bucketItem} />)}
        </div>

        {/* Order & Delivery */}
        <div className="col-start-2 col-span-1 row-span-2 flex flex-col h-fit w-fit min-h-full justify-between
          min-[1300px]:!row-start-1 min-[1300px]:!row-end-2
          max-[1300px]:!col-start-1 max-[1300px]:!col-end-3
          max-[1300px]:!row-start-3
          max-[1300px]:!max-w-[none] 
        ">
          <div className="
            sticky
            top-[120px]
            border-2 rounded-2xl border-[#919191]
            px-[15px] pt-[26px] pb-[34px]
            max-[600px]:!pt-[0px]
            max-[600px]:!border-0 
          ">
            <ToPayment order={order} />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default BucketItems