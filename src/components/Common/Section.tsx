import { ReactNode } from "react"

interface SectionProps {
  id: string
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section className="align-element py-28" id={id}>
      {children}
    </section>
  )
}

export default Section
