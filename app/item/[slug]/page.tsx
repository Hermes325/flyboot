import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";
import BucketButton from "./bucketButton";
import DropDown from "./dropDown";
import Recommends from "./recommends";
import PictureBlock from "./pictureBlock";
import ChooseColor from "./chooseColor";


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
        <div className="">
          {/* item title and articul */}
          <div>
            <h1 className="font-montserrat text-[32px] tracking-[0.01em] text-white">
              {item.title}
            </h1>
            <p className="font-jost text-[18px] text-gray-300">Артикул {item.poizonArticul}</p>
          </div>

          {/* item price */}
          <h2 className="font-lato font-[900] mt-[18px] tracking-[0.01em] text-[28px] text-[#03FFF0]">
            {item.price} руб
          </h2>

          {/* item sizes */}
          <div className="flex flex-col my-[27px] gap-[11px]">
            <div className="flex flex-row space-x-3 items-end">
              {["EU", "RU", "US", "UK", "FR"].map((country, i) => (
                <button
                  key={i}
                  className="font-lato font-[900] text-white text-[24px] leading-[33px] tracking-[0.01em]">
                  {country}
                </button>))}
              <h4 className="font-lato font-[400] text-white text-[24px] leading-[33px] tracking-[0.01em]">
                Таблица размеров
              </h4>
            </div>
            <table className="m-0">
              <tbody>
                {[38, 39, 40, 41, 42, 43, 44].map((size) => (
                  <td
                    key={size}
                    className="border-2 border-white">
                    <button className="font-lato py-2 font-[900] text-[24px] leading-[40px] tracking-[0.01em] w-full text-white">
                      {size}
                    </button>
                  </td>))}
              </tbody>
            </table>
          </div>

          {/* colors */}
          <ChooseColor item={item} />

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
