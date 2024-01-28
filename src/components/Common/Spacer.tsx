import { twMerge } from "tailwind-merge"

interface SpacerProps {
  size?: "small" | "medium" | "large"
  className?: string
}

const spacerSizeStyles: Record<string, string> = {
  small: "mb-2 md:mb-4",
  medium: "mb-8 md:mb-10",
  large: "mb-14 md:mb-16",
}

const Spacer: React.FC<SpacerProps> = ({ size = "medium", className = "" }) => {
  const baseStylesSpacer = twMerge(spacerSizeStyles[size], className)

  return <div className={baseStylesSpacer}></div>
}

export default Spacer
