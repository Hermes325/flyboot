import React from "react";
import Image from 'next/image';
import vector from '@/public/main-images/Vector.svg'
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
  return (<section id="catalog" className="translate-y-5 px-[13vw]">

    <p className={styles.jost_p_center + " font-jost mt-[2vw] text-center flex justify-center"}>
      Неограниченное количество годного шмота представлено в каталоге,
      где найдётся что-то по душе как уже опытному хайпбисту, так и начинающему моднику
    </p>

    <div className={styles.container}>
      {links.map(({ href, name, className }) =>
        <Link href={href} key={href} className={className}>
          <button className={styles.btn + " font-jost flex gap-[15px] min-w-[170px] justify-center"}>
            <h3>{name}</h3>
          </button>
        </Link>)}
    </div>

    <Link href="/catalog" className="mt-[3vw] text-center flex justify-center" >
      <button className={styles.catalog_button + " font-montserrat"}>
        Каталог
      </button>
    </Link>

  </section>)
}

export default Slide3;
