"use client";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { Item } from "@/lib/datocms";

import NavLink from "./link";
import HeaderSearchList from "./headerSearchList";

import FlyBoots_logo from "@/public/header-images/FlyBoots_logo.svg";
import bucket from "@/public/header-images/bucket.svg";
import menu_path from "@/public/header-images/menu.svg";
import menu_close_path from "@/public/header-images/close.svg";
import search_path from "@/public/header-images/search.svg";

const links = [
  { href: "/Catalog", label: "Каталог" },
  { href: "#Как_это_работает?", label: "Как это работает?" },
  { href: "#A_what_with_delivery_?", label: "А что с доставкой?" },
  { href: "#About_us", label: "О нас" },
  { href: "#Связаться", label: "Связаться" },
];

function BurgerHandle({ isNavOpen }: { isNavOpen: boolean }) {
  return isNavOpen ? (
    <Image
      src={menu_close_path}
      alt="burger menu close image"
      className="w-5 h-5"
    />
  ) : (
    <Image src={menu_path} alt="burger menu open image" className="w-5 h-5" />
  );
}

function SearchHandle({ isSearchOpen }: { isSearchOpen: boolean }) {
  return isSearchOpen ? (
    <Image
      src={menu_close_path}
      alt="search menu close image"
      className="w-5 h-5"
    />
  ) : (
    <Image src={search_path} alt="search menu open image" className="w-5 h-5" />
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [foundItems, setFoundItems] = useState<Item[]>([]);

  async function searchRequest(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setSearch(name);

    // Меньше 3 символов ничего не найдём
    if (name.length < 3) return;

    const found = await fetch(`/api/search?name=${name}`);
    const foundItems: Item[] = await found.json();
    console.log(foundItems);
    setFoundItems(foundItems);
  }

  return (
    <header className="fixed w-screen flex justify-center z-[1000] shadow bg-[#000000] px-[10px] max-[1312px]:pr-[26px]">
      {/* Logo and burger menu */}
      <nav className="flex flex-row items-center justify-between w-full max-w-[1280px] min-h-[63px] h-[10vh] max-h-[108px]">
        <NavLink href="/">
          <Image
            src={FlyBoots_logo}
            alt="Fly Boots Logo"
            className="h-16 max-mobile:h-8 w-20 max-mobile:w-11 object-cover"
          />
        </NavLink>

        <NavLink href="/Catalog" className="max-mobile:hidden">
          <h2 className="font-montserrat text-xl tracking-wide hover:text-[#03FFF0]">
            Каталог
          </h2>
        </NavLink>
        <NavLink href="/About-us" className="max-mobile:hidden">
          <h2 className="font-montserrat text-xl tracking-wide hover:text-[#03FFF0]">
            О нас
          </h2>
        </NavLink>
        <NavLink href="/FAQ" className="max-mobile:hidden">
          <h2 className="font-montserrat text-xl tracking-wide hover:text-[#03FFF0]">
            FAQ
          </h2>
        </NavLink>

        <div className="flex flex-row justify-center items-center space-x-10">
          {/* Поиск товаров */}
          <input
            placeholder="Поиск"
            className={classNames(
              "bg-transparent border-b-2 w-[160px] max-mobile:hidden",
              { "!block w-[200px]": isSearchOpen }
            )}
            value={search}
            onChange={searchRequest}
          />
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="mobile:hidden"
          >
            <SearchHandle isSearchOpen={isSearchOpen} />
          </button>

          <NavLink href="/Bucket">
            <Image
              src={bucket}
              alt="bucket page logo"
              className="w-11 max-mobile:w-5 h-10 max-mobile:h-5"
            />
          </NavLink>

          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="mobile:hidden"
          >
            <BurgerHandle isNavOpen={isNavOpen} />
          </button>
        </div>
      </nav>

      {/* Модальное окно поиска */}
      <nav
        className={classNames(
          "fixed z-[1] top-48 left-[50%] max-[1280px]:left-[5%] -translate-x-[50%] max-[1280px]:-translate-x-[0%] w-[1280px] max-[1280px]:w-[90%] max-w-[1280px] h-1/2 flex-col justify-center items-start pl-5 gap-10 bg-gray-300 rounded-xl opacity-0 hidden transition",
          { "!flex opacity-90": search.length > 0 || isSearchOpen }
        )}
      >
        <button
          onClick={() => {
            setSearch("");
            setIsSearchOpen(false);
          }}
          className="fixed right-4 top-4"
        >
          <Image src={menu_close_path} alt="close modal search" />
        </button>
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
