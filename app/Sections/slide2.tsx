import React from "react";
import classNames from "classNames";
import styles from "./styles/slide2.module.css";
import "./styles/slides.css";

import { getHotItemsForLanding, Item } from "@/lib/datocms";

const Slide2 = async () => {
  const qwe: Item[] = await getHotItemsForLanding();
  return <a>{JSON.stringify(qwe, null, 2)}</a>;
};
export default Slide2;
