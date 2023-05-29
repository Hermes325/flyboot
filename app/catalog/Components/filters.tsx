"use client"
import React, { useState } from 'react'
import { Filters, SetFiltersWrapper } from '../page_client';
import { CatalogBrandsAndCategories } from '@/lib/datocms';
import FiltersPrice from './filters_price';
import styles from './filters.module.css'
import classNames from 'classnames';

type Props = {
  min?: number;
  max?: number;
  meta: CatalogBrandsAndCategories;
  filters: Filters;
  setFiltersWrapper: SetFiltersWrapper;
  closeMobileFilters: () => void;
}

const Filters = ({ min, max, meta, filters, setFiltersWrapper, closeMobileFilters }: Props) => {

  const [showMore, setShowMore] = useState(false)

  //#region Queries
  function changeCategory(category: string, value: boolean) {
    setShowMore(false)
    // console.log("changeCategory", value);
    return (filter: Filters): Filters =>
    ({
      ...filter,
      selectedCategories: { ...filter.selectedCategories, [category]: value },
      page: 0,
    })
  }

  function changeSubcategory(category: string, selected: string) {
    setShowMore(false)
    // Выбираем все подкатегории 
    const isAll = selected === category

    // Выбираем категорию при выборе подкатегории 
    const selectedCategories = { ...filters.selectedCategories, [category]: true }

    // Выбираем подкатегории
    const newCategory = Object
      .entries(filters.selectedSubcategories[category])
      .map(Object.entries)
      .map(x => x.map(_x => _x[1]))
      .map(subcat => {
        const value = isAll ? true : subcat[0] === selected
        return { [subcat[0]]: value }
      })
      .reduce((arr, subcat) => {
        const props = Object.entries(subcat)[0]
        return { ...arr, [props[0]]: props[1] }
      })

    const selectedSubcategories = {
      ...filters.selectedSubcategories,
      [category]: newCategory
    }

    // console.log("changeSubcategory\n", selectedSubcategories);
    return (filter: Filters): Filters =>
    ({
      ...filter, selectedCategories, selectedSubcategories, page: 0
    })
  }

  function changeSex(sex: string, value: boolean) {
    setShowMore(false)
    const sexFilter = { ...filters.sexFilter, [sex]: value }
    return (filter: Filters): Filters =>
      ({ ...filter, sexFilter, page: 0 })
  }

  function changeBrands(brand: string, value: boolean) {
    // console.log("changeBrands", brand, value);
    return (filter: Filters): Filters =>
      ({ ...filter, selectedBrands: { ...filter.selectedBrands, [brand]: value }, page: 0 })
  }
  //#endregion

  //#region UI templates
  const h1 = (text: string) =>
    <h1 className='font-inter font-medium leading-none text-[36px] mb-[26px] max-[900px]:hidden'>
      {text}
    </h1>

  const h2 = (text: string) =>
    <h2 className='font-inter font-light leading-[26px] text-[24px] mb-[13px]'>
      {text}
    </h2>

  const formCheck = (text: string, prop: string, checked: boolean, onChange: (prop: string, checked: boolean) => (filter: Filters) => Filters) =>
    <div className='mb-1.5' key={prop}>
      <input
        className="appearance-none h-[25px] w-[25px] m-0 mr-[29px] border border-black rounded-sm align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:before:content-[url(/check.svg)] 
                  focus:outline-none transition duration-200 pl-[4px]"
        type="checkbox"
        checked={checked}
        onChange={(x) => setFiltersWrapper(onChange(prop, x.target.checked))}
        id={text} />
      <label
        className="inline-block font-inter text-[20px] leading-[25px] font-extralight"
        htmlFor={text}>
        {text}
      </label>
    </div>

  const formCategorySelect = (category: string, subcategories: [string, string][]) =>
    <div className='mb-1.5 flex gap-[25px]' key={category}>
      {/* Категория */}
      <input
        className="appearance-none h-[25px] w-[25px] m-0 border border-black rounded-sm align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:before:content-[url(/check.svg)] 
                  focus:outline-none transition duration-200 pl-[4px]"
        type="checkbox"
        checked={filters.selectedCategories[category as keyof typeof filters.selectedCategories]}
        onChange={(x) => setFiltersWrapper(changeCategory(category, x.target.checked))}
        id={category} />

      {/* Подкатегория */}
      <select
        onChange={(x) => setFiltersWrapper(changeSubcategory(category, x.target.value))}
        className="overflow-clip inline-block bg-[#fff] font-inter font-extralight text-black text-[14px] border border-black
                  focus:ring-blue-500 focus:border-blue-500 h-[25px] w-[200px]"
      >
        {subcategories.map((subcategory) =>
          <option
            className='text-[#9A9A9A] text-[14px]'
            key={subcategory[0]}
            value={subcategory[0]}>
            {subcategory[1]}
          </option>)}
      </select>
    </div>

  //#endregion

  //*==================================================================
  return (<>
    {h1("Фильтры")}

    {/* Category Filter */}
    <div className="flex flex-col mb-[18px]">
      {h2("Категория")}
      {Object
        .entries(meta.category.categoryJson)
        .map(category => formCategorySelect(category[0], Object.entries(category[1])))}
    </div>

    {/* Brand Filter */}
    <div className="flex flex-col mb-[18px]">
      {h2("Бренд")}
      <div>
        {/* первые 6 брендов */}
        {meta.brands.slice(0, 6).map(x =>
          formCheck(
            x.name,
            x.name,
            filters.selectedBrands[x.name as keyof typeof filters.selectedBrands],
            changeBrands))}

        {meta.brands.length > 6 && !showMore &&
          <button
            className="inline-block font-inter text-[20px] leading-[25px] font-extralight text-left"
            onClick={() => setShowMore(true)}>
            показать ещё...
          </button>}

        {/* остальные бренды */}
        {showMore && meta.brands.slice(6).map(x =>
          formCheck(
            x.name,
            x.name,
            filters.selectedBrands[x.name as keyof typeof filters.selectedBrands],
            changeBrands))}
      </div>
    </div>

    {/* Sex filter */}
    <div className="flex flex-col mb-[18px]">
      {h2("Пол")}
      {formCheck("Мужской", "male", filters.sexFilter.male, changeSex)}
      {formCheck("Женский", "female", filters.sexFilter.female, changeSex)}
      {formCheck("Унисекс", "unisex", filters.sexFilter.unisex, changeSex)}
    </div>

    {/* Price Filter */}
    <div className="flex flex-col">
      {h2("Цена")}
      <FiltersPrice
        min={min ?? 0}
        max={max ?? 1000000}
        filters={filters}
        setFiltersWrapper={setFiltersWrapper} />
    </div>

    <button
      onClick={closeMobileFilters}
      className={classNames(
        styles.closeFilterBtn,
        "font-inter rounded-lg py-5 px-8 w-full",
        "min-[900px]:hidden")}
    >
      Применить
    </button>

  </>)
}

export default Filters