"use client"
import { Item } from '@/lib/datocms'
import React, { useState } from 'react'
import { Image } from "react-datocms/image";


type Props = {
  item: Item
}

const PictureBlock = ({ item }: Props) => {

  // const [current, setCurrent] = useState(0)
  const [images, setImages] = useState(item.images.map((image, index) => ({ image, index })))

  return (<>
    <Image
      data={images[0].image.responsiveImage}
      className="rounded-[15px]"
      style={{ maxWidth: "none" }}
      pictureClassName="object-cover aspect-[646/532] h-[532px] rounded-[15px]" />

    {/* more photos */}
    <div className="flex flex-row justify-start gap-[24px]">
      {images
        .sort((a, b) => a.index - b.index)
        .slice(1)
        .map(({ image, index }) =>
          <div
            key={`small-${index}`}
            className="rounded-[15px] cursor-pointer"
            onClick={_ => {
              // Меняем номер картинки на current
              setImages(x => x.map(_x => {
                switch (_x.index) {
                  case 0: return { ..._x, index }
                  case index: return { ..._x, index: 0 }
                  default: return _x
                }
              }))
              // Устанавливаем новый current
              // setCurrent(index)
            }}>
            <Image
              lazyLoad={true}
              data={image.responsiveImage}
              objectFit={"cover"}
              usePlaceholder={false}
              pictureClassName="object-cover aspect-[143/93] rounded-[15px] h-[93px]"
              className={"transition-[filter] brightness-75 hover:brightness-100"}
            />
          </div>)}
    </div>
  </>)
}

export default PictureBlock