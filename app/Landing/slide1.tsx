import React from "react";
import Image from "next/image";
import waves from "@/public/main-images/waves.png";
import kross from "@/public/main-images/14.webp";
import styles from "./styles/slide1.module.css";

function Slide1() {
  return (
    <section className="w-full  relative">
      <div className="mb-[10vw]">
        <h1
          className={
            styles.h1 +
            ` px-[10vw] 
            font-inter
            min-[2560px]:!text-[6.5rem] 
            max-[1860px]:!text-[4.5rem]
            max-[1700px]:!text-[4rem]
            max-[1500px]:!text-[3.7rem] 
            max-[1330px]:!text-[3.3rem] 
            max-[1140px]:!text-[3rem] 
            max-[1100px]:!text-[2.7rem]
            max-[950px]:!text-[2.5rem]
            max-[850px]:!text-[2.3rem]
            max-[780px]:!text-[2.1rem]
            max-[700px]:!text-[1.9rem]
            max-[650px]:!text-[1.7rem]
            max-[600px]:!text-[2.6rem]
            max-[550px]:!text-[2.4rem]
            max-[525px]:!text-[2.2rem]
            max-[480px]:!text-[2rem]
            max-[420px]:!text-[1.8rem]
            max-[380px]:!text-[1.6rem]
            max-[335px]:!text-[1.4rem]
            `
            
          }
        >
          Любимые бренды <br />{" "}
          <span className={styles.span}>возвращаются</span>
        </h1>
        <p
          className={
            styles.jost_offer +
            ` px-[10vw]
             font-jost
            min-[2560px]:!text-[32px] 
            min-[2560px]:!leading-[42px] 
            max-[1960px]:!text-[28px] 
            max-[1860px]:!text-[25px] 
            max-[1700px]:!text-[22px] 
            max-[1500px]:!text-[20.9px] 
            max-[1400px]:!text-[20px] 
            max-[1330px]:!text-[18px] 
            max-[1200px]:!text-[17.5px] 
            max-[1140px]:!text-[16px] 
            max-[1100px]:!leading-[17px] 
            max-[1100px]:!text-[15px] 
            max-[1000px]:!text-[14.5px] 
            max-[950px]:!text-[14px] 
            max-[950px]:!leading-[12px]
            max-[650px]:!text-[12px] 
            max-[650px]:!leading-[12px]            
            max-[600px]:!text-[1.3rem] 
            max-[550px]:!text-[1.2rem] 
            max-[525px]:!text-[1.1rem] 
            max-[480px]:!text-[1rem]
            max-[420px]:!leading-[14px]  
            max-[420px]:!text-[0.9rem] 
            max-[380px]:!text-[0.8rem] 
            max-[335px]:!text-[0.7rem]
            max-[600px]:!leading-[20px] 
            max-[600px]:!w-[90%] 
            w-[60%]`
          }
        >
          
          Одевайся так, будто завтра выступаешь в Карнеги-Холл!

        </p>
        <a href="/catalog" className="px-[10vw] z-10">
          <button
            className={
              styles.button_main +
              ` 
              
              mt-[1vw] 
              font-montserrat 
              p-[18px_30px_20px_30px] 
              min-[2560px]:!p-[30px_30px_30px_30px] 
              max-[600px]:!p-[3px_25px_3px_25px]
              max-[1100px]:!p-[20px_20px_20px_20px]
              max-[780px]:!p-[10px_15px_10px_15px]
              min-[2560px]:!text-[55px] 
              max-[1860px]:!text-[35px] 
              max-[1700px]:!text-[30px] 
              max-[1500px]:!text-[27px] 
              max-[1330px]:!text-[25px] 
              max-[1140px]:!text-[22px] 
              max-[1100px]:!text-[18px] 
              max-[850px]:!text-[16px] 
              max-[780px]:!text-[14px] 
              max-[1100px]:!leading-[17px]
              max-[600px]:!hidden 
              `
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
            ` max-[1750px]:!top-[5%]
             max-[1550px]:!top-[5%] 
             max-[1860px]:!w-[100%]
             max-[600px]:!scale-[2.5]
             max-[600px]:!top-[125%] 
             `
          }
        />

        <div
          className={
            styles.krugmain + ` max-[600px]:!w-[60vw] max-[600px]:!left-[22%] max-[600px]:!top-[75%]`}
        >
          <Image
            src={kross}
            alt="Логотип"
            className={
              styles.Logotip + ' max-w-[none] max-[600px]:!w-[75vw] max-[600px]:!bottom-[12vw]'
            }
          />
        </div>

        <div className="max-[600px]:!hidden">
          <div
            className={
              styles.krug1
            }
          />
          <div
            className={
              styles.krug2
            }
          />

          <div
            className={
              styles.krug3}
          />
          <div
            className={
              styles.krug4
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Slide1;
