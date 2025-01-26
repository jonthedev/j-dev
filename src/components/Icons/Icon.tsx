import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPlus,
  FaBrain,
  FaCogs,
  FaRegAddressCard,
  FaTrophy,
  FaCopyright,
  FaSass,
  FaAws,
} from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { FaPersonRays } from "react-icons/fa6"
import {
  SiChakraui,
  SiStyledcomponents,
  SiStorybook,
  SiGraphql,
} from "react-icons/si"
import {
  TbBrandTailwind,
  TbBrandTypescript,
  TbWorldWww,
  TbBrandNextjs,
} from "react-icons/tb"
import { twMerge } from "tailwind-merge"

interface IconSVGComponentsProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

export interface IconProps {
  name: keyof typeof iconSVGComponents
  className?: string
  variant: "base" | "tech-stack" | "project-card"
  title?: string
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
  brain: FaBrain,
  graphql: SiGraphql,
  "cog-wheel": FaCogs,
  "reg-address-card": FaRegAddressCard,
  trophy: FaTrophy,
  "person-rays": FaPersonRays,
  plus: FaPlus,
  www: TbWorldWww,
  nextjs: TbBrandNextjs,
  "styled-comp": SiStyledcomponents,
  "chakra-ui": SiChakraui,
  sass: FaSass,
  aws: FaAws,
  storybook: SiStorybook,
  copyright: FaCopyright,
  email: MdOutlineMail,
}

const Icon: React.FC<IconProps> = ({
  name,
  variant = "base",
  className = "",
  title,
}) => {
  const SelectedIcon = iconSVGComponents[name]

  if (!SelectedIcon) {
    return null
  }

  const baseIconStyles = twMerge("inline-block text-slate-50", className)

  const techStackIconStyles = twMerge("h-11 w-11 md:h-16 md:w-16", className)

  const projectCardIconStyles = twMerge("h-6 w-6 md:h-8 md:w-8", className)

  if (variant === "tech-stack") {
    return (
      <SelectedIcon
        className={techStackIconStyles}
        title={name}
        aria-label={name}
      />
    )
  }

  if (variant === "project-card") {
    return <SelectedIcon title={name} className={projectCardIconStyles} />
  }

  return <SelectedIcon className={baseIconStyles} title={title || name} />
}

export default Icon
