import React from 'react'
import DropDown from "app/FAQ/dropDownFaq";

const questions = [{
  title: "Условия доставки",
  description: `Доставка осуществляется в течение 2-3х недель и входит в стоимость товара, указанного на сайте.Тебе не придётся кучу раз доплачивать за все подряд.Один раз заплатил, а дальше можно спокойно зачеркивать дни на календаре и ждать свои посылочки.`
},
{
  title: "Как заказать?",
  description: `Заказ осуществляется в пару кликов: в каталоге на нашем сайте представлен список доступных товаров, из которого вы выбираете наиболее понравившийся вам и оплачиваете его. Далее дело остаётся за малым - мы выкупаем товар и нам отправляют его в Россию`
}]


const Faq = () => {
  return (
    <main className='pt-[108px] min-h-screen'>
      <h1>FAQ</h1>
      {questions.map((question, i) =>
        <DropDown title={question.title} description={question.description} key={i} />)}

    </main>)
}

export default Faq