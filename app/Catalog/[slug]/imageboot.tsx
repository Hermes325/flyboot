"use client";
import React from "react";
import { Item } from "@/lib/datocms";
import { Image } from "react-datocms/image";

type Props = {
  item: Item;
};

function Imageboot({ item }: Props) {
  return (
    <>
      {item.images.map((image, i) => (
        <Image key={i} data={image.responsiveImage} />
      ))}
    </>
  );
}

export default Imageboot;
