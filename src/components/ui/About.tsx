import SectionTitle from "@components/Typography/Title/SectionTitle"

import Text from "@components/Typography/Text/Text"
import Icon from "@components/Icons/Icon"
import Section from "../Common/Section"
import Spacer from "@components/Common/Spacer"

const About = () => {
  return (
    <Section id="about">
      <article className="text-lg md:text-2xl">
        <SectionTitle title="About" />
        <Spacer size="large" />
        <Text size="medium">
          <Icon name="brain" variant="base" className=" text-pink-500" />
          <br />
          I'm a front-end developer fueled by the dynamic nature of web
          development and the boundless possibilities it offers. I thrive in
          collaborative environments, where brainstorming innovative features
          and finding robust, scalable solutions is the norm.
        </Text>

        <Text size="medium">
          <Icon name="cog-wheel" variant="base" className=" text-blue-300" />
          <br />I specialize in crafting pixel-perfect UIs that elevate user
          experiences. My work has been recognized with a Website of the Year
          award for ANWB's multi-million-user web app, Traffic Verkeer.
        </Text>

        <Text size="medium">
          <Icon
            name="reg-address-card"
            variant="base"
            className=" text-green-500"
          />
          <br />I hold the legal right to work in both the UK and the
          Netherlands. For opportunities beyond these regions, I'm open to roles
          that offer visa sponsorship or are 100% remote.
        </Text>
        <Text size="medium">
          <Icon name="person-rays" variant="base" className="text-amber-700" />
          <br />
          Outside of development, I'm a dance and travel enthusiast. Exploring
          diverse cultures fuels my creativity and adds a fresh perspective to
          my approach to building digital experiences.
        </Text>
      </article>
    </Section>
  )
}
export default About
