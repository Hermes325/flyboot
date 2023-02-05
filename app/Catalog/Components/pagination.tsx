import React from 'react'
import { Filters, SetFiltersWrapper } from "../page_client"

type Props = {
  page: number;
  amount: number;
  setFiltersWrapper: SetFiltersWrapper;
}

const Pagination = ({ setFiltersWrapper, amount, page }: Props) => {

  const currentPage = page + 1
  const lastPage = Math.ceil(amount / 15)

  //#region Queries
  function changePage(value: number) {
    return (filter: Filters): Filters => ({ ...filter, page: value })
  }
  //#endregion

  //#region UI templates
  const pageBtnClasses = "font-inter text-[24px] leading-[27px] mx-[0.5rem] hover:underline";

  const pageBtn = (page: number) =>
    <button onClick={() => setFiltersWrapper(changePage(page - 1))} className={pageBtnClasses}>{page}</button>

  const pageEllipsis = () =>
    <span className={pageBtnClasses + " hover:no-underline"}>...</span>
  //#endregion

  //*==================================================================
  return (<div className='col-span-3 flex justify-center items-center'>
    {/* Первая */}
    {currentPage >= 3 && pageBtn(1)}
    {currentPage >= 4 && pageEllipsis()}

    {currentPage - 2 > 1 && pageBtn(currentPage - 2)}
    {currentPage - 1 >= 1 && pageBtn(currentPage - 1)}
    {lastPage > 1 && <button className={pageBtnClasses + " text-[#29D9CE]"}>{currentPage}</button>}
    {currentPage + 1 <= lastPage && pageBtn(currentPage + 1)}
    {currentPage + 2 <= lastPage && pageBtn(currentPage + 2)}

    {/* Последняя */}
    {currentPage + 2 < lastPage - 1 && pageEllipsis()}
    {currentPage + 2 < lastPage && pageBtn(lastPage)}
  </div>)
}

export default Pagination