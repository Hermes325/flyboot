import React from 'react'
import classNames from 'classnames'

/**
 * стилизованная обёртка над input
 */
const OrderInput = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) =>
  <input
    {...props}
    className={classNames(`px-[24px] text-[20px] font-noto h-[68px] max-[600px]:h-[50px] w-full
    rounded-[5px] border border-solid border-[#AEAEAE]
    bg-transparent max-[1300px]:rounded-[30px] 
    invalid:border-red-500 text-black`,
      props.className)} />

export default OrderInput