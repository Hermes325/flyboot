"use client";
import React, { ReactElement, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import expand from "@/public/arrow/ArrowDropdown.svg"

type Props = {
  title: string
  open?: boolean
  children: string | JSX.Element | JSX.Element[]
};

function DropDown({ title, children, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);

  return (<section className={classNames(`flex flex-col w-[100%] border-b-2 border-white
       max-[600px]:w-[100%] mt-2 pb-5`, {
    "border-white ": isOpen,
  })}>

    {/* Заголовок */}
    <div
      className="flex flex-row justify-between items-center cursor-pointer mb-2"
      onClick={() => setIsOpen(prev => !prev)}
    >
      <h2 className="font-lato font-[400] text-[#29D9CE] text-[1.8rem] leading-[45px] tracking-[0.01em] max-[1000px]:text-[1.8rem] max-[800px]:text-[1.5rem] max-[600px]:text-[1.2rem] max-[600px]:leading-[25px]">{title}</h2>
      <Image
        src={expand}
        alt="expand less image"
        className={classNames("select-none transition-transform h-[50px]", {
          "rotate-180": isOpen
        })} />
    </div>

    {/* Внутренний контент */}
    <div className={classNames({ "  hidden ": !isOpen }, "pb-3 text-[1.3rem] leading-[22px] max-[1000px]:text-[1.1rem] max-[800px]:text-[0.9rem] ")}>
      {children}
    </div>

  </section>)
}

export default DropDown;
