"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { Item } from '@/lib/datocms'

type Props = {
  item: Item
}

const ChooseColor: React.FC<Props> = ({ item }) => {

  const options = [item, ...item.relatedItems]
  const router = useRouter()

  function onchange(value: string) {
    router.push(`/item/${value}`)
  }

  if (options.length === 1)
    return <></>

  return (<div className='relative w-[50%]
    max-[430px]:w-[100%]
  '>
    <p className='absolute top-2 pl-2.5'>Цвет</p>
    <select
      defaultValue={item.slug}
      className="bg-[#0E0E0E] text-end font-inter text-[#9A9A9A] text-[16px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      onChange={x => onchange(x.target.value)}
    >
      {options.map(x =>
        <option
          hidden={x.id === item.id}
          key={x.slug}
          className='option text-[#9A9A9A] text-[16px]'
          value={x.slug}>
          {x.color}
        </option>)}
    </select>
  </div>)
}

export default ChooseColor