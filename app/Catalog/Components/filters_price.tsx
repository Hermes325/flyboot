"use client"
import React, { useState } from 'react'
import { SetFiltersWrapper } from '../page_client';
import Filters from './filters';
import styles from "./filters_price.module.css"

type Props = {
  min: number;
  max: number;
  filters: Filters;
  setFiltersWrapper: SetFiltersWrapper;
}

const FiltersPrice = ({ min, max, filters, setFiltersWrapper }: Props) => {
  // console.log("FiltersPrice\n", min, max, filters.priceFilter);
  const [localFilter, setLocalFilter] = useState<typeof filters.priceFilter>(filters.priceFilter)

  //#region Queries
  function changePrice() {
    const priceFilter = { ...localFilter }

    if (localFilter.max === filters.priceFilter.max
      && localFilter.min === filters.priceFilter.min)
      return null;

    // swap min-max
    priceFilter["min"] = Math.min(...Object.values(priceFilter))
    priceFilter["max"] = Math.max(...Object.values(priceFilter))
    if (priceFilter["max"] === priceFilter["min"])
      priceFilter["min"] = 0

    return (filter: Filters): Filters => ({ ...filter, priceFilter })
  }
  //#endregion

  //#region UI
  function onBlur() {
    const newFilters = changePrice()
    if (!newFilters) return;
    setFiltersWrapper(newFilters)
  }
  //#endregion


  return (
    <>
      <div className='flex flex-row justify-between'>
        <input
          type="number"
          inputMode="numeric"
          className={styles.valueInput + ' text-[#979797] text-xl font-inter font-light text-center border-[#FFFFFF] border-2 bg-transparent w-[45%] tracking-[0.01em] after:content-none'}
          value={localFilter.min}
          onChange={e => setLocalFilter(x => ({ ...x, min: +e.target.value }))}
          onBlur={onBlur} />
        <input
          type="number"
          inputMode="numeric"
          className={styles.valueInput + ' text-[#979797] text-xl font-inter font-light text-center border-[#FFFFFF] border-2 bg-transparent w-[45%] tracking-[0.01em] after:content-none'}
          value={localFilter.max}
          onChange={e => setLocalFilter(x => ({ ...x, max: +e.target.value }))}
          onBlur={onBlur} />
      </div>

      <div className={styles.rangeSlider}>
        <input type="range" step="100" min={min === max ? 0 : min} max={max}
          value={localFilter.min}
          onChange={e => setLocalFilter(x => ({ ...x, min: +e.target.value }))}
          onBlur={onBlur} />

        <input type="range" step="100" min={min === max ? 0 : min} max={max}
          value={localFilter.max}
          onChange={e => setLocalFilter(x => ({ ...x, max: +e.target.value }))}
          onBlur={onBlur} />
      </div>
    </>
  )
}

export default FiltersPrice