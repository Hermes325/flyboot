"use client";
import React from "react";
import { Item } from "@/lib/datocms";
import { Image } from "react-datocms";
import Link from "next/link";
import styles from "./ItemCard.module.css";
import "@/app/globals.css";

type Props = {
  h3ClassName?: string;
  pClassName?: string;
  item: Item;
  className?: string;
  imageClassName?: string;
};

const ItemCard = ({ item, className, imageClassName, h3ClassName, pClassName }: Props) => {

  const price = Math
    .ceil(item.price)
    .toLocaleString('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

  return (<Link href={`/item/${item.slug}`}>

    <article
      className={`${styles.item_card} ${className ?? ""} 
        bg-[#fff] rounded-2xl flex flex-col justify-between border-[1px] `}
    >
      <Image
        lazyLoad={true}
        data={item.images[0].responsiveImage}
        objectFit={"contain"}
        style={{ maxWidth: "none" }}
        className={`${imageClassName ?? ""} rounded-[15px] px-[0.75vw]`}
        pictureClassName="bg-white rounded-xl "
      />

      <div>
        <h3 className={`${styles["name"]}
          ${h3ClassName ?? ""} 
          text-[#AEAEAE]
          max-[750px]:!text-[15px] max-[750px]:!h-[32px]
          max-[550px]:!text-[13px] max-[550px]:!h-[max(max-content,32px)]
          px-[0.75vw]
          `}>{item.title}</h3>

      </div>
      <div>
        <p className={`${styles["price"]}
          ${pClassName ?? ""} 
          
          rounded-b-[15px]
          max-[750px]:!text-[18px]
          max-[550px]:!text-[15px]
          `}>{price}&nbsp;руб</p>
      </div>
    </article>

  </Link>)
}

export default ItemCard;