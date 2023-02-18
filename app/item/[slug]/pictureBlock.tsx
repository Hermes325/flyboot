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
      data={images.find(x => x.index === 0)?.image.responsiveImage}
      className="rounded-[15px]"
      style={{ maxWidth: "none" }}
      pictureClassName="object-cover aspect-[646/532] h-[532px]
        bg-[white]
        max-[1024px]:object-contain
        max-[1024px]:h-[auto]
        max-[1024px]:w-[auto]
        max-[1024px]:max-h-[100%]
        max-[1024px]:max-w-[100%]
      " />

    {/* more photos */}
    <div className="flex flex-row justify-start gap-[24px]
      max-[1024px]:justify-between
    ">
      {images
        .sort((a, b) => a.index - b.index)
        .slice(1)
        .map(({ image, index }, mapIndex, mapArray) =>
          <div
            key={`small-${index}`}
            className="rounded-[15px] cursor-pointer"
            onClick={_ => {
              setImages(oldImgs => {
                let imgs = [...oldImgs];
                // Меняем элементы и устанавливаем индексы
                [imgs[0], imgs[index]] = [imgs[index], imgs[0]];
                imgs[0].index = 0
                imgs[index].index = index
                return imgs
              })
            }}>
            <Image
              lazyLoad={true}
              data={image.responsiveImage}
              objectFit={"cover"}
              usePlaceholder={false}
              pictureClassName={`object-cover aspect-[143/93] rounded-[15px]
                h-[93px]
                bg-white
                max-[1024px]:!object-contain
                max-[1024px]:aspect-[646/532]
                max-[1024px]:!h-[calc(100vw_/_${mapArray.length}_-_24px_*_${mapArray.length - 1})]
                max-[1024px]:!w-[calc(100vw_/_${mapArray.length}_-_24px_*_${mapArray.length - 1})]
                max-[1024px]:!max-h-[100%]
                max-[1024px]:!max-w-[100%]
              `}
              className="transition-[filter] brightness-75 hover:brightness-100"
            />
          </div>)}
    </div>
  </>)
}

export default PictureBlock