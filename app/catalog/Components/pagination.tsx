import React from 'react'
import { PAGE_SIZE } from '@/lib/datocms';
import { Filters, SetFiltersWrapper } from "../page_client"
import classNames from 'classnames';

type Props = {
  page: number;
  amount: number;
  setFiltersWrapper: SetFiltersWrapper;
}

const Pagination = ({ setFiltersWrapper, amount, page }: Props) => {

  const currentPage: number = page + 1
  const lastPage: number = Math.ceil(amount / PAGE_SIZE)

  //#region Queries
  function  changePage(value: number ) {
    return (filter: Filters): Filters => ({ ...filter, page: value  })
  }
  //#endregion

  //#region UI templates
  const pageBtnClasses = "font-inter text-[24px] text-[#B3B3B3] leading-[27px] mx-[0.5rem] hover:underline ";

  const pageBtn = (page: number) =>
    <button
      key={`page-${page}`}
      disabled={page === currentPage}
      onClick={() => setFiltersWrapper(changePage(page - 1), true)}
      className={classNames(pageBtnClasses, {
        " text-[black] ": page === currentPage
      })}>
      {page}
    </button>

  const pageEllipsis = () =>
    <span className={pageBtnClasses + " hover:no-underline "}>...</span>
  //#endregion

  //*==================================================================
  if (lastPage <= 9)
    return <>
      {new Array(lastPage).fill(0).map((_, i) => pageBtn(i + 1))}
    </>

  return (<>
    {/* Первая */}
    {currentPage >= 3 && pageBtn(1)}
    {currentPage > 5 && pageEllipsis()}

    {currentPage === 5 && pageBtn(currentPage - 3)}
    {currentPage - 2 > 1 && pageBtn(currentPage - 2)}
    {currentPage - 1 >= 1 && pageBtn(currentPage - 1)}
    {pageBtn(currentPage)}
    {currentPage + 1 <= lastPage && pageBtn(currentPage + 1)}
    {currentPage + 2 <= lastPage && pageBtn(currentPage + 2)}
    {lastPage - currentPage === 4 && lastPage && pageBtn(currentPage + 3)}

    {/* Последняя */}
    {currentPage + 3 < lastPage - 1 && pageEllipsis()}
    {currentPage + 2 < lastPage && pageBtn(lastPage)}
  </>)
}

export default Pagination