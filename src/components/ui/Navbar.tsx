import links from "@src/db/navigationLinks"
import Heading from "@components/Typography/Heading/Heading"
import Link from "@components/Common/Link"

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-10 bg-neutral-900 shadow-sm shadow-slate-50"
      id="navbar"
      data-testid="navbar"
    >
      <div className="align-element flex flex-col py-4 sm:flex-row sm:items-center sm:gap-x-16 sm:py-8">
        <Heading variant="h3" className="italic text-amber-600">
          J<span className="text-slate-50">Dev.</span>
          <span>Online</span>
        </Heading>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <Link
                key={id}
                href={href}
                isExternal={false}
                className="text-md capitalize duration-300 md:text-lg"
              >
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
