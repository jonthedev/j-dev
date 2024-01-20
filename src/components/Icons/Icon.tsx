import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { twMerge } from "tailwind-merge"

interface IconProps {
  name: "github" | "linkedIn"
  className?: string
}

const iconComponents: Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  github: FaGithub,
  linkedIn: FaLinkedin,
}

const Icon: React.FC<IconProps> = ({ name, className = "" }) => {
  const SelectedIcon = iconComponents[name]

  if (!SelectedIcon) {
    return null
  }

  const iconStyles = twMerge(
    "h-8 w-8 duration-300 hover:text-neutral-500",
    className,
  )

  return <SelectedIcon className={iconStyles} />
}

export default Icon
