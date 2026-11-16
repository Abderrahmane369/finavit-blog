
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/articles',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Nutrition',
      'Vitamins',
      'Food',
      'Wellness',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(true),
    author: z.string().default('Finavit Editorial Team'),
    sources: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      })
    ).default([]),
  }),
});

export const collections = { articles };
