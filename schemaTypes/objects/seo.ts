// schemaTypes/objects/seo.ts
import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    // Basic Meta Fields
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title that appears in search results and browser tabs',
      validation: (rule) => rule.required().max(60).warning('Should be under 60 characters for optimal display'),
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Brief description for search results (150-160 characters)',
      rows: 3,
      validation: (rule) => rule.required().min(120).max(160).warning('Should be 120-160 characters for best results'),
    }),

    // URL Fields
    defineField({
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, ''),
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The preferred URL for this content (helps prevent duplicate content issues)',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      }),
    }),

    // SEO Strategy
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      description: 'Primary keyword this page should rank for',
      validation: (rule) => rule.max(50),
    }),

    defineField({
      name: 'keywords',
      title: 'Additional Keywords',
      type: 'array',
      description: 'Additional keywords and phrases (comma-separated)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.max(10),
    }),

    // Schema Markup
    defineField({
      name: 'schemaType',
      title: 'Schema Type',
      type: 'string',
      description: 'Schema.org markup type for structured data',
      options: {
        list: [
          { title: 'Article', value: 'Article' },
          { title: 'BlogPosting', value: 'BlogPosting' },
          { title: 'WebPage', value: 'WebPage' },
          { title: 'Product', value: 'Product' },
          { title: 'Event', value: 'Event' },
          { title: 'Organization', value: 'Organization' },
          { title: 'Person', value: 'Person' },
          { title: 'FAQ', value: 'FAQPage' },
          { title: 'How-to', value: 'HowTo' },
          { title: 'Recipe', value: 'Recipe' },
          { title: 'Review', value: 'Review' },
          { title: 'LocalBusiness', value: 'LocalBusiness' },
        ],
      },
      initialValue: 'WebPage',
    }),

    defineField({
      name: 'customSchema',
      title: 'Custom Schema JSON-LD',
      type: 'text',
      description: 'Custom JSON-LD structured data (advanced users only)',
      rows: 4,
    }),

    // Open Graph Fields
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      description: 'Social media sharing settings',
      fields: [
        defineField({
          name: 'title',
          title: 'OG Title',
          type: 'string',
          description: 'Title for social media sharing (if different from meta title)',
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'OG Description',
          type: 'text',
          description: 'Description for social media sharing',
          rows: 2,
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: 'image',
          title: 'OG Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: { 
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette']
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for the image',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'siteName',
          title: 'Site Name',
          type: 'string',
          description: 'Name of your website',
        }),
        defineField({
          name: 'type',
          title: 'OG Type',
          type: 'string',
          options: {
            list: [
              { title: 'Website', value: 'website' },
              { title: 'Article', value: 'article' },
              { title: 'Product', value: 'product' },
              { title: 'Profile', value: 'profile' },
            ],
          },
          initialValue: 'website',
        }),
      ],
    }),


    

    // Indexing Control
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),

    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Prevent search engines from following links on this page',
      initialValue: false,
    }),


    // Priority and Change Frequency (for sitemaps)
    defineField({
      name: 'priority',
      title: 'Sitemap Priority',
      type: 'number',
      description: 'Priority for sitemap (0.0 to 1.0)',
      validation: (rule) => rule.min(0).max(1),
      initialValue: 0.5,
    }),

    defineField({
      name: 'changeFreq',
      title: 'Change Frequency',
      type: 'string',
      description: 'How frequently this content changes',
      options: {
        list: [
          { title: 'Always', value: 'always' },
          { title: 'Hourly', value: 'hourly' },
          { title: 'Daily', value: 'daily' },
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
          { title: 'Yearly', value: 'yearly' },
          { title: 'Never', value: 'never' },
        ],
      },
      initialValue: 'monthly',
    }),
  ],

  // Preview
  preview: {
    select: {
      title: 'metaTitle',
      description: 'metaDescription',
      noIndex: 'noIndex',
    },
    prepare({ title, description, noIndex }) {
      return {
        title: title || 'No SEO title set',
        subtitle: `${description ? description.substring(0, 60) + '...' : 'No description'} ${noIndex ? '(No Index)' : ''}`,
      }
    },
  },
})
