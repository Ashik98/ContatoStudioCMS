import {defineField, defineType} from 'sanity'

export const galleryBlock = defineType({
  name: 'galleryBlock',
  title: 'Gallery Block',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }as any),
  ],
})
