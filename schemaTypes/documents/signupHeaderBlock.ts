// schemaTypes/documents/signupHeaderBlock.ts
import { defineField, defineType } from 'sanity'

export const signupHeaderBlock = defineType({
  name: 'signupHeaderBlock',
  title: 'Signup Header Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this signup header block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'appIcon',
      title: 'App Icon',
      type: 'image',
      description: 'App or brand icon displayed above the heading.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for accessibility.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Primary heading for the signup section (e.g., "Get Contato").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Supporting description text about the app and its benefits.',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this signup header block should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heading: 'heading',
      linkCount: 'downloadLinks',
      media: 'appIcon',
      isActive: 'isActive',
    },
    prepare({ title, heading, linkCount, media, isActive }) {
      const count = Array.isArray(linkCount) ? linkCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `"${heading}" - ${count} download links`,
        media: media,
      };
    },
  },
})

