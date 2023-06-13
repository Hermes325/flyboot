"use client"
import React from 'react'
import { Image as DatoCMSImage } from 'react-datocms/image'
import NextImage from 'next/image'
import bin from '@/public/bin.svg'
import { addItem, BucketItem, minusItemAmount, deleteItem, changeItemSize } from '@/lib/redux/slices/itemSlice'
import classnames from "classnames";
import { useAppDispatch } from '@/lib/redux/store/hooks'

type Props = {
  bucketItem: BucketItem
}

const BucketItemCard = ({ bucketItem }: Props) => {
  const dispatch = useAppDispatch();
  const { item, amount, size } = bucketItem

  // console.log("size >> ", size);

  const price = Math.ceil(item.price).toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  const regionSizes = size.available
    .find(x => x.sizeKey === size.chosenSizeKey)

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

  return (<article className='relative flex flex-row items-center py-[15px] px-[7px] max-h-[250px] gap-[24px] ml-3
     max-[650px]:gap-[6px]
     max-[650px]:grid
     max-[650px]:grid-cols-10
  '>
    <DatoCMSImage
      className="rounded-[13px]
        min-w-[80px]
        max-[650px]:col-start-1
        max-[650px]:col-end-4
        max-[650px]:!w-[auto]
        max-[650px]:rounded-[13px]
      "
      style={{ width: "13vw", aspectRatio: "134/88" }}
      objectFit="cover"
      data={item.images[0].responsiveImage}
      lazyLoad={true} />

    <div className='grow
      max-[650px]:col-start-4
      max-[650px]:col-end-9
    '>
      <h3 className='font-lato text-[20px] leading-[20px] mb-[5px] tracking-[0.01em]
        max-[650px]:text-[15px]
      '>
        {item.title}
      </h3>

      <p className='mt-2 font-lato text-[14px] leading-[8px] mb-[5px] tracking-[0.01em]
        max-[650px]:text-[8px]
      '>
        Артикул {item.poizonArticul}
      </p>
      <div className='flex gap-4'>
        {/* Размер */}
        <div className="
          relative
          after:absolute
          after:content-['▼']
          after:text-[12px]
          after:top-[13px]
          after:right-[10px]
          after:w-[10px]
          after:h-[10px]
          after:bg-transparent
          after:text-[#000]
          after:block
          after:pointer-events-none
        ">
          <select
            defaultValue={size?.available?.find(x => x.sizeKey === size.chosenSizeKey)?.sizeValue?.[size.chosenSizeValue]}
            onChange={changeSize}
            className="
            mt-[5px]
              font-inter font-bold bg-transparent text-[#000000] w-[85px] text-[14px]
              max-[600px]:!w-[100px]
              max-[450px]:!w-[80px]
              max-[450px]:!min-h-[80%]
              h-[auto]
              min-h-[88%]
              border border-gray-300
              focus:ring-blue-500 focus:border-blue-500 py-0.5 px-1.5 appearance-none">
            {regionSizes
              // Доступность размера
              ?.sizeValue.filter((_, i) => regionSizes.available[i])
              // Вывод опций
              ?.map(value =>
                <option className='text-[#9A9A9A] bg-[black] text-[16px]' key={value} value={value}>
                  {value} {size.chosenSizeKey}
                </option>)}
          </select>
        </div>

        {/* Количество */}
        <div className=' mt-[5px] flex justify-around items-center w-[4rem] py-[4px] px-[6px] border border-white 
        max-[450px]:!min-h-[80%]'>
          <button
            className={classnames('font-inter font-bold text-[13px] active:scale-110', {
              "text-[gray]": amount <= 1
            })}
            disabled={amount <= 1}
            onClick={itemMinus}>-
          </button>
          <p
            className='font-inter font-bold text-[13px] text-[#000000]'>{amount}</p>
          <button
            className='font-inter font-bold text-[13px] active:scale-110'
            onClick={itemPlus}>+
          </button>
        </div>
      </div>
    </div>

    <p className='font-lato text-end font-extrabold text-[#000] text-[24px] leading-[40px] tracking-[0.01em] mr-[30px] min-w-[10ch]
      max-[650px]:!min-w-[auto]
      max-[650px]:!text-[12px]
      max-[650px]:!mr-[0px]
      max-[650px]:!text-start
      max-[650px]:!col-start-9
      max-[650px]:!col-end-11
      max-[650px]:!align-top
      pb-[30px]
    '>
      {price}&nbsp;руб
    </p>

    <NextImage
      className='absolute bottom-[24px] right-[24px] cursor-pointer hover:brightness-150 active:scale-110 transition-all'
      src={bin}
      onClick={itemDelete}
      alt="Удалить" />

  </article>)
}

export default BucketItemCard