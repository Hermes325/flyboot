import React from 'react'
import BucketItemRow from './BucketItemRow'
import { useAppSelector } from '@/lib/redux/store/hooks';

const BucketItems = () => {
  const bucketItems = useAppSelector(({ items }) => items);

  return <>
    <h1 className="font-noto uppercase text-[62px] font-[500] leading-[74px] mb-[32px] 
      max-[1200px]:text-[30px] max-[1200px]:leading-[41px]
    ">
      Ваш <b className='font-[900]'>Заказ</b>
    </h1>

    <section className="w-full mb-[8rem] max-[1100px]:mb-[2rem] flex flex-col gap-[1.3vw] max-[650px]:gap-[10px] items-center justify-center max-[600px]:justify-start">
      {/* Items */}

      {bucketItems.map((bucketItem, i) =>
        <BucketItemRow key={`${bucketItem.item.id}-${i}`} bucketItem={bucketItem} />)}
    </section>
  </>
}

export default BucketItems