import React from "react";
import styles from "./styles/slide3.module.css";
import Link from "next/link";


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
  let btnLinkToCatalog = (classMobile: string) => {
    return <Link href="/catalog" className={`mt-[3vw] text-center  justify-center hidden
      ${classMobile}
    `} >
      <button className={styles.catalog_button + " font-montserrat" +
        " max-[1100px]:!text-[24px]" +
        " max-[800px]:!text-[20px]" +
        " max-[950px]:!h-[auto]" +
        " max-[600px]:!h-[60px]" +
        " max-[600px]:!w-[50vw]"}
      >
        Каталог
      </button>
    </Link>
  }
  return (<section id="catalog" className=" translate-y-5 px-[5vw] w-full mt-[5vw] ">
    {btnLinkToCatalog(" min-[600px]:!hidden")}

    <div className={styles.container + "" +
      " max-[600px]:!hidden"}>
      {links.map(({ href, name, className }) =>
        <Link href={href} key={href} className={className}>
          <button className={styles.btn + " font-jost flex gap-[15px] min-w-[170px] justify-center" +
            " max-[950px]:!min-w-[100px]"}>
            <h3>{name}</h3>
          </button>
        </Link>)}
    </div>

    
  </section >)
}

export default Slide3;
