// schemaTypes/documents/featureListing.ts
import { defineField, defineType } from 'sanity'

export const featureListing = defineType({
  name: 'featureListing',
  title: 'Feature Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this feature listing (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the features section (e.g., "Our Features").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of features to display in grid format.',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'featureName',
              title: 'Feature Name',
              type: 'string',
              description: 'Name of the feature (e.g., "File Management", "Enhance Productivity").',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 2,
              description: 'Brief description of what this feature does.',
              validation: (rule) => rule.required().max(150),
            }),
            defineField({
              name: 'icon',
              title: 'Feature Icon',
              type: 'string',
              description: 'Icon identifier for this feature.',
              options: {
                list: [
                  { title: 'Folder (File Management)', value: 'folder' },
                  { title: 'Lightning (Productivity)', value: 'lightning' },
                  { title: 'Chart (Analytics)', value: 'chart' },
                  { title: 'Shield (Protection)', value: 'shield' },
                  { title: 'Users (Collaboration)', value: 'users' },
                  { title: 'Settings (Configuration)', value: 'settings' },
                  { title: 'Clock (Time Management)', value: 'clock' },
                  { title: 'Download (File Transfer)', value: 'download' },
                  { title: 'Search (Discovery)', value: 'search' },
                  { title: 'Bell (Notifications)', value: 'bell' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'orderIndex',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which this feature appears (lower numbers first).',
              validation: (rule) => rule.min(0).max(100),
            }),
          ],
          preview: {
            select: {
              title: 'featureName',
              subtitle: 'description',
              icon: 'icon',
            },
            prepare({ title, subtitle, icon }) {
              const iconEmojis = {
                folder: '📁',
                lightning: '⚡',
                chart: '📊',
                shield: '🛡️',
                users: '👥',
                settings: '⚙️',
                clock: '🕐',
                download: '⬇️',
                search: '🔍',
                bell: '🔔',
                other: '🔧',
              };
              const emoji = iconEmojis[icon as keyof typeof iconEmojis] || '🔧';
              return {
                title: `${emoji} ${title}`,
                subtitle: subtitle,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(20),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this feature listing should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sectionHeading: 'sectionHeading',
      featureCount: 'features',
      isActive: 'isActive',
    },
    prepare({ title, sectionHeading, featureCount, isActive }) {
      const count = Array.isArray(featureCount) ? featureCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `"${sectionHeading}" - ${count} features`,
      };
    },
  },
})

