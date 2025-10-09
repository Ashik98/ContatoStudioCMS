// schemaTypes/documents/featuresPage.ts
import { defineField, defineType } from 'sanity'

export const featuresPage = defineType({
  name: 'featuresPage',
  title: 'Features Page',
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
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO meta data for this page.',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Content',
      type: 'array',
      description: 'Drag and drop to build your features page.',
      of: [
        { type: 'heroCallToAction' },
        { type: 'featuresGrid' },
        { type: 'whatsNewSection' },
        { type: 'appScreensGallery' },
        { type: 'experienceConnectoCarousel' },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this features page should be published.',
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
        title: title || 'Features Page',
        subtitle: isActive ? 'Published' : 'Draft',
      };
    },
  },
})
