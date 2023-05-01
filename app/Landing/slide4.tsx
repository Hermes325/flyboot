"use client";
import React from "react";
import Image from 'next/image'
import styles from "./styles/slide4.module.css";
import switchpng from "@/public/main-images/switch.png";
import recept from "@/public/main-images/recept.svg"
import shopping_bag from "@/public/main-images/shopping_bag.svg"
import carbon_delivery_parcel from "@/public/main-images/carbon_delivery-parcel.svg"
import ic_round_done from "@/public/main-images/ic_round-done.png"


function Slide4() {
  return (
    <section id='#Как_это_работает?' className=' px-[5vw] w-full mt-20'>

      <div id='left сторона' >

        <h2 className={styles.h2 + ` 
        noto_offer text-center
        max-[1860px]:!text-[4.5rem]
            max-[1700px]:!text-[4rem]
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
          Как это работает? <br /> очень просто </h2>

      </div>



      <div className="grid grid-cols-4 max-[600px]:!grid-cols-1 gap-5 text-center justify-items-start my-8 gap-x-4">

        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] max-[600px]:!w-[85%]'>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <Image
              src={recept}
              alt="recept"
              className="w-[3.6vw] max-[600px]:!w-[5vw] max-[500px]:!w-[6vw] max-[400px]:!w-[8vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` uppercase text-start noto_offer text-black
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px] 
           max-[950px]:!text-[21px]
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
           max-[600px]:!text-[16px] 
           max-[1100px]:!leading-[17px]`}>
            Оплата заказа и получение карточки-подтверждения о выкупе товара

          </p>
        </div>

        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] max-[600px]:!w-[85%]'>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <Image
              src={shopping_bag}
              alt="shopping_bag"
              className="w-[3.6vw] max-[600px]:!w-[5vw] max-[500px]:!w-[6vw] max-[400px]:!w-[8vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` uppercase text-center font-bold noto_offer
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px]
           max-[950px]:!text-[21px]        
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
           max-[600px]:!text-[16px] 
           max-[1100px]:!leading-[17px]`}>
            На данном этапе ваш заказ проходит подготовку
            к отправке в стране отправления
          </p>
        </div>

        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] max-[600px]:!w-[85%] 
       min-[1300px]:!col-end-auto 
       min-[1300px]:!col-start-auto
       min-[600px]:!col-end-3 
        min-[600px]:!col-start-1
        '>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <Image
              src={carbon_delivery_parcel}
              alt="carbon_delivery-parcel"
              className="w-[3.6vw] max-[600px]:!w-[5vw] max-[500px]:!w-[6vw] max-[400px]:!w-[8vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` text-black uppercase font-bold text-center noto_offer
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px] 
           max-[950px]:!text-[21px]           
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
           max-[600px]:!text-[16px] 
           max-[1100px]:!leading-[17px]`}>
            Посылка со склада отправляется в Россию,
            ориентировочный срок доставки 2-3 недели</p>
        </div>

        <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] max-[600px]:!w-[85%] 
       min-[1300px]:!col-end-auto 
       min-[1300px]:!col-start-auto
       min-[600px]:!col-end-3 
        min-[600px]:!col-start-1
        '>
          <div className={styles.flex_items_center + " justify-start mt-10"}>
            <Image
              src={carbon_delivery_parcel}
              alt="carbon_delivery-parcel"
              className="w-[3.6vw] max-[600px]:!w-[5vw] max-[500px]:!w-[6vw] max-[400px]:!w-[8vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` text-black uppercase font-bold text-center noto_offer
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px] 
           max-[950px]:!text-[21px]           
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
           max-[600px]:!text-[16px] 
           max-[1100px]:!leading-[17px]`}>
            Посылка прибыла в Россию
            и ее можно забирать</p>
        </div>

      </div>
    </section >)
}
export default Slide4;
