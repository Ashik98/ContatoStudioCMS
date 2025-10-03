// schemaTypes/objects/trustStatistics.ts
import { defineField, defineType } from 'sanity'

export const trustStatistics = defineType({
  name: 'trustStatistics',
  title: 'Trust Statistics Section',
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
      validation: (rule) => rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      stats: 'statistics',
    },
    prepare({ title, stats }) {
      const count = Array.isArray(stats) ? stats.length : 0;
      return {
        title: title || 'Trust Statistics Section',
        subtitle: `${count} statistics`,
      };
    },
  },
})
