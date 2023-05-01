import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import styles from "./styles/slide2.module.css";

import ItemCard from "@/lib/components/item_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section className="mt-[5vw] 
    grid grid-cols-4 gap-x-3 gap-y-5 px-[3vw]
    max-[1700px]:mt-[3vw]
    max-[1400px]:!grid-cols-3
    max-[600px]:!grid-cols-2 
    max-[600px]:!mt-[55vw] 
    ">
      {items.slice(0, 6).map(item =>
        <ItemCard
          h3ClassName="
          flex
          justify-center
          items-center
          max-[1015px]:!text-[18px] 
          max-[835px]:!text-[16px] 
          max-[835px]:!leading-[19px] 
          max-[775px]:!mt-[2vw] 
          max-[710px]:!text-[14px] 
          max-[660px]:!text-[13px]
          max-[660px]:!leading-[137%]
          max-[400px]:!leading-[14px]
          max-[385px]:!text-[11px]
          max-[325px]:!text-[10px] 
          "
          pClassName="hidden"
          item={item}
          key={`item-card-${item.slug}`} />)}

      {items.slice(6).map(item =>
        <ItemCard
          h3ClassName="
          flex
          justify-center
          items-center
          max-[1015px]:!text-[18px] 
          max-[835px]:!text-[16px] max-[835px]:!leading-[19px] 
          max-[775px]:!mt-[2vw] 
          max-[710px]:!text-[14px] 
          max-[660px]:!text-[13px] max-[660px]:!leading-[137%]
          max-[400px]:!leading-[13px]
          max-[385px]:!text-[11px]
          max-[325px]:!text-[10px] "
          pClassName="hidden"
          className="max-[1400px]:!hidden max-[600px]:!block"
          item={item}
          key={`item-card-${item.slug}`} />)}
    </section>

  )

}

export default Slide2;
