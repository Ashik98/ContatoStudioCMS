import { defineField, defineType } from 'sanity'

export const portableTextBlocks = defineType({
  name: 'portableTextBlocks',
  title: 'Rich Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      // The 'of' property should be here, inside the field definition
      // for the 'array' type.
      of: [
        { type: 'block' },
        { type: 'image' }
        // You can add more types here, like your other custom objects
        // { type: 'galleryBlock' },
        // { type: 'videoBlock' },
        // { type: 'documentBlock' }
      ],
    }as any),
  ],
})
