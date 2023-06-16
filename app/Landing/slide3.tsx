import React from "react";
import styles from "./styles/slide3.module.css";
import Link from "next/link";
import classNames from "classnames";


const links = [{
  href: "/catalog/apparel",
  name: "Одежда",
  className: styles.ramochka_child
}, {
  href: "/catalog/shoes",
  name: "Обувь",
  className: styles.ramochka_man
}, {
  href: "/catalog/accessory",
  name: "Другое",
  className: styles.ramochka_woman
}]

function Slide3() {
  return <section id="catalog" className="translate-y-5 px-[5vw] w-full mt-[5vw] ">

    <div className={classNames(styles.container, "max-[600px]:!hidden")}>
      {links.map(({ href, name, className }) =>
        <Link href={href} key={href} className={className}>
          <button className={classNames(styles.btn, "font-noto flex gap-[15px] min-w-[170px] justify-center max-[950px]:!min-w-[100px]")}>
            <h3>{name}</h3>
          </button>
        </Link>)}
    </div>

  </section >
}

export default Slide3;
