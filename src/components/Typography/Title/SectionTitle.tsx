import Heading from "../Heading/Heading"

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  //pb-5
  return (
    <Heading
      variant="h3"
      className=" border-b border-gray-200 font-medium tracking-wider"
    >
      {title}.
    </Heading>
  )
}

export default SectionTitle
