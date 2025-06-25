import React from "react"
import { nanoid } from "nanoid"
import Icon from "@src/components/Icons/Icon"
import { twMerge } from "tailwind-merge"

export interface TechStackItem {
  id: string
  title: string
  icons?: React.ReactElement[]
  icon?: React.ReactElement
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
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: (
      <Icon
        className="animate-pulse text-yellow-500"
        name="javascript"
        variant="tech-stack"
      />
    ),
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
  },
  {
    id: nanoid(),
    title: "React",
    icon: (
      <Icon
        className="animate-pulse text-cyan-400"
        name="react"
        variant="tech-stack"
      />
    ),
  },
  {
    id: nanoid(),
    title: "NextJs",
    icon: (
      <Icon
        className="animate-pulse text-slate-50"
        name="nextjs"
        variant="tech-stack"
      />
    ),
  },

  {
    id: nanoid(),
    title: "NuxtJs",
    icon: (
      <Icon
        className="animate-pulse text-green-700"
        name="nuxt"
        variant="tech-stack"
      />
    ),
  },
  {
    id: nanoid(),
    title: "Cypress",
    icon: (
      <Icon
        className="animate-pulse text-cyan-200"
        name="cypress"
        variant="tech-stack"
      />
    ),
  },
  {
    id: nanoid(),
    title: "Github",
    icon: (
      <Icon
        className="animate-pulse text-slate-50"
        name="github"
        variant="tech-stack"
      />
    ),
  },
  {
    id: nanoid(),
    title: "Gitlab",
    icon: (
      <Icon
        className="animate-pulse text-orange-700"
        name="gitlab"
        variant="tech-stack"
      />
    ),
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: (
      <Icon
        className="animate-pulse text-cyan-400"
        name="tailwind"
        variant="tech-stack"
      />
    ),
  },
  {
    id: nanoid(),
    title: "VueJs",
    icon:
      //prettier-ignore
      <Icon
        className={twMerge("animate-pulse text-green-400")}
        name="vue"
        variant="tech-stack"
      />,
  },
  {
    id: nanoid(),
    title: "Vitest",
    icon: (
      <Icon
        className="animate-pulse text-yellow-400"
        name="vitest"
        variant="tech-stack"
      />
    ),
  },
]
