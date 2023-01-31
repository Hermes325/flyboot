import React, { use } from "react";
import { getHotItemsForLanding } from "@/lib/datocms";
import "./styles/slides.css";
import styles from "./styles/slide2.module.css";

import Slide2Card from "./slide2_card";

//* горячие товары
const Slide2 = () => {
  const items = use(getHotItemsForLanding())

  return (
    <section>
      {items.map(item =>
        <Slide2Card
          item={item}
          key={item.slug} />)}
    </section>)
}

export default Slide2;
