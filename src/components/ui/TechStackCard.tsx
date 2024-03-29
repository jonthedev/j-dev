import { type TechStackItem } from "@db/TechStack"
import React from "react"
import Heading from "@components/Typography/Heading/Heading"
import Text from "@components/Typography/Text/Text"

const TechStackCard: React.FC<TechStackItem> = ({
  icons,
  icon,
  title,
  text,
}) => {
  const renderContent = () => {
    const baseContent = (
      <>
        <Heading variant="h5" className="mt-6 font-bold italic text-amber-600">
          {title}
        </Heading>
        <Text size="medium">{text}</Text>
      </>
    )

    if (icons && icons.length > 0) {
      return (
        <>
          <div className="flex animate-pulse items-center">
            {icons.map((i, index) => (
              <React.Fragment key={index}>{i}</React.Fragment>
            ))}
          </div>
          {baseContent}
        </>
      )
    }
    return (
      <>
        <span>{icon}</span>
        {baseContent}
      </>
    )
  }

  return <article>{renderContent()}</article>
}

export default TechStackCard
