import Image from "next/image";
import Slide1 from "./Sections/slide1";
import Slide2 from "./Sections/slide2";
import Slide3 from "./Sections/slide3";
import Slide4 from "./Sections/slide4";
import Slide5 from "./Sections/slide5";
import Slide6 from "./Sections/slide6";

export default function Home() {
  return (
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
    </main>
  );
}
