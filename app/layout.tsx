import Header from "./layouts/header";
import Footer from "./layouts/footer";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Inter, Jost, Montserrat, Roboto } from "@next/font/google";

const inter = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  display: "optional",
});

const jost = Jost({
  subsets: ["cyrillic"],
  variable: "--font-jost",
  display: "optional",
});

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  display: "optional",
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  display: "optional",
  weight: "100",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${montserrat.variable} ${jost.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <Header /> */}
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
