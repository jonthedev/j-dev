import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LinkProps {
  href: string
  target?: string
  rel?: string
  children?: ReactNode
  className?: string
}

const Link: React.FC<LinkProps> = ({ href, children, className = "" }) => {
  const baseStyles = "hover:text-neutral-500 text-slate-50 cursor-pointer"

  const classNames = twMerge(baseStyles, className)

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classNames}>
      {children}
    </a>
  )
}

export default Link
