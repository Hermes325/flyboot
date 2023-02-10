"use client";
import React, { ReactElement, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import expand_more from "@/public/expand/expand_more.svg";
import expand_less from "@/public/expand/expand_less.svg";

type Props = {
  title: string;
  description: string;
  open?: boolean;
};

function ExpandHandle({ isOpen }: { isOpen: boolean }): ReactElement {
  return isOpen
    ? <Image src={expand_less} alt="expand less image" />
    : <Image src={expand_more} alt="expand more image" />
}

function DescriptionHandle({ isOpen, description }: { isOpen: boolean; description: string; }): ReactElement {
  return isOpen
    ? <p className="font-lato font-[400] text-white text-[15px] leading-[25px] tracking-[0.01em]">{description}</p>
    : <></>
}

function DropDown({ title, description, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div
      className={classNames("flex flex-col w-[450px] border-b-2 border-white", {
        "border-white pb-[20px]": isOpen,
      })}
    >
      <div
        className="flex flex-row justify-between items-center"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <h2 className="font-lato font-[400] text-white text-[20px] leading-[27px] tracking-[0.01em]">{title}</h2>
        <ExpandHandle isOpen={isOpen} />
      </div>
      <div className={classNames({ "opacity-0 invisible": !isOpen })}>
        <DescriptionHandle isOpen={isOpen} description={description} />
      </div>
    </div>
  );
}

export default DropDown;
