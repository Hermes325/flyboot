"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Catalog, CatalogBrandsAndCategories, PAGE_SIZE, SortType } from '@/lib/datocms'
import ItemCard from '@/lib/components/item_card'
import Pagination from './Components/pagination'
import FiltersUI from './Components/filters'
import Sorting from './Components/sorting'

//#region Filters
export type Filters = {
  page: number;
  priceSort: SortType;
  priceFilter: { min: number; max: number; };
  sexFilter: { male: boolean; female: boolean; unisex: boolean };
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
//#endregion

type Props = {
  firstPage: Catalog,
  meta: CatalogBrandsAndCategories,
  initialCategory?: string
}

const CatalogClient = ({ firstPage, meta, initialCategory }: Props) => {
  console.log("CatalogClient reload");
  const saved: { content: Catalog, filters: Filters } = JSON.parse(sessionStorage.getItem("catalog") ?? "null")

  const [content, setContent] = useState(saved?.content ?? firstPage)

  //#region Filters
  const [filters, setFilters] = useState<Filters>(saved?.filters ?? {
    page: 0,
    priceSort: SortType.default,
    priceFilter: {
      min: firstPage.min?.price,
      max: firstPage.max?.price
    },
    sexFilter: {
      male: false,
      female: false,
      unisex: false
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
  const [isFiltersShown, setIsFiltersShown] = useState(false);
  const filtersMobile = useRef<HTMLDivElement>(null)
  const hiddenFiltersCloseTrigger = useRef<HTMLDivElement>(null)
  function changeFiltersVisibility(newState?: boolean) {
    if (newState != null) {
      setIsFiltersShown(newState)
    } else {
      setIsFiltersShown(!isFiltersShown);
    }
  }
  function showFilters() {
    if (isFiltersShown) {
      hiddenFiltersCloseTrigger.current?.classList.add(
        'max-[900px]:block'
      )
      hiddenFiltersCloseTrigger.current?.classList.remove(
        'max-[900px]:hidden'
      )
      filtersMobile.current?.classList.add(
        'max-[900px]:opacity-90',
        'max-[900px]:pointer-events-all')
      filtersMobile.current?.classList.remove(
        'max-[900px]:opacity-0',
        'max-[900px]:pointer-events-none')
    } else {
      hiddenFiltersCloseTrigger.current?.classList.add(
        'max-[900px]:hidden'
      )
      hiddenFiltersCloseTrigger.current?.classList.remove(
        'max-[900px]:block'
      )
      filtersMobile.current?.classList.add(
        'max-[900px]:opacity-0',
        'max-[900px]:pointer-events-none')
      filtersMobile.current?.classList.remove(
        'max-[900px]:opacity-90',
        'max-[900px]:pointer-events-all')
    }
  }

  useEffect(() => { showFilters() })
  //#endregion

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
    return await query.json()
  }

  //* Обновляет состояние страницы
  async function setFiltersWrapper(setNewValue: (filter: Filters) => Filters) {
    const newFilters = setNewValue(filters)
    setFilters(newFilters)
    const newContent = await fetchData(newFilters)
    setContent(newContent)
    sessionStorage.setItem("catalog", JSON.stringify({
      filters: newFilters,
      content: newContent
    }))
    window.scrollTo(0, 0)
  }

  //#endregion

  return (<main className="w-screen min-h-screen grid grid-cols-[9vw_1fr_1fr_1fr_1fr_9vw] auto-rows-min pt-[12.5vh] gap-x-[29px] gap-y-[23px] 
    max-2xl:grid-cols-[4vw_minmax(0,1fr)_1fr_1fr_1fr_4vw] 
    max-xl:grid-cols-[0_minmax(0,1fr)_1fr_1fr_0] 
    max-[900px]:relative">

    {/* Title */}
    <div className='col-start-2 col-span-2'>
      <h1 className='font-montserrat text-[80px] font-bold text-[#F5F5F5] max-[550px]:text-[60px]'>Каталог</h1>
    </div>

    {/* Sorting */}
    <div className='col-start-5 col-span-1 flex items-end max-xl:col-start-4
      max-[900px]:col-start-3
      max-[900px]:col-end-5
      max-[900px]:row-start-2
      max-[900px]:row-end-2
    '>
      <Sorting
        filters={filters}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

    {/* Filters */}
    <div className='
      min-[900px]:hidden 
      max-[900px]:flex
      col-start-2
      border-[1px]
      border-white
      text-center
      flex-col
      justify-center
      font-inter text-white text-[16px]
    '
     onClick={() => changeFiltersVisibility()}>
      <span className='pointer-events-none'>Фильтры</span>
    </div>
    <div className="sticky top-[120px] col-start-2 col-span-1 h-fit p-[1rem_1.5rem_1.5rem_1.5rem] border-2 rounded-[15px] border-[#909090]
      max-[900px]:hidden">
      <FiltersUI
        min={firstPage.min?.price ?? 0}
        max={firstPage.max?.price ?? 1000000}
        meta={meta}
        filters={filters}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

   {/* Catalog */}
    <div className={`
        fixed
        top-[0px]
        left-[0px]
        w-[100vw]
        h-[100vh]
        z-[9]
        min-[900px]:hidden
        max-[900px]:hidden
        opacity-0
      `}
      onClick={() => changeFiltersVisibility(false)}
      ref={hiddenFiltersCloseTrigger}></div>
    <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px] mb-[10vh] max-xl:col-span-2 max-xl:grid-cols-[1fr_1fr]
    max-[900px]:col-start-2 max-[900px]:col-end-5 max-[900px]:relative" style={{ alignItems: "start" }}>
      <div className="
          p-[1rem_1.5rem_1.5rem_1.5rem]
          border-2
          rounded-[15px]
          border-[#909090]

          min-[900px]:hidden
          max-[900px]:col-start-1
          max-[900px]:col-end-3
          max-[900px]:absolute
          max-[900px]:top-[0px]
          max-[900px]:left-[0px]
          max-[900px]:z-[10]
          max-[900px]:bg-black
          max-[900px]:transition-all
          max-[900px]:duration-200
        "
        ref={filtersMobile}>
        <FiltersUI
          min={firstPage.min?.price ?? 0}
          max={firstPage.max?.price ?? 1000000}
          meta={meta}
          filters={filters}
          setFiltersWrapper={setFiltersWrapper} />
      </div>

      {/* Items */}
      {content.items.map(item =>
        <ItemCard
          key={item.poizonArticul}
          imageClassName='aspect-square
            h-[320px]
            max-[750px]:h-[220px]
            max-[550px]:h-[150px]
          '
          className="
            min-h-[300px]
            max-[750px]:min-h-[200px]
            max-[550px]:min-h-[130px]
          "
          item={item} />)}

      {content.items.length === 0 &&
        <div className='col-span-3 flex items-center justify-center h-[50vh]'>
          <h2 className='font-inter font-light leading-[26px] text-[24px] mb-[13px]'>
            Таких товаров нет... Потыкайте фильтры
          </h2>
        </div>}

      {/* Pagination */}
      {content.all.count > PAGE_SIZE &&
        <div className='col-span-3 max-xl:col-span-2 mt-[3rem] flex justify-center items-center'>
          <Pagination
            page={filters.page}
            amount={content.all.count}
            setFiltersWrapper={setFiltersWrapper} />
        </div>}
    </div>

  </main>)
}

export default CatalogClient