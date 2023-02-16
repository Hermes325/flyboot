import React from 'react'
import { SortType } from '@/lib/datocms';
import { Filters, SetFiltersWrapper } from '../page_client';

type Props = {
  filters: Filters;
  setFiltersWrapper: SetFiltersWrapper;
}

const Sorting = ({ filters, setFiltersWrapper }: Props) => {

  //#region Queries

  function changeSort(value: number) {
    const sortValue = SortType[SortType[value] as keyof typeof SortType]

    return (filter: Filters): Filters => ({ ...filter, page: 0, priceSort: sortValue })
  }

  //#endregion

  return (
    <select
      value={filters.priceSort}
      onChange={(x) => setFiltersWrapper(changeSort(Number(x.target.value)))}
      className="bg-[#0E0E0E] font-inter text-white text-[16px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option className='text-[#9A9A9A] text-[16px]' value={SortType.default}>Без сортировки</option>
      <option className='text-[#9A9A9A] text-[16px]' value={SortType.price_ASC}>По возрастанию цены</option>
      <option className='text-[#9A9A9A] text-[16px]' value={SortType.price_DESC}>По убыванию цены</option>
    </select>
  )
}

export default Sorting