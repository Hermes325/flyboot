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

  return (<section className={classNames(`flex flex-col w-[80%] border-b-2 border-white
       max-[600px]:w-[100%]`, {
    "border-white pb-[20px]": isOpen,
  })}>

    {/* Заголовок */}
    <div
      className="flex flex-row justify-between items-center cursor-pointer"
      onClick={() => setIsOpen(prev => !prev)}
    >
      <h2 className="font-lato font-[400] text-white text-[20px] leading-[27px] tracking-[0.01em]">{title}</h2>
      <Image
        src={expand}
        alt="expand less image"
        className={classNames("select-none transition-transform h-[50px]", {
          "rotate-180": isOpen
        })} />
    </div>

    {/* Внутренний контент */}
    <div className={classNames({ "hidden": !isOpen })}>
      {children}
    </div>

  </section>)
}

export default DropDown;
