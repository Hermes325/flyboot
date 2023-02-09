import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";
import BucketButton from "./bucketButton";
import DropDown from "./dropDown";
import Recommends from "./recommends";
import PictureBlock from "./pictureBlock";


type Props = {
  params: { slug: string };
};

export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug);
  if (item === null) notFound();

  return (<div className=" w-screen min-h-screen flex justify-center bg-[#0E0E0E]">

    <div className="flex flex-col items-center max-w-[1280px] w-full pt-[150px] pb-10 space-y-10">
      {/* main block item */}
      <div className="flex flex-row w-full space-x-10">
        {/* images block */}
        <div className="flex flex-col space-y-5">
          <PictureBlock item={item} />
        </div>

        {/* info block */}
        <div className="space-y-10">
          {/* item title and articul */}
          <div>
            <h1 className="font-montserrat text-5xl text-white">
              {item.title}
            </h1>
            <p className="font-jost text-gray-300">Артикул {item.poizonId}</p>
          </div>

          {/* item price */}
          <h2 className="font-montserrat text-5xl text-[#03FFF0]">
            {item.price} руб
          </h2>

          {/* item sizes */}
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row space-x-3 items-end">
              {["EU", "RU", "US", "UK", "FR"].map((country, i) => (
                <button key={i} className="text-white text-3xl">
                  {country}
                </button>
              ))}
              <h4 className="text-white text-2xl">Таблица размеров</h4>
            </div>
            <div className="flex flex-row">
              {[38, 39, 40, 41, 42, 43, 44].map((size) => (
                <div key={size} className="border-2 border-white p-2">
                  <h4 className="text-white text-3xl">{size}</h4>
                </div>
              ))}
            </div>
          </div>

          <BucketButton item={item} />

          <DropDown title="Описание" description={item.description1} />
          <DropDown title="Характеристика" description={item.description2} />
        </div>
      </div>

      {/* Will be interested */}
      <Recommends item={item} />
    </div>

  </div>);
}

export async function generateStaticParams() {
  const paths = await getCatalogPaths();
  return paths.map((path) => ({ slug: path }));
}
