import SectionTitle from "@components/Typography/Title/SectionTitle"
import ProjectsCard from "./ProjectsCard"
import { ProjectItem, projects } from "@src/db/projects"

const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle title="Projects & Work" />
      <div className="grid gap-8 py-16 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: ProjectItem) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default Projects
