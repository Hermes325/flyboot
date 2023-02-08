"use client";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, deleteAll } from "../../slices/itemSlice";
import type { RootState } from "../../store/store";
import React, { useState } from "react";

function page() {
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderCity, setOrderCity] = useState("");

  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#454545]">
      <div className="flex flex-col items-center justify-center max-w-[1280px] w-full pt-[150px] pb-10 space-y-10">
        <button
          onClick={() => {
            dispatch(
              addItem({
                brand: { id: "", name: "" },
                category: "",
                subcategory: "",
                description1: "",
                description2: "",
                slug: "1",
                title: "Nike",
                poizonId: "",
                price: 0,
                sex: "",
                images: [],
              })
            );
          }}
        >
          Добавить предмет в Redux
        </button>
        {/* Bucket text Корзина */}
        <div className="flex w-full justify-start">
          <h1 className="font-montserrat font-bold text-7xl text-white">
            Корзина
          </h1>
        </div>
        {/* items and info block */}
        <div className="flex flex-row w-full space-x-5">
          <div className="flex flex-col w-[900px] space-y-5">
            {/* Items */}
            {items.map((x) => (
              <div className="w-[900px] h-[136px] border-2 rounded-2xl border-[#919191] ">
                {x.slug}
              </div>
            ))}
            {/* inputs */}
            <div className="flex justify-between">
              <input
                placeholder="Ваше имя"
                value={orderName}
                onChange={(x) => setOrderName(x.target.value)}
                className="w-[421px] h-[68px] border-2 rounded-2xl border-[#919191] bg-transparent"
                type="text"
              />
              <input
                placeholder="Ваш телефон"
                value={orderPhone}
                onChange={(x) => setOrderPhone(x.target.value)}
                className="w-[421px] h-[68px] border-2 rounded-2xl border-[#919191] bg-transparent"
                type="tel"
              />
            </div>
            <div className="flex justify-between">
              <input
                placeholder="Ваш e-mail"
                value={orderEmail}
                onChange={(x) => setOrderEmail(x.target.value)}
                className="w-[421px] h-[68px] border-2 rounded-2xl border-[#919191] invalid:border-red-500 bg-transparent"
                type="email"
              />
              <input
                placeholder="Ваш e-mail"
                value={orderCity}
                onChange={(x) => setOrderCity(x.target.value)}
                className="w-[421px] h-[68px] border-2 rounded-2xl border-[#919191] invalid:border-red-500 bg-transparent"
                type="email"
              />
            </div>
          </div>
          <div className="flex w-[357px] h-full border-2 rounded-2xl border-[#919191]">
            Ваш заказ
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
