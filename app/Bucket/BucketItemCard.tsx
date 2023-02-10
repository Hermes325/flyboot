"use client"
import { Item } from '@/lib/datocms'
import React from 'react'
import { Image as DatoCMSImage } from 'react-datocms/image'
import NextImage from 'next/image'
import bin from '@/public/bin.svg'
import { addItem, BucketItem, minusItemAmount } from '@/lib/redux/slices/itemSlice'
import { useDispatch } from 'react-redux'

type Props = {
  bucketItem: BucketItem
}

const BucketItemCard = ({ bucketItem }: Props) => {
  const dispatch = useDispatch();
  const { item, amount, size } = bucketItem

  const price = Math
    .ceil(item.price)
    .toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

  return (<div className='relative flex flex-row items-center p-[24px] max-h-[150px] gap-[24px]'>
    <DatoCMSImage
      className="rounded-[15px]"
      style={{ width: "134px", height: "88px" }}
      objectFit="cover"
      data={item.images[0].responsiveImage}
      lazyLoad={true} />

    <div className='grow'>
      <h3 className='font-lato text-[20px] leading-[27px] mb-[5px] tracking-[0.01em]'>
        {item.title}
      </h3>

      <p className='font-lato text-[12px] leading-[22px] mb-[5px] tracking-[0.01em]'>
        Артикул {item.poizonArticul}
      </p>

      <select
        defaultValue={1}
        className="font-inter font-bold bg-transparent text-[#03FFF0] w-[135px] text-[13px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-0.5 px-1.5"
      >
        <option className='text-[#9A9A9A] bg-[black] text-[16px]' value={1}>8 EU (41 RUS)</option>
        <option className='text-[#9A9A9A] bg-[black] text-[16px]' value={2}>8 EU (41 RUS)</option>
        <option className='text-[#9A9A9A] bg-[black] text-[16px]' value={3}>8 EU (41 RUS)</option>
      </select>

    </div>

    <div className='flex justify-around items-center w-[4rem] py-[3px] px-[6px] border border-white'>
      <button
        className='font-inter font-bold text-[15px]'
        disabled={amount <= 0}
        onClick={_ => dispatch(minusItemAmount(item))}>-</button>
      <p
        className='font-inter font-bold text-[15px] text-[#03FFF0]'>{amount}</p>
      <button
        className='font-inter font-bold text-[15px]'
        onClick={_ => dispatch(addItem(item))}>+</button>
    </div>

    <p className='font-lato font-extrabold text-[#03FFF0] text-[24px] leading-[40px] tracking-[0.01em] mr-[30px]'>
      {price} руб
    </p>

    <NextImage
      className='absolute bottom-[24px] right-[24px]'
      src={bin}
      alt="Удалить" />
  </div>)
}

export default BucketItemCard