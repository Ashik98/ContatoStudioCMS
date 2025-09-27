import { defineField, defineType } from 'sanity'

export const loginPage = defineType({
  name: 'loginPage',
  title: 'Login Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal name for this landing page (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The primary headline shown on the landing page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
      description: 'A short supporting tagline or sub-heading.',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine & social sharing settings for this page.',
    }),
  ],
})
