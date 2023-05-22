import React from 'react'
import styles from "../about-us/about_us.module.css"
import Image from 'next/image'
import box from "@/public/main-images/whitenike.png"
import left_hand from "@/public/main-images/lefthand.png"
import sky from "@/public/main-images/sky.png"
import brownshoes from "@/public/main-images/brownshoes.png"
import fila from "@/public/main-images/fila.png"
import team from "@/public/main-images/team.png"



const About = () => {
  return (
    <main className={styles.main + ' relative overflow-hidden max-[1300px]:!px-[5%]'}>
      <h1 className={styles.Montserrat700_2 + 'max-[1300px]:!leading-6 uppercase max-[1300px]:!mt-[5vw] min-[2560px]:!text-[6.5rem] max-[1860px]:!text-[4.5rem] max-[1700px]:!text-[4rem] max-[1500px]:!text-[3.7rem] max-[1330px]:!text-[3.3rem] max-[1140px]:!text-[2.8rem] max-[600px]:!text-[2rem] max-[430px]:!text-[1.7rem] max-[350px]:!text-[1.4rem]'}>
        ресейл-платформа <b> flyboots</b>
      </h1>

      <div className='mt-[2vw] grid grid-cols-[60%_35%] items-center max-[800px]:!grid-cols-1 gap-[5%] max-[1300px]:!gap-5 '>
        <div className=' max-[800px]:!py-5 bg-white rounded-[15px] px-10 py-5 flex flex-col justify-between max-[900px]:!gap-5 max-[900px]:!px-5 h-full'>
          <h2 className='uppercase font-bold text-2xl'>онлайн-магазин flyboots</h2>
          <p className='text-base max-[1300px]:!text-[15px]'>Привет! Ты на сайте <b>FlyBoots</b> — идеальной платформе для поиска кроссовок.
            У нас есть все — от классики до лимитированных коллекций <b>Nike, Adidas, New Balance</b>
            и других брендов. Теперь можно легко найти модель, которая подойдет именно тебе.
            Мы гарантируем оригинальность каждой пары и оперативную доставку в Россию.
          </p>
          <p className='max-[1300px]:!text-[15px]'>
            Радуйся покупкам и наслаждайся любимыми брендами с FlyBoots!
          </p>
        </div>
        <div className=' w-full' >
          <Image
            src={sky}
            alt="sky"
            className='bg-cover'
          />
        </div>
      </div>

      <div className='mt-[5vw] grid grid-cols-[60%_35%] items-center max-[800px]:!grid-cols-1 gap-[5%] max-[1300px]:!gap-5'>
        <div className='grid grid-rows-2 gap-5 h-full'>
          <div className=' max-[800px]:!py-5 bg-white rounded-[15px] px-10 py-5 flex flex-col justify-between max-[900px]:!px-5 '>
            <h2 className='uppercase font-bold text-2xl'>миссия flyboots</h2>
            <p className='text-base max-[1300px]:!text-[15px]'>
              Мы знаем, как трудно найти качественную обувь в России.
              Поэтому наша команда приложила максимум усилий, чтобы сделать ваш шоппинг в <b>FlyBoots</b> приятным и
              комфортным и доставлять оригинальные бренды в любую точку России!
            </p>
          </div>
          <div className=' max-[800px]:!py-5 bg-white rounded-[15px] px-10 py-5 flex flex-col justify-between max-[900px]:!gap-5 max-[900px]:!px-5'>
            <h2 className='uppercase font-bold text-2xl'>наше преимущество</h2>
            <p className='text-base max-[1300px]:!text-[15px]'>
              <b>FlyBoots предлагает только оригинальные бренды.</b> Товар проходит сертификацию и тестирование
              на платформе Poizon, через которую мы заказываем все наши товары. Вы можете быть уверены в том,
              что покупаете оригинальный товар.
            </p>
          </div>
        </div>

        <div className=' w-full' >
          <Image
            src={brownshoes}
            alt="brownshoes"
            className='bg-cover'
          />
        </div>
      </div>

      <div className='mt-[5vw] grid grid-cols-[35%_60%] items-center max-[800px]:!grid-cols-1 max-[800px]:!flex max-[800px]:!flex-col-reverse gap-[5%] max-[1300px]:!gap-5'>
        <div className=' w-full' >
          <Image
            src={fila}
            alt="fila"
            className='bg-cover'
          />
        </div>
        <div className=' bg-white rounded-[15px] pt-5 flex flex-col justify-between max-[900px]:!gap-5 h-full'>
          <h2 className='uppercase font-bold text-2xl px-10 max-[900px]:!px-5'>быстрый и удобный шоппинг</h2>
          <p className='text-base max-[1300px]:!text-[15px] px-10 max-[900px]:!px-5'>
            <b>Наша цель — сделать шопинг в условиях дефицита комфортным.</b>
            Знаем, что тебе не терпится получить заказ, поэтому мы делаем все, чтобы оформить его было легко,
            а доставка осуществлялась как можно быстрее.
          </p>
          <a href="/catalog" className='flex justify-center bg-black hover:bg-white border-[1px] border-black h-[50px] rounded-b-[15px]'>
            <button className='text-white uppercase w-full hover:text-black'>
              перейти в каталог
            </button>
          </a>
        </div>
      </div>

      <div className='mt-[5vw] grid grid-cols-[35%_60%] items-center max-[800px]:!flex max-[800px]:!flex-col-reverse gap-[5%] max-[1300px]:!gap-5 mb-10'>
        <div className=' w-full' >
          <Image
            src={team}
            alt="team"
            className='bg-cover'
          />
        </div>

        <div className='grid grid-rows-2 gap-5 h-full'>
          <div className=' max-[800px]:!py-5 bg-white rounded-[15px] px-10 py-5 flex flex-col justify-between max-[900px]:!gap-5 max-[900px]:!px-5'>
            <h2 className='uppercase font-bold text-2xl'>наша Команда</h2>
            <p className='text-base max-[1300px]:!text-[15px]'>
              Команда FlyBoots – профессионалы своего дела.
              Мы отвечаем за качество товара в магазине и следим за последними тенденциями в мире моды,
              чтобы предлагать вам самые актуальные новинки <b>Adidas, Nike, New Balance, Jordan, Tom Ford</b> и
              других брендов!
            </p>
          </div>

          <div className=' max-[800px]:!py-5 bg-white rounded-[15px] px-10 py-5 flex flex-col justify-center gap-8 max-[900px]:!px-5'>
            <h2 className='uppercase font-bold text-2xl'>Всегда НА СВЯЗИ</h2>
            <p className='text-base max-[1300px]:!text-[15px]'>
              Мы готовы ответить на любые вопросы в  <a href="https://t.me/flybootsfast"> <b>Telegram</b></a>. Напиши нам,
              если хочешь оставить отзыв или получить помощь по поиску нужного товара.
            </p>
          </div>
        </div>
      </div>

    </main>);
}

export default About

