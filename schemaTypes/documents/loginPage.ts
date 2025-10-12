import { defineField, defineType } from 'sanity'

export const loginPage = defineType({
  name: 'loginPage',
  title: 'Login Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Heading',
      type: 'string',
      description: 'The primary headline shown on the landing page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'text',
      rows: 2,
      description: 'A short bottom text ',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'signUpUrl',
      title: 'Sign Up URL',
      type: 'url', 
      description: 'signup url ',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine & social sharing settings for this page.',
    }),
  ],
})
