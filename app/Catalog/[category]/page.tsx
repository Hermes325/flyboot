import React, { use } from "react";
import { getBrandsAndCategories, getItems } from "@/lib/datocms";
import CatalogClient from "../page_client";
import { redirect } from "next/navigation";


type Props = {
  params: { category: string };
}

//* Статически генерим страницу каталога с категорией
function Catalog({ params }: Props) {

  // Все категории и бренды
  const catalogMeta = use(getBrandsAndCategories())

  const isCategoryExists = Object
    .keys(catalogMeta.category.categoryJson)
    .includes(params.category)

  if (!isCategoryExists) redirect("/Catalog")

  // Первая страница с категорией из URL
  const catalog = use(getItems(undefined, [params.category]))

  return <CatalogClient
    firstPage={catalog}
    meta={catalogMeta}
    initialCategory={params.category} />
}

export default Catalog

export async function generateStaticParams() {
  const meta = await getBrandsAndCategories();
  return Object
    .keys(meta.category.categoryJson)
    .map(category => ({ category }));
}
