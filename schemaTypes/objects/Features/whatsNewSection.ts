// schemaTypes/objects/whatsNewSection.ts
import { defineField, defineType } from 'sanity'

export const whatsNewSection = defineType({
  name: 'whatsNewSection',
  title: "What's New Section",
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading (e.g., "What\'s New?").',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'New Features',
      type: 'array',
      description: 'List of new features with phone mockups.',
      of: [
        {
          type: 'object',
          name: 'newFeature',
          title: 'New Feature',
          fields: [
            defineField({
              name: 'featureName',
              title: 'Feature Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'featureImage',
              title: 'Feature Mockup Image',
              type: 'image',
              description: 'Phone mockup or screenshot showing this feature.',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt text',
                  validation: (rule) => rule.required(),
                },
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'orderIndex',
              title: 'Display Order',
              type: 'number',
              validation: (rule) => rule.min(0),
            }),
          ],
          preview: {
            select: {
              title: 'featureName',
              subtitle: 'description',
              media: 'featureImage',
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
        title: title || "What's New Section",
        subtitle: `${count} new features`,
      };
    },
  },
})
