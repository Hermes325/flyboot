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

  return (<div className="
      max-h-[auto]
      min-[1500px]:max-w-[34vw]
      min-[1024px]:max-w-[45vw]
      max-[1024px]:!max-h-[auto]
      max-[1024px]:!max-w-[60vw]
      max-[1024px]:flex
      max-[1024px]:flex-col
      max-[750px]:!max-h-[auto]
      max-[750px]:!max-w-[85vw]
      max-[600px]:!max-w-[95vw]
    ">
    <Image
      data={images.find(x => x.index === 0)?.image.responsiveImage}
      className="rounded-[15px]"
      style={{ maxWidth: "none" }}
      pictureClassName=" aspect-[646/532]
        bg-white
        object-contain
        object-center
        h-[auto]
        w-[auto]
        max-h-[auto]
        max-w-[100%]
        max-[1024px]:h-[auto]
        max-[1024px]:w-[auto]
        max-[1024px]:max-h-[45vw]
        max-[1024px]:max-w-[100%]
        max-[750px]:max-h-[100vw]
      " />

    {/* more photos */}
    <div className="flex flex-row gap-[24px]
      mt-[24px]
      max-[1024px]:mt-[12px]
      max-[1024px]:justify-between
      max-[1024px]:gap-[12px]
    ">
      {images
        .sort((a, b) => a.index - b.index)
        .slice(1)
        .map(({ image, index }) =>
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
            {/*bg-[#F6F6F6]*/}
            <Image
              lazyLoad={true}
              data={image.responsiveImage}
              usePlaceholder={false}
              pictureClassName="object-cover rounded-[15px]
                h-[auto]
                w-[auto]
                !max-h-[85%]
                max-w-[100%]
              "
              className="transition-[filter] brightness-75 hover:brightness-100"
            />
            {/*max-[1024px]:!h-[calc(40vw_/_${mapArray.length})]*/}
            {/*max-[1024px]:!w-[calc(40vw_/_${mapArray.length})]*/}
            {/*max-[750px]:!w-[calc(100vw_/_${mapArray.length})]*/}
            {/*max-[750px]:!w-[calc(100vw_/_${mapArray.length})]*/}
          </div>)}
    </div>
  </div>)
}

export default PictureBlock