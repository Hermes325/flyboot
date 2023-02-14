"use client"
import React, { useEffect, useState } from 'react'
import { Item } from '@/lib/datocms'
import { mapSizesToAvailableIndices, SIZES_TABLE } from '@/lib/sizes';
import type { Sizes } from '@/pages/api/sizes';
import ChooseColor from "./chooseColor";
import BucketButton from "./bucketButton";
import classNames from "classnames";
import styles from "./pageClientPart.module.css"

type Props = {
  item: Item
}

const ItemPageClientPart = ({ item }: Props) => {

  //#region Sizes
  const [country, setCountry] = useState<keyof typeof SIZES_TABLE>("RU")
  const [fetchedSizes, setFetchedSizes] = useState<number[]>([])
  const [selectedSize, setSelectedSize] = useState<{
    selected: number | null,
    sizeKey: typeof country
  }>({
    selected: null,
    sizeKey: "RU"
  })

  function getCountry(country: "EU" | "RU" | "UK" | "FR" | "US")
    : keyof typeof SIZES_TABLE {
    const sex = item.sex.toLowerCase() === "male"
      ? "male"
      : "female"
    const newCountry = country === "US"
      ? `US_${sex}` as "US_male" | "US_female"
      : country
    return newCountry
  }

  function changeCountry(country: "EU" | "RU" | "UK" | "FR" | "US") {
    const newCountry = getCountry(country)
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
      if (!query.ok)
        console.error("/api/sizes", query.statusText)

      const newSizes = newContent as Sizes
      setFetchedSizes(
        mapSizesToAvailableIndices(newSizes, getCountry(newSizes.sizeKey)))
    }

    getSizes()
  }, [])

  console.log(selectedSize, fetchedSizes);
  //#endregion

  return (<>

    {/* item sizes */}
    <div className="flex flex-col w-fit my-[27px] gap-[11px]">
      {/* Смена региона */}
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
      <div className='mt-0 grid grid-cols-6'>
        {SIZES_TABLE[country].map((size, i) =>
          <button
            key={`${size}-${i}`}
            disabled={selectedSize.selected === i || !fetchedSizes.includes(i)}
            onClick={_ => setSelectedSize({
              selected: i,
              sizeKey: country
            })}
            className={classNames("border-2 border-white cursor-pointer",
              "font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em]",
              "w-full text-white",
              {
                [styles.unavailable]: !fetchedSizes.includes(i),
                [styles.selected]: selectedSize.selected === i && fetchedSizes.includes(i),
                "hover:text-[#03FFF0]": selectedSize.selected !== i && fetchedSizes.includes(i),
              })}>
            {size}
          </button>)}
      </div>

    </div>

    {/* colors */}
    <ChooseColor item={item} />

    <BucketButton item={{
      item,
      amount: 1,
      size: {
        sizeCategory: "apparel",
        available: fetchedSizes,
        chosen: selectedSize.selected ?? NaN,
        locale: selectedSize.sizeKey
      }
    }} />
  </>)
}

export default ItemPageClientPart