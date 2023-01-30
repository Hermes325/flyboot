import React from "react";
import classNames from "classNames";

import "./styles/slides.css";
import styles from "./styles/slide1.module.css";

function Slide1() {
  return (
    <section className={classNames(styles.huy, "landing_section")}>
      <h1 className="font-inter">ЛЮБИМЫЕ БРЕНДЫ</h1>
    </section>
  );
}

export default Slide1;
