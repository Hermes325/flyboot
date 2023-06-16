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

const BucketItemRow = ({ bucketItem }: Props) => {
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

  return <article className='
    relative grid grid-cols-[auto_1fr] items-center w-full min-h-[198px]
    gap-[1.3vw] max-[650px]:gap-[6px]
  '>
    <DatoCMSImage
      className="
        rounded-[10px] max-[650px]:rounded-[13px]
        bg-white
        h-full !w-[198px]
      "
      objectFit="contain"
      data={item.images[0].responsiveImage}
      lazyLoad={true} />

    <div className='w-full h-full flex flex-row justify-between max-[650px]:flex-col bg-white rounded-[10px] p-[26px_47px]'>
      <div className='flex flex-col justify-between'>
        <h3 className='font-noto 
        text-[24px] leading-[20px] 
        max-[1500px]:text-[15px]
        mb-[5px] tracking-[0.01em]
        max-[650px]:text-[15px]
      '>
          {item.title}
        </h3>

        <p className='font-noto 
          max-[1500px]:text-[12px] max-[1500px]:leading-[16px] 
          max-[650px]:text-[8px] 
          mb-[1.5rem] tracking-[0.01em]
          uppercase text-[#AEAEAE]
        '>
          Артикул {item.poizonArticul}
        </p>

        {/* Изменить товар */}
        <div className='flex gap-[1.3vw]'>
          {/* Размер */}
          <div className="
            relative
            after:absolute
            after:content-['▼']
            after:text-[15px] after:py-[0.5rem]
            after:top-[7px] after:right-[2px] after:px-[5px]
            after:w-fit after:h-[calc(100%-9px)]
            after:outline-2 after:outline-black after:outline
            after:rounded-r-[3px]
            after:bg-transparent
            after:text-[#000]
            after:block
            after:pointer-events-none
          ">
            <select
              defaultValue={size?.available?.find(x => x.sizeKey === size.chosenSizeKey)?.sizeValue?.[size.chosenSizeValue]}
              onChange={changeSize}
              className="
              mt-[5px] py-[0.5rem] px-[2rem]
              font-noto bg-transparent text-[#000000]
              text-[20px] leading-[25px]
              max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
              w-[150px]
              max-[600px]:!w-[100px]
              max-[450px]:!w-[80px]
              h-[auto]
              min-h-[88%]
              max-[450px]:!min-h-[80%]
              border-2 border-black rounded-[5px]
              focus:ring-blue-500 focus:border-blue-500
              cursor-pointer appearance-none">
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
          <div className='
              mt-[5px] flex justify-around items-center w-[150px] py-[4px] px-[6px]
              border-2 border-black rounded-[5px]
              max-[450px]:!min-h-[80%]'>
            <button
              className={classnames('font-noto font-bold text-[13px] active:scale-110',
                "text-[20px] leading-[25px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px]",
                {
                  "text-[gray]": amount <= 1
                })}
              disabled={amount <= 1}
              onClick={itemMinus}>
              –
            </button>
            <p className='font-noto font-bold text-[20px] leading-[25px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] text-[#000000]'>
              {amount}
            </p>
            <button
              className='font-noto font-bold text-[20px] leading-[25px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] active:scale-110'
              onClick={itemPlus}>
              +
            </button>
          </div>
        </div>
      </div>

      <h3 className='font-lato text-end font-extrabold text-[#000] 
        mr-[7.5vw] min-w-[10ch]
        text-[20px] leading-[25px]
        max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
        max-[650px]:!min-w-[auto]
        max-[650px]:!text-[12px]
        max-[650px]:!mr-[0px]
        max-[650px]:!text-start
        max-[650px]:!align-top
        pb-[30px]
      '>
        {price}&nbsp;₽
      </h3>

      {/* Корзина */}
      <NextImage
        className='absolute bottom-[24px] right-[24px] cursor-pointer active:scale-110 transition-all'
        src={bin}
        onClick={itemDelete}
        alt="Удалить" />
    </div>

  </article>
}

export default BucketItemRow