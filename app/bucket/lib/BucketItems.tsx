import React from 'react'
import BucketItemRow from './BucketItemRow'
import { useAppSelector } from '@/lib/redux/store/hooks';

const BucketItems = () => {
  const bucketItems = useAppSelector(({ items }) => items);

  return <>
    <h1 className="font-noto text-[25px] uppercase font-[500] leading-[26px] tracking-[0.01em]">
      Ваш <b className='font-[900]'>Заказ</b>
    </h1>

    <section className="w-full mb-12 flex flex-col gap-[20px] transition-all items-center justify-center max-[600px]:!justify-start">
      {/* Items */}

      {bucketItems.map((bucketItem, i) =>
        <BucketItemRow key={`${bucketItem.item.id}-${i}`} bucketItem={bucketItem} />)}
    </section>
  </>
}

export default BucketItems