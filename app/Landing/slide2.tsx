import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import styles from "./styles/slide2.module.css";

import ItemCard from "@/lib/components/item_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section>
      <div className="mt-[5vw] 
    grid grid-cols-4 gap-x-3 gap-y-5 px-[5vw]
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
          max-[1920px]:!text-[14px] 
          max-[1015px]:!text-[10px] 
          max-[835px]:!text-[8px] 
          max-[835px]:!leading-[19px] 
          max-[775px]:!mt-[2vw] 
          max-[710px]:!text-[8px] 
          max-[660px]:!leading-[137%]
          max-[400px]:!leading-[14px]          
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
          max-[1920px]:!text-[14px] 
          max-[1015px]:!text-[10px] 
          max-[835px]:!leading-[19px] 
          max-[775px]:!mt-[2vw] 
          max-[710px]:!text-[12px] 
          max-[660px]:!text-[13px] max-[660px]:!leading-[137%]
          max-[400px]:!leading-[13px]
          max-[385px]:!text-[11px]
          max-[325px]:!text-[10px] "
            pClassName="hidden"
            className="max-[1400px]:!hidden max-[600px]:!block"
            item={item}
            key={`item-card-${item.slug}`} />)}
      </div>
      <div className="flex justify-center mt-[6vh]">
        <a href="/catalog" >
          <button
            className={
              styles.button_main +
              ` uppercase
              hover:underline
              p-[18px_30px_20px_30px] 
              min-[2560px]:!p-[30px_30px_30px_30px] 
              max-[600px]:!p-[3px_25px_3px_25px]
              max-[1100px]:!p-[20px_20px_20px_20px]
              max-[780px]:!p-[10px_15px_10px_15px]
              min-[2560px]:!text-[22px] 
              max-[1960px]:!text-[20px] 
              max-[850px]:!text-[16px] 
              max-[780px]:!text-[14px] 
              max-[1100px]:!leading-[17px]
              max-[600px]:!hidden 
              `
            }
          >
            смотреть все
          </button>
        </a>
      </div>
    </section>
  )
}

export default Slide2;
