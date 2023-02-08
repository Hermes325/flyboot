"use client";
import { Item } from "@/lib/datocms";
import React from "react";
import { Image } from "react-datocms/image";

type Props = {
  image: Item["images"][0];
  className?: string;
};

function Imageboot({ image, className }: Props) {
  return (
    <Image
      lazyLoad={true}
      data={image.responsiveImage}
      pictureClassName={className} />
  );
}

export default Imageboot;
