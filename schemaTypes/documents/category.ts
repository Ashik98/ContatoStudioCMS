// schemaTypes/documents/category.ts
import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: 'Name of the category (e.g., Technology, Business, Marketing).',
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of what this category covers.',
      validation: (rule) => rule.max(200),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
