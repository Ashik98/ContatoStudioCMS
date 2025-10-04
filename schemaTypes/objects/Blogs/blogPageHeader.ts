 // schemaTypes/objects/blogPageHeader.ts
import { defineField, defineType } from 'sanity'

export const blogPageHeader = defineType({
  name: 'blogPageHeader',
  title: 'Blog Page Header',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this blog header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main blog title/heading (e.g., "Contato Blog").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
      rows: 3,
      description: 'Supporting description text below the main heading.',
      validation: (rule) => rule.required().max(200),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
    },
  },
})
