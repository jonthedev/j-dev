import Hacker from "@components/SVGR/Hacker"
import Heading from "@components/Typography/Heading/Heading"
import Text from "@components/Typography/Text/Text"
import Link from "@components/Common/Link"
import Icon from "@components/Icons/Icon"

const Hero = () => {
  return (
    <div className="py-24">
      <div className="align-element grid items-center gap-8 md:grid-cols-2">
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
            {""}| Amsterdam{" "}
            <span role="img" aria-label="Netherlands Flag">
              🇳🇱
            </span>
          </Text>
          <Text size="medium">turning ideas into interactive reality</Text>
          <div className="mt-4 flex items-center gap-x-4">
            <Link href="https://github.com/jonthedev">
              <Icon name="github" className="text-slate-50" variant="base" />
            </Link>
            <Link href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/">
              <Icon name="linkedIn" className="text-blue-500" variant="base" />
            </Link>
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
