import React from "react";
import { getItem, getCatalogPaths } from "@/lib/datocms";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function ItemPage({ params }: Props) {
  const item = await getItem(params.slug);
  if (item === null) notFound();

  return (
    <div>
      <p>ItemPage {params.slug}</p>
      <p>{JSON.stringify(item, null, 2)}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = await getCatalogPaths();

  return paths.map((path) => ({ slug: path }));
}
