import { ReactNode } from "react"

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
  const classNames = `font-bold tracking-wider text-slate-50 ${className}`

  switch (variant) {
    case "h1":
      return (
        <h1 className={`text-5xl md:text-7xl ${classNames}`}>{children}</h1>
      )
    case "h2":
      return (
        <h2 className={`text-4xl md:text-6xl ${classNames}`}>{children}</h2>
      )
    case "h3":
      return (
        <h3 className={`text-3xl md:text-5xl ${classNames}`}>{children}</h3>
      )
    case "h4":
      return (
        <h4 className={`text-2xl md:text-4xl ${classNames}`}>{children}</h4>
      )
    case "h5":
      return <h5 className={`text-xl md:text-3xl ${classNames}`}>{children}</h5>
    case "h6":
      return <h6 className={`text-lg md:text-2xl ${classNames}`}>{children}</h6>
    default:
      return <div className={classNames}>{children}</div>
  }
}

export default Heading
