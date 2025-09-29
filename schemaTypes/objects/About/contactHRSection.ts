// schemaTypes/objects/contactHRSection.ts
import { defineField, defineType } from 'sanity'

export const contactHRSection = defineType({
  name: 'contactHRSection',
  title: 'Contact HR Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'HR Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Email HR',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'email',
    },
  },
})
