import {defineField, defineType} from 'sanity'

export const documentBlock = defineType({
  name: 'documentBlock',
  title: 'Document Block',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'file', title: 'File', type: 'file'}),
  ],
})
