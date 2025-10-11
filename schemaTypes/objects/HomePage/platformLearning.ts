// schemaTypes/objects/platformLearning.ts
import { defineField, defineType } from 'sanity'

export const platformLearning = defineType({
  name: 'platformLearning',
  title: 'Platform Learning Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Learning Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'learningFeature',
          fields: [
            defineField({
  name: 'iconName',
  title: 'Icon Name',
  description: 'Enter the icon name (e.g., "star", "check", "arrow-right")',
  type: 'string',
  validation: (rule) => rule.required().error('Icon name is required'),
}),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'videoEmbed',
      title: 'Video Embed',
      type: 'object',
      fields: [
        {
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube, Vimeo, or other video platform URL',
        },
        {
          name: 'thumbnailImage',
          title: 'Video Thumbnail',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      subtitle: 'description',
    },
  },
})
