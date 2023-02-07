import React from "react";
import Image from 'next/image'
import waves from "@/public/main-images/waves.png";
import kross from "@/public/main-images/14.webp";
import styles from "./styles/slide1.module.css";


function Slide1() {
  return (
    <section className="w-full px-[16.7vw]">

      <div className="mb-[10vw]">
        <h1 className={styles.h1 + " font-inter"}>
          Любимые бренды <br /> <span className={styles.span}>возвращаются</span>
        </h1>
        <p className={styles.jost_offer + " font-jost"}>
          Если ты искал, где обновить гардероб, то ты в нужном месте. <br />
          Одевайся так, будто завтра выступаешь в Карнеги-Холл.
        </p>
        <form action="#catalog" className="mt-[1vw]">
          <button className={styles.button_main + " font-montserrat p-[18px_30px_20px_30px]"}>
            Смотреть каталог
          </button>
        </form>
      </div>

      <div>
        <Image
          src={waves}
          alt="Волна"
          className={styles.waves} />

        <div className={styles.krugmain}>
          <Image
            src={kross}
            alt="Логотип"
            className={styles.Logotip} />
        </div>

        <div>
          <div className={styles.krug1} />
          <div className={styles.krug2} />
          <div className={styles.krug3} />
          <div className={styles.krug4} />
        </div>
      </div>

    </section>
  );
}

export default Slide1;
