import { defineType, defineField } from 'sanity'

export const LogoDocument = defineType({
  name: 'logoDocument',
  title: 'Logo Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainLogo',
      title: 'Main Logo',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().max(100),
        }),
      ],
    }),
    defineField({
      name: 'smallLogo',
      title: 'Small Logo',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().max(100),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainLogo.image',
    },
  },
})