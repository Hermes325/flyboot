import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";
import Imageboot from "./imageboot";

type Props = {
  params: { slug: string };
};

export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug);
  if (item === null) notFound();
  console.log("function ItemPage", item);
  return (
    <div>
      <h1>{params.slug}</h1>
      <Imageboot item={item} />
      {JSON.stringify(item, null, 2)}
    </div>
  );
}

export async function generateStaticParams() {
  console.log("generateStaticParams");
  const paths = await getCatalogPaths();
  return paths.map((path) => ({ slug: path }));
}
