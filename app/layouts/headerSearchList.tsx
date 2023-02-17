import { Item } from "@/lib/datocms";
import React from "react";
import { Image } from "react-datocms/image";
import NavLink from "./link";

type Props = {
  items: Item[];
};

const HeaderSearchList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.slug}>
          <NavLink href={`/catalog/${item.slug}`}>
            <div className="flex flex-row w-screen px-10 justify-between ">
              <div className="space-x-3">
                {/* <Image
                  lazyLoad={true}
                  data={item.images[0].responsiveImage}
                  objectFit={"cover"}
                  className="w-[30px] h-[30px]"
                /> */}
                <p className="">{item.title}</p>
              </div>

              <p className="">{item.price}руб</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSearchList;
