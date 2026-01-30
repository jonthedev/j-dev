// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Jonathan Kaonga - Freelance Senior Frontend Engineer | Vue & Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Vue & Nuxt specialist · Contract & project work · Turning ideas into interactive reality' },
        { name: 'keywords', content: 'Vue, Nuxt, Frontend Engineer, Freelance, ZZP, JavaScript, TypeScript' },
        { name: 'author', content: 'Jonathan Kaonga' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})