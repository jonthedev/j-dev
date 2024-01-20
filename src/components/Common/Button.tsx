import React from "react"

import { twMerge } from "tailwind-merge"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className }: ButtonProps) => {
  return (
    <button
      className={twMerge("rounded bg-blue-500 px-4 py-2 text-white", className)}
    >
      Submit
    </button>
  )
}

export default Button
