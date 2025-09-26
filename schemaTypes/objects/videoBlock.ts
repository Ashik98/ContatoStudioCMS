import {defineField, defineType} from 'sanity'

export const videoBlock = defineType({
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'videoFile', title: 'Video File', type: 'file'}),
  ],
})

