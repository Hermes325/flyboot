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

  return (
    <div id="sdek_terminal_modal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <div id="forpvz" style={{ width: "100%", height: "600px" }} />
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-darken btn-flat">
          Close
        </button>
      </div>
    </div>)
};

export default SdekTerminalModal;