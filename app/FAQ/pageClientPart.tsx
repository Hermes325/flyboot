'use client'
import React, { useState } from 'react'
import DropDown from "app/FAQ/dropDownFaq";
import styles from "./faq.module.css";


const FaqPageClient = () => {
  const [activeTab, setActiveTab] = useState('')
  const p = (text: string) =>
    <p className='font-montserrat text-black pl-[5%] '>{text}</p>

  return (<main className='pt-[90px] min-h-screen  px-[5%] mb-[5vw] max-[600px]:px-[5vw]'>

    <h1 className={styles.h1 + " max-[1000px]:text-[3rem] max-[800px]:text-[2.5rem] max-[700px]:text-[1.6rem]"}>
      <span className='font-normal'>часто задаваемые</span> <br /> вопросы
    </h1>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Почему везем с POIZON?">
      <div>
        {p(`POIZON (DEWU)- это китайский маркетплейс (аналог российского OZON) с двумя большими преимуществами -`)}
        <ol className='list-decimal list-inside my-[10px] pl-[5%]'>
          <li className='font-montserrat text-black my-[15px]'>Привлекательная стоимость товаров</li>
          <li className='font-montserrat text-black my-[15px]'>Многократная проверка всего товара на оригинальность.</li>
        </ol>
        {p(`Специальные оценщики проводят зрительный  и лабораторный анализ каждого продукта и помечают его пластиковой биркой с уникальным номером.
          К каждой вещи будет приложен   сертификат об оригинальности с QR кодом`)}
      </div>
    </DropDown>

    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Условия доставки">
      {p(`Доставка осуществляется в течение 2-3х недель и входит в стоимость товара, указанного на сайте.
       Вам не придётся кучу раз доплачивать за все подряд.Один раз заплатил, а дальше можно спокойно зачеркивать дни на календаре и ждать свои посылочки.`)}
    </DropDown>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Как заказать?">
      {p(`Заказ осуществляется в пару кликов: в каталоге на нашем сайте представлен список доступных товаров, из которого вы выбираете наиболее понравившийся вам и оплачиваете его. Далее дело остаётся за малым- мы выкупаем товар и нам отправляют его в Россию`)}
    </DropDown>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Застрахован ли товар на случай повреждения/утери?">
      {p(`Товар застрахован, так что в случае любой непонятной ситуации вы можете на нас положиться. Мы бережно относимся к каждому из наших клиентов и следим за тем, чтобы после оформления заказа каждый оставался качественно одетым и обутым, а его деньги при этому оставались в полной целости и сохранности.`)}
    </DropDown>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Могу ли я изменить/отменить заказ?">
      {p(`В заказ можно внести изменения до того момента, как он собран. Для этого свяжитесь с нами любым удобным способом, указанным в разделе «Контакты».`)}
    </DropDown>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="В какие города доставляете?">
      {p(`Мы доставляем по всей России, так что у Вас всегда будет возможно посверкать новыми Yeezy и похвастаться перед местными модниками.`)}
    </DropDown>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Как упаковывается посылка?">
      {p(`Товар доставляется в фирменной упаковке от POIZON, он герметично упакован, поэтому посылка доедет в целости и сохранности, вне зависимости от того, доставляют ли по воздуху, суше , или через спутник Илона Маска.`)}
    </DropDown>
    <DropDown activeTab={activeTab} setActiveTab={setActiveTab} title="Застрахована ли доставка?">
      {p(`Да, застрахована. Поэтому даже если что-то случится, что очень маловероятно, потому что мы находимся на страже сохранности ваших новомодных товаров, посылки все равно застрахановы, и вы можете спать спокойно!`)}
    </DropDown>

  </main>)
}

export default FaqPageClient