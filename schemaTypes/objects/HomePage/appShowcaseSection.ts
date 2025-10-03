// schemaTypes/objects/appShowcaseSection.ts
import { defineField, defineType } from 'sanity'

export const appShowcaseSection = defineType({
  name: 'appShowcaseSection',
  title: 'App Showcase Section',
  type: 'object',
  fields: [
    defineField({
      name: 'imageUrls',
      title: 'App Showcase Image URLs',
      type: 'array',
      description: 'Array of image URLs to display in the app showcase.',
      of: [
        {
          type: 'object',
          name: 'showcaseImage',
          title: 'Showcase Image',
          fields: [
            {
              name: 'imageUrl',
              title: 'Image URL',
              type: 'url',
              description: 'URL of the showcase image.',
              validation: (rule) => rule.required().uri({
                scheme: ['http', 'https']
              }),
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility.',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'imageUrl',
              subtitle: 'alt',
            },
            prepare({ title, subtitle }) {
              return {
                title: 'Showcase Image',
                subtitle: subtitle || title,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      images: 'imageUrls',
    },
    prepare({ images }) {
      const count = Array.isArray(images) ? images.length : 0;
      return {
        title: 'App Showcase Section',
        subtitle: `${count} showcase images`,
      };
    },
  },
})
