import Navbar from "@components/ui/Navbar"
import Text from "./components/Typography/Text/Text"

function App() {
  return (
    <div
      className="bg-neutral-900 font-kanit leading-loose"
      id="home"
      data-testid="app"
    >
      <Navbar />
      <Text size="large">This is some LARGE text</Text>
      <Text size="medium">This is some MEDIUM text</Text>
      <Text size="small">This is some SMALL text</Text>
    </div>
  )
}

export default App
