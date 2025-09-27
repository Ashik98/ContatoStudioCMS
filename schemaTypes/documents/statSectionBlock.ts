// schemaTypes/documents/statSectionBlock.ts
import { defineField, defineType } from 'sanity'

export const statSectionBlock = defineType({
  name: 'statSectionBlock',
  title: 'Statistics Section Block',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this statistics block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      description: 'Array of statistics to display.',
      of: [
        {
          type: 'object',
          name: 'statistic',
          title: 'Statistic',
          fields: [
            defineField({
              name: 'title',
              title: 'Statistic Value',
              type: 'string',
              description: 'The numerical value or statistic (e.g., "2M+", "500+", "98%", "50M+").',
              validation: (rule) => rule.required().max(20),
            }),
            defineField({
              name: 'subtitle',
              title: 'Statistic Label',
              type: 'string',
              description: 'Description of the statistic (e.g., "Active Users Worldwide", "Enterprise Clients", "User Satisfaction Rate", "Content Interactions").',
              validation: (rule) => rule.required().max(50),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(8),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      statistics: 'statistics',
    },
    prepare({ title, statistics }) {
      const count = Array.isArray(statistics) ? statistics.length : 0;
      return {
        title: title || 'Untitled Statistics Block',
        subtitle: `${count} statistic${count !== 1 ? 's' : ''}`,
      };
    },
  },
})
