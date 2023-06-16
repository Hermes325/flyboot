import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Providers } from "./layouts/provider";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Inter, Montserrat, Lato, Noto_Sans } from "next/font/google";
import { register } from "swiper/element/bundle";
import classNames from "classnames";

register();

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "optional",

});

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-montserrat",
  display: "optional",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "optional",
  weight: "400",
});

const noto = Noto_Sans({
  subsets: ["cyrillic"],
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        noto.variable,
        inter.variable,
        montserrat.variable,
        lato.variable)}>
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
