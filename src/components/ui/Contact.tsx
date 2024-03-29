import SectionTitle from "@components/Typography/Title/SectionTitle"
import Link from "@components/Common/Link"
import Icon from "@components/Icons/Icon"
import PhoneNumber from "@components/ui/PhoneNumber"
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
          <PhoneNumber countryFlag="🇬🇧" phoneNumber="447729268750" />
          <PhoneNumber countryFlag="🇳🇱" phoneNumber="31645170103" />
          <Link
            href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/"
            isExternal={true}
            className="link-with-svg"
          >
            <Icon
              className="h-4 w-4 text-blue-500 md:h-6 md:w-6"
              variant="base"
              name="linkedIn"
            />
          </Link>
        </div>
        <Text className="ml-2 flex items-center justify-center" size="medium">
          <Icon variant="base" name="copyright" className="mr-1" />
          {new Date().getFullYear()}{" "}
          <span className="ml-2 italic text-amber-600">J</span>
          <span className="italic">Dev.</span>
        </Text>
      </Section>
    </footer>
  )
}

export default Contact
