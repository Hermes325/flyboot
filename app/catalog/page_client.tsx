"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Catalog, CatalogBrandsAndCategories, PAGE_SIZE, SortType } from '@/lib/datocms'
import ItemCard from '@/lib/components/item_card'
import Pagination from './Components/pagination'
import FiltersUI from './Components/filters'
import Sorting from './Components/sorting'
import classNames from 'classnames'
import Image from 'next/image'
import QR from "@/public/qrcode_t.me.jpg"
import Link from 'next/link'


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
  (setNewValue: (filter: Filters) => Filters, scrollTop?: boolean) => Promise<void>
//#endregion

type Props = {
  firstPage: Catalog,
  meta: CatalogBrandsAndCategories,
  initialCategory?: string
}

const CatalogClient = ({ firstPage, meta, initialCategory }: Props) => {
  // console.log("CatalogClient reload");
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
  function changeFiltersVisibility(newState?: boolean) {
    setIsFiltersShown(prev => newState ?? !prev)
  }
  const filtersMobile = useRef<HTMLDivElement>(null)
  function showFilters() {
    if (isFiltersShown) {
      const filtersY = filtersMobile.current?.getBoundingClientRect().y!
      const necessaryShift = document.querySelector('#layout-header')!.getBoundingClientRect().height
      const scrollTarget = filtersY - necessaryShift + window.scrollY
      window.scrollTo(0, scrollTarget)
    }
  }

  useEffect(() => showFilters(), [isFiltersShown])
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
  async function setFiltersWrapper(setNewValue: (filter: Filters) => Filters, scrollTop: boolean = false) {
    const newFilters = setNewValue(filters)
    setFilters(newFilters)
    const newContent = await fetchData(newFilters)
    setContent(newContent)
    sessionStorage.setItem("catalog", JSON.stringify({
      filters: newFilters,
      content: newContent
    }))
    if (scrollTop) window.scrollTo(0, 0)
  }
  //#endregion

  //#region UI
  const MVP_QR =
    <div className="bg-[#fff] h-fit p-[1rem_1.5rem_1.5rem_1.5rem] border-2 rounded-[15px] border-[#909090] my-[29px]">
      <h3 className='font-inter font-bold leading-[26px] text-[24px] mb-[13px] uppercase 
      max-[1515px]:!text-[22px] 
      max-[1015px]:!text-[20px] 
      max-[835px]:!text-[18px] 
      max-[835px]:!leading-[19px] 
      max-[775px]:!mt-[2vw] 
      max-[710px]:!text-[8px] 
      max-[660px]:!leading-[137%]
      max-[400px]:!leading-[14px]'>
        не нашли модель, которую искали?
      </h3>
      <p className='font-inter text-[20px] leading-[25px] font-extralight mt-2'>
        Наш ассортимент регулярно
        пополняется, напишите нам <Link href={"https://t.me/FlyBootsSupport"}>@FlyBootsSupport</Link>
      </p>

      <div className='flex justify-end mt-2'>

        <Image
          alt='менеджер QR в TG'
          src={QR}
          className="rounded-[15px] w-[10vw] max-[900px]:hidden  " />
      </div>
    </div>
  //#endregion

  return (<main className="w-screen min-h-screen grid grid-cols-[3vw_1fr_1fr_1fr_1fr_3vw] auto-rows-min pt-[8.5vh] gap-x-[29px] gap-y-[23px] 
    max-2xl:grid-cols-[4vw_minmax(0,1fr)_1fr_1fr_1fr_4vw] 
    max-xl:grid-cols-[0_minmax(0,1fr)_1fr_1fr_0] 
    max-[900px]:relative
    max-[400px]:gap-x-[15px]">

    {/*//* =========================  верх  ========================= */}
    <>
      {/* Title */}
      <div className='col-start-2 col-span-2'>
        <h1 className='
        w-[50vw]
        font-montserrat text-[80px] 
        leading-[1] 
        mt-[2rem] 
        font-bold
        text-[#000000] 
        min-[2560px]:!text-[6.5rem] 
        max-[1860px]:!text-[4.5rem]
        max-[1700px]:!text-[4rem]
        max-[1500px]:!text-[3.7rem] 
        max-[1330px]:!text-[3.3rem] 
        max-[1140px]:!text-[3rem] 
        max-[1100px]:!text-[2.7rem]
        max-[950px]:!text-[2.5rem]
        max-[850px]:!text-[2.3rem]
        max-[780px]:!text-[2.1rem]
        max-[700px]:!text-[1.9rem]
        max-[700px]:!leading-[1.9rem]
        max-[650px]:!text-[1.7rem]
        max-[600px]:!text-[2.6rem]
        max-[550px]:!text-[2.4rem]
        max-[525px]:!text-[2.2rem]
        max-[480px]:!text-[2rem]
        max-[420px]:!text-[1.8rem]
        max-[380px]:!text-[1.6rem]
        max-[335px]:!text-[1.4rem]
        '>
          Каталог <span className='uppercase'> flyboots</span>
        </h1>
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

      {/* кнопка для фильтров mobile */}
      <div className='
      min-[900px]:hidden 
      max-[900px]:flex
      col-start-2
      border-[1px]
      border-black
      rounded-[10px]
      text-center
      flex-col
      justify-center
      font-inter text-white text-[16px]
      
    '
        onClick={() => changeFiltersVisibility()}>
        <span className='pointer-events-none'>Фильтры</span>
      </div>
    </>

    {/*//* ========================= товары ========================= */}
    <>
      {/* фильтры desktop */}
      <div className='max-[900px]:hidden top-[120px] col-start-2 col-span-1'>
        <div className="bg-[#fff] h-fit p-[1rem_1.5rem_1.5rem_1.5rem] border-2 rounded-[15px] border-[#909090]">
          <FiltersUI
            min={firstPage.min?.price ?? 0}
            max={firstPage.max?.price ?? 1000000}
            meta={meta}
            filters={filters}
            setFiltersWrapper={setFiltersWrapper}
            closeMobileFilters={() => changeFiltersVisibility(false)} />
        </div>

        {/*//? MVP: СВЯЗЬ */}
        {MVP_QR}
      </div>

      {/* фильтры mobile задник (закрыть) */}
      <div
        onClick={() => changeFiltersVisibility(false)}
        className={classNames(`fixed top-0 left-0 w-screen h-screen z-[9]
        min-[900px]:hidden
        opacity-0
      `, {
          'max-[900px]:block': isFiltersShown,
          'max-[900px]:hidden': !isFiltersShown,
        })} />

      {/* каталог */}
      <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px] mb-[10vh] h-fit
                  max-xl:col-span-2 
                  max-xl:grid-cols-[1fr_1fr]
                  max-[900px]:col-start-2 
                  max-[900px]:col-end-5
                  max-[900px]:min-h-screen
                  max-[900px]:relative"
        style={{ alignItems: "start" }}>

        {/* фильтры mobile */}
        <div className={classNames(`
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
          
          max-[900px]:bg-[#fff] 
          max-[900px]:transition-all
          max-[900px]:duration-200`,
          {
            'max-[900px]:pointer-events-all': isFiltersShown,
            'max-[900px]:pointer-events-none max-[900px]:opacity-0': !isFiltersShown
          })}
          ref={filtersMobile}>
          <FiltersUI
            min={firstPage.min?.price ?? 0}
            max={firstPage.max?.price ?? 1000000}
            meta={meta}
            filters={filters}
            setFiltersWrapper={setFiltersWrapper}
            closeMobileFilters={() => changeFiltersVisibility(false)}
          />
        </div>

        {/* Карточки с товарами */}
        {content.items.map(item =>
          <ItemCard
            key={item.poizonArticul}
            imageClassName='aspect-square
            h-[320px]
            max-[750px]:h-[220px]
            max-[550px]:h-[150px]
            max-[400px]:h-[130px]
          '
            className="
            min-h-[300px]
            max-[750px]:min-h-[200px]
            max-[550px]:min-h-[130px]
            max-[400px]:min-h-[110px]
          "
            item={item} />)}

        {/* Товаров нет */}
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


      {/*//? MVP: СВЯЗЬ */}
      <div className="col-span-3 col-start-2 row-auto min-[900px]:hidden">
        {MVP_QR}
      </div>
    </>
  </main>)
}

export default CatalogClient