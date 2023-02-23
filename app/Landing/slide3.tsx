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
  name: "Аксессуары",
  className: styles.ramochka_woman
}]

function Slide3() {
  let btnLinkToCatalog = (classMobile: string) => {
    return <Link href="/catalog" className={`mt-[3vw] text-center flex justify-center
      ${classMobile}
    `} >
      <button className={styles.catalog_button + " font-montserrat" +
        " max-[1100px]:text-[24px]" +
        " max-[950px]:h-[auto]" +
        " max-[600px]:h-[60px]" +
        " max-[600px]:w-[50vw]"}
      >
        Каталог
      </button>
    </Link>
  }
  return (<section id="catalog" className="translate-y-5 px-[10vw]">
    {btnLinkToCatalog(" min-[600px]:!hidden")}

    <p className={styles.jost_p_center + ` font-jost mt-[2vw] text-center flex justify-center
              max-[2000px]:!text-[30px] 
              max-[1500px]:!text-[27px] 
              max-[1330px]:!text-[25px] 
              max-[1140px]:!text-[23px]               
              max-[850px]:!text-[20px] 
              max-[600px]:!text-[16px] 
              max-[1100px]:!leading-[17px]` }>
      Неограниченное количество годного шмота представлено в каталоге,
      где найдётся что-то по душе как уже опытному хайпбисту, так и начинающему моднику
    </p>  

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

    {btnLinkToCatalog(" max-[600px]:!hidden")}
  </section>)
}

export default Slide3;
