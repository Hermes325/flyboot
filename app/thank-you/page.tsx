import React from 'react'
import Link from 'next/link'

const ThankPage = () => {
  return (<main className='min-h-screen flex flex-col items-center justify-start pt-[158px]'>
    <h1 className='font-montserrat'>Благодарим за покупку ♥</h1>
    <p className='font-roboto'>Мы отправили чек на вашу почту</p>
    <address>
      <p>За помощью с заказом обращайтесь {"<... Куда? ...>"}</p>
    </address>

    <Link className='text-white underline' href='/catalog'>
      Вернуться на каталог
    </Link>

  </main>)
}

export default ThankPage