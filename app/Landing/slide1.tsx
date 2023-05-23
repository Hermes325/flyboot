import React from "react";
import Image from "next/image";
import main_wings from "@/public/main-images/main_wings.png";
import styles from "./styles/slide1.module.css";
import wings from "@/public/main-images/wings.png";

function Slide1() {
  return (
    <section className="w-full max-[600px]:!h-[35vh] relative px-[5vw]">
      <div className="mb-[5%]">
        <h1
          className={
            styles.h1 +
            `  
            min-[2560px]:!text-[6.5rem] 
            max-[1860px]:!text-[4.5rem]
            max-[1700px]:!text-[4rem]
            max-[1500px]:!text-[3.9rem] 
            max-[1330px]:!text-[3.7rem] 
            max-[1000px]:!leading-[4rem]
            max-[1050px]:!text-[2.9rem]
            max-[780px]:!text-[2.1rem]
            max-[700px]:!text-[1.9rem]
            max-[700px]:!leading-[1.9rem]
            max-[650px]:!text-[1.7rem]
            max-[600px]:!text-[2.6rem]
            max-[600px]:!leading-[2.4rem]
            max-[550px]:!text-[2.4rem]
            max-[525px]:!text-[2.2rem]
            max-[480px]:!text-[2rem]
            max-[420px]:!text-[1.8rem]
            max-[380px]:!text-[1.6rem]
            max-[335px]:!text-[1.4rem]
            `
          }
        >
          Любимые <b>бренды</b>  <br />{" "}
           <b>в Flyboots</b>
        </h1>
        <p
          className={
            styles.noto_offer +
            ` 
            min-[2560px]:!text-[32px] 
            min-[2560px]:!leading-[42px] 
            max-[1960px]:!text-[28px] 
            max-[1500px]:!text-[22px] 
            max-[1200px]:!text-[20px] 
            
            max-[1100px]:!leading-[21px] 
            max-[950px]:!text-[19px] 
            max-[950px]:!leading-[17px]
            max-[850px]:!text-[17px] 
            max-[850px]:!leading-[15px]
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
            
            w-[47%]
            mt-[25px]`
          }
        >
          Деливири-платформа с выгодными ценами <br />
          и быстрой доставкой по России
        </p>
        <a href="/catalog" className=" z-10">
          <button
            className={
              styles.button_main +
              ` 
              mt-[80px]
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
              max-[1100px]:!mt-[40px]
              max-[850px]:!text-[16px] 
              max-[780px]:!text-[14px] 
              max-[1100px]:!leading-[17px]
              
               
              max-[600px]:!text-[15px] 
              max-[600px]:!w-[90%]
              max-[600px]:!h-[62px] 
              max-[600px]:!absolute
              max-[600px]:!top-[145%]
              rounded-[5px]
              border-[1px]
              border-black
              hover:bg-[#f5f5f5]
              hover:text-black
              hover:border-[1px]
              hover:border-solid
              hover:border-black
              `
            }
          >
            ПЕРЕЙТИ В КАТАЛОГ
            
          </button>
        </a>
      </div>
      <Image
        src={main_wings}
        alt="Логотип"
        className={
          styles.Logotip + ' max-w-[none] max-[600px]:!w-[115%] max-[600px]:!top-[45%]'
        }
      />
    </section>
  );
}

export default Slide1;
