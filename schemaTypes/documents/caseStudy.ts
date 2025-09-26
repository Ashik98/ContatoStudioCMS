import {defineField, defineType} from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
    defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]} as any),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
