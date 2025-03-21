import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['aktuelles/*.md'],
      },
    }),
    news_de: defineCollection({
      type: 'page',
      source: {
        include: 'aktuelles/**/*.md',
      },
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()),
      })
    }),
    news_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/news/**/*.md',
      },
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()),
      })
    })
  }
})