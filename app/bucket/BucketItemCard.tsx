"use client"
import React from 'react'
import { Image as DatoCMSImage } from 'react-datocms/image'
import NextImage from 'next/image'
import bin from '@/public/bin.svg'
import { addItem, BucketItem, minusItemAmount, deleteItem, changeItemSize } from '@/lib/redux/slices/itemSlice'
import { useDispatch } from 'react-redux'
import classnames from "classnames";

type Props = {
  bucketItem: BucketItem
}

const BucketItemCard = ({ bucketItem }: Props) => {
  const dispatch = useDispatch();
  const { item, amount, size } = bucketItem

  const price = Math.ceil(item.price).toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  function itemPlus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    dispatch(addItem(bucketItem))
  }
  function itemMinus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    dispatch(minusItemAmount(bucketItem))
  }
  function itemDelete() {
    dispatch(deleteItem(bucketItem))
  }
  function changeSize(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    const sizeNum = bucketItem.size.available
      .find(x => x.sizeKey === bucketItem.size.chosenSizeKey)?.sizeValue
      .findIndex(x => x === e.target.value)
      ?? bucketItem.size.chosenSizeValue

    changeItemSize({ item: bucketItem, size: { ...bucketItem.size, chosenSizeValue: sizeNum } })
  }

  return (<article className='relative flex flex-row items-center py-[15px] px-[7px] max-h-[250px] gap-[24px] ml-3'>
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
          defaultValue={size?.available?.find(x => x.sizeKey === size.chosenSizeKey)?.sizeValue?.[size.chosenSizeValue]}
          onChange={changeSize}
          className="font-inter font-bold bg-transparent text-[#03FFF0] w-[135px] text-[13px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-0.5 px-1.5"
        >
          {size.available.find(x => x.sizeKey === size.chosenSizeKey)?.sizeValue.map(value =>
            <option className='text-[#9A9A9A] bg-[black] text-[16px]' key={value} value={value}>
              {value} {size.chosenSizeKey}
            </option>)}
        </select>

        <div className='flex justify-around items-center w-[4rem] py-[3px] px-[6px] border border-white'>
          <button
            className={classnames('font-inter font-bold text-[15px] active:scale-110', {
              "text-[gray]": amount <= 1
            })}
            disabled={amount <= 1}
            onClick={itemMinus}>-</button>
          <p
            className='font-inter font-bold text-[15px] text-[#03FFF0]'>{amount}</p>
          <button
            className='font-inter font-bold text-[15px] active:scale-110'
            onClick={itemPlus}>+</button>
        </div>
      </div>
    </div>

    <p className='font-lato text-end font-extrabold text-[#03FFF0] text-[24px] leading-[40px] tracking-[0.01em] mr-[30px] min-w-[10ch]'>
      {price} руб
    </p>

    <NextImage
      className='absolute bottom-[24px] right-[24px] cursor-pointer hover:brightness-150 active:scale-110 transition-all'
      src={bin}
      onClick={itemDelete}
      alt="Удалить" />

  </article>)
}

export default BucketItemCard