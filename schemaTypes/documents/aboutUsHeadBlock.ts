// schemaTypes/documents/aboutUsHeadBlock.ts
import { defineField, defineType } from 'sanity'

export const aboutUsHeadBlock = defineType({
  name: 'aboutUsHeadBlock',
  title: 'About Us Head Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this about us head block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      type: 'string',
      description: 'Small label text above the main heading (e.g., "About Us").',
      validation: (rule) => rule.max(50),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Primary heading for the about us section (e.g., "A Brief of Our 10 Years of Success").',
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: 'description',
      title: 'Description Content',
      type: 'array',
      description: 'Rich text content describing the company.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'About Us Image',
      type: 'image',
      description: 'Image representing the company or team.',
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
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this about us head block should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mainHeading: 'mainHeading',
      sectionLabel: 'sectionLabel',
      media: 'image',
      isActive: 'isActive',
    },
    prepare({ title, mainHeading, sectionLabel, media, isActive }) {
      const status = isActive ? '' : ' (Inactive)';
      const displayTitle = sectionLabel ? `${sectionLabel}: ${mainHeading}` : mainHeading;
      return {
        title: `${title}${status}`,
        subtitle: displayTitle,
        media: media,
      };
    },
  },
})


