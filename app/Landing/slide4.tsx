"use client";
import React from "react";
import Image from 'next/image'
import styles from "./styles/slide4.module.css";
// import switchpng from "@/public/main-images/switch.png";
// import recept from "@/public/main-images/recept.svg"
// import shopping_bag from "@/public/main-images/shopping_bag.svg"
// import carbon_delivery_parcel from "@/public/main-images/carbon_delivery-parcel.svg"
// import ic_round_done from "@/public/main-images/ic_round-done.png"
import wings_left from "@/public/main-images/wings_left.png";
import classNames from "classnames";
import Link from "next/link";
import HowItWorks from "@/lib/components/howItWorks/HowItWorks";

function Slide4() {
  return <section className=' px-[5vw] w-full mt-20 relative'>
    <h2 className={classNames(styles.h2, ` 
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
            max-[335px]:!text-[1.4rem]`)}>
      как <b> работает flyboots?</b>
    </h2>
    <h2 className={classNames(styles.h2, ` 
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
            max-[335px]:!text-[1.4rem]`)}>
      очень просто
    </h2>
    <Image
      src={wings_left}
      alt="Крылья"
      className={'max-w-[90vw] absolute top-24 left-[-5vw] z-[-1] max-[700px]:!top-5'}
    />

    <HowItWorks />

    <div className="flex justify-center mt-[6vh]  max-[600px]:!hidden ">
      <Link href="/catalog" >
        <button
          className={` 
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
              `}>
          Каталог товаров
        </button>
      </Link>
    </div>
  </section>
}
export default Slide4;
