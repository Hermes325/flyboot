"use client";
import React from "react";
import { Item } from "@/lib/datocms";
import { addItem } from "@/lib/redux/slices/itemSlice";
import { useDispatch } from "react-redux";
import styles from "./bucketButton.module.css"


type Props = {
  item: Item;
};

function BucketButton({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addItem(item))}
      className={styles.buy + " font-inter rounded-lg py-5 px-8"}>
      Добавить в корзину
    </button>)
}

export default BucketButton;
