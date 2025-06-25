import { techStack } from "@src/db/TechStack"
import SectionTitle from "@components/Typography/Title/SectionTitle"
import TechStackCard from "./TechStackCard"
import Section from "@components/Common/Section"
import Spacer from "@components/Common/Spacer"

const TechStack = () => {
  return (
    <Section id="tech">
      <SectionTitle title="Tech Stack" />
      <Spacer size="large" />
      <div className="grid grid-cols-2 justify-items-center gap-8 lg:grid-cols-4">
        {techStack.map((techStackItem) => {
          return <TechStackCard key={techStackItem.id} {...techStackItem} />
        })}
      </div>
    </Section>
  )
}
export default TechStack
