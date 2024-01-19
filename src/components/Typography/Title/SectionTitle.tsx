import Heading from "../Heading/Heading"

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <Heading variant="h2">{title}</Heading>
}

export default SectionTitle
