import SectionTitle from "@components/Typography/Title/SectionTitle"
import Icon from "@components/Icons/Icon"
import Text from "@components/Typography/Text/Text"
import Section from "@components/Common/Section"
import Spacer from "@components/Common/Spacer"

const Contact = () => {
  return (
    <footer>
      <Section id="contact" className="pb-4">
        <SectionTitle title="Contact" />
        <Spacer size="small" />
        <div className="flex flex-col items-start">
          <span className="text-lg text-slate-50">
            <Icon
              className="mr-2 h-3 w-3 md:h-5 md:w-5"
              variant="base"
              name="email"
            />
            jonathan@j-dev.online
          </span>
          <Text size="medium" className="my-2">
            KVK : 93792670
          </Text>
        </div>
        <Text className="ml-2 flex items-center justify-center" size="medium">
          <Icon variant="base" name="copyright" className="mr-1" />
          {new Date().getFullYear()}{" "}
          <span className="ml-2 italic text-amber-600">J</span>
          <span className="italic">-Dev.</span>
          <span className="italic text-amber-600">Online</span>
        </Text>
      </Section>
    </footer>
  )
}

export default Contact
