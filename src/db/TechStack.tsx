import React from "react"
import { nanoid } from "nanoid"
import Icon from "@src/components/Icons/Icon"
import { twMerge } from "tailwind-merge"

export interface TechStackItem {
  id: string
  title: string
  icons?: React.ReactElement[]
  icon?: React.ReactElement
  text: string
}

export const techStack: TechStackItem[] = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icons: [
      <Icon
        className="animate-pulse text-orange-700"
        name="html"
        variant="tech-stack"
      />,
      <Icon
        className="mr-2 h-4 w-4 animate-pulse text-slate-50"
        name="plus"
        variant="base"
      />,
      <Icon
        className="animate-pulse text-blue-500"
        name="css"
        variant="tech-stack"
      />,
    ],
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: (
      <Icon
        className="animate-bounce text-yellow-500"
        name="javascript"
        variant="tech-stack"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: (
      <Icon
        className="animate-spin text-cyan-400"
        name="react"
        variant="tech-stack"
      />
    ),
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: (
      <Icon
        className="animate-pulse text-blue-600"
        name="typescript"
        variant="tech-stack"
      />
    ),
    text: "A proficient TypeScript developer, I specialize in building robust and scalable applications, ensuring type safety and enhanced code maintainability.",
  },
  {
    id: nanoid(),
    title: "Github",
    icon: (
      <Icon
        className="animate-bounce text-slate-50"
        name="github"
        variant="tech-stack"
      />
    ),
    text: "Utilizing GitHub as a central hub for seamless collaboration, I leverage its powerful version control features to push forward the evolution of projects.",
  },
  {
    id: nanoid(),
    title: "CSS Frameworks",
    icon: (
      <Icon
        className="animate-spin text-cyan-400"
        name="tailwind"
        variant="tech-stack"
      />
    ),
    text: "I use CSS frameworks like Tailwind to quickly deploy things like responsive grids, themes, styled forms, buttons, or other important UI elements on web pages and apps.",
  },
  {
    id: nanoid(),
    title: "GraphQL",
    icon:
      //prettier-ignore
      <Icon
        className={twMerge("animate-pulse text-pink-650")}
        name="graphql"
        variant="tech-stack"
      />,
    text: "Experienced in utilizing GraphQL within React/Next.js applications for efficient client-side data fetching.",
  },
]
