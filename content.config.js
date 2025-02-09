import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['aktuelles/*.md'],
      }

    }),
    news: defineCollection({
      type: 'page',
      source: {
        include: ['aktuelles/**/*.md', 'en/news/**/*.md'],
      },
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()),
      })
    })
  }
})