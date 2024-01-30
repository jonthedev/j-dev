import Hacker from "@components/SVGR/Hacker"
import Heading from "@components/Typography/Heading/Heading"
import Text from "@components/Typography/Text/Text"
import Link from "@components/Common/Link"
import Icon from "@components/Icons/Icon"
import Section from "@components/Common/Section"

const Hero = () => {
  return (
    <Section id="hero">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <article>
          <Heading variant="h2" className="font-bold tracking-wider">
            I'm Jonathan
          </Heading>
          <Text size="medium">Web Developer | Front End Specialist</Text>
          <Text size="medium">
            London{" "}
            <span role="img" aria-label="Union Jack Flag">
              🇬🇧{" "}
            </span>
            {""}&harr; Amsterdam{" "}
            <span role="img" aria-label="Netherlands Flag">
              🇳🇱
            </span>
          </Text>
          <Text size="medium">Turning ideas into interactive reality</Text>
          <div className="mt-4 flex items-center gap-x-4">
            <Link
              isExternal={true}
              href="https://github.com/jonthedev"
              className="link-with-svg"
            >
              <Icon
                name="github"
                className="h-8 w-8 text-slate-50"
                variant="base"
              />
            </Link>
            <Link
              isExternal={true}
              href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/"
              className="link-with-svg"
            >
              <Icon
                name="linkedIn"
                className="h-8 w-8 text-blue-500"
                variant="base"
              />
            </Link>
            <div className="relative">
              <Link
                isExternal={true}
                href="https://www.j-dev.online"
                className="text-amber-600"
              >
                www.j-dev.online
              </Link>
            </div>
          </div>
        </article>
        <article className="hidden md:block">
          <Hacker />
        </article>
      </div>
    </Section>
  )
}
export default Hero
