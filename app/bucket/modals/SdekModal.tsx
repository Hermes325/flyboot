"use client"
import React, { useRef, useEffect } from "react";
import menu_close_path from "@/public/header-images/close_bl.png";
import Image from "next/image";


type Props = {
  setSdekData: React.SetStateAction<any>
  closeModal: () => any,
  isSdekModalOpen: boolean
}

function SdekModal({ setSdekData, closeModal, isSdekModalOpen }: Props) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      const widget = new (window as any).ISDEKWidjet({
        defaultCity: "Москва",
        cityFrom: "Москва",
        country: "Россия",
        link: "forpvz",
        hidedelt: true,
        zoom: 10,
      })

      const choosePVZ = (wat: any) => {
        setSdekData(wat)
        closeModal()
      };

      widget?.binders.add(choosePVZ, "onChoose");
    }
  }, [setSdekData]);

  return (<section className={isSdekModalOpen ? "" : "hidden"}>

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
      id="forpvz"
      className="absolute z-[102] top-[108px] left-[10vw] w-[80vw] h-[80vh]"
      onClick={e => e.stopPropagation()} />
  </section>)
}

export default SdekModal;