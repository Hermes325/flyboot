import React from "react";
import { renderMetaTags } from "react-datocms";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";
import DropDown from "./dropDown";
import Recommends from "./recommends";
import PictureBlock from "./pictureBlock";
import ItemPageClientPart from "./pageClientPart";
import Head from "next/head";


type Props = {
  params: { slug: string };
};

export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug);
  if (item === null) notFound();

  const price = Math.ceil(item.price).toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  console.log(item.seo, item.site);

  return (<main className=" w-screen min-h-screen flex justify-center bg-[#0E0E0E]
      max-[600px]:px-[20px]
    ">
    {/* <Head>{renderMetaTags(item?.seo?.concat(item?.site?.favicon))}</Head> */}

    <div className="flex flex-col items-center max-w-[1280px] w-full pt-[150px] pb-10 space-y-10
      max-[600px]:pt-[100px]
    ">
      {/* main block item */}
      <div className="flex flex-row w-full space-x-10
        max-[600px]:flex-col
      ">
        {/* images block */}
        <div className="flex flex-col space-y-5
          max-[600px]:space-y-[15px]
        ">
          <PictureBlock item={item} />
        </div>

        {/* info block */}
        <div className="
          max-[600px]:ml-[0_!important]
        ">
          {/* item title and articul */}
          <div>
            <h1 className="font-montserrat text-[32px] tracking-[0.01em] text-white">
              {item.title}
            </h1>
            <p className="font-jost text-[18px] text-gray-300">Артикул {item.poizonArticul}</p>
          </div>

          {/* item price */}
          <h2 className="font-lato font-[900] mt-[18px] tracking-[0.01em] text-[28px] text-[#03FFF0]">
            {price} руб
          </h2>

          {/* CSR часть с запросом к Егору */}
          <ItemPageClientPart item={item} />

          <DropDown title="Описание" description={item.description1} />
          <DropDown title="Характеристика" description={item.description2} />
        </div>
      </div>

      {/* Will be interested */}
      <Recommends item={item} />
    </div>

  </main>);
}

export async function generateStaticParams() {
  const paths = await getCatalogPaths();
  return paths.map((path) => ({ slug: path }));
}
