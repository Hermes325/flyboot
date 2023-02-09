import React from "react";
import Image from 'next/image'
import waves from "@/public/main-images/waves.png";
import kross from "@/public/main-images/14.webp";
import styles from "./styles/slide1.module.css";


function Slide1() {
  return (
    <section className="w-full px-[16.7vw]">

      <div className="mb-[10vw]">
        <h1 className={styles.h1 + " font-inter max-[1860px]:text-[4.5rem] max-[1700px]:text-[4rem] max-[1500px]:text-[3.7rem]"}>
          Любимые бренды <br /> <span className={styles.span}>возвращаются</span>
        </h1>
        <p className={styles.jost_offer + " font-jost max-[1860px]:text-[22px] max-[1700px]:text-[20px] max-[1500px]:text-[18px]"}>
          Если ты искал, где обновить гардероб, то ты в нужном месте. <br />
          Одевайся так, будто завтра выступаешь в Карнеги-Холл.
        </p>
        <form action="#catalog" className="mt-[1vw]">
          <button className={styles.button_main + " font-montserrat p-[18px_30px_20px_30px] max-[1860px]:text-[35px] max-[1700px]:text-[30px] max-[1500px]:text-[27px]"}>
            Смотреть каталог
          </button>
        </form>
      </div>

      <div>
        <Image
          src={waves}
          alt="Волна"
          className={styles.waves + " max-[1750px]:top-[5%] max-[1700px]:top-[4%] max-[1550px]:top-[5%]" }
        />

        <div className={styles.krugmain + " max-[1860px]:w-[22vw]"}>
          <Image
            src={kross}
            alt="Логотип"
            className={styles.Logotip + "  max-w-[unset] max-[1860px]:w-[24vw]"} />
        </div>

        <div>
          <div className={styles.krug1 + " max-[1860px]:w-[7vw] max-[1550px]:w-[9vw] max-[1750px]:mt-[5%] max-[1700px]:mt-[0%] max-[1550px]:mt-[3%]"} />
          <div className={styles.krug2 + " max-[1860px]:w-[9vw] max-[1550px]:w-[7vw] max-[1750px]:mt-[3%] max-[1700px]:mt-[1%] max-[1550px]:mt-[4%]"} />
          <div className={styles.krug3 + " max-[1750px]:mt-[3%] max-[1700px]:mt-[0%] max-[1550px]:mt-[5%]"} />
          <div className={styles.krug4 + " max-[1750px]:w-[6vw] max-[1750px]:mt-[5%] max-[1700px]:w-[7vw] max-[1550px]:w-[9vw] max-[1700px]:mt-[-1%] max-[1550px]:mt-[0%]"} />
        </div>
      </div>

    </section>
  );
}

export default Slide1;
