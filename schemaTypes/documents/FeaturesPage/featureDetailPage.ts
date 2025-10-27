// featureDetailPage.ts
import { defineField, defineType, defineArrayMember } from 'sanity'

export const featureDetailPage = defineType({
  name: 'featureDetailPage',
  title: 'Feature Detail Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(320),
    }),

    // Slug Section
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heroTitle',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'URL path for this feature page (e.g., "advanced-search")',
    }),

    defineField({
      name: 'heroKeyFeature',
      title: 'Hero Key Feature',
      type: 'object',
      fields: [
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: (Rule) => Rule.max(100),
        }),
      ],
    }),

    // Subsection
    defineField({
      name: 'subsectionTitle',
      title: 'Subsection Title',
      type: 'string',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'subsectionSubtitle',
      title: 'Subsection Subtitle',
      type: 'string',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'subsectionList',
      title: 'Subsection List',
      type: 'array',
      description: 'List of features in this subsection',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
                name: 'key',
                title: 'Key',
                type: 'slug',
                options: {
                  source: 'title',
                  maxLength: 96,
                },
                validation: (Rule) => Rule.required(),
              }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.max(200),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),

    // Feature Details Section
    defineField({
      name: 'featureDetailsSection',
      title: 'Feature Details Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Feature Details Heading',
          type: 'string',
          validation: (Rule) => Rule.max(100),
        }),
        defineField({
          name: 'subheading',
          title: 'Feature Details Subheading',
          type: 'string',
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: 'featureDetails',
          title: 'Feature Details List',
          type: 'array',
          description: 'List of detailed features',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'key',
                  title: 'Key',
                  type: 'slug',
                  options: {
                    source: 'title',
                    maxLength: 96,
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                  validation: (Rule) => Rule.max(300),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // SEO Settings and publishing control (optional, recommended)
    defineField({
        name: 'seo',
        title: 'SEO Settings',
        type: 'seo',
        description: 'SEO meta data for this page.',
      }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'heroTitle',
      media: 'heroKeyFeature.icon',
      slug: 'slug.current',
    },
    prepare({ title, media, slug }) {
      return {
        title: title || 'Feature Detail Page',
        subtitle: slug ? `/${slug}` : '',
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'heroTitle', direction: 'asc' }],
    },
    {
      title: 'Recently Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }],
    },
  ],
});
