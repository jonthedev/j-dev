import { twMerge } from "tailwind-merge"

interface PhoneNumberProps {
  countryFlag: string
  phoneNumber: string
  className?: string
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  countryFlag,
  phoneNumber,
  className,
}) => {
  const baseStyles = "text-sm tracking-wide text-slate-50 md:text-xl"
  const classNames = twMerge(baseStyles, className)
  return (
    <span className={classNames}>
      {countryFlag} +{phoneNumber}
    </span>
  )
}

export default PhoneNumber
