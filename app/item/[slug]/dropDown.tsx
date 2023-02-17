"use client";
import React, { ReactElement, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import expand from "@/public/arrow/ArrowDropdown.svg"

type Props = {
  title: string;
  description: string;
  open?: boolean;
};

function DropDown({ title, description, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div className={classNames(`flex flex-col w-[450px] border-b-2 border-white
       max-[600px]:w-[100%]`, {
      "border-white pb-[20px]": isOpen,
    })}>
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
      <div className={classNames({ "opacity-0 invisible": !isOpen })}>
        <p className={classNames("font-lato font-[400] text-white text-[15px] leading-[25px] tracking-[0.01em]", {
          "hidden": !isOpen
        })}>
          {description}
        </p>
      </div>
    </div>)
}

export default DropDown;
