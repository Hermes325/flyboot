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
  const countrySizes = fetchedSizes?.find(x => x?.sizeKey === country)

  useEffect(() => {
    async function getSizes() {
      const query = await fetch("/api/sizes", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          poizonId: item.poizonId,
          price: item.price
        })
      })
      const newContent = await query.json()
      if (!query.ok) {
        console.error("/api/sizes", query.statusText)
        return
      }
      console.log(newContent)
      const newSizes = newContent as Sizes
      setFetchedSizes(newSizes)
      setCountry(newSizes?.[0]?.sizeKey)
    }

    getSizes()
  }, [])

  // console.log(country, countrySizes, fetchedSizes);
  //#endregion

  return (<>

    {/* item sizes */}
    <div className="flex flex-col w-fit my-[27px] gap-[11px]">
      {/* Смена региона */}
      <div className="flex flex-row space-x-3 items-end">
        {fetchedSizes === undefined
          ? <h3>Загружаем размеры...</h3>
          : fetchedSizes.map(({ sizeKey }) => (
            <button
              key={sizeKey}
              onClick={_ => setCountry(sizeKey)}
              className={classNames("font-lato font-[900] text-[24px] leading-[33px] tracking-[0.01em] text-white", {
                "!text-[gray]": country === sizeKey,
                "hover:text-[#03FFF0]": country !== sizeKey,
              })}>
              {sizeKey}
            </button>))}
        {/* <h4 className="font-lato font-[400] text-white text-[24px] leading-[33px] tracking-[0.01em]">
          Таблица размеров
        </h4> */}
      </div>

      {/* Размеры */}
      <div className='mt-0 grid grid-cols-6
        max-[400px]:grid-cols-7
      '>
        {countrySizes?.sizeValue.map((size, i) =>
          <button
            key={`${country}-${i}`}
            disabled={selectedSize.selected === i}
            onClick={_ => setSelectedSize({ sizeKey: country, selected: i })}
            className={classNames("border-2 border-white cursor-pointer",
              "font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em]",
              "w-[4ch] text-white" +
              " max-[400px]:text-[16px] max-[400px]:py-0" +
              " max-[400px]:w-[4.6ch]",
              {
                [styles.unavailable]: !countrySizes.available[i],
                "!text-[#03FFF0]": selectedSize.sizeKey === country && selectedSize.selected === i,
                "hover:text-[#03FFF0]": selectedSize.selected !== i,
              })}>
            {size}
          </button>)}
      </div>

    </div>

    {/* colors */}
    <p className='min-[430px]:hidden mb-[10px]'>Цвет</p>
    <ChooseColor item={item} />

    <BucketButton
      disabled={Number.isNaN(selectedSize.selected) || selectedSize.sizeKey !== country}
      item={fetchedSizes ? {
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