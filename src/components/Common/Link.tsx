import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LinkProps {
  href: string
  children?: ReactNode
  className?: string
  isExternal: true | false
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  isExternal,
  className = "",
}) => {
  const baseStyles = "hover:text-neutral-500 text-slate-50"

  const classNames = twMerge(baseStyles, className)

  if (!isExternal) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classNames}>
      {children}
    </a>
  )
}

export default Link
