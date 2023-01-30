import React from "react";
import classNames from "classNames";

import "./styles/slides.css";
import styles from "./styles/slide2.module.css";
import { Item } from "@/lib/datocms";

type options = {
  posts: Item
}

function Slide2({ posts }: options) {
  return <div>slide2</div>;
}

export default Slide2;
