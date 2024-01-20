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
  const textSizeClasses = {
    small: "text-xs md:text-sm",
    medium: "text-md md:text-lg",
    large: "text-xl md:text-2xl",
  }

  const classNames = twMerge(
    "mt-4 capitalize tracking-wide text-slate-50",
    textSizeClasses[size],
    className,
  )

  return <p className={classNames}>{children}</p>
}

export default Text
