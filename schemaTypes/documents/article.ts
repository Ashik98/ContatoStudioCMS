import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title', 
      title: 'Title', 
      type: 'string', 
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author', 
      title: 'Author', 
      type: 'string'
    }),
    defineField({
      name: 'publishedDate', 
      title: 'Published Date', 
      type: 'datetime'
    }),
    defineField({
      name: 'mainImage', 
      title: 'Main Image', 
      type: 'image'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
    } as any),
    defineField({
      name: 'seo', 
      title: 'SEO', 
      type: 'seo'
    }),
  ],
})