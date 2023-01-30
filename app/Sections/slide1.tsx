import React from "react";
import classNames from "classNames";

import "./styles/slides.css";
import styles from "./styles/slide1.module.css";

function Slide1() {
  return <div className={classNames(styles.huy, "landingSection")}>slide1</div>;
}

export default Slide1;
