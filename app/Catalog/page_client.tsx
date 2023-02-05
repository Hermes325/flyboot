"use client"
import React, { useState } from 'react'
import { Catalog, CatalogBrandsAndCategories, SortType } from '@/lib/datocms'
import ItemCard from '@/lib/components/item_card'
import Pagination from './Components/pagination'
import FiltersUI from './Components/filters'
import Sorting from './Components/sorting'

export type Filters = {
  page: number;
  priceSort: SortType;
  priceFilter: { min: number; max: number; };
  sexFilter: { male: boolean; female: boolean; };
  selectedCategories: { [category: string]: boolean; };
  selectedSubcategories: string[];
  selectedBrands: { [brand: string]: boolean; };
}
export type SetFiltersWrapper =
  (setNewValue: (filter: Filters) => Filters) => Promise<void>

type Props = {
  firstPage: Catalog,
  meta: CatalogBrandsAndCategories
}

const CatalogClient = ({ firstPage, meta }: Props) => {

  // const [content, setContent] = useState({ ...firstPage, items: [...firstPage.items, ...firstPage.items, ...firstPage.items] })
  const [content, setContent] = useState(firstPage)
  const [filters, setFilters] = useState<Filters>({
    page: 0,
    priceSort: SortType.default,
    priceFilter: {
      min: firstPage.min?.price,
      max: firstPage.max?.price
    },
    sexFilter: {
      male: true,
      female: true
    },
    selectedCategories: Object
      .keys(meta.category.categoryJson)
      .reduce((arr, v) => ({ ...arr, [v]: true }), {}) as { [category: string]: boolean },
    selectedSubcategories: Object.keys(Object.entries(meta.category.categoryJson).map(x => x[1])),
    selectedBrands: meta.brands
      .reduce((arr, v) => ({ ...arr, [v.name]: true }), {}) as { [brand: string]: boolean }
  })

  //#region Queries

  //* Кидает запрос за товарами при изменении фильтров, сортировки или пагинации
  async function fetchData(newFilters: Filters): Promise<Catalog> {

    const brands = Object
      .entries(newFilters.selectedBrands)
      .filter(x => x[1])
      .map(x => x[0])

    const categories = Object
      .entries(newFilters.selectedCategories)
      .filter(x => x[1])
      .map(x => x[0])

    const sex = Object
      .entries(newFilters.sexFilter)
      .filter(x => x[1])
      .map(x => x[0])

    const query = await fetch("/api/catalog", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: newFilters.page,
        orderBy: SortType[newFilters.priceSort],
        brands,
        categories,
        sex,
        minPrice: newFilters.priceFilter.min,
        maxPrice: newFilters.priceFilter.max,
      })
    })
    const newContent: Catalog = await query.json()
    return newContent
  }

  //* Обновляет состояние страницы
  async function setFiltersWrapper(setNewValue: (filter: Filters) => Filters) {
    const newFilters = setNewValue(filters)
    setFilters(newFilters)
    const newContent = await fetchData(newFilters)
    setContent(newContent)
  }

  //#endregion

  return (<main className="w-screen min-h-screen grid grid-cols-6 auto-rows-min pt-[12.5vh] gap-y-[23px]">

    {/* Title */}
    <div className='col-start-2 col-span-2'>
      <h1 className='font-montserrat text-[80px] font-bold text-[#F5F5F5]'>Каталог</h1>
    </div>

    {/* Sorting */}
    <div className='col-start-5 col-span-1 flex items-end'>
      <Sorting
        filters={filters}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

    {/* Filters */}
    <div className="col-start-2 col-span-1 h-fit p-[2rem_2.5rem_2.5rem_2.5rem] mr-[3rem] border-2 rounded-[1.6rem] border-[#909090]">
      <FiltersUI
        min={content.min?.price}
        max={content.max?.price}
        meta={meta}
        filters={filters}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

    {/* Catalog */}
    <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px] mb-[10vh]">
      {/* Items */}
      {content.items.map(item =>
        <ItemCard key={item.poizonId} item={item} />)}

      {content.items.length === 0 &&
        <div className='col-span-3 flex items-center justify-center h-[50vh]'>
          <h2 className='font-inter font-light leading-[26px] text-[24px] mb-[13px]'>
            Таких товаров нет... Потыкайте фильтры
          </h2>
        </div>}

      {/* Pagination */}
      <Pagination
        page={filters.page}
        amount={content.all.count}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

  </main >)
}

export default CatalogClient