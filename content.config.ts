import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

const CONTENT_EXCLUSIONS = ['template.md', '/drafts/', '\\.yml$']

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: 'blog/*.md',
        exclude: process.env.NODE_ENV === 'production' ? ['blog/drafts/**', ...CONTENT_EXCLUSIONS] : CONTENT_EXCLUSIONS
      },
      schema: z.object({
        published_on: z.string(),
        featured: z.optional(z.boolean())
      })
    }),
    leetcode: defineCollection({
      type: 'page',
      source: 'leetcode/*.md',
      schema: z.object({
        problemUrl: z.string()
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.*',
      schema: z.object({
        live_url: z.string(),
        source_url: z.string(),
        icon: z.string()
      })
    })
  }
});
