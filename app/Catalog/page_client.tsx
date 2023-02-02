"use client"
import ItemCard from '@/lib/components/item_card'
import { Catalog, CatalogBrandsAndCategories, SortType } from '@/lib/datocms'
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
  const currentPage = page + 1
  const lastPage = Math.ceil(content.all.count / 15)
  // const lastPage = 28

  //#region Templates
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

  const pageBtnClasses = "font-inter text-[24px] leading-[27px] mx-[0.5rem] hover:underline";

  const pageBtn = (page: number) =>
    <button onClick={() => setPage(page - 1)} className={pageBtnClasses}>{page}</button>

  const pageEllipsis = () =>
    <span className={pageBtnClasses + " hover:no-underline"}>.....</span>

  const sortSpan = () =>
    <span className='text-white'>Сортировка: </span>

  //#endregion

  return (<main className="w-screen min-h-screen grid grid-cols-6 auto-rows-min pt-[20vh] gap-y-[23px]">

    {/* Sorting */}
    <div className='col-start-5 col-span-1'>
      <select
        id="Price selector"
        className="bg-[#0E0E0E] text-[16px] border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option className='text-[#9A9A9A] text-[16px]' value={SortType.default} selected>{sortSpan()}по умолчанию</option>
        <option className='text-[#9A9A9A] text-[16px]' value={SortType.price_ASC}>{sortSpan()}по возрастанию цены</option>
        <option className='text-[#9A9A9A] text-[16px]' value={SortType.price_DESC}>{sortSpan()}по убыванию цены</option>
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
    <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px] mb-[10vh]">
      {/* Items */}
      {content.items.map(item =>
        <ItemCard key={item.poizonId} item={item} />)}

      {/* Pagination */}
      <div className='col-span-3 flex justify-center'>
        {/* Первая */}
        {currentPage >= 3 && pageBtn(1)}
        {currentPage >= 4 && pageEllipsis()}

        {currentPage - 2 > 1 && pageBtn(currentPage - 2)}
        {currentPage - 1 >= 1 && pageBtn(currentPage - 1)}
        <button className={pageBtnClasses + " text-[#29D9CE]"}>{currentPage}</button>
        {currentPage + 1 <= lastPage && pageBtn(currentPage + 1)}
        {currentPage + 2 <= lastPage && pageBtn(currentPage + 2)}

        {/* Последняя */}
        {currentPage + 2 < lastPage - 1 && pageEllipsis()}
        {currentPage + 2 < lastPage && pageBtn(lastPage)}
      </div>
    </div>


  </main >)
}

export default CatalogClient