// schemaTypes/documents/blogPage.ts
import { defineField, defineType } from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this blog page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Blog Header',
      type: 'blogPageHeader',
      description: 'Header section for the blog page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'articles',
      title: 'Articles',
      type: 'array',
      description: 'Collection of articles for this blog page.',
      of: [
        {
          type: 'article',
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: { source: 'pageTitle' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO optimization settings for the blog page.',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'header.heading',
      articleCount: 'articles',
    },
    prepare({ title, subtitle, articleCount }) {
      const count = articleCount ? articleCount.length : 0;
      return {
        title: title,
        subtitle: `${subtitle} • ${count} article${count !== 1 ? 's' : ''}`,
      };
    },
  },
})
