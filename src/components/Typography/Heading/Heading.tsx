import React, { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface HeadingProps {
  children: ReactNode
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
}

const Heading: React.FC<HeadingProps> = ({
  children,
  variant = "h1",
  className = "",
}: HeadingProps) => {
  const baseStyles = "tracking-wider text-slate-50"

  const headingStyles = {
    h1: "text-5xl md:text-7xl",
    h2: "text-4xl md:text-6xl",
    h3: "text-3xl md:text-5xl",
    h4: "text-2xl md:text-4xl",
    h5: "text-xl md:text-3xl",
    h6: "text-lg md:text-2xl",
  }

  const classNames = twMerge(baseStyles, headingStyles[variant], className)

  const HeadingTag = variant as keyof JSX.IntrinsicElements

  return React.createElement(HeadingTag, { className: classNames }, children)
}

export default Heading
