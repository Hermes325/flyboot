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
  // const minRef = useRef<HTMLInputElement>(null)
  // const maxRef = useRef<HTMLInputElement>(null)

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

    return (filter: Filters): Filters => ({ ...filter, priceFilter, page: 0 })
  }
  //#endregion

  //#region UI
  function onPointerUp() {
    const newFilters = changePrice()
    if (!newFilters) return;
    setFiltersWrapper(newFilters)
  }
  //#endregion

  return (<>

    <div className='flex flex-row justify-between'>
      <input
        step="100"
        type="number"
        inputMode="numeric"
        className={styles.valueInput + ' text-[#979797] text-xl font-inter font-light text-center border-[#FFFFFF] border-2 bg-transparent w-[45%] tracking-[0.01em] after:content-none'}
        value={Math.min(localFilter.min, localFilter.max)}
        onChange={e => setLocalFilter(x => ({ ...x, min: +e.target.value }))}
        onBlur={onPointerUp} />
      <input
        step="100"
        type="number"
        inputMode="numeric"
        className={styles.valueInput + ' text-[#979797] text-xl font-inter font-light text-center border-[#FFFFFF] border-2 bg-transparent w-[45%] tracking-[0.01em] after:content-none'}
        value={Math.max(localFilter.min, localFilter.max)}
        onChange={e => setLocalFilter(x => ({ ...x, max: +e.target.value }))}
        onBlur={onPointerUp} />
    </div>

    <div className={styles.rangeSlider}>
      <input type="range" step="100" min={min === max ? 0 : min} max={max}
        value={localFilter.min}
        onChange={e => setLocalFilter(x => ({ ...x, min: +e.target.value }))}
        onPointerUp={onPointerUp} />

      <input type="range" step="100" min={min === max ? 0 : min} max={max}
        value={localFilter.max}
        onChange={e => setLocalFilter(x => ({ ...x, max: +e.target.value }))}
        onPointerUp={onPointerUp} />
    </div>

  </>)
}

export default FiltersPrice