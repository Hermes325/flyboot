import * as React from "react";
import Image from "next/image";

import whatsapp_path from "@/public/footer-images/whatsapp.svg";
import telegram_path from "@/public/footer-images/telegram.svg";
import group_path from "@/public/footer-images/Group.svg";
import WTF_path from "@/public/footer-images/WTF.svg";
import NavLink from "./link";

export default function Footer() {
  return (
    <footer
      id="Связаться"
      className="flex w-screen h-[169px] justify-center z-[1000] shadow bg-[#19191c]"
    >
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center">
        <div className="flex w-full justify-between">
          {/* links to pages */}
          <div className="flex flex-row space-x-72">
            <NavLink href="/Catalog">
              <h2 className="font-montserrat text-xl text-white">Каталог</h2>
            </NavLink>
            <NavLink href="/">
              <h2 className="font-montserrat text-xl text-white">О нас</h2>
            </NavLink>
            <NavLink href="/">
              <h2 className="font-montserrat text-xl text-white">FAQ</h2>
            </NavLink>
          </div>
          <div className="flex flex-row space-x-6">
            <p className="font-montserrat text-xl text-white">мы в соцсетях</p>
            <Image src={whatsapp_path} alt="whatsapp logo" />
            <Image src={telegram_path} alt="telegramlogo" />
            <Image src={group_path} alt="group logo" />
          </div>
        </div>

        <div className="">
          <p className="font-montserrat text-xl text-white">
            © 2022 Flyboots. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
