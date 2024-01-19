import { nanoid } from "nanoid"
import React from "react"
import { SiChakraui, SiStorybook, SiStyledcomponents } from "react-icons/si"
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb"

import ProjectVanlanschot from "@assets/project-vanlanschot.png"
import ProjectANWB from "@assets/project-anwb-traffic-verkeer.png"

interface TechItem {
  id: string
  icon: React.ReactElement
}

interface ProjectItem {
  id: string
  img: React.ReactElement
  url: string
  github: string | null
  title: string
  text: string
  tech: TechItem[]
}

export const projects: ProjectItem[] = [
  {
    id: nanoid(),
    img: (
      <img
        src={ProjectANWB}
        alt="Screenshot of the traffic verkeer app"
        className="h-64 w-full rounded-t-lg object-cover"
      />
    ),
    url: "https://www.anwb.nl/verkeer",
    github: null,
    title: "Traffic Verkeer",
    text: "Award-winning web application for ANWB that displays live traffic information to millions of users.",
    tech: [
      {
        id: nanoid(),
        icon: (
          <TbBrandTypescript
            className="h-7 w-7 text-blue-600"
            title="TypeScript"
          />
        ),
      },
      {
        id: nanoid(),
        icon: (
          <TbBrandNextjs className="h-7 w-7 text-slate-50" title="Next JS" />
        ),
      },
      {
        id: nanoid(),
        icon: (
          <SiStyledcomponents
            className="h-7 w-7 text-pink-300"
            title="Styled Components"
          />
        ),
      },
    ],
  },
  {
    id: nanoid(),
    img: (
      <img
        src={ProjectVanlanschot}
        alt="screenshot of homepage for van lanschot kempen"
        className="h-64 w-full rounded-t-lg object-cover"
      />
    ),
    url: "https://www.vanlanschotkempen.com/en-nl",
    github: null,
    title: "Van Lanschot Kempen",
    text: "Built a reusable component library for Van Lanschot Kempen's re-brand strategy.",
    tech: [
      {
        id: nanoid(),
        icon: (
          <TbBrandTypescript
            className="h-7 w-7 text-blue-600"
            title="TypeScript"
          />
        ),
      },
      {
        id: nanoid(),
        icon: (
          <TbBrandNextjs className="h-7 w-7 text-slate-50" title="Next JS" />
        ),
      },
      {
        id: nanoid(),
        icon: <SiChakraui className="h-7 w-7 text-sky-300" title="Chakra UI" />,
      },
      {
        id: nanoid(),
        icon: (
          <SiStorybook className="h-7 w-7 text-pink-500" title="Story Book" />
        ),
      },
    ],
  },
]
