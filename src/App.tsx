import Navbar from "@components/ui/Navbar"
import Hero from "./components/ui/Hero"

function App() {
  return (
    <div
      className="bg-neutral-900 font-kanit leading-loose"
      id="home"
      data-testid="app"
    >
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
