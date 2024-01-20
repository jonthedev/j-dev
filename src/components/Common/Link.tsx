import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LinkProps {
  href: string
  target?: string
  rel?: string
  icon?: ReactNode
  children?: ReactNode
  className?: string
}

const Link: React.FC<LinkProps> = ({
  href,
  icon,
  children,
  className = "",
}) => {
  const baseStyles = "hover:text-neutral-500 text-slate-50"

  const classNames = twMerge(baseStyles, className)

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classNames}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  )
}

export default Link
