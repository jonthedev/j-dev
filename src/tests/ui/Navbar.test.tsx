import { render, screen } from "@testing-library/react"
import Navbar from "@components/ui/Navbar"

it("renders Navbar component", () => {
  render(<Navbar />)
  const navbar = screen.getByTestId("navbar")
  expect(navbar).toBeInTheDocument()
})
