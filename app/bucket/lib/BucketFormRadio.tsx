import React from 'react'
import classNames from 'classnames'

type Props = {
  id: string,
  checked: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  children: string | JSX.Element | JSX.Element[]
  className?: string,
  showInput?: boolean
}

const BucketFormRadio = ({ id, checked, onChange, children, className = '', showInput = true }: Props) => {
  return (<div className={classNames("mt-[1.25rem] mb-[20px] px-[12px] flex justify-between items-start rounded-[5px] w-[20vw] max-[1100px]:!w-full bg-black", className)}>
    <label
      className={classNames(`cursor-pointer inline-block font-noto 
      text-[20px] leading-[50px] max-[1500px]:text-[15px]
      font-extralight overflow-hidden
      text-white`, {
        "w-full": !showInput
      })}
      htmlFor={id}>
      {children}
    </label>
    {showInput &&
      <input
        className="appearance-none h-[20px] w-[20px] my-auto bg-[#D9D9D9] rounded-[3px] align-top cursor-pointer
                  shadow-[0_0_0_3px_#D9D9D9]
                  checked:bg-black
                  transition duration-200"
        type="checkbox"
        onChange={onChange}
        checked={checked}
        id={id} />}

  </div >)
}

export default BucketFormRadio