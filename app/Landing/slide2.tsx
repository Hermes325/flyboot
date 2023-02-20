import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import styles from "./styles/slide2.module.css";

import ItemCard from "@/lib/components/item_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section className="mt-[5vw] 
    grid grid-cols-4 gap-x-3 gap-y-5 px-[13vw]
    max-[1700px]:mt-[3vw]
    max-[1400px]:!grid-cols-3
    max-[600px]:!grid-cols-2 ">
      {items.slice(0, 6).map(item =>
        <ItemCard
          h3ClassName="
          max-[1015px]:!text-[20px] 
          max-[1015px]:!text-[18px] 
          max-[835px]:!text-[16px] 
          max-[835px]:!leading-[19px] 
          max-[775px]:!mt-[2vw] 
          max-[710px]:!text-[14px] 
          max-[660px]:!text-[12px]
          max-[385px]:!text-[10px]
          max-[400px]:!leading-[13px]
          max-[325px]:!text-[9px] "
          pClassName="max-[1015px]:!text-[17px] max-[835px]:!hidden"
          className="h-[20vw] max-[1400px]:!h-[23vw] max-[600px]:!h-[27vw] max-[400px]:!h-[29vw]"
          item={item}
          key={`item-card-${item.slug}`} />)}

      {items.slice(6).map(item =>
        <ItemCard
          h3ClassName="
          max-[1015px]:!text-[20px]
          max-[1015px]:!text-[18px] 
          max-[835px]:!text-[16px] 
          max-[835px]:!leading-[19px] 
          max-[775px]:!mt-[2vw] 
          max-[710px]:!text-[14px] 
          max-[660px]:!text-[12px]"
          pClassName="max-[1015px]:!text-[17px] max-[835px]:!hidden"
          className="h-[20vw] max-[1400px]:!hidden max-[600px]:!block max-[1400px]:!h-[27vw] max-[600px]:!h-[25vw]"
          item={item}
          key={`item-card-${item.slug}`} />)}
    </section>

  )

}

export default Slide2;
