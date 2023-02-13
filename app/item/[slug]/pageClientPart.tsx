"use client"
import React, { useEffect, useState } from 'react'
import { Item } from '@/lib/datocms'
import { changeCountrySize, SIZES_TABLE } from '@/lib/sizes';
import type { Sizes } from '@/pages/api/sizes';
import ChooseColor from "./chooseColor";
import BucketButton from "./bucketButton";
import classNames from "classnames";


type Props = {
  item: Item
}

const ItemPageClientPart = ({ item }: Props) => {

  //#region Sizes
  const [country, setCountry] = useState<keyof typeof SIZES_TABLE>("RU")
  // TODO: какие размеры есть / каких нет
  const [fetchedSizes, setFetchedSizes] = useState<Sizes>({ sizeKey: "RU" })
  // TODO: выбрать размер и передать в redux
  // TODO: заблокировать кнопку покупки, пока не выбрано
  const [selectedSize, setSelectedSize] = useState<{
    selected: number | null,
    sizeKey: typeof country
  }>({
    selected: null,
    sizeKey: "RU"
  })

  function changeCountry(country: "EU" | "RU" | "UK" | "FR" | "US") {
    // TODO: уточнить про unisex в US
    const sex = item.sex.toLowerCase() === "female"
      ? "female"
      : "male"
    const newCountry = country === "US"
      ? `US_${sex}` as "US_male" | "US_female"
      : country
    setCountry(newCountry)
    // Перевод размеров
    setSelectedSize(size => ({ ...size, sizeKey: newCountry }))
  }

  useEffect(() => {
    async function getSizes() {
      const query = await fetch("/api/sizes", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          articul: item.poizonArticul,
          price: item.price
        })
      })
      const newContent = await query.json()
      if (query.ok)
        setFetchedSizes(newContent as Sizes)
    }

    getSizes()
  }, [])

  console.log(country, SIZES_TABLE[country], selectedSize.selected);
  //#endregion

  return (<>

    {/* item sizes */}
    <div className="flex flex-col my-[27px] gap-[11px]">
      <div className="flex flex-row space-x-3 items-end">
        {["EU", "RU", "US", "UK", "FR"].map(size => (
          <button
            key={size}
            disabled={country === size}
            onClick={_ => changeCountry(size as "EU" | "RU" | "US" | "UK" | "FR")}
            className={classNames("font-lato font-[900] text-[24px] leading-[33px] tracking-[0.01em] text-white", {
              "text-[gray]": country.startsWith(size),
              "hover:text-[#03FFF0]": !country.startsWith(size),
            },)}>
            {size}
          </button>))}
        <h4 className="font-lato font-[400] text-white text-[24px] leading-[33px] tracking-[0.01em]">
          Таблица размеров
        </h4>
      </div>

      {/* Размеры */}
      <div className='mt-0 grid grid-cols-8'>
        {SIZES_TABLE[country].map((size, i) =>
          <button
            key={`${size}-${i}`}
            disabled={selectedSize.selected === i}
            onClick={_ => setSelectedSize({
              selected: i,
              sizeKey: country
            })}
            className={classNames("border-2 border-white cursor-pointer",
              "font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em]",
              "w-full text-white",
              {
                "bg-[gray]": selectedSize.selected === i,
                "hover:bg-[#03FFF0]": selectedSize.selected !== i,
              })}>
            {size}
          </button>)}
      </div>

    </div>

    {/* colors */}
    <ChooseColor item={item} />

    <BucketButton item={item} />
  </>)
}

export default ItemPageClientPart