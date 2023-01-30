"use client"
import React from 'react'
import { Item } from '@/lib/datocms'
import { Image } from "react-datocms";
import styles from "./styles/slide2_card.module.css";


type Props = {
  item: Item
}

const Slide2Card = ({ item }: Props) => {
  console.log("Slide2Card", item.images[0].responsiveImage)

  return (
    <div>
      <Image data={item.images[0].responsiveImage} />
      <h1>{item.title}</h1>
      <p>{item.price}</p>
    </div>
  )
}

export default Slide2Card