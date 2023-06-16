import React from 'react'
import classNames from 'classnames'
import styles from './HowItWorks.module.css'

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-4 max-[900px]:!grid-cols-2 gap-5 text-center justify-items-start my-8 gap-x-4">
      <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
        <div className={classNames(styles.flex_items_center, " justify-start mt-6")}>
          <p className={classNames(styles.hiw_list, ` pl-5 uppercase text-start noto_offer text-black
         max-[2000px]:!text-[30px] 
         max-[1700px]:!text-[22px]
         max-[1100px]:!text-[20px] 
         max-[950px]:!text-[19px]
         max-[750px]:!text-[17px]
         max-[600px]:!text-[15px]
         max-[1100px]:!leading-[17px] font-bold`)}>
            оплата
          </p>
        </div>
        <p className={classNames(styles.hiw_list, `noto_offer
         mb-6
         px-5
         max-[600px]:!px-3
         text-black
         text-start
         max-[2000px]:!text-[24px] max-[2000px]:!leading-[25px]
         max-[1700px]:!text-[20px]
         max-[1100px]:!text-[16px] max-[1100px]:!leading-[17px]
         max-[850px]:!text-[14px] 
         max-[780px]:!text-[12px] 
         `)}>
          Оплата заказа и получение карточки-подтверждения о выкупе товара
        </p>
      </div>
      <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
        <div className={classNames(styles.flex_items_center, " justify-start mt-6")}>
          <p className={classNames(styles.hiw_list, ` pl-5 uppercase text-center font-bold noto_offer
         max-[2000px]:!text-[30px] 
         max-[1700px]:!text-[22px]
         max-[1100px]:!text-[20px] 
         max-[950px]:!text-[19px]
         max-[750px]:!text-[17px]
         max-[600px]:!text-[15px]       
         max-[1100px]:!leading-[17px] text-black`)}>Подготовка</p>
        </div>
        <p className={classNames(styles.hiw_list, `text-black  noto_offer
         mb-6
         px-5
         max-[600px]:!px-3 max-[600px]:!pr-1
         text-start
         max-[2000px]:!text-[24px] max-[2000px]:!leading-[25px]
         max-[1700px]:!text-[20px]
         max-[1100px]:!text-[16px] max-[1100px]:!leading-[17px]
         max-[850px]:!text-[14px] 
         max-[780px]:!text-[12px] 
         `)}>
          На данном этапе ваш заказ проходит подготовку
          к отправке в стране отправления
        </p>
      </div>
      <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
        <div className={classNames(styles.flex_items_center, " justify-start mt-6")}>
          <p className={classNames(styles.hiw_list, ` pl-5 text-black uppercase font-bold text-center noto_offer
         max-[2000px]:!text-[30px] 
         max-[1700px]:!text-[22px]
         max-[1100px]:!text-[20px] 
         max-[950px]:!text-[19px]
         max-[750px]:!text-[17px]
         max-[600px]:!text-[15px]           
         max-[1100px]:!leading-[17px]`)}>отправление</p>
        </div>

        <p className={classNames(styles.hiw_list, ` text-black noto_offer
        px-5
        max-[600px]:!px-3
        max-[600px]:!pr-0
         mb-6
         text-start
         max-[2000px]:!text-[24px] 
         max-[2000px]:!leading-[25px]
         max-[1700px]:!text-[20px]
         max-[1100px]:!text-[16px] 
         max-[850px]:!text-[14px] 
         max-[780px]:!text-[12px] 
         
         max-[1100px]:!leading-[17px]`)}>
          Посылка со склада отправляется в Россию,
          ориентировочный срок доставки 2-3 недели</p>
      </div>
      <div className='flex flex-col gap-y-8 shadow_border rounded-[10px] bg-[#fff] w-full '>
        <div className={classNames(styles.flex_items_center, " justify-start mt-6")}>
          {/* <Image
            src={carbon_delivery_parcel}
            alt="carbon_delivery-parcel"
            className="w-[3.6vw] max-[600px]:!w-[5vw] max-[500px]:!w-[6vw] max-[400px]:!w-[8vw]" /> */}
          &ensp;&ensp;
          <p className={classNames(styles.hiw_list, ` pl-1 text-black uppercase font-bold text-center noto_offer
         max-[2000px]:!text-[30px] 
         max-[1700px]:!text-[22px]
         max-[1100px]:!text-[20px] 
         max-[950px]:!text-[19px]
         max-[750px]:!text-[17px]
         max-[600px]:!text-[15px]          
         max-[1100px]:!leading-[17px]`)}>
            ПОЛУЧЕНИЕ
          </p>
        </div>

        <p className={classNames(styles.hiw_list, `text-black noto_offer
         px-5
         max-[600px]:!px-3
         mb-6
         text-start
         max-[2000px]:!text-[24px] max-[2000px]:!leading-[25px]
         max-[1700px]:!text-[20px]
         max-[1100px]:!text-[16px] max-[1100px]:!leading-[17px]
         max-[850px]:!text-[14px] 
         max-[780px]:!text-[12px] 
         `)}>
          Посылка прибыла в Россию
          и ее можно забирать</p>
      </div>
    </div>

  )
}

export default HowItWorks