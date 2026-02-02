// schemaTypes/objects/featuresGrid.ts
import { defineField, defineType } from 'sanity'

export const featuresGrid = defineType({
  name: 'featuresGrid',
  title: 'Features Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the features section (e.g., "Our Features").',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of features to display in grid format.',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'featureName',
              title: 'Feature Name',
              type: 'string',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required().max(150),
            }),
            defineField({
  name: 'iconName',
  title: 'Icon Name',
  description: 'Enter the icon name (e.g., "star", "check", "arrow-right")',
  type: 'string',
  validation: (rule) => rule.required().error('Icon name is required'),
})
,
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              description: 'Optional badge text to display on the feature (e.g., "New", "Popular").',
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Tags associated with this feature.',
              options: {
                layout: 'tags',
              },
            }),
          ],
          preview: {
            select: {
              title: 'featureName',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(20),
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
        title: title || 'Features Grid',
        subtitle: `${count} features`,
      };
    },
  },
})
