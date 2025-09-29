// schemaTypes/objects/heroCallToAction.ts
import { defineField, defineType } from 'sanity'

export const heroCallToAction = defineType({
  name: 'heroCallToAction',
  title: 'Hero Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Text to highlight in the heading.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
  name: 'phoneScreens',
  title: 'Phone Screen Images',
  type: 'array',
  description: 'Array of 3 phone screen image URLs to display.',
  of: [
    {
      type: 'object',
      name: 'phoneScreen',
      title: 'Phone Screen',
      fields: [
        {
          name: 'imageUrl',
          title: 'Image URL',
          type: 'url',
          description: 'URL of the phone screen image.',
          validation: (rule) => rule.required().uri({
            scheme: ['http', 'https']
          }),
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Alternative text for accessibility.',
          validation: (rule) => rule.required(),
        },
        {
          name: 'screenTitle',
          type: 'string',
          title: 'Screen Title',
          description: 'Optional title for this screen.',
        },
      ],
      preview: {
        select: {
          title: 'screenTitle',
          subtitle: 'imageUrl',
        },
        prepare({ title, subtitle }) {
          return {
            title: title || 'Phone Screen',
            subtitle: subtitle,
          };
        },
      },
    },
  ],
  validation: (rule) => rule.length(3).error('Please add exactly 3 phone screen images'),
}),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      description: 'Call-to-action buttons (e.g., App Store, Google Play).',
      of: [
        {
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
              validation: (rule) => rule.required(),
            },
            {
              name: 'isPrimary',
              title: 'Primary Button',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
      validation: (rule) => rule.min(1).max(3),
    }),
  ],
  preview: {
    select: {
      title: 'mainHeading',
      subtitle: 'description',
    },
  },
})
