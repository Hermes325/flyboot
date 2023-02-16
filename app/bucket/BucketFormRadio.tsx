import React from 'react'

type Props = {
  id: string,
  checked: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  children: string | JSX.Element | JSX.Element[]
}

const BucketFormRadio = ({ id, checked, onChange, children }: Props) => {
  return (
    <div className='mt-[14px] flex items-center'>
      <input
        className="appearance-none h-[20px] w-[20px] m-0 mr-[14px] bg-[#F5F5F533] rounded-full align-top cursor-pointer
                  checked:bg-transparent checked:before:color-white checked:bg-[#29D9CE] 
                  focus:outline-none transition duration-200"
        type="radio"
        onChange={onChange}
        checked={checked}
        id={id} />
      <label
        className="cursor-pointer inline-block font-lato text-[20px] leading-[25px] font-extralight tracking-[0.01em]"
        htmlFor={id}>
        {children}
      </label>
    </div>
  )
}

export default BucketFormRadio