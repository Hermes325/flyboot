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

  //#region Логика
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
  //#endregion

  return <article className='
    relative grid 
    grid-cols-[auto_1fr] max-[650px]:grid-cols-2
    items-center w-full min-h-[198px]
    gap-[1.3vw] max-[650px]:gap-[10px]
    max-[650px]:min-h-[180px] max-[650px]:h-[180px] max-[650px]:max-h-[180px] 
    overflow-hidden
  '>
    <DatoCMSImage
      className="
        rounded-[10px] max-[650px]:rounded-[13px]
        bg-white
        h-fit min-h-[198px] !w-[198px]
        max-[650px]:!w-full
        max-[650px]:h-[180px] max-[650px]:max-h-[180px]
      "
      pictureClassName='max-[650px]:h-[180px] max-[650px]:max-h-[180px]'
      objectFit="contain"
      data={item.images[0].responsiveImage}
      lazyLoad={true} />

    <div className='w-full min-h-[198px] max-[650px]:!min-h-[180px] max-[650px]:!h-[180px] max-[650px]:!max-h-[180px] flex flex-row max-[1100px]:flex-col justify-between bg-white rounded-[10px] 
    p-[26px_47px] max-[650px]:p-[1rem]'>
      <div className='flex flex-col justify-between max-[1100px]:space-y-4'>
        <h3 className='font-noto 
          text-[24px] leading-[24px]
          max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
          max-[1100px]:text-[10px] max-[1100px]:leading-[14px]
        '>
          {item.title}
        </h3>

        <p className='font-noto 
          max-[1500px]:text-[12px] max-[1500px]:leading-[16px]
          max-[1100px]:leading-[11px]
          max-[650px]:text-[8px]
          mb-[1.5rem] max-[1100px]:!mt-[0.5rem]
          uppercase text-[#AEAEAE]
        '>
          Артикул {item.poizonArticul}
        </p>

        {/* Изменить товар */}
        <div className='flex gap-[1.3vw] max-[650px]:flex-col'>
          {/* Размер */}
          <div className="
            relative
            w-fit max-[400px]:w-[100px]
            after:absolute
            after:content-['▼']
            after:text-[15px] 
            after:px-[5px] after:py-[0.5rem]
            after:top-[7px] after:right-[2px]
            after:w-fit after:h-[calc(100%-9px)]
            after:outline-2 after:outline-black after:outline 
            after:max-[1300px]:outline-1 
            after:max-[1300px]:top-[6px]
            after:max-[1300px]:right-[1px]
            after:max-[1300px]:h-[calc(100%-7px)]
            after:max-[1300px]:rounded-r-[4px]
            after:max-[1100px]:leading-[1] 
            after:max-[650px]:py-[0.25rem] 
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
              mt-[5px] py-[0.5rem] px-[2rem] max-[650px]:py-[0.25rem] 
              font-noto bg-transparent text-[#000000]
              text-[20px] leading-[25px]
              max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
              max-[1100px]:text-[10px] max-[1100px]:leading-[14px]
              w-[150px] max-[400px]:w-full
              border-2 border-black rounded-[5px] max-[1300px]:border
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
              mt-[5px] flex justify-around items-center w-[150px] max-[400px]:w-[100px]
              py-[4px] px-[6px] max-[1100px]:py-[0.5rem] max-[650px]:py-[0.25rem]
              border-2 border-black rounded-[5px] max-[1300px]:border'>
            <button
              className={classnames('font-noto font-bold text-[13px] active:scale-110',
                "text-[20px] leading-[25px]",
                "max-[1500px]:text-[15px] max-[1500px]:leading-[20px]",
                "max-[1100px]:text-[10px] max-[1100px]:leading-[14px]",
                {
                  "text-[gray]": amount <= 1
                })}
              disabled={amount <= 1}
              onClick={itemMinus}>
              –
            </button>
            <p className='
              font-noto font-bold text-[#000000]
              text-[20px] leading-[25px]
              max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
              max-[1100px]:text-[10px] max-[1100px]:leading-[14px]
            '>
              {amount}
            </p>
            <button className='
              font-noto font-bold active:scale-110
              text-[20px] leading-[25px] 
              max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
              max-[1100px]:text-[10px] max-[1100px]:leading-[14px]'
              onClick={itemPlus}>
              +
            </button>
          </div>
        </div>
      </div>

      <h3 className='font-noto text-end font-extrabold text-[#000] 
        mr-[7.5vw] min-w-[10ch]
        text-[20px] leading-[25px]
        max-[1500px]:text-[15px] max-[1500px]:leading-[20px]
        max-[1100px]:text-[20px] max-[1100px]:leading-[25px]
        max-[1100px]:text-start
        max-[1280px]:mr-0
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