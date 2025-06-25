import { type TechStackItem } from "@db/TechStack"
import React from "react"
import Heading from "@components/Typography/Heading/Heading"

const TechStackCard: React.FC<TechStackItem> = ({ icons, icon, title }) => {
  const renderContent = () => {
    const baseContent = (
      <>
        <Heading variant="h5" className="mt-6 font-bold italic text-amber-600">
          {title}
        </Heading>
      </>
    )

    if (icons && icons.length > 0) {
      return (
        <>
          <div className="flex animate-pulse items-center justify-center">
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
        <div className="flex justify-center">
          <span>{icon}</span>
        </div>
        {baseContent}
      </>
    )
  }

  return (
    <article className="flex flex-col items-center text-center">
      {renderContent()}
    </article>
  )
}

export default TechStackCard
