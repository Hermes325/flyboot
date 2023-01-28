import Header from "./layouts/header";
import Footer from "./layouts/footer";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
