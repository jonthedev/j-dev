import { FaCopyright } from "react-icons/fa"
import SectionTitle from "@components/Typography/Title/SectionTitle"
import Link from "../Common/Link"
import Icon from "../Icons/Icon"

const Contact = () => {
  return (
    <footer>
      <section className="align-element pb-5 pt-20" id="contact">
        <SectionTitle title="Contact" />
        <div className="mt-4 flex flex-col items-start">
          <span className="text-sm tracking-wide text-slate-50 md:text-xl">
            🇬🇧 +447729268750
          </span>
          <span className="text-sm tracking-wide text-slate-50 md:text-xl">
            🇳🇱 +31645170103
          </span>
          <Link
            href="https://www.linkedin.com/in/jonathan-kaonga-5a04871b5/"
            target="_blank"
            rel="noreferrer"
            className="link-with-svg"
          >
            <Icon
              className="h-4 w-4 text-blue-500 md:mt-2 md:h-6 md:w-6"
              variant="base"
              name="linkedIn"
            />
          </Link>
        </div>
        <div className="md:text-md flex items-center justify-center pt-4 text-sm tracking-wide text-slate-50">
          <FaCopyright />{" "}
          <span className="ml-2 italic">
            {new Date().getFullYear()} <span className="text-amber-600">J</span>
            <span className="italic">Dev.</span>
          </span>
        </div>
      </section>
    </footer>
  )
}

export default Contact
