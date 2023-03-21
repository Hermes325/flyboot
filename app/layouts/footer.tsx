import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import whatsapp_path from "@/public/footer-images/whatsapp.svg";
import telegram_path from "@/public/footer-images/telegram.svg";
import group_path from "@/public/footer-images/Group.svg";
import WTF_path from "@/public/footer-images/WTF.svg";

export default function Footer() {
  return (<footer id="Связаться" className="flex w-full h-[max] justify-center z-[1000] shadow bg-[#000]">

    <div className="flex flex-col w-full px-[10vw] py-[15px] justify-center items-center
        max-[1300px]:gap-2
      ">
      <div className="flex w-full justify-between items-center
          max-[1300px]:flex-col
          max-[1300px]:gap-5
        ">
        {/* links to pages */}
        <div className=" flex gap-5 max-[1300px]:w-[80%] max-[600px]:justify-between">
          <div>
            <Link href="/about-us">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0] w-[60px] ">
                О нас
              </h2>
            </Link>
            <Link href="/catalog">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0] my-2">
                Каталог
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/FAQ">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0]">
                FAQ
              </h2>
            </Link>
            <Link href="/privacy">
              <h2 className="font-montserrat text-xl text-white hover:text-[#03FFF0] my-2">
                Условия
              </h2>
            </Link>
          </div>


        </div>

        {/* gap: 1.5rem;
    margin: 0; */}
        <address className="flex flex-row space-x-6 items-center
            max-[1300px]:flex-col
            max-[1300px]:gap-3
            max-[1300px]:space-x-0
          ">
          <p className="font-montserrat text-xl text-white not-italic">
            Мы в соцсетях:
          </p>
          <div className="flex flex-row space-x-3 items-center">
            <Link href="https://t.me/flybootsfast">
              <Image src={telegram_path} alt="telegramlogo" className="w-10 h-10" />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=79254538329">
              <Image src={whatsapp_path} alt="whatsapp logo" className="w-10 h-10" />
            </Link>
            <Link href="https://www.avito.ru/user/a098c95004a262748dadc1caa85a103a/profile?src=sharing">
              <Image src={group_path} alt="авито logo" className="w-10 h-10" />
            </Link>
          </div>
        </address>
      
      </div>

      <div className="flex">
        <p className="font-montserrat text-base max-[600px]:text-sm max-[400px]:text-xs text-[#29D9CE]  text-center">
          © 2022 Flyboots.&nbsp;
        </p>
        <p className="font-montserrat text-base max-[600px]:text-sm max-[400px]:text-xs text-[#29D9CE]  text-center">
          Все права защищены.
        </p>
      </div>
    </div>

  </footer>)
}






