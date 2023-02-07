import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import styles from "./styles/slide2.module.css";

import ItemCard from "@/lib/components/item_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section className="mt-[5vw] grid grid-cols-4 gap-x-5 gap-y-8 px-[16.7vw]">
      {items.map(item =>
        <ItemCard
          item={item}
          key={`item-card-${item.slug}`} />)}
    </section>)
}

export default Slide2;
