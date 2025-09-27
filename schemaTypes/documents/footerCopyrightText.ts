// schemaTypes/documents/footerCopyrightText.ts
import { defineField, defineType } from 'sanity'

export const footerCopyrightText = defineType({
  name: 'footerCopyrightText',
  title: 'Footer Copyright Text',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this copyright text (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copyrightYear',
      title: 'Copyright Year',
      type: 'number',
      description: 'The year for the copyright notice (e.g., 2025).',
      validation: (rule) => rule.required().min(1900).max(2100),
      initialValue: new Date().getFullYear(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Company or brand name for the copyright (e.g., "Contato").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Additional copyright text (e.g., "All rights reserved").',
      validation: (rule) => rule.max(200),
      initialValue: 'All rights reserved',
    }),
    defineField({
      name: 'additionalText',
      title: 'Additional Footer Text',
      type: 'text',
      rows: 2,
      description: 'Extra text to display after copyright (e.g., "Made with ❤ for content lovers worldwide").',
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'showCopyrightSymbol',
      title: 'Show Copyright Symbol (©)',
      type: 'boolean',
      description: 'Whether to display the copyright symbol.',
      initialValue: true,
    }),
    defineField({
      name: 'autoUpdateYear',
      title: 'Auto-Update Year',
      type: 'boolean',
      description: 'If enabled, the year will be automatically updated to the current year in the frontend.',
      initialValue: true,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this copyright text should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      companyName: 'companyName',
      year: 'copyrightYear',
      copyrightText: 'copyrightText',
      isActive: 'isActive',
    },
    prepare({ title, companyName, year, copyrightText, isActive }) {
      const status = isActive ? '' : ' (Inactive)';
      const previewText = `© ${year} ${companyName}. ${copyrightText || ''}`.trim();
      return {
        title: `${title}${status}`,
        subtitle: previewText,
      };
    },
  },
})


