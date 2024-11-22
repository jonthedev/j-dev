import { nanoid } from "nanoid"
import React from "react"

import ProjectVanlanschot from "@assets/project-vanlanschot.png"
import ProjectANWB from "@assets/project-anwb-traffic-verkeer.png"
import ProjectVacaturebank from "@assets/project-vacaturebank.png"
import { IconProps } from "@src/components/Icons/Icon"

interface TechItem {
  id: string
  icon: IconProps["name"]
  classname: string
}

export interface ProjectItem {
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
        icon: "typescript",
        classname: "text-blue-600",
      },
      {
        id: nanoid(),
        icon: "nextjs",
        classname: "text-slate-50",
      },
      {
        id: nanoid(),
        icon: "styled-comp",
        classname: "text-pink-300",
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
        icon: "typescript",
        classname: "text-blue-600",
      },
      {
        id: nanoid(),
        icon: "nextjs",
        classname: "text-slate-50",
      },
      {
        id: nanoid(),
        icon: "chakra-ui",
        classname: "text-sky-300",
      },
      {
        id: nanoid(),
        icon: "storybook",
        classname: "text-pink-500",
      },
    ],
  },
  {
    id: nanoid(),
    img: (
      <img
        src={ProjectVacaturebank}
        alt="screenshot of homepage for national vacature bank"
        className="h-64 w-full rounded-t-lg object-cover"
      />
    ),
    url: "https://www.nationalevacaturebank.nl/",
    github: null,
    title: "National Vacaturebank",
    text: "The National Vacature Bank is one of the largest job platforms in the Netherlands, connecting job seekers with employers across various industries.",
    tech: [
      {
        id: nanoid(),
        icon: "typescript",
        classname: "text-blue-600",
      },
      {
        id: nanoid(),
        icon: "nextjs",
        classname: "text-slate-50",
      },
      {
        id: nanoid(),
        icon: "sass",
        classname: "text-pink-500",
      },
      {
        id: nanoid(),
        icon: "aws",
        classname: "text-orange-600",
      },
    ],
  },
]
