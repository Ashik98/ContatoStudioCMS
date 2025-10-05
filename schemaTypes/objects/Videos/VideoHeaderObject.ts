// schemaTypes/objects/VideoHeaderObject.ts
import { defineField, defineType } from 'sanity'

export const VideoHeaderObject = defineType({
  name: 'VideoHeaderObject',
  title: 'Video Header Object',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this video header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Primary heading for the video section (e.g., "See Connecto").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Emphasized text that appears after main heading (e.g., "in action").',
      validation: (rule) => rule.max(50),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Supporting description text below the heading.',
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: 'videoCategories',
      title: 'Video Category Filters',
      type: 'array',
      description: 'List of video categories shown as filter chips.',
      of: [
        {
          type: 'object',
          name: 'categoryFilter',
          title: 'Category Filter',
          fields: [
            defineField({
              name: 'label',
              title: 'Filter Label',
              type: 'string',
              description: 'Display text for the filter chip (e.g., "All Videos", "Product Demos").',
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: 'value',
              title: 'Filter Value',
              type: 'string',
              description: 'Internal value used for filtering (should match category slugs).',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'reference',
              description: 'Select the primary category for this article.',
              to: [{ type: 'category' }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'isPrimary',
              title: 'Is Primary Filter',
              type: 'boolean',
              description: 'Mark this as the default/primary filter (e.g., "All Videos").',
              initialValue: false,
            }),
            defineField({
              name: 'orderIndex',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which this filter appears (lower numbers first).',
              validation: (rule) => rule.min(0).max(100),
            }),
          ],
          preview: {
            select: {
              label: 'label',
              value: 'value',
              isPrimary: 'isPrimary',
              icon: 'icon',
            },
            prepare({ label, value, isPrimary, icon }) {
              const iconEmojis = {
                'play-circle': '▶️',
                'monitor': '🖥️',
                'settings': '⚙️',
                'user': '👤',
                'trophy': '🏆',
                'book': '📚',
                'video': '🎥',
                'other': '🔗',
              };
              const emoji = iconEmojis[icon as keyof typeof iconEmojis] || '🎥';
              const primaryFlag = isPrimary ? ' (Primary)' : '';
              return {
                title: `${emoji} ${label}${primaryFlag}`,
                subtitle: `Value: ${value}`,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(10),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this video header should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mainHeading: 'mainHeading',
      highlightedText: 'highlightedText',
      categoryCount: 'videoCategories',
      isActive: 'isActive',
    },
    prepare({ title, mainHeading, highlightedText, categoryCount, isActive }) {
      const count = Array.isArray(categoryCount) ? categoryCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      const fullHeading = highlightedText 
        ? `${mainHeading} ${highlightedText}` 
        : mainHeading;
      return {
        title: `${title}${status}`,
        subtitle: `"${fullHeading}" - ${count} categories`,
      };
    },
  },
})
