// schemaTypes/objects/networkSmarterHero.ts
import { defineField, defineType } from 'sanity'

export const networkSmarterHero = defineType({
  name: 'networkSmarterHero',
  title: 'Network Smarter Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'brandIcon',
      title: 'Brand Icon',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightedWord',
      title: 'Highlighted Word',
      type: 'string',
      description: 'Word to highlight in the heading (e.g., "Smarter").',
    }),
    defineField({
      name: 'secondaryHeading',
      title: 'Secondary Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statistic',
          fields: [
            defineField({
              name: 'value',
              title: 'Statistic Value',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Statistic Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
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
    }),
    defineField({
      name: 'demoVideo',
      title: 'Demo Video',
      type: 'object',
      fields: [
        {
          name: 'videoText',
          title: 'Video Button Text',
          type: 'string',
          initialValue: 'Watch Demo',
        },
        {
          name: 'videoDuration',
          title: 'Video Duration',
          type: 'string',
        },
        {
          name: 'demoUrl',
          title: 'Demo URL',
          type: 'url',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'mainHeading',
      subtitle: 'description',
      media: 'brandIcon',
    },
  },
})
