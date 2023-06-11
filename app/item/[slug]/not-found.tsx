import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return <main className='
    min-h-screen
    flex flex-col items-center justify-start pt-[30vh]'
  >
    <h1 className='font-montserrat text-5xl max-[900px]:text-4xl max-[600px]:text-3xl'>
      Товар не найден 💔
    </h1>

    <Link href='/catalog' className='text-3xl max-[900px]:text-2xl max-[600px]:text-xl text-black underline pt-[3rem]'>
      Вернуться на каталог
    </Link>

  </main>
}
