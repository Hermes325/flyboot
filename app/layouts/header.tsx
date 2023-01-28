"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

import { Inter } from "@next/font/google";

import NavLink from "./link";

import logo_mini_path from "@/public/header-images/logo_mini.png";
// import menu_path from "@/public/header-images/menu.svg";
// import menu_close_path from "@/public/header-images/close.svg";

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
});

var classNames = require("classnames");

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed w-screen z-[1000] shadow">
      <nav className="flex flex-row items-center justify-between px-16 w-full h-[72px] bg-[#19191c] text-[#f9f9f9] transition z-[100] top-0 left-0">
        <NavLink href="/">
          <Image
            src={logo_mini_path}
            alt="Fly Boots Logo"
            className="h-[55px] w-[55px]"
          />
        </NavLink>

        <div
          className={classNames(
            "z-[3] grid place-items-center w-[20px] h-[20px] bg-[url('../public/header-images/menu.svg')] bg-no-repeat bg-center transition delay-150 duration-300 ease-in-out hover:animate-pulse",
            {
              "bg-[url('../public/header-images/close.svg')] transition":
                isNavOpen,
            }
          )}
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </nav>

      <nav
        className={classNames(
          "fixed z-[2] top-0 left-0 flex flex-col justify-center items-center gap-10 w-full h-full bg-black opacity-0 invisible transition",
          { "!visible opacity-90": isNavOpen }
        )}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
          style={{ animationDelay: "0.1s" }}
          href="/Catalog"
        >
          Каталог
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
          style={{ animationDelay: "0.2s" }}
          href="#Как_это_работает?"
        >
          Как это работает ?
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
          style={{ animationDelay: "0.3s" }}
          href="#A_what_with_delivery_?"
        >
          А что с доставкой ?
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
          style={{ animationDelay: "0.4s" }}
          href="#About_us"
        >
          О нас
        </a>
        <a
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
          style={{ animationDelay: "0.5s" }}
          href="#Связаться"
        >
          Связаться
        </a>
      </nav>
    </header>
  );
}

export default Header;
