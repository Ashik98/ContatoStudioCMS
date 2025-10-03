// schemaTypes/objects/qrProfileCard.ts
import { defineField, defineType } from 'sanity'

export const qrProfileCard = defineType({
  name: 'qrProfileCard',
  title: 'QR Profile Card',
  type: 'object',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'qrCodeImage',
      title: 'QR Code Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileName',
      title: 'Profile Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileTitle',
      title: 'Profile Title',
      type: 'string',
    }),
    defineField({
      name: 'profileSubtitle',
      title: 'Profile Subtitle',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'profileName',
      subtitle: 'profileTitle',
      media: 'profileImage',
    },
  },
})
