// schemaTypes/documents/featureMainBlock.ts
import { defineField, defineType } from 'sanity'

export const featureMainBlock = defineType({
  name: 'featureMainBlock',
  title: 'Feature Main Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this feature main block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      type: 'string',
      description: 'Small section label text (e.g., "What\'s new?").',
      validation: (rule) => rule.max(50),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of features to showcase.',
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
              description: 'Name of the feature (e.g., "AI-Powered Matching").',
              validation: (rule) => rule.required().max(100),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
              description: 'Description of what this feature does.',
              validation: (rule) => rule.required().max(200),
            }),
            defineField({
              name: 'featureImage',
              title: 'Feature Image',
              type: 'image',
              description: 'Image showcasing this feature (e.g., phone mockup).',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility.',
                  validation: (rule) => rule.required(),
                }),
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'orderIndex',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which this feature appears (lower numbers first).',
              validation: (rule) => rule.min(0).max(100),
            }),
          ],
          preview: {
            select: {
              title: 'featureName',
              subtitle: 'description',
              media: 'featureImage',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title,
                subtitle: subtitle,
                media: media,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(10),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this feature main block should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sectionLabel: 'sectionLabel',
      featureCount: 'features',
      isActive: 'isActive',
    },
    prepare({ title, sectionLabel, featureCount, isActive }) {
      const count = Array.isArray(featureCount) ? featureCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      const label = sectionLabel ? `"${sectionLabel}"` : 'Features';
      return {
        title: `${title}${status}`,
        subtitle: `${label} - ${count} features`,
      };
    },
  },
})

