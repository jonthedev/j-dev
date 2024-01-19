import React from "react"
import { nanoid } from "nanoid"
import { FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb"

interface SkillItem {
  id: string
  title: string
  icon: React.ReactElement
  text: string
}

export const skills: SkillItem[] = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: (
      <FaHtml5
        className="h-11 w-11 md:h-16 md:w-16 text-orange-700"
        title="HTML and CSS"
      />
    ),
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: (
      <FaJs
        className="h-11 w-11 md:h-16 md:w-16 text-yellow-500 animate-bounce"
        title="JavaScript"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: (
      <FaReact
        className="h-11 w-11 md:h-16 md:w-16 text-cyan-400 animate-spin"
        title="React"
      />
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: (
      <TbBrandTypescript
        className="h-11 w-11 md:h-16 md:w-16 text-blue-600 animate-pulse"
        title="TypeScript"
      />
    ),
    text: "A proficient TypeScript developer, I specialize in building robust and scalable applications, ensuring type safety and enhanced code maintainability.",
  },
  {
    id: nanoid(),
    title: "Github",
    icon: (
      <FaGithub
        className="h-11 w-11 md:h-16 md:w-16 text-slate-50 animate-bounce"
        title="Github"
      />
    ),
    text: "Utilizing GitHub as a central hub for seamless collaboration, I leverage its powerful version control features to push forward the evolution of projects.",
  },
  {
    id: nanoid(),
    title: "CSS Frameworks",
    icon: (
      <TbBrandTailwind
        className="h-11 w-11 md:h-16 md:w-16 text-cyan-400 animate-spin"
        title="Tailwind CSS"
      />
    ),
    text: "I use CSS frameworks like Tailwind to quickly deploy things like responsive grids, themes, styled forms, buttons, or other important UI elements on web pages and apps.",
  },
]
