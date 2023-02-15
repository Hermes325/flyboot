"use client";
import React, { useState } from "react";
import { Item } from "@/lib/datocms";
import { RootState } from "@/lib/redux/store/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import NavLink from "./link";
import HeaderSearchList from "./headerSearchList";
import FlyBoots_logo from "@/public/header-images/FlyBoots_logo.svg";
import bucket from "@/public/header-images/bucket.svg";
import menu_path from "@/public/header-images/menu.svg";
import menu_close_path from "@/public/header-images/close.svg";
import search_path from "@/public/header-images/search.svg";
// import styles 
import classNames from "classnames";

const links = [
  { href: "/Catalog", label: "Каталог" },
  { href: "#Как_это_работает?", label: "Как это работает?" },
  { href: "#A_what_with_delivery_?", label: "А что с доставкой?" },
  { href: "/about-us", label: "О нас" },
  { href: "#Связаться", label: "Связаться" },
  { href: "/FAQ", label: "FAQ" },
];

function BurgerHandle({ isNavOpen }: { isNavOpen: boolean }) {
  return isNavOpen ? (
    <Image
      src={menu_close_path}
      alt="закрыть меню"
      className="w-10 h-10" />
  ) : (
    <Image
      src={menu_path}
      alt="открыть меню"
      className="w-10 h-10" />)
}

// function SearchHandle({ isSearchOpen }: { isSearchOpen: boolean }) {
//   return isSearchOpen ? (
//     <Image
//       src={menu_close_path}
//       alt="search menu close image"
//       className="w-5 h-5"
//     />
//   ) : (
//     <Image src={search_path} alt="search menu open image" className="w-5 h-5" />
//   );
// }

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const bucketItems = useSelector((state: RootState) => state.items.reduce((sum, v) => sum + v.amount, 0));

  //#region Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [foundItems, setFoundItems] = useState<Item[]>([]);

  async function searchRequest(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setSearch(name);
    var foundItems: Item[] = [];
    setFoundItems(foundItems);

    if (name.length < 0) {
      setIsSearchOpen(false);
      return;
    }
    setIsSearchOpen(true);
    // Меньше 3 символов ничего не найдём
    if (name.length < 3) {
      return;
    }

    const found = await fetch(`/api/search?name=${name}`);
    foundItems = await found.json();
    console.log(foundItems);
    setFoundItems(foundItems);
  }
  //#endregion

  //#region UI
  const navLink = (href: string, label: string) =>
    <NavLink href={href} className="max-mobile:hidden">
      <h2 className="font-montserrat text-2xl tracking-wide hover:text-[#03FFF0]
        max-[1500px]:text-xl 
        max-[1330px]:text-lg 
        max-[1140px]:text-base 
        max-[720px]:text-sm">
        {label}
      </h2>
    </NavLink>

  //#endregion

  return (<header className="fixed w-full flex justify-center z-[100] shadow bg-[#000000] px-[13vw] max-mobile:pr-[20px]">

    {/* Logo and burger menu */}
    <nav className="flex flex-row items-center justify-between w-full h-[108px] max-[1080px]:h-[95px] max-[720px]:h-[85px] max-mobile:h-[63px]">
      <NavLink prefetch href="/">
        <Image
          src={FlyBoots_logo}
          alt="Fly Boots Logo"
          className="h-16 max-[1440px]:h-14 max-[1080px]:h-12 max-[720px]:h-11 max-mobile:h-12 w-20 max-[1440px]:w-[4.5rem] max-[1080px]:w-16 max-[720px]:w-14 max-mobile:w-14 object-cover"
        />
      </NavLink>

      <div className="flex flex-row space-x-[6vw] max-[1860px]:space-x-[5vw] max-[1440px]:space-x-[4vw] max-[1080px]:space-x-[3vw] max-[720px]:space-x-[2vw]">
        {navLink("/Catalog", "Каталог")}
        {navLink("/about-us", "О нас")}
        {navLink("/FAQ", "FAQ")}
      </div>

      <div className="flex flex-row justify-center items-center space-x-10 max-[1080px]:space-x-5 max-[720px]:space-x-3">
        {/* Поиск товаров */}
        <input
          placeholder="Поиск"
          className={classNames(
            "bg-transparent border-b-2 w-[200px] max-[1920px]:w-[180px] max-[1440px]:w-[160px] max-[1080px]:w-[120px] max-[720px]:w-[100px] max-mobile:hidden",
            { "!block w-[300px]": isSearchOpen }
          )}
          value={search}
          onChange={searchRequest}
        />
        {/* <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="mobile:hidden"
          >
            <SearchHandle isSearchOpen={isSearchOpen} />
          </button> */}

        <NavLink href="/Bucket" className="relative">
          <Image
            src={bucket}
            alt="bucket page logo"
            className="w-11 max-[1440px]:w-10 max-[1080px]:w-8 max-[720px]:w-[1.6rem] max-mobile:w-9 h-10 max-[1440px]:h-9 max-[1080px]:h-[1.85rem] max-[720px]:h-6 max-mobile:h-8 object-cover"
          />
          {bucketItems > 0 && <p className="w-[1.5rem] h-[1.5rem] text-center absolute top-[-10px] right-[-20px] rounded-[50%] bg-[red]">{bucketItems}</p>}
        </NavLink>

        <button
          onClick={() => setIsNavOpen(prev => !prev)}
          className="mobile:hidden"
        >
          {/*<BurgerHandle isNavOpen={isNavOpen} />*/}
          <Image
            src={menu_path}
            alt="открыть меню"
            className="w-10 h-10" />
        </button>
      </div>
    </nav>

    {/* Модальное окно поиска */}
    <div className={classNames(
      // "fixed z-[1] top-48 left-[50%] max-[1280px]:left-[5%] -translate-x-[50%] max-[1280px]:-translate-x-[0%] w-[1280px] max-[1280px]:w-[90%] max-w-[1280px] h-1/2 flex-col justify-center items-start pl-5 gap-10 bg-gray-300 rounded-xl opacity-0 hidden transition",
      "fixed z-[1] top-[108px] left-[16.7vw] w-[66.6vw] translate-x-0 h-1/4 flex-col justify-center items-start pl-5 gap-10 bg-black rounded-xl opacity-0 hidden transition",
      { "!flex opacity-90": isSearchOpen },
      "opacity-0 max-mobile:hidden"
    )}>
      <button
        onClick={() => {
          setSearch("");
          setIsSearchOpen(false);
        }}
        className="fixed right-4 top-4 max-mobile:hidden"
      >
        <Image src={menu_close_path} alt="close modal search" />
      </button>
      <HeaderSearchList items={foundItems} />
    </div>

    {/* Модальное окно навигации */}
    <nav
      className={classNames(
        "fixed z-[1] top-[0] bottom-[0] left-[0] w-[100vw] translate-x-0 flex flex-col justify-center items-center gap-10 bg-black rounded-xl opacity-0 invisible transition", {
        "!visible opacity-90": isNavOpen
      })}
      onClick={() => setIsNavOpen(false)}
    >
      <button
        onClick={() => {
          setSearch("");
          setIsNavOpen(false);
        }}
        className="fixed right-[23px] top-[15px]">
        <Image
          src={menu_close_path}
          alt="Закрыть окно поиска"
        // onClick={() => setIsNavOpen(() => {
        //   console.log(isNavOpen)
        //   return !isNavOpen
        // })}
        />
      </button>
      <HeaderSearchList items={foundItems} />
      <br />
      {links.map(({ href, label }, i) =>
        <NavLink
          key={href}
          href={href}
          prefetch={href.startsWith("/")}
          className="text-[#f9f9f9] hover:text-[#00b5b5] text-2xl"
          style={{ animationDelay: `0.${i + 1}s` }}>
          {label}
        </NavLink>)}
    </nav>

  </header>)
}

export default Header;
