import Heading from "@components/Typography/Heading/Heading"

interface SectionTitleProps {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <>
      <Heading
        variant="h3"
        className="border-b border-gray-200 pb-5 font-medium tracking-wide md:pb-9 "
      >
        {title}.
      </Heading>
    </>
  )
}

export default SectionTitle
