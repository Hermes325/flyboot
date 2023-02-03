"use client"
import React from 'react'
import { Item } from '@/lib/datocms'
import { Image } from "react-datocms";
import styles from "./item_card.module.css"
import "../../app/globals.css"

type Props = {
  item: Item
}

const ItemCard = ({ item }: Props) => {
  return (
    <div className='bg-[#003E3E] rounded-2xl p-[0.75vw] h-[336px] flex flex-col justify-between'>
      <Image
        lazyLoad={true}
        objectFit={'cover'}
        data={item.images[0].responsiveImage}
        className='rounded-xl h-[55%]'
      />
      <div>
        <h3 className={styles['name']}>{item.title}</h3>
        <p className={styles['price']}>{item.price}&nbsp;руб</p>
      </div>
      <button className={styles['buy-btn']}>
        Купить
      </button>
    </div>
  )
}

export default ItemCard