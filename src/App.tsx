import Navbar from "@components/ui/Navbar"
import Hero from "@components/ui/Hero"
import TechStack from "@components/ui/TechStack"
import About from "@components/ui/About"
import Clients from "@components/ui/Clients"
import Projects from "@components/ui/Projects"
import Contact from "@components/ui/Contact"

import posthog from "posthog-js"

posthog.init("phc_HY79FSclgMXgsPdtQMzsfIBnLTCe8P0WBN6gwiJZn0P", {
  api_host: "https://eu.i.posthog.com",
})

function App() {
  return (
    <div
      className="bg-neutral-900 font-kanit leading-loose"
      id="home"
      data-testid="app"
    >
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Clients />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
