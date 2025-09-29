// schemaTypes/documents/aboutPage.ts
import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal page title for identification.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for search engines and browser tab.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines.',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Content',
      type: 'array',
      description: 'Drag and drop to build your about page.',
      of: [
        { type: 'companyStorySection' },
        { type: 'teamIntroSection' },
        { type: 'teamMembersGrid' },
        { type: 'contactHRSection' },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this about page should be published.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },
    prepare({ title, isActive }) {
      return {
        title: title || 'About Page',
        subtitle: isActive ? 'Published' : 'Draft',
      };
    },
  },
})
