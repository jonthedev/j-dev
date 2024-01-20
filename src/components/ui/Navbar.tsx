import links from "@src/db/navigationLinks"
import Heading from "../Typography/Heading/Heading"

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-10 bg-neutral-900 shadow-sm shadow-slate-50"
      id="navbar"
      data-testid="navbar"
    >
      <div className="align-element flex flex-col py-4 sm:flex-row sm:items-center sm:gap-x-16 sm:py-8">
        <Heading variant="h5" className="italic text-amber-600">
          J<span className="text-slate-50">Dev.</span>
        </Heading>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="text-lg capitalize tracking-wide text-slate-50 duration-300 hover:text-neutral-500"
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
