import { defineField, defineType, defineArrayMember } from 'sanity'

export const supportPageType = defineType({
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  fields: [
    // Basic page information
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main title for the support page (e.g., "Help Center")',
      validation: (Rule) => Rule.required().max(100),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text under the main title',
      rows: 2,
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Search configuration
    defineField({
      name: 'searchSection',
      title: 'Search Section',
      type: 'object',
      fields: [
        defineField({
          name: 'searchPlaceholder',
          title: 'Search Placeholder Text',
          type: 'string',
          initialValue: 'Search for help articles, features, or topics...',
        }),
        defineField({
          name: 'searchButtonText',
          title: 'Search Button Text',
          type: 'string',
          initialValue: 'Search',
        }),
        defineField({
          name: 'enableSearch',
          title: 'Enable Search',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),

    // Categories section
    defineField({
      name: 'categoriesSection',
      title: 'Categories Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Browse by Category',
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Section Description',
          type: 'text',
          rows: 2,
          initialValue: 'Find the help you need organized by topic. Each category contains detailed guides and solutions.',
        }),
        defineField({
          name: 'categories',
          title: 'Support Categories',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Category Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Category Description',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'icon',
                  title: 'Category Icon',
                  type: 'string',
                  description: 'Icon identifier (e.g., "user", "settings", "help")',
                }),
                defineField({
                  name: 'articleCount',
                  title: 'Number of Articles',
                  type: 'number',
                  description: 'Display count of articles in this category',
                }),
                defineField({
                  name: 'topics',
                  title: 'Category Topics',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'string',
                      title: 'Topic',
                    }),
                  ],
                  description: 'List of topics covered in this category',
                }),
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'See all articles',
                }),
                defineField({
                  name: 'buttonLink',
                  title: 'Button Link',
                  type: 'string',
                  description: 'URL or path for the category page',
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            }),
          ],
          validation: (Rule) => Rule.min(1).max(8),
        }),
      ],
    }),

    // Call-to-action section
    defineField({
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable CTA Section',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          initialValue: 'Still need help?',
        }),
        defineField({
          name: 'description',
          title: 'CTA Description',
          type: 'text',
          rows: 2,
          initialValue: "Can't find what you're looking for? Our support team is here to help.",
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Contact Support',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'URL or path for the contact page',
        }),
      ],
    }),

    // Additional content sections
    defineField({
      name: 'additionalSections',
      title: 'Additional Content Sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'textSection',
          title: 'Text Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }],
            }),
          ],
        }),
        defineArrayMember({
          name: 'faqSection',
          title: 'FAQ Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'FAQ Section Title',
              type: 'string',
              initialValue: 'Frequently Asked Questions',
            }),
            defineField({
              name: 'faqs',
              title: 'FAQs',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'question',
                      title: 'Question',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'answer',
                      title: 'Answer',
                      type: 'array',
                      of: [{ type: 'block' }],
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'question',
                    },
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // SEO field using your common seo object
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // Publishing settings
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
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Support Page',
        subtitle: subtitle || 'Support page content',
      }
    },
  },

  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Last Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }],
    },
  ],
})
