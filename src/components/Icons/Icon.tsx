import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPlus,
} from "react-icons/fa"
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb"
import { twMerge } from "tailwind-merge"

interface IconSVGComponentsProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

interface IconProps {
  name:
    | "github"
    | "linkedIn"
    | "html"
    | "css"
    | "javascript"
    | "react"
    | "typescript"
    | "tailwind"
    | "plus"
  className?: string
  variant: "base" | "tech-stack"
}

const iconSVGComponents: Record<string, React.FC<IconSVGComponentsProps>> = {
  github: FaGithub,
  linkedIn: FaLinkedin,
  html: FaHtml5,
  css: FaCss3,
  javascript: FaJs,
  react: FaReact,
  typescript: TbBrandTypescript,
  tailwind: TbBrandTailwind,
  plus: FaPlus,
}

const Icon: React.FC<IconProps> = ({
  name,
  variant = "base",
  className = "",
}) => {
  const SelectedIcon = iconSVGComponents[name]

  if (!SelectedIcon) {
    return null
  }

  const baseIconStyles = twMerge(
    "h-8 w-8 duration-300 hover:text-neutral-500",
    className,
  )

  const techStackIconStyles = twMerge("h-11 w-11 md:h-16 md:w-16", className)

  if (variant === "tech-stack") {
    return (
      <SelectedIcon
        className={techStackIconStyles}
        title={name}
        aria-label={name}
      />
    )
  }

  return <SelectedIcon className={baseIconStyles} title={name} />
}

export default Icon
