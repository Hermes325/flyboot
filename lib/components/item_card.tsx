"use client";
import React from "react";
import { Item } from "@/lib/datocms";
import { Image } from "react-datocms";
import Link from "next/link";
import styles from "./item_card.module.css";
import "../../app/globals.css";

type Props = {
  item: Item;
  className?: string;
  imageClassName?: string;
};

const ItemCard = ({ item, className, imageClassName }: Props) => {

  const price = Math
    .ceil(item.price)
    .toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

  return (<Link href={`/item/${item.slug}`}>

    <article
      className={`${styles.item_card} ${className ?? ""} 
        bg-[#003E3E] rounded-2xl flex flex-col p-[0.75vw] justify-between
        hover:bg-[#07b8b88e] hover:transition-colors`}
    >
      <Image
        lazyLoad={true}
        data={item.images[0].responsiveImage}
        objectFit={"cover"}
        style={{ maxWidth: "none" }}
        className={`${imageClassName ?? ""} rounded-xl w-full`}
      />

      <div>
        <h3 className={styles["name"]}>{item.title}</h3>
        <p className={styles["price"]}>{price}&nbsp;руб</p>
      </div>
    </article>

  </Link>)
}

export default ItemCard;
