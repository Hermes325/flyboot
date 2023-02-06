import React from "react";
import Image from 'next/image'
import styles from "./styles/slide5.module.css";
import truck from "@/public/main-images/bi_truck.png"
import iconoir_box from "@/public/main-images/iconoir_box-iso.png"
import ion_pricetags from "@/public/main-images/ion_pricetags-outline.png"


function Slide5() {
  return (
    <section id="A_what_with_delivery_?" className="w-full px-[16.7vw]">

      <h2 className={styles.Montserrat700_2 + " font-montserrat mt-[5vw]"}>
        А что с доставкой?
      </h2>

      <div>
        <div className="flex mt-[2vw]">
          <Image
            className="object-scale-down"
            src={truck}
            alt="иконка грузовика" />

          <div className="pl-[2vw]">
            <h3 className={styles.h3 + " font-montserrat text-[#29D9CE]"}>Доставляем по России</h3>
            <br />
            <p className={styles.jost_p + " font-jost w-[28vw]"}>
              Так что даже несмотря на то, что ты живешь в Ахутбинске или Улан-Удэ,
              у тебя всегда будет возможно посверкать новыми Yeezy и похвастаться перед местными модниками.
            </p>
          </div>
        </div>
        <div className="flex mt-[2vw]">
          <Image
            className="object-scale-down"
            src={iconoir_box}
            alt="iconoir_box" />

          <div className="pl-[2vw]">
            <h3 className={styles.h3 + " font-montserrat text-[#29D9CE]"}>В прекрасной упаковке</h3>
            <br />
            <p className={styles.jost_p + " font-jost w-[28vw]"}>
              Товар доставляется в фирменной упаковке от POIZON, он герметично упакован,
              поэтому посылка доедет в целости и сохранности, вне зависимости от того, доставляют ли по
              воздуху, суше , или через спутник Илона Маска

            </p>
          </div>
        </div>
        <div className="flex mt-[2vw]">
          <Image
            className="object-scale-down"
            src={ion_pricetags}
            alt="ion_pricetags" />

          <div className="pl-[2vw]">
            <h3 className={styles.h3 + " font-montserrat text-[#29D9CE]"}>Доставка застрахована</h3>
            <br />
            <p className={styles.jost_p + " font-jost w-[28vw]"} >
              Так что даже если что-то случится, что очень маловероятно, потому что мы находимся на страже
              сохранности ваших новомодных товаров, посылки все равно застрахановы, и вы можете спать
              спокойно!
            </p>
          </div>
        </div>
      </div>
    </section>)
}

export default Slide5;
