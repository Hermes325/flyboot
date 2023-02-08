"use client";
import React from "react";
import { Item } from "@/lib/datocms";
import { Image } from "react-datocms/image";

type Props = {
  item: Item;
  className?: string;
};

function Imageboot({ item, className }: Props) {
  return (
    <div>
      {item.images.map((image, i) => (
        <Image
          lazyLoad={true}
          key={i}
          data={image.responsiveImage}
          pictureClassName={className} />
      ))}
    </div>
  );
}

export default Imageboot;
