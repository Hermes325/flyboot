import * as React from "react";
import Image from "next/image";

import whatsapp_path from "@/public/footer-images/whatsapp.svg";
import telegram_path from "@/public/footer-images/telegram.svg";
import group_path from "@/public/footer-images/Group.svg";
import WTF_path from "@/public/footer-images/WTF.svg";
import NavLink from "./link";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="Связаться"
      className="flex w-full h-[max] justify-center z-[1000] shadow bg-[#000]"
    >
      <div className="flex flex-col w-full px-[13vw] py-[15px] justify-center items-center
        max-[1300px]:gap-2
      ">
        <div className="flex w-full justify-between items-center
          max-[1300px]:flex-col
          max-[1300px]:gap-5
        ">
          {/* links to pages */}
          <div className="flex flex-row space-x-28">
            <NavLink href="/Catalog">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0]">
                Каталог
              </h2>
            </NavLink>
            <NavLink href="/About-us">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0]">
                О нас
              </h2>
            </NavLink>
            <NavLink href="/FAQ">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0]">
                FAQ
              </h2>
            </NavLink>
          </div>
          <address className="flex flex-row space-x-6 items-center
            max-[1300px]:flex-col
            max-[1300px]:gap-3
          ">
            <p className="font-montserrat text-xl text-white not-italic">
              Мы в соцсетях:
            </p>
            <div className="flex flex-row space-x-6 items-center">
              <Image src={whatsapp_path} alt="whatsapp logo" />
              <Link href="https://t.me/flybootsfast">
                {" "}
                <Image src={telegram_path} alt="telegramlogo" />
              </Link>
              <Image src={group_path} alt="авито logo" />
            </div>
          </address>
        </div>

        <div className="">
          <p className="font-montserrat text-m text-[#29D9CE]">
            © 2022 Flyboots. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
