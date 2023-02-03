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
    ? <h3 className="text-white text-2xl">{description}</h3>
    : <></>
}

function DropDown({ title, description, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div
      className={classNames("flex flex-col w-[450px] border-b-2 border-white", {
        "border-gray-500": isOpen,
      })}
    >
      <div
        className="flex flex-row justify-between items-center"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <h2 className="text-white text-2xl">{title}</h2>

        <ExpandHandle isOpen={isOpen} />
      </div>
      <div className={classNames("", { "opacity-0 invisible": !isOpen })}>
        <DescriptionHandle isOpen={isOpen} description={description} />
      </div>
    </div>
  );
}

export default DropDown;
