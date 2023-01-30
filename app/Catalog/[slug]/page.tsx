// "use client"
import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from 'next/navigation';
import Image from "next/image";
// import { Image } from "react-datocms/image";


type Props = {
  params: { slug: string };
};

export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug)
  if (item === null) notFound()
  console.log("function ItemPage", item);
  return <div>
    <h1>/{params.slug}</h1>
    <h1>{item.title}</h1>
    <p>{item.brand}</p>
    {item.images.map((image, i) =>
      <Image key={i}
        src={image.responsiveImage.src}
        alt={image.responsiveImage.alt} />)}
    {/* {item.images.map((image, i) =>
      <Image key={i} data={image.responsiveImage} />)} */}

  </div>;
}

export async function generateStaticParams() {
  console.log("generateStaticParams")
  const paths = await getCatalogPaths();
  return paths.map(path => ({ slug: path }));
}
