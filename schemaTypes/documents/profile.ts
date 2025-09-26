import {defineField, defineType} from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
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
    defineField({name: 'bio', title: 'Bio', type: 'array', of: [{type: 'block'}]}as any),
    defineField({name: 'image', title: 'Profile Image', type: 'image'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
