"use client"
import React, { useState } from 'react'
import { Item } from '@/lib/datocms'
import type { Sizes } from '@/pages/api/sizes';
import ChooseColor from "./chooseColor";
import BucketButton from "./bucketButton";
import SizesChoice from './SizesChoice';

export type SelectedSize = {
  selected: number,
  sizeKey: string
}

type Props = {
  item: Item
}
const ItemPageClientPart = ({ item }: Props) => {
  //#region Sizes
  const [country, setCountry] = useState<string>("RU")
  const [fetchedSizes, setFetchedSizes] = useState<Sizes>([])
  const [selectedSize, setSelectedSize] = useState<SelectedSize>({
    selected: NaN,
    sizeKey: "null"
  })
  //#endregion

  return (<>
    <SizesChoice item={item}
      country={country} setCountry={setCountry}
      fetchedSizes={fetchedSizes} setFetchedSizes={setFetchedSizes}
      selectedSize={selectedSize} setSelectedSize={setSelectedSize} />

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