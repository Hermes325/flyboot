import { getBrandsAndCategories, getItems } from "@/lib/datocms";
import React, { use } from "react";
import CatalogClient from "./page_client";


//* Статическая изначальная страница каталога
function Catalog() {
  // Все категории и бренды
  const catalogMeta = use(getBrandsAndCategories())
  // Первая страница
  const catalog = use(getItems())

  return (
    <CatalogClient
      firstPage={catalog}
      meta={catalogMeta} />)
}

export default Catalog