"use client";
import { Item } from "@/lib/datocms";
import { addItem } from "@/slices/itemSlice";
import React from "react";

import { useDispatch } from "react-redux";

type Props = {
  item: Item;
};

function BucketButton({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-cyan-700 rounded-lg py-5 px-8"
      onClick={() => dispatch(addItem(item))}
    >
      <h2 className="font-inter font-bold text-white ">ДОБАВИТЬ В КОРЗИНУ</h2>
    </button>
  );
}

export default BucketButton;
