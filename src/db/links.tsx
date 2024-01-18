import { nanoid } from "nanoid"

interface NavigationItem {
  id: string
  href: string
  text: string
}

const navigation: NavigationItem[] = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
]

export default navigation
