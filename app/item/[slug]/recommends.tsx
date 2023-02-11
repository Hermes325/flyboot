"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Catalog, Item } from '@/lib/datocms'
import ItemCard from '@/lib/components/item_card';
import arrow_forward from "@/public/arrow/arrow_forward.svg";
import arrow_backward from "@/public/arrow/arrow_back.svg";
import Image from "next/image";
import 'swiper/css';
import { Navigation } from 'swiper';


type Props = {
  item: Item
}

const Recommends = ({ item }: Props) => {
  const [recommends, setRecommends] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRecommends() {
      const query = await fetch("/api/recommends", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "brands": [item.brand.id],
          "related": [item.id, ...item.relatedItems.map(x => x.id)],
          "slug": item.slug
        })
      })
      const newContent: Catalog = await query.json()
      setRecommends(newContent.items)
      setLoading(false)
    }

    getRecommends()
  }, [])

  return (<section className="flex flex-col w-full">
    {/* will be interested and nav buttons */}
    <div className="flex flex-row w-full justify-between">
      <h2 className="text-white text-5xl my-[37px]">Так же будет интересно</h2>
      <div className="flex flex-row items-end space-x-5 space-y-5 mb-[37px]">
        <Image
          alt="назад"
          src={arrow_backward}
          className="arrow_backward p-3 border-2 rounded-full border-white w-14 h-14" />
        <Image
          alt="вперёд"
          src={arrow_forward}
          className="arrow_forward p-3 border-2 rounded-full border-white w-14 h-14" />
      </div>
    </div>

    {/* items carusel */}
    <div className="flex flex-row w-full space-x-5 mb-[74px]">
      {!loading &&
        <Swiper
          className='w-full'
          slidesPerView={4}
          spaceBetween={50}
          breakpoints={{
            "0": { slidesPerView: "auto", spaceBetween: 20 },
            "400": { slidesPerView: 2 },
            "700": { slidesPerView: 3 },
            "1300": { slidesPerView: 4 }
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: '.arrow_backward',
            nextEl: '.arrow_forward'
          }}>
          {recommends.map(item =>
            <SwiperSlide key={item.poizonArticul} className="cursor-pointer">
              <ItemCard
                item={item}
                className="min-h-[300px]"
                imageClassName='aspect-square' />
            </SwiperSlide>)}
        </Swiper>}
    </div>
  </section>)
}

export default Recommends


