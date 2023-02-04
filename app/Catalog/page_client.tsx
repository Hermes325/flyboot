"use client"
import React, { useState } from 'react'
import { Catalog, CatalogBrandsAndCategories, SortType } from '@/lib/datocms'
import ItemCard from '@/lib/components/item_card'


type Props = {
  firstPage: Catalog,
  meta: CatalogBrandsAndCategories
}

const CatalogClient = ({ firstPage, meta }: Props) => {

  // const [content, setContent] = useState({ ...firstPage, items: [...firstPage.items, ...firstPage.items, ...firstPage.items] })
  const [content, setContent] = useState(firstPage)
  const [filters, setFilters] = useState({
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
  const currentPage = filters.page + 1
  const lastPage = Math.ceil(content.all.count / 15)

  //#region Queries

  //* Кидает запрос за товарами при изменении фильтров, сортировки или пагинации
  async function fetchData(newFilters: typeof filters): Promise<Catalog> {

    const brands = Object
      .entries(newFilters.selectedBrands)
      .filter(x => x[1])
      .map(x => x[0])

    const categories = Object
      .entries(newFilters.selectedCategories)
      .filter(x => x[1])
      .map(x => x[0])

    console.log("fetchData", brands, categories)

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
        minPrice: newFilters.priceFilter.min,
        maxPrice: newFilters.priceFilter.max,
      })
    })
    const newContent: Catalog = await query.json()
    return newContent
  }

  //* Обновляет состояние страницы
  async function setFiltersWrapper(setNewValue: (filter: typeof filters) => typeof filters) {
    const newFilters = setNewValue(filters)
    setFilters(newFilters)
    const newContent = await fetchData(newFilters)
    setContent(newContent)
  }

  function changePage(value: number) {
    return (filter: typeof filters): typeof filters => ({ ...filter, page: value })
  }

  function changeSort(value: number) {
    const sortValue = SortType[SortType[value] as keyof typeof SortType]

    return (filter: typeof filters): typeof filters => ({ ...filter, page: 0, priceSort: sortValue })
  }

  function changeCategory(category: string, value: boolean) {
    console.log("changeCategory", value);

    return (filter: typeof filters): typeof filters =>
    ({
      ...filter,
      page: 0,
      selectedCategories: { ...filter.selectedCategories, [category]: value }
    })
  }

  function changeSubcategory(category: string, selected: string, all: string[]) {
    let selectedSubcategories = selected === category ? all : [selected];

    console.log("changeSubcategory\n", selectedSubcategories);
    console.log("changeSubcategory\n", category, selected, all);

    return (filter: typeof filters): typeof filters =>
      ({ ...filter, page: 0, selectedSubcategories })
  }

  function changeSex(sex: string, value: boolean) {
    // console.log("changeSex", sex, value);
    return (filter: typeof filters): typeof filters =>
      ({ ...filter, sexFilter: { ...filter.sexFilter, [sex]: value } })
  }

  function changeBrands(brand: string, value: boolean) {
    // console.log("changeBrands", brand, value);
    return (filter: typeof filters): typeof filters =>
      ({ ...filter, selectedBrands: { ...filter.selectedBrands, [brand]: value } })
  }

  //#endregion

  //#region UI templates
  const h1 = (text: string) =>
    <h1 className='font-inter font-medium leading-none text-[36px] mb-[26px]'>{text}</h1>

  const h2 = (text: string) =>
    <h2 className='font-inter font-light leading-[26px] text-[24px] mb-[13px] font-[300]'>{text}</h2>

  const formCheck = (text: string, prop: string, checked: boolean, onChange: (prop: string, checked: boolean) => (filter: typeof filters) => typeof filters) =>
    <div className='mb-1.5' key={prop}>
      <input
        className="appearance-none h-[25px] w-[25px] m-0 mr-[29px] border border-gray-300 rounded-sm align-top cursor-pointer
                  checked:bg-[#29D9CE] checked:border-[#29D9CE] focus:outline-none transition duration-200"
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
    <div className='mb-1.5 flex justify-between gap-[29px]' key={category}>
      {/* Категория */}
      <input
        className="appearance-none h-[25px] w-[25px] m-0 border border-gray-300 rounded-sm align-top cursor-pointer
                  checked:bg-[#29D9CE] checked:border-[#29D9CE] focus:outline-none transition duration-200"
        type="checkbox"
        checked={filters.selectedCategories[category as keyof typeof filters.selectedCategories]}
        onChange={(x) => setFiltersWrapper(changeCategory(category, x.target.checked))}
        id={category} />

      {/* Подкатегория */}
      <select
        id="price"
        value={filters.priceSort}
        onChange={(x) => setFiltersWrapper(changeSubcategory(category, x.target.value, subcategories.map(x => x[0])))}
        className="overflow-clip inline-block bg-[#0E0E0E] font-inter font-extralight text-white text-[14px] border border-gray-300
                  focus:ring-blue-500 focus:border-blue-500 h-[25px] w-[calc(100%-54px)]"
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

  const pageBtnClasses = "font-inter text-[24px] leading-[27px] mx-[0.5rem] hover:underline";

  const pageBtn = (page: number) =>
    <button onClick={() => setFiltersWrapper(changePage(page - 1))} className={pageBtnClasses}>{page}</button>

  const pageEllipsis = () =>
    <span className={pageBtnClasses + " hover:no-underline"}>...</span>

  //#endregion
  //*=====================================================================================================
  return (<main className="w-screen min-h-screen grid grid-cols-6 auto-rows-min pt-[12.5vh] gap-y-[23px]">

    {/* Title */}
    <div className='col-start-2 col-span-2'>
      <h1 className='font-montserrat text-[80px] font-bold text-[#F5F5F5]'>Каталог</h1>
    </div>

    {/* Sorting */}
    <div className='col-start-5 col-span-1 flex items-end'>
      <select
        id="price"
        value={filters.priceSort}
        prefix="сортировка"
        onChange={(x) => setFiltersWrapper(changeSort(Number(x.target.value)))}
        className="bg-[#0E0E0E] font-inter text-white text-[16px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option className='text-[#9A9A9A] text-[16px]' value={SortType.default}>Сортировка: по умолчанию</option>
        <option className='text-[#9A9A9A] text-[16px]' value={SortType.price_ASC}>Сортировка: по возрастанию цены</option>
        <option className='text-[#9A9A9A] text-[16px]' value={SortType.price_DESC}>Сортировка: по убыванию цены</option>
      </select>
    </div>

    {/* Filters */}
    <div className="col-start-2 col-span-1 
      h-fit px-[2.5rem] pt-[2rem] mr-[3rem]
      border-2 rounded-[1.6rem] border-[#909090]">
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
        {meta.brands.map(x =>
          formCheck(
            x.name,
            x.name,
            filters.selectedBrands[x.name as keyof typeof filters.selectedBrands],
            changeBrands
          ))}
      </div>

      {/* Sex filter */}
      <div className="flex flex-col mb-[18px]">
        {h2("Пол")}
        {formCheck("Мужской", "male", filters.sexFilter.male, changeSex)}
        {formCheck("Женский", "female", filters.sexFilter.female, changeSex)}
      </div>

      {/* Price Filter */}
      <div className="flex flex-col">
        {h2("Цена")}
        <input defaultValue={filters.priceFilter.min} />
        <input defaultValue={filters.priceFilter.max} />
        {/*//TODO: сделать Input Range with two sliders */}
      </div>
    </div>

    {/* Catalog */}
    <div className="col-span-3 row-auto	grid grid-cols-3 gap-[10px] mb-[10vh]">
      {/* Items */}
      {content.items.map(item =>
        <ItemCard key={item.poizonId} item={item} />)}

      {/* Pagination */}
      <div className='col-span-3 flex justify-center items-center'>
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