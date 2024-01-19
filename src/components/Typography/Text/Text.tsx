import { ReactNode } from "react"

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
  let textSizeClass = ""

  switch (size) {
    case "small":
      textSizeClass = "text-xs md:text-sm"
      break
    case "large":
      textSizeClass = "text-xl md:text-2xl"
      break
    default:
      textSizeClass = "text-md md:text-lg"
      break
  }

  return (
    <p
      className={`mt-4 ${textSizeClass} capitalize tracking-wide text-slate-50 ${className}`}
    >
      {children}
    </p>
  )
}

export default Text
