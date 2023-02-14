"use client"
import React from 'react'
import { Image as DatoCMSImage } from 'react-datocms/image'
import NextImage from 'next/image'
import bin from '@/public/bin.svg'
import { addItem, BucketItem, minusItemAmount, deleteItem } from '@/lib/redux/slices/itemSlice'
import { useDispatch } from 'react-redux'
import { Item } from '@/lib/datocms'

type Props = {
  bucketItem: BucketItem
}

const BucketItemCard = ({ bucketItem }: Props) => {
  const dispatch = useDispatch();
  const { item, amount, size } = bucketItem

  const price = Math
    .ceil(item.price)
    .toLocaleString('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

  function itemPlus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    dispatch(addItem(bucketItem))
  }
  function itemMinus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    dispatch(minusItemAmount(item))
  }
  function itemDelete() {
    dispatch(deleteItem(item))
  }

  return (<div className='relative flex flex-row items-center py-[15px] px-[7px] max-h-[250px] gap-[24px] ml-3'>
    <DatoCMSImage
      className="rounded-[13px] "
      style={{ width: "13vw", aspectRatio: "134/88" }}
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
      <div className='flex gap-4'>
        <select
          defaultValue={1}
          className="font-inter font-bold bg-transparent text-[#03FFF0] w-[135px] text-[13px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-0.5 px-1.5"
        >
          <option className='text-[#9A9A9A] bg-[black] text-[16px]' value={1}>8 EU (41 RUS)</option>
          <option className='text-[#9A9A9A] bg-[black] text-[16px]' value={2}>8 EU (41 RUS)</option>
          <option className='text-[#9A9A9A] bg-[black] text-[16px]' value={3}>8 EU (41 RUS)</option>
        </select>

        <div className='flex justify-around items-center w-[4rem] py-[3px] px-[6px] border border-white'>
          <button
            className='font-inter font-bold text-[15px]'
            disabled={amount <= 1}
            onClick={itemMinus}>-</button>
          <p
            className='font-inter font-bold text-[15px] text-[#03FFF0]'>{amount}</p>
          <button
            className='font-inter font-bold text-[15px]'
            onClick={itemPlus}>+</button>
        </div>
      </div>
    </div>



    <p className='font-lato text-end font-extrabold text-[#03FFF0] text-[24px] leading-[40px] tracking-[0.01em] mr-[30px] min-w-[10ch]'>
      {price} руб
    </p>

    <NextImage
      className='absolute bottom-[24px] right-[24px] cursor-pointer'
      src={bin}
      onClick={itemDelete}
      alt="Удалить" />
  </div>)
}

export default BucketItemCard