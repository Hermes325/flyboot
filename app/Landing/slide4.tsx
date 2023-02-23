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
    <section id="Как_это_работает?" className=' px-[10vw] w-full mt-20'>

      <div id='left сторона' >
        <h2 className={styles.h2 + ` font-montserrat max-[1860px]:!text-[4.5rem]
            max-[1700px]:!text-[4rem]
            max-[1500px]:!text-[3.7rem] 
            max-[1330px]:!text-[3.3rem]
            max-[1300px]:!leading-[55px] 
            max-[1140px]:!text-[3rem] 
            max-[1100px]:!text-[2.7rem]
            max-[950px]:!text-[2.5rem]
            max-[900px]:!leading-[45px] 
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
          Как это <br />работает?</h2>
        <p className={styles.jost_bledno + " font-jost mt-5"}>* очень просто</p>

        <ul className="mt-[1vw] w-[80%]">
          <p className={styles.jost_p + ` font-jost max-[1500px]:!leading-[23px] 
          max-[2000px]:!text-[30px] 
          max-[1500px]:!text-[27px] 
          max-[1330px]:!text-[25px] 
          max-[1140px]:!text-[23px]               
          max-[850px]:!text-[20px] 
          max-[600px]:!text-[16px] 
          max-[1100px]:!leading-[17px]`}>
            Денег нет, но мы держимся:
          </p>
          <br />
          <li className={styles.jost_p + ` font-jost max-[1500px]:!leading-[23px] 
          max-[2000px]:!text-[30px] 
          max-[1500px]:!text-[27px] 
          max-[1330px]:!text-[25px] 
          max-[1140px]:!text-[23px]               
          max-[850px]:!text-[20px] 
          max-[600px]:!text-[16px] 
          max-[1100px]:!leading-[17px]`}>
            ⁃ Работаем с сайтом POIZON. Все товары - оригинал, да еще и не по цене почки!
          </li>
          <br />
          <li className={styles.jost_p + ` font-jost max-[1500px]:!leading-[23px] 
          max-[2000px]:!text-[30px] 
          max-[1500px]:!text-[27px] 
          max-[1330px]:!text-[25px] 
          max-[1140px]:!text-[23px]               
          max-[850px]:!text-[20px] 
          max-[600px]:!text-[16px] 
          max-[1100px]:!leading-[17px]`}>
            ⁃ Доставка входит в стоимость кроссовок: вам не нужно отдельно её считать и
            оплачивать.
          </li>
          <br />
          <li className={styles.jost_p + ` font-jost max-[1500px]:!leading-[23px] 
          max-[2000px]:!text-[30px] 
          max-[1500px]:!text-[27px] 
          max-[1330px]:!text-[25px] 
          max-[1140px]:!text-[23px]               
          max-[850px]:!text-[20px] 
          max-[600px]:!text-[16px] 
          max-[1100px]:!leading-[17px]`}>
            ⁃ Мы принимаем возврат, если вещи не подошли.
          </li>
        </ul>
        {/* <div>
        <div className={styles.ramka_hiw + " mt-[15px] max-[1500px]:!leading-[17px] "}>
          <Image
            src={switchpng}
            alt="свитч"
          />

          <div className={styles.grid_hiw_3}>
            <h4 className={styles.h4 + ` pl-[20px] font-jost  
              max-[1860px]:!text-[30px] 
              max-[1700px]:!text-[25px] 
              max-[1500px]:!text-[22px] 
              max-[1330px]:!text-[20px] 
              max-[1140px]:!text-[17px] 
              max-[1100px]:!text-[13px] 
              max-[850px]:!text-[11px] 
              max-[780px]:!text-[9px] 
              max-[1100px]:!leading-[17px]
               `}>
              Сбор заказа
            </h4>
            <div className={styles.flex_items_center}>
              <div className="border-[2px] border-solid h-[2.5vw]">
              </div>
            </div>
            <p className={styles.jost_p + ` font-jost italic text-[#F5F5F5CC] w-[80%] 
            max-[2000px]:!text-[20px] 
            max-[1500px]:!text-[17px]
            max-[1500px]:!leading-[17px] 
            max-[1330px]:!text-[15px] 
            max-[1140px]:!text-[13px]               
            max-[850px]:!text-[11px] 
            max-[600px]:!text-[9px] 
            max-[1100px]:!leading-[17px]`}>
              В течении час вы получите карточку-подтверждение о выкупе товара.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.grid_hiw_4 + " mt-[2vw]"}>
            <p className={styles.jost_p + " ml-20"}>1</p>
            <p className={styles.jost_p + " ml-20"}>2</p>
            <p className={styles.jost_p + " ml-20"}>3</p>
            <p className={styles.jost_p + " ml-20"}>4</p>
          </div>
          <div className={styles.palochka}>
          </div>
        </div>
        </div> */}

      </div>



      <div className="grid grid-cols-3 max-[1300px]:!grid-cols-2 gap-5 text-center justify-items-center my-20 gap-x-4">
        <div className='flex flex-col gap-y-8 border-solid border-4 rounded-xl border-[#08DAD4] bg-black'>
          <div className={styles.flex_items_center + " justify-center mt-10"}>
            <Image
              src={recept}
              alt="recept"
              className="w-[3.6vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` text-center font-montserrat
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px] 
           max-[950px]:!text-[21px]
           max-[1100px]:!leading-[17px] font-bold`}>Ваш заказ</p>
          </div>

          <p className={styles.hiw_list + ` font-montserrat
           mb-10
           px-5
           text-center
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[9px] 
           max-[780px]:!text-[9px] 
           max-[1100px]:!leading-[17px]`}>
            План такой: в каталоге ищете то, что радует глаз,
            оплачиваете и получаете чек вместе с карточкой-подтверждением о выкупе товара.

          </p>
        </div>

        <div className='flex flex-col gap-y-8 border-solid border-4 rounded-xl border-[#08DAD4] bg-black'>
          <div className={styles.flex_items_center + " justify-center mt-10"}>
            <Image
              src={shopping_bag}
              alt="shopping_bag"
              className="w-[3.6vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` text-center font-bold font-montserrat
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px]
           max-[950px]:!text-[21px]        
           max-[1100px]:!leading-[17px]`}>Сбор заказа</p>
          </div>

          <p className={styles.hiw_list + ` font-montserrat
           mb-10
           px-5
           text-center
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[9px] 
           max-[780px]:!text-[9px] 
           max-[1100px]:!leading-[17px]`}>
            Наши коллеги в Китае ворожат над вашим заказом,
            проверяют, чтобы все было по высшему разряду и упаковывают так,
            чтобы не стыдно было потом в Инстаграмчик залить.
          </p>
        </div>

        <div className='flex flex-col gap-y-8 border-solid border-4 rounded-xl border-[#08DAD4] bg-black'>
          <div className={styles.flex_items_center + " justify-center mt-10"}>
            <Image
              src={carbon_delivery_parcel}
              alt="carbon_delivery-parcel"
              className="w-[3.6vw]" />
            &ensp;&ensp;
            <p className={styles.hiw_list + ` font-bold text-center font-montserrat
           max-[2000px]:!text-[30px] 
           max-[1700px]:!text-[28px]
           max-[1100px]:!text-[25px] 
           max-[950px]:!text-[21px]           
           max-[1100px]:!leading-[17px]`}>Доставка</p>
          </div>

          <p className={styles.hiw_list + ` font-montserrat
          px-5
           mb-10
           text-center
           max-[2000px]:!text-[24px] 
           max-[2000px]:!leading-[25px]
           max-[1700px]:!text-[20px]
           max-[1100px]:!text-[16px] 
           max-[850px]:!text-[9px] 
           max-[780px]:!text-[9px] 
           max-[1100px]:!leading-[17px]`}>
            Посылка со склада в Китае отправляется в Россию на ковре-самолёте,
            вся красивая, и застрахованная. В течение 2-3 недель она оказывается
            у своего счастливого обладателя!</p>
        </div>

      </div>
    </section >)
}
export default Slide4;
