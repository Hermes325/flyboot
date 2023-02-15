"use client"
import React, { useRef, useEffect } from "react";


type Props = {
  setSdekTerminalData: React.SetStateAction<any>
}

function SdekTerminalModal({ setSdekTerminalData }: Props) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      console.log(typeof (window as any).ISDEKWidjet);
      const widget = new (window as any).ISDEKWidjet({
        defaultCity: "auto",
        cityFrom: "Москва",
        country: "Россия",
        link: "forpvz",
        hidedelt: true,
        zoom: 10,
      })

      const choosePVZ = (wat: any) => {
        setSdekTerminalData(wat);
      };

      widget?.binders.add(choosePVZ, "onChoose");
    }
  }, [setSdekTerminalData]);

  return (<article className="w-screen h-screen top-0 left-0 fixed z-50">
    <div
      ref={modalRef}
      id="forpvz"
      className="w-full h-[80vh] fixed z-50" />
  </article>)
};

export default SdekTerminalModal;