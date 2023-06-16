"use client";
import React from "react";
import { addItem, BucketItem } from "@/lib/redux/slices/itemSlice";
import { useAppDispatch } from "@/lib/redux/store/hooks";
import styles from "./bucketButton.module.css"


type Props = {
  item?: BucketItem;
};

function BucketButton({ item, disabled }: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const dispatch = useAppDispatch();

  return (
    <button
      title="выберите размер"
      disabled={disabled}
      onClick={() => item && dispatch(addItem(item))}
      className={styles.buy + " font-inter rounded-lg py-5 px-8"}>
      Добавить в корзину
    </button>)
}

export default BucketButton;
