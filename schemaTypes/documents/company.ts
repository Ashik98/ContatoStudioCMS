import {defineField, defineType} from 'sanity'

export const company = defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Company Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'logo', title: 'Logo', type: 'image'}),
    defineField({name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]}as any),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
