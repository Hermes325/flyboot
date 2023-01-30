"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import NavLink from "./link";
import classNames from "classnames";
import logo_mini_path from "@/public/header-images/logo_mini.png";
// import menu_path from "@/public/header-images/menu.svg";
// import menu_close_path from "@/public/header-images/close.svg";

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
});

const links = [
  { href: "/Catalog", label: "Каталог" },
  { href: "#Как_это_работает?", label: "Как это работает?" },
  { href: "#A_what_with_delivery_?", label: "А что с доставкой?" },
  { href: "#About_us", label: "О нас" },
  { href: "#Связаться", label: "Связаться" }
]

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed w-screen z-[1000] shadow">
      <nav className="flex flex-row items-center justify-between px-16 w-full h-[108px] bg-[#19191c] text-[#f9f9f9] transition z-[100] top-0 left-0">
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

      {/* Модальное окно навигации */}
      <nav
        className={classNames(
          "fixed z-[2] top-0 left-0 flex flex-col justify-center items-center gap-10 w-full h-full bg-black opacity-0 invisible transition",
          { "!visible opacity-90": isNavOpen }
        )}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {links.map(({ href, label }, i) =>
          <a
            className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
            style={{ animationDelay: `0.${i + 1}s` }}
            href={href}
            key={href}
          >
            {label}
          </a>)}
      </nav>
    </header>
  );
}

export default Header;
