import { techStack } from "@src/db/TechStack"
import SectionTitle from "@components/Typography/Title/SectionTitle"
import TechStackCard from "./TechStackCard"

const TechStack = () => {
  return (
    <section className="align-element py-28" id="skills">
      <SectionTitle title="Tech Stack" />
      <div className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((techStackItem) => {
          return <TechStackCard key={techStackItem.id} {...techStackItem} />
        })}
      </div>
    </section>
  )
}
export default TechStack
