import React from "react"
import "./Button.css"

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => <button>{props.label}</button>

export default Button
