import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TextProps {
  children: ReactNode
  size?: "small" | "medium" | "large"
  className?: string
}

const Text: React.FC<TextProps> = ({
  children,
  size = "medium",
  className = "",
}) => {
  const textSizeStyles = {
    small: "text-xs md:text-sm",
    medium: "text-base md:text-lg",
    large: "text-xl md:text-2xl",
  }

  const classNames = twMerge(
    "mt-4 tracking-wide text-slate-50",
    textSizeStyles[size],
    className,
  )

  return <p className={classNames}>{children}</p>
}

export default Text
