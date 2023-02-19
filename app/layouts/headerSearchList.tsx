import { Item } from "@/lib/datocms";
import React from "react";
import { Image } from "react-datocms/image";
import NavLink from "./link";

type Props = {
  items: Item[];
};

const HeaderSearchList = ({ items }: Props) => {
  return (
    <ul className="w-full">
      {items.map((item) => (
        <li key={item.slug}>
          <NavLink href={`/catalog/${item.slug}`}>
            <div className="flex flex-row w-full pl-10 pr-10 justify-between ">
              <div className="flex flex-row space-x-5">
                <Image
                  lazyLoad={true}
                  data={item.images[0].responsiveImage}
                  objectFit={"contain"}
                  className="h-[100px] max-[1080px]:h-[70px] aspect-square opacity-100"
                />
                <h1 className="flex justify-center items-center whitespace-nowrap font-medium text-2xl max-[1080px]:text-xl">
                  {item.title}
                </h1>
              </div>

              <p className="flex justify-center items-center whitespace-nowrap font-medium text-2xl max-[1080px]:text-xl">
                {item.price}руб
              </p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSearchList;
