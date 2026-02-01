interface TechItem {
  id: string
  icon: string
  classname: string
}

export interface ProjectItem {
  id: string
  img: string
  url: string
  github: string | null
  title: string
  text: string
  tech: TechItem[]
}

export const projects: ProjectItem[] = [
  {
    id: 'thalex',
    img: '/project-thalex.png',
    url: 'https://thalex.com/',
    github: null,
    title: 'Thalex',
    text: 'Derivatives trading platform — options, futures & perpetuals. Built with Vue/Nuxt and real-time data visualization.',
    tech: [
      { id: 'vue-thalex', icon: 'simple-icons:vuedotjs', classname: 'text-green-500' },
      { id: 'nuxt-thalex', icon: 'simple-icons:nuxtdotjs', classname: 'text-green-600' },
      { id: 'ts-thalex', icon: 'simple-icons:typescript', classname: 'text-blue-600' }
    ]
  },
  {
    id: 'anwb-traffic',
    img: '/project-anwb-traffic-verkeer.png',
    url: 'https://www.anwb.nl/verkeer',
    github: null,
    title: 'ANWB Traffic Verkeer',
    text: 'Web application for ANWB that displays live traffic information to millions of users. Won Website van het Jaar 2022 – Populairste Website (Most Popular Website).',
    tech: [
      {
        id: 'ts-1',
        icon: 'simple-icons:typescript',
        classname: 'text-blue-600'
      },
      {
        id: 'nextjs-1',
        icon: 'simple-icons:nextdotjs',
        classname: 'text-gray-800 dark:text-white'
      },
      {
        id: 'styled-comp-1',
        icon: 'simple-icons:styledcomponents',
        classname: 'text-pink-300'
      }
    ]
  },
  {
    id: 'van-lanschot',
    img: '/project-vanlanschot.png',
    url: 'https://www.vanlanschotkempen.com/en-nl',
    github: null,
    title: 'Van Lanschot Kempen',
    text: 'Built a reusable component library for Van Lanschot Kempen\'s re-brand strategy.',
    tech: [
      {
        id: 'ts-2',
        icon: 'simple-icons:typescript',
        classname: 'text-blue-600'
      },
      {
        id: 'nextjs-2',
        icon: 'simple-icons:nextdotjs',
        classname: 'text-gray-800 dark:text-white'
      },
      {
        id: 'chakra-1',
        icon: 'simple-icons:chakraui',
        classname: 'text-sky-300'
      },
      {
        id: 'storybook-1',
        icon: 'simple-icons:storybook',
        classname: 'text-pink-500'
      }
    ]
  },
  {
    id: 'vacaturebank',
    img: '/project-vacaturebank.png',
    url: 'https://www.nationalevacaturebank.nl/',
    github: null,
    title: 'National Vacaturebank',
    text: 'The National Vacature Bank is one of the largest job platforms in the Netherlands, connecting job seekers with employers across various industries.',
    tech: [
      {
        id: 'ts-3',
        icon: 'simple-icons:typescript',
        classname: 'text-blue-600'
      },
      {
        id: 'nextjs-3',
        icon: 'simple-icons:nextdotjs',
        classname: 'text-gray-800 dark:text-white'
      },
      {
        id: 'sass-1',
        icon: 'simple-icons:sass',
        classname: 'text-pink-500'
      },
      {
        id: 'aws-1',
        icon: 'simple-icons:amazonaws',
        classname: 'text-orange-600'
      }
    ]
  }
]
