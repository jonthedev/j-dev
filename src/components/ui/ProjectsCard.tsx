import Icon from "@components/Icons/Icon"
import Link from "../Common/Link"
import { ProjectItem } from "@src/db/projects"
import Text from "@components/Typography/Text/Text"
import Heading from "@components/Typography/Heading/Heading"

const ProjectsCard = ({ url, img, github, title, text, tech }: ProjectItem) => {
  return (
    <article className="rounded-lg shadow-md shadow-slate-50 duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col rounded-lg">
        {img}
        <div className="my-4 flex items-center justify-between px-4">
          <Heading variant="h5" className="tracking-wide text-amber-600">
            {title}yo
          </Heading>
          <div className="flex">
            {tech.map(({ id, icon, classname }) => {
              return (
                <Icon
                  key={id}
                  name={icon}
                  variant="project-card"
                  className={classname}
                />
              )
            })}
          </div>
        </div>
        <Text size="medium" className="flex-grow px-4">
          {text}
        </Text>
        <div className="my-4 flex gap-x-4 px-4">
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            className="link-with-svg animate-pulse"
          >
            <Icon variant="base" name="www" className="h-8 w-8 " />
          </Link>
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              className="link-with-svg animate-pulse"
            >
              <Icon variant="base" name="github" className="h-8 w-8" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
