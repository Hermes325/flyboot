import { Item } from "@/lib/datocms";
import React from "react";
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
            <p className="">{item.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSearchList;
