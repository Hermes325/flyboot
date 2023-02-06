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
    <section id="Как_это_работает?" className='flex justify-between px-[16.7vw]'>

      <div id='left сторона' >
        <h2 className={styles.h2 + " font-montserrat"}>Как это <br />работает?</h2>
        <p className={styles.jost_bledno + " mt-5"}>* очень просто</p>

        <ul className="mt-[1vw]">
          <p className={styles.jost_p}>
            Денег нет, но мы держимся:
          </p>
          <br />
          <li className={styles.jost_p}>
            ⁃ Работаем с сайтом POIZON. Все товары - оригинал, да еще и не по цене почки!
          </li>
          <br />
          <li className={styles.jost_p}>
            ⁃ Доставка входит в стоимость кроссовок: вам не нужно отдельно её считать и
            оплачивать.
          </li>
          <br />
          <li className={styles.jost_p}>
            ⁃ Мы принимаем возврат, если вещи не подошли.
          </li>
        </ul>

        <div className={styles.ramka_hiw + " mt-[15px]"}>
          <Image
            src={switchpng}
            alt="свитч"
          />

          <div className={styles.grid_hiw_3}>
            <h4 className={styles.h4 + " pl-[20px] font-jost"}>
              Сбор заказа
            </h4>
            <div className={styles.flex_items_center}>
              <div className="border-[2px] border-solid h-[2.5vw]">
              </div>
            </div>
            <p className={styles.jost_p + " w-[80%]"}>
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
      </div>

      <div className={styles.grid_hiw_2} id="праваясторона">
        <div className={styles.flex_items_center}>
          <Image
            src={recept}
            alt="recept" />
          &ensp;&ensp;
          <p className={styles.hiw_list + " font-montserrat"}>Ваш заказ</p>
        </div>
        <div className={styles.flex_items_center}>
          <Image
            src={shopping_bag}
            alt="shopping_bag" />
          &ensp;&ensp;
          <p className={styles.hiw_list + " font-montserrat"}>Сбор заказа</p>
        </div>
        <div className={styles.flex_items_center}>
          <Image
            src={carbon_delivery_parcel}
            alt="carbon_delivery-parcel" />
          &ensp;&ensp;
          <p className={styles.hiw_list + " font-montserrat"}>Доставка до вас</p>
        </div>
        <div className={styles.flex_items_center}>
          <Image
            src={ic_round_done}
            alt="ic_round-done" />
          &ensp;&ensp;
          <p className={styles.hiw_list + " font-montserrat"}>Завершение работы</p>
        </div>
      </div>
    </section>)
}
export default Slide4;
