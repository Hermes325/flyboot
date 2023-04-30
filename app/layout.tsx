import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Providers } from "./layouts/provider";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Inter, Jost, Montserrat, Roboto, Lato } from "@next/font/google";
import { register } from "swiper/element/bundle";

register();

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "optional",
  
});

const jost = Jost({
  subsets: ["cyrillic", "latin"],
  variable: "--font-jost",
  weight: "variable",
  display: "optional",
});

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-montserrat",
  display: "optional",
});

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  variable: "--font-roboto",
  display: "optional",
  weight: "100",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "optional",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable} 
        ${roboto.variable} 
        ${montserrat.variable} 
        ${jost.variable} 
        ${lato.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <script
          defer
          type="text/javascript"
          src="https://widget.cdek.ru/widget/widjet.js"
          id="ISDEKscript"
        />
        <script
          defer
          type="text/javascript"
          src="https://www.payanyway.ru/assistant-builder"
        />
        <script
          defer
          type="text/javascript"
          src="https://points.boxberry.ru/js/boxberry.js"
        />
        <script defer type="text/javascript" src="/yandex-metrica.js" />
      </head>
      <body className="bg-[#F5F5F5]">
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
