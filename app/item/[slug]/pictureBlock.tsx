"use client"
import { Item } from '@/lib/datocms'
import React, { useState } from 'react'
import { Image } from "react-datocms/image";


type Props = {
  item: Item
}

const PictureBlock = ({ item }: Props) => {

  const [current, setCurrent] = useState(0)

  return (<>
    <Image
      data={item.images[current].responsiveImage}
      className="rounded-[15px]"
      pictureClassName="object-cover aspect-[646/532] h-[532px] rounded-[15px]" />

    {/* more photos */}
    <div className="flex flex-row justify-start gap-[24px]">
      {item.images.map((image, i) => current === i ? <></> :
        <div
          key={`small-${i}`}
          onClick={_ => setCurrent(i)}
          className="rounded-[15px] cursor-pointer">
          <Image
            lazyLoad={true}
            data={image.responsiveImage}
            objectFit={"cover"}
            usePlaceholder={false}
            pictureClassName="object-cover aspect-[143/93] rounded-[15px] h-[93px]"
            className={current === i ? "" : "brightness-75"}
          />
        </div>)}
    </div>
  </>)
}

export default PictureBlock