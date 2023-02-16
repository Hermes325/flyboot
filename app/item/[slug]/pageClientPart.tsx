"use client"
import React, { useEffect, useState } from 'react'
import { Item } from '@/lib/datocms'
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
  const [country, setCountry] = useState<string>("RU")
  const [fetchedSizes, setFetchedSizes] = useState<Sizes>()
  const [selectedSize, setSelectedSize] = useState<{
    selected: number,
    sizeKey: string
  }>({
    selected: NaN,
    sizeKey: "null"
  })

  function changeCountry(country: string) {
    setCountry(country)
    // Перевод размеров
    setSelectedSize(size => ({ ...size, sizeKey: country }))
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
      setFetchedSizes(newSizes)
      setCountry(newSizes[0].sizeKey)
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
        {fetchedSizes === undefined
          ? <h3>Загружаем размеры с poizon...</h3>
          : fetchedSizes.map(({ sizeKey }) => (
            <button
              key={sizeKey}
              onClick={_ => changeCountry(sizeKey)}
              className={classNames("font-lato font-[900] text-[24px] leading-[33px] tracking-[0.01em] text-white", {
                "text-[gray]": country?.startsWith(sizeKey),
                "hover:text-[#03FFF0]": !country?.startsWith(sizeKey),
              },)}>
              {sizeKey}
            </button>))}
        {/* <h4 className="font-lato font-[400] text-white text-[24px] leading-[33px] tracking-[0.01em]">
          Таблица размеров
        </h4> */}
      </div>

      {/* Размеры */}
      <div className='mt-0 grid grid-cols-6'>
        {fetchedSizes?.find(x => x.sizeKey === country)?.sizeValue.map((size, i) =>
          <button
            key={`${country}-${i}`}
            disabled={selectedSize.selected === i}
            onClick={_ => setSelectedSize({ sizeKey: country, selected: i })}
            className={classNames("border-2 border-white cursor-pointer",
              "font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em]",
              "w-[4ch] text-white",
              {
                // [styles.unavailable]: 
                "!text-[#03FFF0]": selectedSize.selected === i,
                "hover:text-[#03FFF0]": selectedSize.selected !== i,
              })}>
            {size}
          </button>)}
      </div>

    </div>

    {/* colors */}
    <ChooseColor item={item} />

    <BucketButton item={fetchedSizes ? {
      item,
      amount: 1,
      size: {
        chosenSizeKey: selectedSize.sizeKey,
        chosenSizeValue: selectedSize.selected,
        available: fetchedSizes
      }
    } : undefined} />
  </>)
}

export default ItemPageClientPart