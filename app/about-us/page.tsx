import React from 'react'
import styles from "../about-us/about_us.module.css"
import Image from 'next/image'
import box from "@/public/main-images/whitenike.png"
import new_balance from "@/public/main-images/new_balance.png"
import right_hand from "@/public/main-images/righthand.png"
import left_hand from "@/public/main-images/lefthand.png"



const About = () => {
  return (
    <main className={styles.main + ' relative overflow-hidden'}>
      <h1 className={styles.Montserrat700_2 + " font-montserrat max-[1300px]:!mt-[5vw] min-[2560px]:!text-[6.5rem] max-[1860px]:!text-[4.5rem] max-[1700px]:!text-[4rem] max-[1500px]:!text-[3.7rem] max-[1330px]:!text-[3.3rem] max-[1140px]:!text-[3rem] max-[600px]:!text-[2rem] max-[430px]:!text-[1.7rem] max-[350px]:!text-[1.4rem]"}>
        О нас
      </h1>

      <Image
        src={right_hand}
        alt="правая рука"
        className={styles.right_hand + " max-[1700px]:!top-[7%] max-[1400px]:!top-[8%] max-[1300px]:!top-[9%] max-[1000px]:!top-[11%] max-[1300px]:!w-[35%] max-[800px]:!top-[9%] max-[550px]:!top-[7%] max-[390px]:!top-[6%] max-[340px]:!top-[5%]"}
      />
      <div className='mt-[2vw] mb-[15vw]'>
        <div className='float-left w-[35%] max-[800px]:!hidden' >
          <Image
            src={box}
            alt="box"
            
          />
        </div>
        <div>
          <p className={styles.font_au + " font-montserrat text-justify min-[2560px]:!text-[6.5rem] max-[1650px]:!text-[22px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            Не так давно нам пришла идея сделать доставку в Россию качественной брендовой одежды по
            демократичным ценам доступной.
          </p>
          <p className={styles.font_au + " mt-[2.5vw] text-justify font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>

            Наше главное преимущество заключается в том, что мы доставляем оригинал по ценам,
            которых нет у других реселлеров. Подлинность всей продукции подтвердил бы даже
            Канье Вест клятвой на паре Yeezy.
          </p>
          <p className={styles.font_au + " mt-[2.5vw] text-justify font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            Нами движет желание продавать качественную обувь в России в условиях ее дефицита. Для этого мы
            проделали большую работу и сделали все, чтобы доставка была быстрой, а шоппинг комфортным
            благодаря
            удобному интерфейсу.
          </p>
          <p className={styles.font_au + " mt-[2.5vw] text-justify font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[22px]"}>
            Над тем, чтобы процесс выбора вами был удобным, трудится команда людей, которые не только
            разбираются в том, что делают, но и любят своё дело, поэтому служба поддержки магазина всегда
            готова
            помочь разобраться с возникающими вопросами, ведь мы всегда открыты к диалогу.
          </p>
          <p className={styles.font_au + " mt-[2.5vw] text-justify font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[28px]"}>
            Наша команда собирает для вас последние новости из мира стритвира и моды в целом, чтобы помогать
            вам
            с идеями и облегчать выбор, среди большого ассортимента товаров.
          </p>
        </div>
      </div>

      <Image
        src={left_hand}
        alt="левая рука"
        className={styles.left_hand + " max-[1700px]:!top-[7%] max-[1400px]:!top-[8%] max-[1300px]:!top-[10%] max-[1300px]:!w-[35%] max-[800px]:!top-[9%] max-[550px]:!top-[7%] max-[390px]:!top-[6%] max-[340px]:!top-[5%]"}
      />
    </main>);
}

export default About



   {/* <Image
        src={right_hand}
        alt="правая рука"
        className={styles.right_hand}
      />
      <div className='mt-[5vw] mb-[15vw]'>
        <div className={styles.flex_around}>
          <div className='w-[35%] relative'>
            <div className={styles.bc_block1} />
            <Image
              src={new_balance}
              alt="box"
              className="w-[75%]" />
          </div>
          <div className={styles.flex_colomn + " w-[62%]"}>
            <p className={styles.font_au + " font-montserrat  min-[2560px]:!text-[6.5rem] max-[1650px]:!text-[22px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[28px]"}>
              Не так давно нам пришла идея сделать доставку в Россию качественной брендовой одежды по
              демократичным ценам доступной.
            </p>
            <p className={styles.font_au + " mt-[2.5vw] font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[28px]"}>

              Наше главное преимущество заключается в том, что мы доставляем оригинал по ценам,
              которых нет у других реселлеров. Подлинность всей продукции подтвердил бы даже
              Канье Вест клятвой на паре Yeezy.
            </p>
            <p className={styles.font_au + " mt-[2.5vw] font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[28px]"}>
              Нами движет желание продавать качественную обувь в России в условиях ее дефицита. Для этого мы
              проделали большую работу и сделали все, чтобы доставка была быстрой, а шоппинг комфортным
              благодаря
              удобному интерфейсу.
            </p>
          </div>
        </div>

        <div className={styles.flex_around + " mt-2"}>
          <div className={styles.flex_colomn + " w-[68%]"}>

            <p className={styles.font_au + " font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[28px]"}>
              Над тем, чтобы процесс выбора вами был удобным, трудится команда людей, которые не только
              разбираются в том, что делают, но и любят своё дело, поэтому служба поддержки магазина всегда
              готова
              помочь разобраться с возникающими вопросами, ведь мы всегда открыты к диалогу.
            </p>

            <p className={styles.font_au + " mt-[2.5vw] font-montserrat  max-[1700px]:!mt-[25px] max-[1650px]:!text-[22px] max-[1550px]:!mt-[20px] max-[1400px]:!text-[20px] max-[1300px]:!text-[16px] max-[1250px]:!leading-[28px]"}>
              Наша команда собирает для вас последние новости из мира стритвира и моды в целом, чтобы помогать
              вам
              с идеями и облегчать выбор, среди большого ассортимента товаров.
            </p>
          </div>
          <div className='w-[30%] relative'>
            <div className={styles.bc_block2} />
            <Image
              src={box}
              alt="box"
              className="w-[85%]"
            />
          </div>
        </div>
      </div>

      <Image
        src={left_hand}
        alt="левая рука"
        className={styles.left_hand}
      /> */}