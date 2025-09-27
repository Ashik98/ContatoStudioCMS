// schemaTypes/documents/imageGallery.ts
import { defineField, defineType } from 'sanity'

export const heroImageGallery = defineType({
  name: 'heroImageGallery',
  title: 'Hero Image Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'Internal name for this image gallery (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageUrls',
      title: 'Image URLs',
      type: 'array',
      description: 'Array of image URLs to be displayed in the layout.',
      of: [
        {
          type: 'object',
          name: 'imageItem',
          title: 'Image Item',
          fields: [
            defineField({
              name: 'url',
              title: 'Image URL',
              type: 'url',
              description: 'Direct URL to the image.',
              validation: (rule) => rule.required().uri({
                scheme: ['http', 'https']
              }),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the image.',
            }),
          ],
          preview: {
            select: {
              title: 'url',
              subtitle: 'alt',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Image URL',
                subtitle: subtitle || 'No alt text',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      imageCount: 'imageUrls',
    },
    prepare({ title, imageCount }) {
      const count = Array.isArray(imageCount) ? imageCount.length : 0;
      return {
        title: title || 'Untitled Gallery',
        subtitle: `${count} image${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
