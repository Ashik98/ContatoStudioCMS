// schemaTypes/documents/homePage.ts
import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      description: 'Company logo displayed in the header.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Company name displayed next to the logo (e.g., "Contato").',
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
      description: 'Drag and drop to build your home page.',
      of: [
        { type: 'contentFeaturesGrid' },
        { type: 'networkSmarterHero' },
        { type: 'ourPartners' },
        { type: 'appShowcaseSection' },
        { type: 'pricingPlans' },
        { type: 'trustStatistics' },
        { type: 'platformLearning' },
        { type: 'userTestimonials' },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this home page should be published.',
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
        title: title || 'Home Page',
        subtitle: isActive ? 'Published' : 'Draft',
      };
    },
  },
})
