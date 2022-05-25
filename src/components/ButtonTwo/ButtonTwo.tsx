import React from "react"
import style from "./ButtonTwo.css"

export interface ButtonTwoProps {
  label: string
}

const ButtonTwo = (props: ButtonTwoProps) => <button className={style.button}>{props.label}</button>

export default ButtonTwo
