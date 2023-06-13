import classNames from 'classnames'
import React from 'react'

type Props = {
  id: string,
  checked: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  children: string | JSX.Element | JSX.Element[]
  className?: string
}

const BucketFormRadio = ({ id, checked, onChange, children, className = '' }: Props) => {
  return (<div className={classNames("mt-[14px] flex items-start", className)}>
    <input
      className="appearance-none h-[20px] w-[20px] m-0 mr-[14px] bg-[#F5F5F533] rounded-full align-top cursor-pointer
      border-2 border-solid border-black
                  checked:bg-transparent checked:before:color-white checked:bg-[#000] 
                  focus:outline-none transition duration-200"
      type="radio"
      onChange={onChange}
      checked={checked}
      id={id} />
    <label
      className="cursor-pointer inline-block font-lato text-[20px] leading-[25px] font-extralight tracking-[0.01em] w-[20ch] overflow-hidden"
      htmlFor={id}>
      {children}
    </label>

  </div >)
}

export default BucketFormRadio