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
        <Image key={i} data={image.responsiveImage} className={className} />
      ))}
    </div>
  );
}

export default Imageboot;
