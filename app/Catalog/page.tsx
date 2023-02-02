import { getCatalogBrandsAndCategories, getCatalogItems } from "@/lib/datocms";
import React, { use } from "react";
import CatalogClient from "./page_client";


//* Статическая изначальная страница каталога
function Catalog() {
  // Все категории и бренды
  const catalogMeta = use(getCatalogBrandsAndCategories())

  // Первая страница
  const catalog = use(getCatalogItems(
    /* Все бренды */ catalogMeta.brands.map(x => x.name),
    /* Категории */ Object.keys(catalogMeta.category.categoryJson)))

  return (
    <CatalogClient
      firstPage={catalog}
      meta={catalogMeta} />)
}

export default Catalog