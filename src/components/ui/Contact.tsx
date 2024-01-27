import SectionTitle from "@components/Typography/Title/SectionTitle"
import Link from "@components/Common/Link"
import Icon from "@components/Icons/Icon"
import PhoneNumber from "@components/ui/PhoneNumber"
import Text from "@components/Typography/Text/Text"

const Contact = () => {
  return (
    <footer>
      <section className="align-element pb-5 pt-20" id="contact">
        <SectionTitle title="Contact" />
        <div className="mt-4 flex flex-col items-start">
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
      </section>
    </footer>
  )
}

export default Contact
