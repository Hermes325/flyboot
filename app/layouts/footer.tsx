import * as React from "react";
import Image from "next/image";

import avito_path from "@/public/footer-images/avito.svg";
import end_path from "@/public/footer-images/end.svg";
import tg_path from "@/public/footer-images/tg.svg";
import vk_path from "@/public/footer-images/vk.svg";
import WTF_path from "@/public/footer-images/WTF.svg";

export default function Footer() {
  return (
    <footer id="Связаться" className="flex justify-between items-start">
      <div>
        <h2 className="text-4xl tracking-[.01em] font-medium">
          Остались вопросы?
        </h2>
        <p className=" text-xl tracking-[.01em] font-light text-opacity-70">
          С радостью ответим на все из них
        </p>
        <div className="flex">
          <div className="flex-col">
            <a
              href="https://www.vk.ru/"
              className="flex items-center justify-center box-border w-[23vw] h-[9vw] mt-[15%] bg-[#0077FF] backdrop-blur-2xl rounded-[1.9vw] border-[0.2vw]"
            >
              <div>
                <h5 className="text-[#FAFAFA] text-4xl tracking-[.01em] font-medium">
                  Мы в VK
                </h5>
              </div>
              <Image
                src={vk_path}
                alt="vk_icon"
                style={{ transform: "translate(-1vw, 1vw)" }}
              />
            </a>
            <a
              href="https://www.tg.ru/"
              className="flex items-center justify-center box-border w-[23vw] h-[9vw] mt-[4%] bg-[#009BFF] backdrop-blur-2xl rounded-[1.9vw] border-[0.2vw]"
            >
              <div>
                <h5 className="text-[#FAFAFA] text-4xl tracking-[.01em] font-medium">
                  Мы в Telegram
                </h5>
              </div>

              <Image
                src={tg_path}
                alt="tg_icon"
                style={{ transform: "translate(-1vw, 1vw)" }}
              />
            </a>
          </div>

          <a
            href="https://www.avito.ru/"
            className="flex flex-col-reverse justify-between items-center w-[19vw] h-[19vw] mt-[8%] ml-[1vw] bg-[#F5F5F5] backdrop-blur-2xl rounded-[1.9vw] border-[0.2vw]"
          >
            <div className="flex">
              <Image src={WTF_path} alt="WTF" className="WTF" />
              <p className="w-[8vw] font-normal text-base tracking-[.01em] text-opacity-30">
                Да, оно еще существует
              </p>
            </div>
            <h5 className="text-4xl font-bold tracking-[.01em] text-[#0021CF]">
              Мы на <br />
              Avito
            </h5>
            <Image
              src={avito_path}
              alt="avito_icon"
              style={{ transform: "translate(7.3vw, 1vw)" }}
            />
          </a>
        </div>
        <p className="font-normal text-xl tracking-[.04em] pt-[2vw] text-slate-100 text-opacity-50">
          © 2022 Flyboots. Все права защищены.
        </p>
      </div>
      <div style={{ marginTop: "6vw" }}>
        <Image src={end_path} alt="end" style={{ width: "34vw" }} />
      </div>
    </footer>
  );
}
