import React from 'react'
import Slide1 from "./Sections/slide1";
import Slide2 from "./Sections/slide2";
import Slide3 from "./Sections/slide3";
import Slide4 from "./Sections/slide4";
import Slide5 from "./Sections/slide5";
import Slide6 from "./Sections/slide6";
import { GetStaticProps, InferGetStaticPropsType } from 'next'


export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://.../posts')
  const posts: Item[] = await res.json()

  return {
    props: {
      posts,
    }
  }
}

const Landing = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <main className="flex flex-row">
    {/* Entry page slide */}
    <Slide1 />
    {/* Demo Catalog Boots */}
    <Slide2 />
    {/* Catalogs with category filters  */}
    <Slide3 />
    {/* How it works */}
    <Slide4 />
    {/* About delivery */}
    <Slide5 />
    {/* About us */}
    <Slide6 />
  </main>)

export default Landing