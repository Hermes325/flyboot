"use client"
import React, { useEffect, useState } from 'react'
import { Item } from '@/lib/datocms'
import ChooseColor from "./chooseColor";
import BucketButton from "./bucketButton";

type Props = {
  item: Item
}

const ItemPageClientPart = ({ item }: Props) => {

  const [sizes, setSizes] = useState([])

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
      // setSizes()
    }

    getSizes()
  }, [])


  return (<>

    {/* item sizes */}
    <div className="flex flex-col my-[27px] gap-[11px]">
      <div className="flex flex-row space-x-3 items-end">
        {["EU", "RU", "US", "UK", "FR"].map((country, i) => (
          <button
            key={i}
            className="font-lato font-[900] text-white text-[24px] leading-[33px] tracking-[0.01em]">
            {country}
          </button>))}
        <h4 className="font-lato font-[400] text-white text-[24px] leading-[33px] tracking-[0.01em]">
          Таблица размеров
        </h4>
      </div>
      <table className="m-0">
        <tbody>
          <tr>
            {[38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
              <td
                key={size}
                className="border-2 border-white">
                <button className="font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em] w-full text-white">
                  {size}
                </button>
              </td>))}
          </tr>
        </tbody>
      </table>
    </div>

    {/* colors */}
    <ChooseColor item={item} />

    <BucketButton item={item} />
  </>)
}

export default ItemPageClientPart