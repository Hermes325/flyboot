import React from 'react'
import Slide1 from "./Landing/slide1";
import Slide2 from "./Landing/slide2";
import Slide3 from "./Landing/slide3";
import Slide4 from "./Landing/slide4";
import Slide5 from "./Landing/slide5";
import Slide6 from "./Landing/slide6";

const Landing = () => (
  <main className="flex flex-col items-center justify-start pt-[158px]">
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