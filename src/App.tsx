import Navbar from "@components/ui/Navbar"
import Hero from "./components/ui/Hero"

import TechStack from "./components/ui/TechStack"

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
    </div>
  )
}

export default App
