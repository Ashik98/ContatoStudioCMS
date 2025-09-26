import {defineField, defineType} from 'sanity'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'CTA Block',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'string'}),
    defineField({name: 'url', title: 'URL', type: 'url'}),
  ],
})
