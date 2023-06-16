import React from 'react'
import classNames from 'classnames'

/**
 * стилизованная обёртка над input
 */
const OrderInput = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) =>
  <input
    {...props}
    className={classNames(`
    font-noto h-[68px] max-[600px]:h-[50px] w-full px-[24px] 
    text-[20px] leading-[25px] max-[1500px]:text-[15px] max-[1500px]:leading-[20px] 
    rounded-[5px] border border-solid border-[#AEAEAE]
    bg-transparent 
    invalid:border-red-500 text-black`,
      props.className)} />

export default OrderInput