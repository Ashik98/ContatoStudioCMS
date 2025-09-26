import {defineField, defineType} from 'sanity'

export const jobListing = defineType({
  name: 'jobListing',
  title: 'Job Listing',
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
    defineField({name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]}as any),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
