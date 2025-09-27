// schemaTypes/documents/statSectionHeader.ts
import { defineField, defineType } from 'sanity'

export const statSectionHeader = defineType({
  name: 'statSectionHeader',
  title: 'Statistics Section Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Internal name for this statistics section header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main heading text (e.g., "Join Millions Connecting with Contato").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
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
