import { defineField, defineType } from 'sanity'

export const featureDetailPage = defineType({
  name: 'featureDetailPage',
  title: 'Feature Detail Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'features', title: 'Features & Benefits' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'moreInfo', title: 'More Info' },
    { name: 'seo', title: 'SEO & Settings' },
  ],
  fields: [
    // Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),

    // Basic Content Fields
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  }),
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon name (e.g., "Brain", "Video", "MessageCircle")',
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'url',
      group: 'content',
    }),

    // Benefits - Array of strings
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      group: 'features',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    // Features - Array of objects
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),

    // Stats - Array of objects
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          name: 'statItem',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
              description: 'e.g., "95%", "3x", "50M+"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'number', subtitle: 'label' },
          },
        },
      ],
    }),

    // How It Works
    defineField({
      name: 'howItWorksHeading',
      title: 'How It Works Heading',
      type: 'string',
      group: 'howItWorks',
    }),

    // How It Works Steps
    defineField({
      name: 'howItWorksSteps',
      title: 'How It Works Steps',
      type: 'array',
      group: 'howItWorks',
      of: [
        {
          type: 'object',
          name: 'howItWorksStep',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' },
                    { title: 'Quote', value: 'blockquote' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                      { title: 'Underline', value: 'underline' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          defineField({
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          }),
                        ],
                      },
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'image',
              title: 'Image URL',
              type: 'url',
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),

    // Detail Points
    defineField({
      name: 'detailPoints',
      title: 'Detail Points',
      type: 'array',
      group: 'howItWorks',
      of: [
        {
          type: 'object',
          name: 'detailPoint',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),

    // More Info Section
    defineField({
      name: 'moreInfo',
      title: 'More Info',
      type: 'object',
      group: 'moreInfo',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'paragraph',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                  rows: 4,
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'emphasis',
                  title: 'Emphasis',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
              preview: {
                select: { title: 'text', emphasis: 'emphasis' },
                prepare({ title, emphasis }) {
                  return {
                    title: title?.substring(0, 50) + '...' || 'Paragraph',
                    subtitle: emphasis ? 'Emphasized' : '',
                  }
                },
              },
            },
          ],
        }),
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),

    // Published
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      group: 'seo',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      isPublished: 'isPublished',
    },
    prepare({ title, slug, isPublished }) {
      return {
        title: title || 'Feature Detail Page',
        subtitle: `${slug ? `/${slug}` : ''} ${isPublished ? '✓' : '(draft)'}`,
      }
    },
  },
})
