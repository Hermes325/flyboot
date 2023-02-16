"use client";
import React from "react";
import { addItem, BucketItem } from "@/lib/redux/slices/itemSlice";
import { useDispatch } from "react-redux";
import styles from "./bucketButton.module.css"


type Props = {
  item?: BucketItem;
};

function BucketButton({ item, disabled }: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const dispatch = useDispatch();

  return (
    <button
      disabled={disabled}
      onClick={() => item && dispatch(addItem(item))}
      className={styles.buy + " font-inter rounded-lg py-5 px-8"}>
      Добавить в корзину
    </button>)
}

export default BucketButton;
