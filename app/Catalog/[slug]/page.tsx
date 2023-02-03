import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";
import Image from "next/image";

import Imageboot from "./imageboot";
import BucketButton from "./bucketButton";
import DropDown from "./dropDown";

import arrow_forward from "@/public/arrow/arrow_forward.svg";
import arrow_back from "@/public/arrow/arrow_back.svg";

type Props = {
  params: { slug: string };
};

export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug);
  if (item === null) notFound();

  console.log("function ItemPage", item);

  return (
    <div className="w-screen min-h-screen flex justify-center bg-[#454545]">
      <div className="flex flex-col items-center max-w-[1280px] w-full pt-[150px] pb-10 space-y-10">
        {/* main block item */}
        <div className="flex flex-row w-full space-x-10">
          {/* images block */}
          <div className="flex flex-col space-y-5">
            <Imageboot
              item={item}
              className="object-cover aspect-[646/532] h-[532px] rounded-[15px]"
            />
            {/* more photos */}
            <div className="flex flex-row justify-between">
              <Imageboot
                item={item}
                className="object-cover aspect-[143/93] h-[93px] rounded-[15px]"
              />
              <Imageboot
                item={item}
                className="object-cover aspect-[143/93] h-[93px] rounded-[15px]"
              />
              <Imageboot
                item={item}
                className="object-cover aspect-[143/93] h-[93px] rounded-[15px]"
              />
              <Imageboot
                item={item}
                className="object-cover aspect-[143/93] h-[93px] rounded-[15px]"
              />
            </div>
          </div>
          {/* info block */}
          <div className="space-y-10">
            {/* item title and articul */}
            <div>
              <h1 className="font-montserrat text-5xl text-white">{item.title}</h1>
              <p className="font-jost text-gray-300">Артикул {item.poizonId}</p>
            </div>
            {/* item price */}
            <h2 className="font-montserrat text-5xl text-cyan-700">
              {item.price} руб
            </h2>
            {/* item sizes */}
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row space-x-3 items-end">
                {["EU", "RU", "US", "UK", "FR"].map((country, i) =>
                  <button key={i} className="text-white text-3xl">{country}</button>)}
                <h4 className="text-white text-2xl">Таблица размеров</h4>
              </div>
              <div className="flex flex-row">
                {[38, 39, 40, 41, 42, 43, 44].map(size =>
                  <div key={size} className="border-2 border-white p-2">
                    <h4 className="text-white text-3xl">{size}</h4>
                  </div>)}
              </div>
            </div>

            <BucketButton item={item} />

            <DropDown title="Описание1" description={item.description1} />
            <DropDown title="Описание2" description={item.description2} />
          </div>
        </div>

        {/* Will be interested */}
        <div className="flex flex-col w-full">
          {/* will be interested and nav buttons */}
          <div className="flex flex-row w-full justify-between">
            <h2 className="text-white text-5xl">Так же будет интересно</h2>
            <div className="flex flex-row space-x-5">
              <Image
                src={arrow_back}
                alt=""
                className="p-3 border-2 rounded-full border-white w-14 h-14"
              />
              <Image
                src={arrow_forward}
                alt=""
                className="p-3 border-2 rounded-full border-white w-14 h-14"
              />
            </div>
          </div>
          {/* items carusel */}
          <div className="flex flex-row w-full space-x-5">
            <div className="w-1/4 p-2 space-y-3 flex-col rounded-[15px] bg-cyan-800">
              <Imageboot item={item} className="rounded-[15px] aspect-square" />
              <h4 className="text-white text-lg">{item.title}</h4>
              <h4 className="text-cyan-300 text-2xl">{item.price} руб</h4>
              <button className="bg-cyan-300 px-10 py-3 rounded-xl">
                <h4 className="text-white text-2xl">Купить</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <h1>{params.slug}</h1>
<Imageboot item={item} />
{JSON.stringify(item, null, 2)} */
}

export async function generateStaticParams() {
  console.log("generateStaticParams");
  const paths = await getCatalogPaths();
  return paths.map((path) => ({ slug: path }));
}
