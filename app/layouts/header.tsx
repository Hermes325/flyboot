"use client";
import React, { useEffect, useState } from "react";
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
import classNames from "classnames";

const links = [
  { href: "/catalog", label: "Каталог" },
  { href: "#Как_это_работает?", label: "Как это работает?" },
  { href: "#A_what_with_delivery_?", label: "А что с доставкой?" },
  { href: "/about-us", label: "О нас" },
  { href: "#Связаться", label: "Связаться" },
  { href: "/FAQ", label: "FAQ" },
];

function BurgerHandle({ isNavOpen }: { isNavOpen: boolean }) {
  return isNavOpen ? (
    <Image src={menu_close_path} alt="закрыть меню" className="w-10 h-10" />
  ) : (
    <Image src={menu_path} alt="открыть меню" className="w-10 h-10" />
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const bucketItems = useSelector((state: RootState) =>
    state.items.reduce((sum, v) => sum + v.amount, 0)
  );

  //#region Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchDesktopOpen, setIsSearchDesktopOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchDesktop, setSearchDesktop] = useState("");
  const [foundItems, setFoundItems] = useState<Item[]>([]);
  const [foundItemsDesktop, setFoundItemsDesktop] = useState<Item[]>([]);

  // search on mobile version
  async function searchRequest(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setSearch(name);

    setFoundItems([] as Item[]);

    // zero symbols = zero search
    if (name.length < 0) {
      setIsSearchOpen(false);
      return;
    }
    // less then 3 symbols is nothing to search
    if (name.length < 3) {
      setIsSearchOpen(false);
      return;
    }
    setIsSearchOpen(true);

    // search items by substring
    const found = await fetch(`/api/search?name=${name}`);
    setFoundItems(await found.json());
    console.log(foundItems);
  }

  // search on Desktop
  async function searchDesktopRequest(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const name = event.target.value;
    setSearchDesktop(name);
    setFoundItemsDesktop([] as Item[]);

    // zero symbols = zero search
    if (name.length < 0) {
      setIsSearchDesktopOpen(false);
      return;
    }
    // less then 3 symbols is nothing to search
    if (name.length < 3) {
      setIsSearchDesktopOpen(false);
      return;
    }
    setIsSearchDesktopOpen(true);

    // search items by substring
    const found = await fetch(`/api/search?name=${searchDesktop}`);
    setFoundItemsDesktop(await found.json());
    console.log(foundItemsDesktop);
  }

  // clear search attributes after routing
  const clearSearch = () => {
    setSearch("");
    setIsSearchOpen(false);
    setSearchDesktop("");
    setIsSearchDesktopOpen(false);
    setIsNavOpen(false);
    setFoundItems([] as Item[]);
    setFoundItemsDesktop([] as Item[]);
  };

  //#endregion

  //#region UI
  const navLink = (href: string, label: string) => (
    <NavLink href={href} className="max-mobile:hidden">
      <h2
        className="font-montserrat text-2xl tracking-wide hover:text-[#03FFF0]
        max-[1500px]:text-xl 
        max-[1330px]:text-lg 
        max-[1140px]:text-base 
        max-[720px]:text-sm"
      >
        {label}
      </h2>
    </NavLink>
  );

  //#endregion

  return (
    <header
      id="layout-header"
      className="fixed w-full flex justify-center z-[100] shadow bg-[#000000] px-[13vw] max-mobile:pr-[20px]"
    >
      {/* Logo and burger menu */}
      <nav className="flex flex-row items-center justify-between w-full h-[108px] max-[1080px]:h-[95px] max-[720px]:h-[85px] max-mobile:h-[63px]">
        <NavLink prefetch href="/" setOpen={clearSearch}>
          <Image
            src={FlyBoots_logo}
            alt="Fly Boots Logo"
            className={classNames(
              "h-16 max-[1440px]:h-14 max-[1080px]:h-12 max-[720px]:h-11 max-mobile:h-12 w-20 max-[1440px]:w-[4.5rem] max-[1080px]:w-16 max-[720px]:w-14 max-mobile:w-14 object-cover",
              { "hidden ": isNavOpen }
            )}
          />
        </NavLink>

        <div className="flex flex-row space-x-[6vw] max-[1860px]:space-x-[5vw] max-[1440px]:space-x-[4vw] max-[1080px]:space-x-[3vw] max-[720px]:space-x-[2vw]">
          {navLink("/catalog", "Каталог")}
          {navLink("/about-us", "О нас")}
          {navLink("/FAQ", "FAQ")}
        </div>

        <input
          placeholder="Поиск"
          className={classNames(
            "bg-transparent border-b-2 w-full mobile:hidden text-white",
            { "hidden ": !isNavOpen }
          )}
          value={search}
          onChange={searchRequest}
        />

        <button
          className={classNames(
            "border-2 rounded-lg p-1 ml-2 border-[#919191] hidden",
            {
              "!block ": search.length > 0 && isNavOpen,
            }
          )}
          onClick={() => {
            setSearch("");
            setFoundItems([] as Item[]);
          }}
        >
          <p>Отмена</p>
        </button>

        <div className="flex flex-row justify-center items-center space-x-10 max-[1080px]:space-x-5 max-[720px]:space-x-3">
          {/* Search items 
          2 inputs for 1 reason i know its govnocode*/}
          <input
            placeholder="Поиск"
            className={classNames(
              "bg-transparent border-b-2 w-[200px] max-[1920px]:w-[180px] max-[1440px]:w-[160px] max-[1080px]:w-[120px] max-[720px]:w-[100px] max-mobile:hidden text-white"
            )}
            value={searchDesktop}
            onChange={searchDesktopRequest}
          />
          <div className="flex flex-row space-x-5">
            {/* bucket picture and route to bucket page */}
            <NavLink
              href="/bucket"
              className={classNames("relative", { " hidden": isNavOpen })}
              setOpen={clearSearch}
            >
              <Image
                src={bucket}
                alt="bucket page logo"
                className={classNames(
                  "w-11 max-[1440px]:w-10 max-[1080px]:w-8 max-[720px]:w-[1.6rem] max-mobile:w-9 h-10 max-[1440px]:h-9 max-[1080px]:h-[1.85rem] max-[720px]:h-6 max-mobile:h-[2.05rem] object-cover",
                  { " hidden": isNavOpen }
                )}
              />
              {bucketItems > 0 && (
                <p className="w-[1.5rem] h-[1.5rem] text-center absolute top-[-10px] right-[-20px] rounded-[50%] bg-[red]">
                  {bucketItems}
                </p>
              )}
            </NavLink>

            <button
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
              className="mobile:hidden"
            >
              <BurgerHandle isNavOpen={isNavOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* modal window of navigation on mobile version */}
      <nav
        className={classNames(
          "fixed z-[1] top-[63px] left-[0] w-[100vw] h-full translate-x-0 flex flex-col justify-start items-center space-y-5 bg-black bg-opacity-0 invisible transition mobile:hidden",
          {
            "!visible !bg-opacity-90": isNavOpen,
          },
          { "justify-center": foundItems.length === 0 }
        )}
      >
        <HeaderSearchList items={foundItems} setOpen={setIsNavOpen} />

        {foundItems.length === 0 && (
          <div className="flex flex-col justify-center items-center space-y-2">
            {links.map(({ href, label }, i) => (
              <NavLink
                key={href}
                href={href}
                prefetch={href.startsWith("/")}
                className="text-[#f9f9f9] hover:text-[#00b5b5] text-xl"
                style={{ animationDelay: `0.${i + 1}s` }}
                setOpen={clearSearch}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* modal window of search on desktop version */}
      <div
        className={classNames(
          "fixed z-[1] top-[108px] max-[1080px]:top-[95px] max-[720px]:top-[85px] max-[600px]:!hidden min-h-[150px] h-fit w-[600px] max-[1600px]:w-[500px] max-[1080px]:w-[400px] byGMD max-[720px]:w-[300px] right-[13vw] translate-x-0  flex-col justify-center items-center gap-10 bg-black rounded-b-lg bg-opacity-0 hidden transition",
          { "!flex !bg-opacity-90": isSearchDesktopOpen }
        )}
      >
        <button
          onClick={() => {
            setSearchDesktop("");
            setIsSearchDesktopOpen(false);
          }}
          className="fixed right-4 top-4"
        >
          <Image src={menu_close_path} alt="close modal search" />
        </button>
        <HeaderSearchList items={foundItemsDesktop} setOpen={clearSearch} />
      </div>
    </header>
  );
}

export default Header;
