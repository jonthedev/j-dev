import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const baseStylesSection = twMerge("align-element", className)
  return (
    <section className={baseStylesSection} id={id}>
      {children}
    </section>
  )
}

export default Section
