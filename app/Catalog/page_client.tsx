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
  selectedCategories: {
    [category: string]: boolean;
  };
  selectedSubcategories: {
    [category: string]: {
      [subcategory: string]: boolean;
    };
  };
  selectedBrands: {
    [brand: string]: boolean;
  };
}
export type SetFiltersWrapper =
  (setNewValue: (filter: Filters) => Filters) => Promise<void>

type Props = {
  firstPage: Catalog,
  meta: CatalogBrandsAndCategories,
  initialCategory?: string
}

const CatalogClient = ({ firstPage, meta, initialCategory }: Props) => {

  const [content, setContent] = useState({ ...firstPage, items: [...firstPage.items, ...firstPage.items, ...firstPage.items, ...firstPage.items, ...firstPage.items] })
  const [filters, setFilters] = useState<Filters>({
    page: 0,
    priceSort: SortType.default,
    priceFilter: {
      min: firstPage.min?.price,
      max: firstPage.max?.price
    },
    sexFilter: {
      male: false,
      female: false
    },
    selectedCategories: Object
      .keys(meta.category.categoryJson)
      .reduce((arr, category) => ({ ...arr, [category]: initialCategory === category }), {}),
    selectedSubcategories: Object
      .entries(meta.category.categoryJson)
      .reduce((arr, category) => ({
        ...arr, [category[0]]: Object
          .keys(category[1])
          .reduce((arr, subcategory) => ({
            ...arr, [subcategory]: subcategory === category[0]
          }), {})
      }), {}),
    selectedBrands: meta.brands
      .reduce((arr, v) => ({ ...arr, [v.name]: false }), {})
  })

  //#region Queries

  //* Кидает запрос за товарами при изменении фильтров, сортировки или пагинации
  async function fetchData(newFilters: Filters): Promise<Catalog> {

    let brands = Object
      .entries(newFilters.selectedBrands)
      .filter(x => x[1])
      .map(x => x[0])
      .map(x => meta.brands.find(brand => brand.name === x)?.id)

    if (!brands.length) brands = meta.brands.map(x => x.id)
    // console.table(newFilters.selectedBrands)

    const allCategories = Object.keys(meta.category.categoryJson)
    let categories = Object
      .entries(newFilters.selectedCategories)
      .filter(x => x[1])
      .map(x => x[0])
    if (!categories.length) categories = allCategories
    // console.table(newFilters.selectedCategories)

    const subcategories = Object
      .values(newFilters.selectedSubcategories)
      .map(subcat => Object
        .entries(subcat)
        .filter(_x => _x[1])[0][0])
      // При выборе категории в подкатегориях, кидаем полный массив
      // Выборанная категория отсеет неподходящие варианты
      .reduce<string[]>((arr, subcat) => {
        const _subcat = categories.includes(subcat)
          ? Object.keys(newFilters.selectedSubcategories[subcat])
          : [subcat];

        return [...arr, ..._subcat]
      }, [])
      // Избавляемся от всех категорий в подкатегориях
      .filter(x => !allCategories.includes(x))
    // console.groupCollapsed("%cПодкатегории",
    //   "color:font-family:system-ui;font-size:1.5rem;font-weight:bold")
    // Object
    //   .values(newFilters.selectedSubcategories)
    //   .forEach(x => console.table(x))
    // console.groupEnd()

    let sex = Object
      .entries(newFilters.sexFilter)
      .filter(x => x[1])
      .map(x => x[0])
    if (!sex.length) sex = Object.keys(newFilters.sexFilter)

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
        subcategories,
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

  return (<><main className="w-screen min-h-screen grid grid-cols-[9vw_1fr_1fr_1fr_1fr_9vw] auto-rows-min pt-[12.5vh] gap-x-[29px] gap-y-[23px] max-2xl:grid-cols-[4vw_1fr_1fr_1fr_4vw]">

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
    <div className="col-start-2 col-span-1 h-fit p-[1rem_1.5rem_1.5rem_1.5rem] border-2 rounded-[15px] border-[#909090]">
      <FiltersUI
        min={firstPage.min?.price ?? 0}
        max={firstPage.max?.price ?? 1000000}
        meta={meta}
        filters={filters}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

    {/* Catalog */}
    <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px] mb-[10vh] max-2xl:col-span-2 max-2xl:grid-cols-[1fr_1fr]">
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

  </main >

  </>)
}

export default CatalogClient