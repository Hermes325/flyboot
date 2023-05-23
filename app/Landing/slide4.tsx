"use client";
import React from "react";
import Image from 'next/image'
import styles from "./styles/slide4.module.css";
import switchpng from "@/public/main-images/switch.png";
import recept from "@/public/main-images/recept.svg"
import shopping_bag from "@/public/main-images/shopping_bag.svg"
import carbon_delivery_parcel from "@/public/main-images/carbon_delivery-parcel.svg"
import ic_round_done from "@/public/main-images/ic_round-done.png"
import wings_left from "@/public/main-images/wings_left.png";

function Slide4() {
  return (
    <section className=' px-[5vw] w-full mt-20 relative'>
      <h2 className={styles.h2 + ` 
        noto_offer text-start
        max-[1920px]:!text-[4rem]
            max-[1500px]:!text-[3.7rem] 
            max-[1330px]:!text-[3.3rem]
            max-[1300px]:!leading-[55px] 
            max-[1140px]:!text-[3rem] 
            max-[1100px]:!text-[2.7rem]
            max-[950px]:!text-[2.5rem]
            max-[900px]:!leading-[45px] 
            max-[800px]:!leading-[40px]
            max-[700px]:!leading-[35px] 
            max-[400px]:!leading-[30px]
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
            max-[335px]:!text-[1.4rem]`}>
        как <b> работает flyboots?</b>
      </h2>
      <h2 className={styles.h2 + ` 
        noto_offer text-center
        max-[1920px]:!text-[4rem]
        max-[1500px]:!text-[3.7rem] 
            max-[1330px]:!text-[3.3rem]
            max-[1300px]:!leading-[55px] 
            max-[1140px]:!text-[3rem] 
            max-[1100px]:!text-[2.7rem]
            max-[950px]:!text-[2.5rem]
            max-[900px]:!leading-[45px] 
            max-[800px]:!leading-[40px]
            max-[700px]:!leading-[35px]
            max-[700px]:!mt-5 
            max-[400px]:!leading-[30px]
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
            max-[335px]:!text-[1.4rem]`}>
        очень просто
      </h2>
      <Image
        src={wings_left}
        alt="Крылья"
        className={
          styles.Logotip + ' max-w-[90vw] absolute top-24 left-[-5vw] z-[-1] max-[700px]:!top-5 '
        }
      />
      <div className="grid grid-cols-4 max-[900px]:!grid-cols-2 gap-5 text-center justify-items-start my-8 gap-x-4">
        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <p className={styles.hiw_list + ` pl-5 uppercase text-start noto_offer text-black
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[22px]
           max-[1100px]:!text-[20px] 
           max-[950px]:!text-[19px]
           max-[750px]:!text-[17px]
           max-[600px]:!text-[15px]
           max-[1100px]:!leading-[17px] font-bold`}>оплата</p>
          </div>
          <p className={styles.hiw_list + ` noto_offer
           mb-10
           px-5
           text-black
           text-start
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[14px] 
           max-[780px]:!text-[12px] 
           max-[600px]:!text-[11px] 
           max-[1100px]:!leading-[17px]`}>
            Оплата заказа и получение карточки-подтверждения о выкупе товара

          </p>
        </div>
        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <p className={styles.hiw_list + ` pl-5 uppercase text-center font-bold noto_offer
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[22px]
           max-[1100px]:!text-[20px] 
           max-[950px]:!text-[19px]
           max-[750px]:!text-[17px]
           max-[600px]:!text-[15px]       
           max-[1100px]:!leading-[17px] text-black`}>Подготовка</p>
          </div>
          <p className={styles.hiw_list + `  text-black  noto_offer
           mb-10
           px-5
           text-start
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[14px] 
           max-[780px]:!text-[12px] 
           max-[600px]:!text-[11px] 
           max-[1100px]:!leading-[17px]`}>
            На данном этапе ваш заказ проходит подготовку
            к отправке в стране отправления
          </p>
        </div>
        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <p className={styles.hiw_list + ` pl-5 text-black uppercase font-bold text-center noto_offer
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[22px]
           max-[1100px]:!text-[20px] 
           max-[950px]:!text-[19px]
           max-[750px]:!text-[17px]
           max-[600px]:!text-[15px]           
           max-[1100px]:!leading-[17px]`}>отправление</p>
          </div>

          <p className={styles.hiw_list + ` text-black noto_offer
          px-5
           mb-10
           text-start
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[14px] 
           max-[780px]:!text-[12px] 
           max-[600px]:!text-[11px] 
           max-[1100px]:!leading-[17px]`}>
            Посылка со склада отправляется в Россию,
            ориентировочный срок доставки 2-3 недели</p>
        </div>
        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <Image
              src={carbon_delivery_parcel}
              alt="carbon_delivery-parcel"
              className="w-[3.6vw] max-[600px]:!w-[5vw] max-[500px]:!w-[6vw] max-[400px]:!w-[8vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` pl-5 text-black uppercase font-bold text-center noto_offer
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[22px]
           max-[1100px]:!text-[20px] 
           max-[950px]:!text-[19px]
           max-[750px]:!text-[17px]
           max-[600px]:!text-[15px]          
           max-[1100px]:!leading-[17px]`}>ПОЛУЧЕНИЕ</p>
          </div>

          <p className={styles.hiw_list + `  text-black noto_offer
          px-5
           mb-10
           text-start
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[14px] 
           max-[780px]:!text-[12px] 
           max-[600px]:!text-[11px] 
           max-[1100px]:!leading-[17px]`}>
            Посылка прибыла в Россию
            и ее можно забирать</p>
        </div>
      </div>

      <div className="flex justify-center mt-[6vh]  max-[600px]:!hidden ">
        <a href="/catalog" >
          <button
            className={
              styles.button_main +
              ` 
              uppercase
              hover:underline
              p-[18px_30px_20px_30px] 
              min-[2560px]:!p-[30px_30px_30px_30px] 
              max-[600px]:!p-[3px_25px_3px_25px]
              max-[1100px]:!p-[20px_20px_20px_20px]
              max-[780px]:!p-[10px_15px_10px_15px]
              min-[2560px]:!text-[22px] 
              max-[1960px]:!text-[20px] 
              max-[850px]:!text-[16px] 
              max-[780px]:!text-[14px] 
              max-[1100px]:!leading-[17px]
             
              `
            }
          >
            Каталог товаров
          </button>
        </a>
        
      </div>
    </section >
  )
}
export default Slide4;
