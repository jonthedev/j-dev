// import techStack from "@src/db/TechStack"
import SectionTitle from "@components/Typography/Title/SectionTitle"
//import TechStackCard from "~components/SkillsCard"

const TechStack = () => {
  return (
    <section className="align-element py-28 " id="skills">
      <SectionTitle title="Tech Stack" />
      <div className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-3">
        {/* {skills.map(skill => {
          return <SkillsCard key={skill.id} {...skill} />
        })} */}
      </div>
    </section>
  )
}
export default TechStack
