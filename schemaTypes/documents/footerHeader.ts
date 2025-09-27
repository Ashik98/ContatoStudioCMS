// schemaTypes/documents/footerHeader.ts
import { defineField, defineType } from 'sanity'

export const footerHeader = defineType({
  name: 'footerHeader',
  title: 'Footer Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this footer header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main call-to-action heading (e.g., "Ready to Elevate Your Content Experience?").',
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
      rows: 3,
      description: 'Supporting description text below the main heading.',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'array',
      description: 'Primary and secondary action buttons.',
      of: [
        {
          type: 'object',
          name: 'ctaButton',
          title: 'CTA Button',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              description: 'Text displayed on the button (e.g., "Start Free Trial", "Schedule Demo").',
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: 'url',
              title: 'Button URL',
              type: 'url',
              description: 'URL the button should link to.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'isPrimary',
              title: 'Is Primary Button',
              type: 'boolean',
              description: 'Mark this as the primary button with special styling.',
              initialValue: false,
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              description: 'Whether the link should open in a new tab.',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              text: 'text',
              url: 'url',
              isPrimary: 'isPrimary',
            },
            prepare({ text, url, isPrimary }) {
              return {
                title: `${isPrimary ? '🔥 ' : ''}${text}`,
                subtitle: url,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(3),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this footer header should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      heading: 'heading',
      buttonCount: 'ctaButtons',
      isActive: 'isActive',
    },
    prepare({ title, heading, buttonCount, isActive }) {
      const count = Array.isArray(buttonCount) ? buttonCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${count} button${count !== 1 ? 's' : ''} - ${heading}`,
      };
    },
  },
})


