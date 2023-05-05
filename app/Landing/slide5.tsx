"use client";
import React from "react";
import Image from 'next/image'
import styles from "./styles/slide4.module.css";
import carbon_delivery_parcel from "@/public/main-images/carbon_delivery-parcel.svg"



function Slide5() {
    return (
        <section className=' px-[5vw] w-full mt-20 h-[60vh] max-[700px]:!h-[0vh]'>
            <h2 className={styles.h2 + ` 
            max-[1920px]:!text-[4rem]
            noto_offer text-center
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
                ваши <b>отзывы</b>
            </h2>

            <div className="grid grid-cols-[27%_27%_27%] justify-center max-[700px]:!grid-cols-1 gap-5 text-center justify-items-start my-8 gap-x-4">

                <div className='flex flex-col justify-evenly px-[5%] shadow_border rounded-[10px] bg-[#fff] w-full '>
                    <p className={styles.hiw_list +
                        ` 
                    noto_offer
                    px-5
                    mb-5
                    text-black
                    text-start
                    max-[2000px]:!text-[24px] 
                    max-[2000px]:!leading-[25px]
                    max-[1700px]:!text-[20px]
                    max-[1100px]:!text-[16px] 
                    max-[850px]:!text-[14px] 
                    max-[780px]:!text-[12px] 
                    max-[600px]:!text-[16px] 
                    max-[1100px]:!leading-[17px]
                    `}>
                        Заказал у FLYBOOTS кроссовки мечты, все прошло отлично!

                    </p>
                    <p className="text-end ">
                        Максим
                    </p>
                </div>
                <div className='flex flex-col justify-evenly px-[5%] shadow_border rounded-[10px] bg-[#fff] w-full '>
                    <p className={styles.hiw_list +
                        ` 
                    noto_offer
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
                    max-[1100px]:!leading-[17px]
                    `}>
                        Быстрая доставка, учитывая, что заказ идет из заграницы. Буду заказывать еще!

                    </p>
                    <p className="text-end ">
                        Александра
                    </p>
                </div>
                <div className='flex flex-col justify-evenly px-[5%] shadow_border rounded-[10px] bg-[#fff] w-full '>
                    <p className={styles.hiw_list +
                        ` 
                    noto_offer
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
                    max-[1100px]:!leading-[17px]
                    `}>
                        Очень удобная платформа для заказа, долго искал одну модель кроссовок - нашел у FLYBOOTS

                    </p>
                    <p className="text-end ">
                        Михаил
                    </p>
                </div>

            </div>
        </section >)
}
export default Slide5;
