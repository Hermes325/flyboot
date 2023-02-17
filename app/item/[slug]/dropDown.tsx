"use client";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import expand from "@/public/arrow/ArrowDropdown.svg"
import styles from "./dropDown.module.css"


type Props = {
  title: string;
  description: string;
  open?: boolean;
};

function DropDown({ title, description, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);
  return (<section className={classNames(`flex flex-col w-full border-b-2 border-white transition-all duration-500
       max-[600px]:w-[100%]`, {
    "border-white pb-[20px]": isOpen,
  })}>

    <div
      className="flex flex-row justify-between items-center cursor-pointer"
      onClick={() => setIsOpen(prev => !prev)}
    >
      <h2 className="font-lato font-[900] text-white text-[24px] leading-[27px] tracking-[0.01em]">{title}</h2>
      <Image
        src={expand}
        alt="expand less image"
        className={classNames("select-none transition-transform duration-500 h-[50px]", {
          "rotate-180": isOpen
        })} />
    </div>

    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={classNames(styles.dropDown, { "hidden": !isOpen })}
    />

  </section>)
}

export default DropDown;
