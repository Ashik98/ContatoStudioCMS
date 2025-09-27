// schemaTypes/documents/footerNavLinksBlock.ts
import { defineField, defineType } from 'sanity'

export const footerNavLinksBlock = defineType({
  name: 'footerNavLinksBlock',
  title: 'Footer Navigation Links Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this footer navigation block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navigationColumns',
      title: 'Navigation Columns',
      type: 'array',
      description: 'Collection of navigation columns for the footer.',
      of: [
        {
          type: 'object',
          name: 'navigationColumn',
          title: 'Navigation Column',
          fields: [
            defineField({
              name: 'columnTitle',
              title: 'Column Title',
              type: 'string',
              description: 'Title of the navigation column (e.g., "Product", "Resources", "Company").',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'links',
              title: 'Navigation Links',
              type: 'array',
              description: 'List of links in this navigation column.',
              of: [
                {
                  type: 'object',
                  name: 'navLink',
                  title: 'Navigation Link',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Link Text',
                      type: 'string',
                      description: 'Display text for the link (e.g., "Features", "About Us").',
                      validation: (rule) => rule.required().max(50),
                    }),
                    defineField({
                      name: 'linkType',
                      title: 'Link Type',
                      type: 'string',
                      description: 'Choose between internal page or external URL.',
                      options: {
                        list: [
                          { title: 'Internal Page', value: 'internal' },
                          { title: 'External URL', value: 'external' },
                        ],
                        layout: 'radio',
                      },
                      initialValue: 'internal',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'internalLink',
                      title: 'Internal Page',
                      type: 'reference',
                      description: 'Select a page to link to.',
                      to: [
                        { type: 'video' },
                        // Add only the document types that exist in your schema
                        // Remove 'page' and 'blogPost' if they don't exist
                      ],
                      hidden: ({ parent }) => (parent as any)?.linkType !== 'internal',
                      validation: (rule) => rule.custom((value, context) => {
                        const parent = context.parent as any;
                        if (parent?.linkType === 'internal' && !value) {
                          return 'Internal page reference is required';
                        }
                        return true;
                      }),
                    }),
                    defineField({
                      name: 'externalUrl',
                      title: 'External URL',
                      type: 'url',
                      description: 'Enter the external URL.',
                      hidden: ({ parent }) => (parent as any)?.linkType !== 'external',
                      validation: (rule) => [
                        rule.custom((value, context) => {
                          const parent = context.parent as any;
                          if (parent?.linkType === 'external' && !value) {
                            return 'External URL is required';
                          }
                          return true;
                        }),
                        rule.uri({
                          scheme: ['http', 'https'],
                        }),
                      ],
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
                      linkType: 'linkType',
                      internalTitle: 'internalLink.title',
                      externalUrl: 'externalUrl',
                    },
                    prepare({ text, linkType, internalTitle, externalUrl }) {
                      const destination = linkType === 'internal' 
                        ? (internalTitle || 'Internal Page') 
                        : (externalUrl || 'External URL');
                      return {
                        title: text,
                        subtitle: `${linkType === 'internal' ? '📄' : '🔗'} ${destination}`,
                      };
                    },
                  },
                },
              ],
              validation: (rule) => rule.min(1).max(10),
            }),
          ],
          preview: {
            select: {
              title: 'columnTitle',
              linkCount: 'links',
            },
            prepare({ title, linkCount }) {
              const count = Array.isArray(linkCount) ? linkCount.length : 0;
              return {
                title: title,
                subtitle: `${count} link${count !== 1 ? 's' : ''}`,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(6),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this footer navigation block should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      columnCount: 'navigationColumns',
      isActive: 'isActive',
    },
    prepare({ title, columnCount, isActive }) {
      const count = Array.isArray(columnCount) ? columnCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${count} navigation column${count !== 1 ? 's' : ''}`,
      };
    },
  },
})

export default footerNavLinksBlock
