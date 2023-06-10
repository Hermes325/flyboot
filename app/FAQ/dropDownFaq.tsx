"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import plus from "@/public/arrow/+.png"

type Props = {
  title: string
  open?: boolean
  children: string | JSX.Element | JSX.Element[]
  activeTab: string
  setActiveTab: Function
};

function DropDown({ title, children, open = false, activeTab, setActiveTab }: Props) {
  const [isOpen, setIsOpen] = useState(open);
  function changeTab() {
    setIsOpen(prev => !prev)
    setActiveTab(title)
  }

  useEffect(() => {
    if (activeTab !== title) {
      setIsOpen(false)
    }
  }, [activeTab])

  return (<section className={classNames(`flex flex-col w-[80%] rounded-[10px] bg-white
       max-[600px]:!w-[100%] mt-2 min-[700px]:!ml-[20%]`, {
    "border-white ": isOpen,
  })}>

    {/* Заголовок */}
    <div
      className="flex flex-row justify-between items-center cursor-pointer mb-2  "
      onClick={() => changeTab()}
    >
      <h2 className="font-lato font-[400] text-[#000] text-[1.8rem] pl-[5%] leading-[45px] tracking-[0.01em] max-[1000px]:text-[1.8rem] max-[800px]:text-[1.5rem] max-[600px]:text-[1.2rem] max-[600px]:leading-[25px]">{title}</h2>
      <Image
        src={plus}
        alt="expand less image"
        className={classNames("select-none transition-transform h-[13px] mr-[10px]", {
          "rotate-45": isOpen
        })} />
    </div>

    {/* Внутренний контент */}
    <div className={classNames({ "  hidden ": !isOpen }, "pb-3 text-[1.3rem] !text-[#000] leading-[22px] max-[1000px]:text-[1.1rem] max-[800px]:text-[0.9rem] ")}>
      {children}
    </div>

  </section>)
}

export default DropDown;
