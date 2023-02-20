import React from "react";
import Slide1 from "./Landing/slide1";
import Slide2 from "./Landing/slide2";
import Slide3 from "./Landing/slide3";
import Slide4 from "./Landing/slide4";

const Landing = () => (
  <main className="min-h-screen flex flex-col items-center justify-start pt-[158px] max-[600px]:!pt-[110px] overflow-x-hidden bg-[url('../public/main-images/BGF8.jpg')] bg-cover bg-repeat-y">
    {/* Entry page slide */}
    <Slide1 />
    {/* Demo Catalog Boots */}
    <Slide2 />
    {/* Catalogs with category filters  */}
    {/* <Slide3 /> */}
    {/* How it works */}
    {/* <Slide4 /> */}
  </main>
);

export default Landing;
