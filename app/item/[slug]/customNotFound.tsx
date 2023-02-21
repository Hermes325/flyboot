import React from 'react'
import Link from 'next/link'

const CustomNotFound = () => {
  return (<main className='
    min-h-screen
    flex flex-col items-center justify-start pt-[158px]'
  >
    <h1 className='font-montserrat'>Товар не найден 💔</h1>

    <Link className='text-white underline' href='/catalog'>
      Вернуться на каталог
    </Link>

  </main>)
}

export default CustomNotFound