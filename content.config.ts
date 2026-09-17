import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';

const CONTENT_EXCLUSIONS = ['template.md', '/drafts/', '/archive/', '\\.yml$']

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: 'blog/*.md',
        exclude: CONTENT_EXCLUSIONS
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
      source: {
        include: 'projects/*.md',
        exclude: CONTENT_EXCLUSIONS
      },
      schema: z.object({
        live_url: z.string(),
        source_url: z.string(),
        icon: z.string()
      })
    })
  }
});
