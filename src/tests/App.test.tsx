import { render, screen } from "@testing-library/react"
import App from "@src/App"

it("renders App component", () => {
  render(<App />)
  const app = screen.getByTestId("app")
  expect(app).toBeInTheDocument()
})
