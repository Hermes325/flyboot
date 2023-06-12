import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";
import DropDown from "./dropDown";
import Recommends from "./recommends";
import PictureBlock from "./pictureBlock";
import ItemPageClientPart from "./pageClientPart";

type Props = {
  params: { slug: string };
}
export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug);
  if (item === null) notFound(); // → not-found.tsx

  const price = Math.ceil(item.price).toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });


  return (
    <main
      className=" w-screen min-h-screen flex justify-center bg-[#F5F5F5]
      max-[600px]:px-[20px]
    "
    >
      <div
        className="flex flex-col items-center max-w-[1280px] w-full pt-[150px] pb-10 space-y-10
      max-[600px]:pt-[100px]
    "
      >
        {/* main block item */}
        <div
          className="flex flex-row w-full space-x-10
        max-[600px]:flex-col
      "
        >
          {/* images block */}
          <div
            className="flex flex-col space-y-5
          max-[600px]:space-y-[15px]
          
        "
          >
            <PictureBlock item={item} />
          </div>

          {/* info block */}
          <div
            className="
          max-[600px]:ml-[0_!important]
          w-[40vw]
          max-[600px]:w-[90vw]
          bg-white
          rounded-[15px]
          max-[600px]:mt-[2%]
          px-[15px]
          pt-[15px]
        "
          >

            {/* item title and articul */}
            <div>
              <h1 className="font-montserrat text-[32px] tracking-[0.01em] text-black max-[600px]:!text-[20px] max-[600px]:!leading-5	 max-[600px]:!font-bold">
                {item.title}
              </h1>
              <p className="font-jost max-[600px]:!text-[12px] text-[18px] text-[#AEAEAE]">
                Артикул {item.poizonArticul}
              </p>
              {/* Описание */}
              <p>
                {item.description1.replace("<p>", "").replace("</p>", "")}
              </p>
            </div>

            {/* item price */}
            <h2 className="font-lato font-[900] mt-[18px] tracking-[0.01em] text-[28px] text-[#000000]">
              {price} руб
            </h2>

            {/* CSR часть с запросом к Егору */}
            <ItemPageClientPart item={item} />

            {/* Характеристика */}
            <div className="mt-[2%]">
              <p className="max-[600px]:hidden">{item.description2.replace("<p>", "").replace("</p>", "").replace("<ul>", "").replace("</ul>", "").replaceAll("<li>", "").replaceAll("</li>", "")}</p>
              <div className="hidden max-[600px]:block">
                <DropDown title="Подробнее о  товаре" description={item.description2.replace("<p>", "").replace("</p>", "").replace("<ul>", "").replace("</ul>", "").replaceAll("<li>", "").replaceAll("</li>", "")} />
              </div>
            </div>

          </div>
        </div>


        {/* <DropDown title="Описание" description={item.description1} /> */}

        <Recommends item={item} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const paths = await getCatalogPaths();
  return paths.map((path) => ({ slug: path }));
}