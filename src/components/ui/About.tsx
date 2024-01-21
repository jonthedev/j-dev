import J2 from "@assets/J2.png"
import SectionTitle from "@components/Typography/Title/SectionTitle"

import Text from "@components/Typography/Text/Text"
import Icon from "@components/Icons/Icon"

const About = () => {
  return (
    <section className="py-28" id="about">
      <div className="align-element grid items-center gap-16 text-lg md:grid-cols-2 md:text-2xl">
        <img src={J2} alt="Jonathan looking at a mountain" />
        <article>
          <SectionTitle title="About" />
          <Text size="medium">
            <Icon name="brain" variant="base" className=" text-pink-500" />
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
            <Icon name="cog-wheel" variant="base" className=" text-blue-300" />
            <br />I specialize in front-end development, crafting pixel-perfect
            UIs that not only look good but also features that elevate user
            experiences.
          </Text>
          <Text size="medium">
            <Icon name="trophy" variant="base" className=" text-yellow-500" />
            <br />
            Won website of the year award for ANWB's multi-million user web app
            Traffic Verkeer.
          </Text>
          <Text size="medium">
            <Icon
              name="reg-address-card"
              variant="base"
              className=" text-green-500"
            />
            <br />I have the legal right to work within the United Kingdom and
            The Netherlands. Opportunities beyond these regions will need a visa
            sponsorship or be 100% remote.
          </Text>
          <Text size="medium">
            <Icon
              name="person-rays"
              variant="base"
              className="text-amber-700"
            />
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
