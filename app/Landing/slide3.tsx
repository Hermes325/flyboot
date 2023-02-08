import React from "react";
import Image from 'next/image';
import vector from '@/public/main-images/Vector.svg'
import styles from "./styles/slide3.module.css";
import Link from "next/link";


const links = [{
  href: "/Catalog/apparel",
  name: "Одежда",
  className: styles.ramochka_child
}, {
  href: "/Catalog/shoes",
  name: "Обувь",
  className: styles.ramochka_man
}, {
  href: "/Catalog/accessory",
  name: "Аксессуары",
  className: styles.ramochka_woman
}]

function Slide3() {
  return (<section id="catalog" className="translate-y-5 px-[16.7vw]">

    <p className={styles.jost_p_center + " font-jost mt-[2vw] text-center flex justify-center"}>
      Неограниченное количество годного шмота представлено в каталоге,
      где найдётся что-то по душе как уже опытному хайпбисту, так и начинающему моднику
    </p>

    <div className={styles.container}>
      {links.map(({ href, name, className }) =>
        <Link href={href} key={href} className={className}>
          <button className={styles.btn + " font-jost flex gap-[25px]"}>
            <h3>{name}</h3>
            <Image
              src={vector}
              alt="купить"
              className="mt-[8px]" />
          </button>
        </Link>)}
    </div>

    <Link href="/Catalog" className="mt-[3vw] text-center flex justify-center" >
      <button className={styles.catalog_button + " font-montserrat"}>
        Каталог
      </button>
    </Link>

  </section>)
}

export default Slide3;
