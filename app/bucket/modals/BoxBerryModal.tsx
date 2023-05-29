"use client"
import React, { useRef, useEffect } from "react";
import menu_close_path from "@/public/header-images/close_bl.png";
import Image from "next/image";


type Props = {
  setBoxBerryData: React.SetStateAction<any>
  closeModal: () => any,
  isBoxBerryModalOpen: boolean
}

function BoxBerryModal({ setBoxBerryData, closeModal, isBoxBerryModalOpen }: Props) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      (window as any).boxberry.openOnPage('boxberry', null, "Москва");
      (window as any).boxberry.open(callback_function);
    }

    function callback_function(result: any) {
      result.name = encodeURIComponent(result.name)
      console.log("callback_function >> ", result)
      setBoxBerryData(result)
      closeModal()
    }
  }, [setBoxBerryData]);


  return (<section className={isBoxBerryModalOpen ? "" : "hidden"}>

    <div
      onClick={closeModal}
      className="w-screen h-screen top-0 left-0 absolute backdrop-brightness-50 z-[101]" />

    <button
      onClick={closeModal}
      className="cursor-pointer fixed z-[103] right-[5vw] translate-x-[50%] top-[108px] max-mobile:hidden"
    >
      <Image src={menu_close_path} width={50} height={50} alt="закрыть модальное окно" />
    </button>

    <div
      ref={modalRef}
      id="boxberry"
      className="absolute p-[2rem]
        h-min bg-[#e3e3e3] z-[102]
        top-[108px]
        left-[10vw]
        w-[80vw]"
      onClick={e => e.stopPropagation()} />
  </section>)
}

export default BoxBerryModal;