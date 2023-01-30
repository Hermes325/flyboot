"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import NavLink from "./link";
import classNames from "classnames";
import logo_mini_path from "@/public/header-images/logo_mini.png";
import { Item, searchItem } from "@/lib/datocms";
import HeaderSearchList from "./headerSearchList";
import bucket_logo from "@/public/header-images/bucket_logo.svg";
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
  { href: "#Связаться", label: "Связаться" },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [search, setSearch] = useState("")
  const [foundItems, setFoundItems] = useState<Item[]>([])

  async function searchRequest(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value
    setSearch(name)

    // Меньше 3 символов ничего не найдём
    if (name.length < 3) return

    const found = await fetch(`/api/search?name=${name}`)
    const foundItems: Item[] = await found.json()
    console.log(foundItems);
    setFoundItems(foundItems)
  }

  return (
    <header className="fixed w-screen z-[1000] shadow">
      {/* Logo and burger menu */}
      <nav className="flex flex-row items-center justify-between px-16 w-full h-[108px] bg-[#19191c] text-[#f9f9f9] transition z-[100] top-0 left-0">
        <NavLink href="/">
          <Image
            src={logo_mini_path}
            alt="Fly Boots Logo"
            className="h-[55px] w-[70px]"
          />
        </NavLink>

        <div className="flex flex-row justify-center items-center space-x-10">
          {/* Поиск товаров */}
          <input
            placeholder="поиск"
            className="caret-pink-500 text-black"
            value={search}
            onChange={searchRequest} />

          <NavLink href="/Bucket">
            <Image
              src={bucket_logo}
              alt="bucket page logo"
              className="w-[50px] h-[50px]"
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
        </div>
      </nav>


      {/* Модальное окно поиска */}
      <nav
        className={classNames(
          "fixed z-[1] top-[108] left-0 flex flex-col justify-center items-center gap-10 w-full h-full bg-slate-700 opacity-0 invisible transition",
          { "!visible opacity-90": search.length > 0 }
        )}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <HeaderSearchList items={foundItems} />
      </nav>

      {/* Модальное окно навигации */}
      <nav
        className={classNames(
          "fixed z-[2] top-0 left-0 flex flex-col justify-center items-center gap-10 w-full h-full bg-black opacity-0 invisible transition",
          { "!visible opacity-90": isNavOpen }
        )}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {links.map(({ href, label }, i) => (
          <a
            className="text-[#f9f9f9] hover:text-[#00b5b5] text-5xl"
            style={{ animationDelay: `0.${i + 1}s` }}
            href={href}
            key={href}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
