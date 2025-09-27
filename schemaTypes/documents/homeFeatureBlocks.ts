import { defineField, defineType } from 'sanity'

export const homeFeatureBlocks = defineType({
  name: 'homeFeatureBlocks',
  title: 'Home Feature Blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this feature blocks section (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureBlocks',
      title: 'Feature Blocks',
      type: 'array',
      description: 'Collection of feature blocks to display on the home page.',
      of: [
        {
          type: 'object',
          name: 'featureBlock',
          title: 'Feature Block',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Primary Icon for feature.',
              options: {
                list: [
                  { title: 'App Access', value: 'App Access' },
                  { title: 'Premium Content', value: 'Premium Content' },
                  { title: 'Community Engagement', value: 'Community Engagement' },
                  { title: 'Analytics', value: 'Analytics' },
                  { title: 'Privacy', value: 'Privacy' },
                  { title: 'Third Party Integrations', value: 'Integrations' },
                  { title: 'Other', value: 'Other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'Title of the feature (e.g., "Seamless App Access", "Premium Content").',
              validation: (rule) => rule.required().max(100),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
              description: 'Brief description of what this feature offers.',
              validation: (rule) => rule.required().max(200),
            }),
            defineField({
              name: 'features',
              title: 'Feature List',
              type: 'array',
              description: 'List of specific features or benefits (e.g., "User-friendly interface", "Fast loading").',
              of: [
                {
                  type: 'object',
                  name: 'featureItem',
                  title: 'Feature Item',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                      description: 'Individual feature point.',
                      validation: (rule) => rule.required().max(80),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'text',
                    },
                  },
                },
              ],
              validation: (rule) => rule.min(1).max(8),
            }),
          ],
          preview: {
  select: {
    title: 'title',
    subtitle: 'description',
    icon: 'icon',
  },
  prepare({ title, subtitle, icon }) {
    return {
      title: `${icon ? `[${icon}] ` : ''}${title}`,
      subtitle: subtitle,
    };
  },
},
        },
      ],
      validation: (rule) => rule.required().min(1).max(8),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      blockCount: 'featureBlocks',
    },
    prepare({ title, blockCount }) {
      const count = Array.isArray(blockCount) ? blockCount.length : 0;
      return {
        title: title || 'Untitled Feature Blocks',
        subtitle: `${count} feature block${count !== 1 ? 's' : ''}`,
      };
    },
  },
})
