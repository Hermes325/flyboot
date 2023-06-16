import React from 'react'
import classNames from 'classnames'
import styles from "./PayBtn.module.css";

const PayBtn = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) =>
  <button {...props} className={classNames(styles.buy,
    "uppercase font-noto font-[700] w-full text-white border-2 border-solid border-black rounded-[15px]",
    "text-[25px] leading-[26px]",
    "max-[1500px]:text-[15px] max-[1500px]:leading-[20px]",
    props.className)}
  />

export default PayBtn