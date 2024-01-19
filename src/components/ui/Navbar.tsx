import links from "@src/db/navigationLinks"

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-10 bg-neutral-900 shadow-sm shadow-slate-50"
      id="navbar"
      data-testid="navbar"
    >
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold text-amber-600 italic">
          J<span className="text-neutral-50">Dev.</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-slate-50 hover:text-neutral-500 duration-300"
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
