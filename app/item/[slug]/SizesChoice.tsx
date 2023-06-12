"use client"
import React, { useEffect, useState } from 'react'
import styles from "./SizesChoice.module.css"
import classNames from "classnames";
import type { Item } from '@/lib/datocms';
import type { Sizes } from '@/pages/api/sizes';
import { SelectedSize } from './pageClientPart';
import Image from 'next/image'
import QR from "@/public/qrcode_t.me.jpg"
import Link from 'next/link';

type Props = {
  item: Item
  country: string
  setCountry: React.Dispatch<React.SetStateAction<string>>
  fetchedSizes: Sizes
  setFetchedSizes: React.Dispatch<React.SetStateAction<Sizes>>
  selectedSize: SelectedSize
  setSelectedSize: React.Dispatch<React.SetStateAction<SelectedSize>>
}
const SizesChoice = ({ item, country, fetchedSizes, selectedSize, setCountry, setFetchedSizes, setSelectedSize }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const countrySizes = fetchedSizes?.find?.(x => x?.sizeKey === country) ?? {
    available: [],
    sizeKey: "RU",
    sizeValue: []
  }

  console.log(country, countrySizes, fetchedSizes);


  useEffect(() => {
    async function getSizes() {
      const query = await fetch("/api/sizes", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: item.category,
          poizonId: item.poizonId,
          price: item.price
        })
      })
      setIsLoading(false)

      if (!query.ok) {
        console.error("Ошибка функции размеров");
        return setIsError(true)
      }
      const newSizes: Sizes = await query.json()
      if (newSizes.length === 0) {
        console.error("Размеры не найдены");
        return setIsError(true)
      }
      setFetchedSizes(newSizes)
      setCountry(newSizes?.[0]?.sizeKey)
    }

    getSizes()
  }, [])

  if (isError) {
    return <div className="grid bg-[#fff] h-fit border-2 rounded-[15px] border-[#909090] my-[29px]">
      <h3 className='font-inter font-bold leading-[26px] text-[24px] mb-[13px] uppercase p-[1rem_1.5rem_0_1.5rem]
    max-[1515px]:!text-[22px] 
    max-[1015px]:!text-[20px] 
    max-[835px]:!text-[18px] 
    max-[835px]:!leading-[19px]
    max-[660px]:!leading-[137%]
    
    col-start-1 col-end-[span_1]
    max-[1200px]:col-end-[span_3]
    '>
        Не нашли размеры этой модели
      </h3>
      <p className='col-start-1 font-inter text-[20px] leading-[25px] font-extralight p-[0.5rem_1.5rem_1.5rem_1.5rem] max-[1200px]:pr-0 max-[900px]:pr-[1.5rem]'>
        Наш ассортимент регулярно
        пополняется, напишите нам <Link href={"https://t.me/FlyBootsSupport"} className='underline'>@FlyBootsSupport</Link>
      </p>
      <div className='flex items-end max-[900px]:hidden
      col-start-2 col-end-[span_1] row-start-1 row-end-[span_2]
      max-[1200px]:col-end-[span_1]
      max-[1200px]:row-start-2 max-[1200px]:row-end-[span_1]
      max-[1200px]:h-[10rem] max-[1200px]:w-[10rem]
      '>
        <Image
          alt='менеджер QR в TG'
          src={QR}
          className="rounded-[15px] max-[1200px]:h-[10rem] max-[1200px]:w-[10rem] aspect-[185/177]"
        />
      </div>
    </div>
  }

  return <div className="flex flex-col w-fit my-[27px] gap-[11px]">
    {/* Смена региона */}
    <div className="flex flex-row space-x-3 items-end">
      {isLoading
        ? <h3>Загружаем размеры...</h3>
        : fetchedSizes.map(({ sizeKey }) => (
          <button
            key={sizeKey}
            onClick={_ => setCountry(sizeKey)}
            className={classNames("font-lato font-[900] text-[24px] leading-[33px] tracking-[0.01em] text-black", {
              "!text-[black]": country === sizeKey,
              "hover:text-[#black]": country !== sizeKey,
            })}>
            {sizeKey}
          </button>))}
    </div>

    {/* Размеры */}
    <div className='mt-0 grid grid-cols-6
    max-[400px]:grid-cols-7
  '>
      {countrySizes?.sizeValue.map((size, i) =>
        <button
          key={`${country}-${i}`}
          disabled={selectedSize.selected === i || !countrySizes.available[i]}
          onClick={_ => setSelectedSize({ sizeKey: country, selected: i })}
          className={classNames("border-2 border-black cursor-pointer",
            "font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em]",
            "w-[4ch] text-black" +
            " max-[400px]:text-[16px] max-[400px]:py-0" +
            " max-[400px]:w-[4.6ch]",
            {
              [styles.unavailable]: !countrySizes.available[i],
              "text-[#fff] bg-[grey]": selectedSize.sizeKey === country && selectedSize.selected === i,
              "hover:text-[#fff] hover:bg-[grey]": selectedSize.selected !== i,
            })}>
          {size}
        </button>)}
    </div>

  </div>
}

export default SizesChoice