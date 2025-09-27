
import { defineField, defineType } from 'sanity'

export const homeFeatureHeader = defineType({
  name: 'homeFeatureHeader',
  title: 'Home Feature Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this feature header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main feature section heading (e.g., "Everything You Need for Content & Community").',
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
      rows: 3,
      description: 'Supporting description text below the main heading.',
      validation: (rule) => rule.required().max(300),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
    },
  },
})
