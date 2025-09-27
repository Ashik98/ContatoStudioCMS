import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      description: 'Compelling headline for the article.',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short engaging tagline or subtitle.',
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Article Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary of the article for previews and SEO.',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main featured image for the article.',
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
        defineField({
          name: 'caption',
          title: 'Image Caption',
          type: 'string',
          description: 'Optional caption for the featured image.',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subImages',
      title: 'Sub Images',
      type: 'array',
      description: 'Additional relevant images for the article.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Image Caption',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'array',
      description: 'Main content with proper headings and subheadings.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
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
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Article Tags',
      type: 'array',
      description: 'Tags for categorizing the article effectively.',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.min(1).max(10),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Primary category for the article.',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Business', value: 'business' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time',
      type: 'number',
      description: 'Estimated reading time in minutes.',
      validation: (rule) => rule.positive().integer(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      description: 'Toggle to mark this article as featured.',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO optimization settings for search engines.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'mainImage',
      isFeatured: 'isFeatured',
    },
    prepare({ title, subtitle, media, isFeatured }) {
      return {
        title: `${isFeatured ? '⭐ ' : ''}${title}`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
})
