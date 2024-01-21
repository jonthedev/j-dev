import J2 from "@assets/J2.png"
import SectionTitle from "@components/Typography/Title/SectionTitle"

import { FaBrain, FaCogs, FaRegAddressCard, FaTrophy } from "react-icons/fa"
import { FaPersonRays } from "react-icons/fa6"
import Text from "../Typography/Text/Text"

const About = () => {
  return (
    <section className="py-28" id="about">
      <div className="align-element grid items-center gap-16 text-lg md:grid-cols-2 md:text-2xl">
        <div>
          <img src={J2} alt="Jonathan looking at a mountain" />
        </div>
        <article>
          <SectionTitle title="About" />
          <Text size="medium">
            <FaBrain className="inline-block text-pink-500" />
            <br />
            Aspiring to become a full-stack developer, I am fueled by the
            dynamic nature of web development and the boundless possibilities it
            offers.
          </Text>
          <Text size="medium">
            I thrive on collaborating with like-minded professionals to
            brainstorm innovative features and discover robust solutions.
          </Text>
          <Text size="medium">
            <FaCogs className="inline-block text-blue-300" />
            <br />I specialize in front-end development, crafting pixel-perfect
            UIs that not only look good but also features that elevate user
            experiences.
          </Text>
          <Text size="medium">
            <FaTrophy className="inline-block text-yellow-500" />
            <br />
            Representing <span className="italic"> 'iO'</span> consultancy, I
            collaborated with JavaScript consultancy{" "}
            <span className="italic">'Passionate People'</span>. We tackled a
            complex re brand strategy for ANWB'S multi million user application
            Traffic Verkeer, which resulted in the team receiving 'Traffic
            Website Of The Year Award'.
          </Text>
          <Text size="medium">
            <FaRegAddressCard className="inline-block text-green-500" />
            <br />I have the legal right to work within the United Kingdom and
            The Netherlands. Opportunities beyond these regions will need a visa
            sponsorship or be 100% remote.
          </Text>
          <Text size="medium">
            <FaPersonRays className="inline-block text-amber-700" />
            <br />
            Beyond coding, I'm a dance and travel enthusiast. Exploring diverse
            cultures fuels my creativity, enriching my approach to web
            development.
          </Text>
        </article>
      </div>
    </section>
  )
}
export default About
