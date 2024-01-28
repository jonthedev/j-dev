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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((techStackItem) => {
          return <TechStackCard key={techStackItem.id} {...techStackItem} />
        })}
      </div>
    </Section>
  )
}
export default TechStack
