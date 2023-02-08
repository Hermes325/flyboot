"use client"
import React from 'react'
import { Item } from '@/lib/datocms'
import { Image } from "react-datocms";
import Link from 'next/link';
import styles from "./item_card.module.css"
import "../../app/globals.css"

type Props = {
  item: Item
}

const ItemCard = ({ item }: Props) => {
  return (
    <Link href={`/item/${item.slug}`}>
      <div className={styles.item_card + ` bg-[#003E3E] rounded-2xl flex flex-col p-[0.75vw] h-[300px] justify-between
                      hover:bg-[#07b8b88e] hover:transition-[0.15s]`}>
        <Image
          lazyLoad={true}
          objectFit={'cover'}
          data={item.images[0].responsiveImage}
          style={{ maxWidth: "none" }}
          className='rounded-xl h-[75%] w-full' />

        <div>
          <h3 className={styles['name']}>{item.title}</h3>
          <p className={styles['price']}>{item.price}&nbsp;руб</p>
        </div>
        {/* <button className={styles['buy-btn']}>
          Купить
        </button> */}
      </div>
    </Link>)
}

export default ItemCard