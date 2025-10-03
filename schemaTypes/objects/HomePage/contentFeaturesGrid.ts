// schemaTypes/objects/contentFeaturesGrid.ts
import { defineField, defineType } from 'sanity'

export const contentFeaturesGrid = defineType({
  name: 'contentFeaturesGrid',
  title: 'Content & Community Features Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            defineField({
              name: 'featureTitle',
              title: 'Feature Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'featurePoints',
              title: 'Feature Points',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (rule) => rule.min(1).max(10),
            }),
          ],
          preview: {
            select: {
              title: 'featureTitle',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      features: 'features',
    },
    prepare({ title, features }) {
      const count = Array.isArray(features) ? features.length : 0;
      return {
        title: title || 'Content & Community Features',
        subtitle: `${count} features`,
      };
    },
  },
})
