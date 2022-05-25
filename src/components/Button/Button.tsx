import React from "react"
import style from "./Button.css"

export interface ButtonProps {
  label: string
}

export const Button = (props: ButtonProps) => <button className={style.button}>{props.label}</button>

export default Button
