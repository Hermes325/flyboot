import React from "react";
import Image from 'next/image';
import vector from '@/public/main-images/Vector.svg'
import styles from "./styles/slide3.module.css";


function Slide3() {
  return (<section id="catalog" className="translate-y-5 px-[16.7vw]">

    <p className={styles.jost_p_center + " font-jost mt-[2vw] text-center flex justify-center"}>
      Неограниченное количество годного шмота представлено в каталоге,
      где найдётся что-то по душе как уже опытному хайпбисту, так и начинающему моднику
    </p>

    <div className={styles.container}>

      <a href="">
        <form action="//НАДО СЮДА ПРОПИСАТЬ ССЫЛКУ" className={styles.ramochka_child}>
          <button className={styles.btn + " font-jost flex gap-[25px]"}>
            <h3>Одежда</h3>
            <Image
              src={vector}
              alt="купить"
              className="mt-[8px]" />
          </button>
        </form>
      </a>

      <a href="">
        <form action="//НАДО СЮДА ПРОПИСАТЬ ССЫЛКУ" className={styles.ramochka_man}>
          <button className={styles.btn + " font-jost flex gap-[25px]"}>
            <h3>Обувь</h3>
            <Image
              src={vector}
              alt="купить"
              className="mt-[8px]" />
          </button>
        </form>
      </a>

      <a href="">
        <form action="//НАДО СЮДА ПРОПИСАТЬ ССЫЛКУ" className={styles.ramochka_woman}>
          <button className={styles.btn + " font-jost flex gap-[25px]"}>
            <h3>Аксессуары</h3>
            <Image
              src={vector}
              alt="купить"
              className="mt-[8px]" />
          </button>
        </form>
      </a>
    </div>

    <form className=" mt-[3vw] text-center flex justify-center" >
      <button className={styles.catalog_button + " font-montserrat"}>
        Каталог
      </button>
    </form>

  </section>)
}

export default Slide3;
