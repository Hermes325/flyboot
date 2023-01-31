import React from "react";
import classNames from "classnames/bind";

import "./styles/slides.css";
import styles from "./styles/slide1.module.css";
const cx = classNames.bind(styles);

function Slide1() {
  return (
    <section className={cx(styles.huy, "landing_section")}>
      <h1 className="font-inter">ЛЮБИМЫЕ БРЕНДЫ</h1>
    </section>
  );
}

export default Slide1;
