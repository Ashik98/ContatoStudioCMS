import { defineField, defineType } from 'sanity'

export const aboutCommunicationSection = defineType({
  name: 'aboutCommunicationSection',
  title: 'About Communication Section',
  type: 'object',
  fields: [
    // ─────────────────────────────
    // Chip
    // ─────────────────────────────
    defineField({
      name: 'chipText',
      title: 'Chip Text',
      type: 'string',
    }),

    // ─────────────────────────────
    // Title
    // ─────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),

    defineField({
      name: 'titleHighlightText',
      title: 'Title Highlight Text',
      type: 'string',
    }),

    // ─────────────────────────────
    // Description (rich text)
    // ─────────────────────────────
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // ─────────────────────────────
    // Highlight features (bullets)
    // ─────────────────────────────
    defineField({
      name: 'highlightFeatures',
      title: 'Highlight Features',
      type: 'array',
      of: [
        defineField({
          name: 'highlightFeature',
          title: 'Highlight Feature',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
            },
            prepare({ title, icon }) {
              return {
                title,
                subtitle: icon ? `Icon: ${icon}` : 'No icon',
              }
            },
          },
        }),
      ],
    }),

    // ─────────────────────────────
    // Bubbles
    // ─────────────────────────────
    defineField({
      name: 'bubbles',
      title: 'Bubbles',
      type: 'array',
      of: [
        defineField({
          name: 'floatingInfo',
          title: 'Floating Info',
          type: 'object',
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (e.g. Zap, Shield, MessageCircle)',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'iconName',
            },
            prepare({ title, icon }) {
              return {
                title,
                subtitle: icon ? `Icon: ${icon}` : 'No icon',
              }
            },
          },
        }),
      ],
    }),

    // ─────────────────────────────
    // Bottom Text
    // ─────────────────────────────
    defineField({
      name: 'bottomTextHeading',
      title: 'Bottom Text Heading',
      type: 'string',
    }),

    defineField({
      name: 'bottomTextDescription',
      title: 'Bottom Text Description',
      type: 'text',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      chip: 'chipText',
    },
    prepare({ title, chip }) {
      return {
        title: title || 'About Communication Section',
        subtitle: chip || 'No chip text',
      }
    },
  },
})
