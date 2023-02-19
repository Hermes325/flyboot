import React from "react";
import Image from "next/image";
import waves from "@/public/main-images/waves.png";
import kross from "@/public/main-images/14.webp";
import styles from "./styles/slide1.module.css";

function Slide1() {
  return (
    <section className="w-full px-[13vw]">
      <div className="mb-[10vw]">
        <h1
          className={
            styles.h1 +
            " font-inter min-[2560px]:!text-[6.5rem] max-[1860px]:!text-[4.5rem] max-[1700px]:!text-[4rem] max-[1500px]:!text-[3.7rem] max-[1330px]:!text-[3.3rem] max-[1140px]:!text-[3rem] max-[600px]:!text-[2.5rem]"
          }
        >
          Любимые бренды <br />{" "}
          <span className={styles.span}>возвращаются</span>
        </h1>
        <p
          className={
            styles.jost_offer +
            " font-jost min-[2560px]:!text-[32px] min-[2560px]:!leading-[42px] max-[1860px]:!text-[22px] max-[1700px]:!text-[20px] max-[1500px]:!text-[18px] max-[1330px]:!text-[16.5px] max-[1140px]:!text-[15px] max-[600px]:!text-[1.2rem] max-[600px]:!leading-[17px] max-[600px]:!w-[90%] min-[601px]:!w-[25%]"
          }
        >
          Одевайся так, будто завтра выступаешь в Карнеги-Холл.
          Если ты искал, где обновить гардероб, то ты в нужном месте.
          
        </p>
        <a href="/catalog" className="mt-[1vw]">
          <button
            className={
              styles.button_main +
              " font-montserrat p-[18px_30px_20px_30px] min-[2560px]:!text-[55px] min-[2560px]:!p-[30px_30px_30px_30px] max-[1860px]:!text-[35px] max-[1700px]:!text-[30px] max-[1500px]:!text-[27px] max-[1330px]:!text-[25px] max-[1140px]:!text-[22px] max-[600px]:!text-[15px] max-[600px]:!p-[3px_25px_3px_25px]"
            }
          >
            Смотреть каталог
          </button>
        </a>
      </div>

      <div>
        <Image
          src={waves}
          alt="Волна"
          className={
            styles.waves +
            " max-[1750px]:!top-[5%] max-[1700px]:!top-[5%] max-[1550px]:!top-[6%] min-[601px]:!top-[10%] max-[600px]:!top-[25%] max-[1860px]:!w-[100%]"
          }
        />

        <div
          className={
            styles.krugmain +
            " max-[1860px]:!w-[22vw] max-[1400px]:!left-[65%] max-[1025px]:!top-[4%] max-[600px]:!top-[35%] max-[600px]:!left-[30%] max-[600px]:!w-[40%] max-[600px]:!w-[50vw]"
          }
        >
          <Image
            src={kross}
            alt="Логотип"
            className={
              styles.Logotip + "  max-w-[unset] max-[1860px]:!w-[24vw] max-[600px]:!w-[60vw] max-[600px]:!bottom-[15vw] "
            }
          />
        </div>

        <div className="max-[600px]:!hidden">
          <div
            className={
              styles.krug1 +
              " max-[1860px]:!w-[7vw] max-[1550px]:!w-[9vw] max-[1750px]:!mt-[5%] max-[1700px]:!mt-[0%] max-[1550px]:!mt-[0%] max-[1200px]:!mt-[5%]"
            }
          />
          <div
            className={
              styles.krug2 +
              " max-[1860px]:!w-[9vw] max-[1550px]:!w-[7vw] max-[1750px]:!mt-[3%] max-[1700px]:!mt-[1%] max-[1550px]:!mt-[4%] max-[1281px]:!mt-[7%] max-[1200px]:!mt-[9%] max-[1025px]:!mt-[13%]"
            }
          />
          <div
            className={
              styles.krug3 +
              " max-[1750px]:!mt-[3%] max-[1700px]:!mt-[0%] max-[1550px]:!mt-[5%] max-[1200px]:!mt-[9%]"
            }
          />
          <div
            className={
              styles.krug4 +
              " max-[1750px]:!w-[6vw] max-[1750px]:!mt-[5%] max-[1700px]:!w-[7vw] max-[1550px]:!w-[9vw] max-[1700px]:!mt-[-1%] max-[1550px]:!mt-[0%] max-[1450px]:!w-[7vw] max-[1300px]:!mt-[13%]  max-[1281px]:!mt-[5%]"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Slide1;
