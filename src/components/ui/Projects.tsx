import SectionTitle from "@components/Typography/Title/SectionTitle"
import ProjectsCard from "./ProjectsCard"
import { ProjectItem, projects } from "@src/db/projects"
import Section from "@components/Common/Section"

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle title="Projects & Work" />
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: ProjectItem) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </Section>
  )
}
export default Projects
