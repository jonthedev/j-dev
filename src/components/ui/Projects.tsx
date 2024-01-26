// import ProjectsCard from "~/components/ProjectsCard"
// import { type ProjectItem, projects } from "@db/projects"
import SectionTitle from "@components/Typography/Title/SectionTitle"

const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle title="Projects & Work" />
      <div className="grid gap-8 py-16 lg:grid-cols-2 xl:grid-cols-3">
        {/* {projects.map((project: ProjectItem) => {
          return "PROJECTS CARD"
        })} */}
      </div>
    </section>
  )
}
export default Projects
