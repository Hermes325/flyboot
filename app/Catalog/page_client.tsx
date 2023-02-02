"use client"
import ItemCard from '@/lib/components/item_card'
import { Catalog, CatalogBrandsAndCategories } from '@/lib/datocms'
import React, { useState } from 'react'


type Props = {
  firstPage: Catalog,
  meta: CatalogBrandsAndCategories
}

const CatalogClient = ({ firstPage, meta }: Props) => {

  const [content, setContent] = useState({
    ...firstPage, items: [
      ...firstPage.items,
      ...firstPage.items,
      ...firstPage.items,
      ...firstPage.items,
      ...firstPage.items,
      ...firstPage.items]
  });
  const [filters, setFilters] = useState([])
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(0)

  const h1 = (text: string) =>
    <h1 className='font-inter font-medium leading-none text-[36px] mb-[26px]'>{text}</h1>

  const h2 = (text: string) =>
    <h2 className='font-inter font-light leading-none text-[24px] mb-[24px]'>{text}</h2>

  const formCheck = (text: string, id: string) =>
    <div className="form-check">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        id={id} />
      <label
        className="form-check-label inline-block font-inter text-xl"
        htmlFor={id}>
        {text}
      </label>
    </div>


  return (<main className="w-screen min-h-screen grid grid-cols-6 auto-rows-min pt-[20vh] gap-y-[23px]">

    {/* Sorting */}
    <div className='col-start-5 col-span-1'>
      <label
        htmlFor="Sort by price"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Выберите сортировку по цене
      </label>
      <select
        id="Price selector"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="Ascending prices" selected>По возрастанию цены</option>
        <option value="Descending prices">По убыванию цены</option>
      </select>
    </div>

    {/* Filters */}
    <div className="col-start-2 col-span-1 
      h-fit p-[1.7rem] mr-[2rem]
      border-2 rounded-[1.6rem] border-[#909090]">
      {h1("Фильтры")}

      {/* Category Filter */}
      <div className="flex flex-col mb-[18px]">
        {h2("Категория")}
        {formCheck("Обувь", "flexCheckDefault")}
        {formCheck("Одежда", "flexCheckChecked")}
        {formCheck("Аксессуары", "flexCheckChecked")}
      </div>

      {/* Brand Filter */}
      <div className="flex flex-col mb-[18px]">
        {h2("Бренды")}
        {formCheck("Rick Owens", "flexCheckDefault")}
        {formCheck("Yeezy", "flexCheckChecked")}
        {formCheck("Louis Vuitton", "flexCheckChecked")}
      </div>

      {/* Sex filter */}
      <div className="flex flex-col mb-[18px]">
        {h2("Пол")}
        {formCheck("Мужской", "flexCheckDefault")}
        {formCheck("Женский", "flexCheckChecked")}
      </div>

      {/* Price Filter */}
      <div className="flex flex-col">
        {h2("Цена")}
        {/*//TODO: сделать Input Range with two sliders */}
      </div>
    </div>

    {/* Catalog */}
    <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px]">
      {/* Items */}
      {content.items.map(item =>
        <ItemCard key={item.poizonId} item={item} />)}

      {/* Pagination */}
      <div>
        {/*//TODO:выводить текущую + 2 страницы в каждую сторону и конец */}
        {page + 1}
      </div>
    </div>


  </main >)
}

export default CatalogClient