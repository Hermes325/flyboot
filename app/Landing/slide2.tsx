import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import styles from "./styles/slide2.module.css";

import ItemCard from "@/lib/components/item_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section className="mt-[5vw] grid grid-cols-4 gap-x-3 gap-y-5 px-[16.7vw] max-[1700px]:mt-[3vw]">
      {items.map(item =>
        <ItemCard
          className="h-[270px]"
          item={item}
          key={`item-card-${item.slug}`} />)}
    </section>)
}

export default Slide2;
