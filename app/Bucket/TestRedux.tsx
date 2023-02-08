"use client";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, deleteAll } from "../../slices/itemSlice";
import React from "react";


const TestRedux = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[100px] h-[100px] border bg-slate-500 rounded-sm absolute left-0 top-32">
      <button onClick={() => dispatch(addItem({
        brand: { id: "1", name: "Nike" },
        category: "category",
        subcategory: "subcategory",
        description1: "description1",
        description2: "description2",
        slug: "1",
        title: "Nike",
        poizonId: "poizonId",
        price: 9000,
        sex: "female",
        images: [],
      }))}>
        Добавить предмет в Redux
      </button>
    </div>
  )
}

export default TestRedux