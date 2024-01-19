import { FaGithub, FaLinkedin } from "react-icons/fa"
import Hacker from "@components/SVGR/Hacker"
import Heading from "../Typography/Heading/Heading"
import Text from "../Typography/Text/Text"

const Hero = () => {
  return (
    <div className="py-24">
      <div className="align-element grid items-center gap-8 md:grid-cols-2">
        <article>
          <Heading variant="h1" className="font-bold">
            I'm Jonathan
          </Heading>
          <Text size="large">Web Developer | Front End Specialist</Text>
          <Text size="medium">
            London{" "}
            <span role="img" aria-label="Union Jack Flag">
              🇬🇧{" "}
            </span>
            {""}/ Amsterdam{" "}
            <span role="img" aria-label="Netherlands Flag">
              🇳🇱
            </span>
          </Text>
          <Text size="medium">turning ideas into interactive reality</Text>
          <div className="mt-4 flex items-center gap-x-4">
            <a
              href="https://github.com/jonthedev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className="h-8 w-8 text-slate-50 duration-300 hover:text-neutral-500"
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/"
              target="_blank"
              rel="noreferrer"
              className=" bg-slate-5"
            >
              <FaLinkedin
                className="h-8 w-8 text-blue-500 duration-300 hover:text-neutral-500"
                title="LinkedIn"
              />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <Hacker />
        </article>
      </div>
    </div>
  )
}
export default Hero
