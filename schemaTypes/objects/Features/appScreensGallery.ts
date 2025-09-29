// schemaTypes/objects/appScreensGallery.ts
import { defineField, defineType } from 'sanity'

export const appScreensGallery = defineType({
  name: 'appScreensGallery',
  title: 'App Screens Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Heading for the screens section (e.g., "See More Screens").',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'screenImages',
      title: 'Screen Images',
      type: 'array',
      description: 'Collection of app screen images to display.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
              description: 'Optional caption for the screen.',
            },
          ],
        },
      ],
      validation: (rule) => rule.min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      images: 'screenImages',
    },
    prepare({ title, images }) {
      const count = Array.isArray(images) ? images.length : 0;
      return {
        title: title || 'App Screens Gallery',
        subtitle: `${count} screen images`,
      };
    },
  },
})
