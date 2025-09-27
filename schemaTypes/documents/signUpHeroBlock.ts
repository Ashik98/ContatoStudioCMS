// schemaTypes/documents/signUpHeroBlock.ts
import { defineField, defineType } from 'sanity'

export const signUpHeroBlock = defineType({
  name: 'signUpHeroBlock',
  title: 'Sign Up Hero Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this signup hero block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'appIcon',
      title: 'App Icon',
      type: 'image',
      description: 'App icon displayed at the top.',
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
      ],
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Primary heading (e.g., "Network on the go with Contato").',
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Text that should be highlighted in the heading (e.g., "mobile app").',
      validation: (rule) => rule.max(50),
    }),
    defineField({
      name: 'features',
      title: 'App Features',
      type: 'array',
      description: 'List of mobile app features to showcase.',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'icon',
              title: 'Feature Icon',
              type: 'string',
              description: 'Icon identifier for this feature.',
              options: {
                list: [
                  { title: 'Bell (Notifications)', value: 'bell' },
                  { title: 'Message (Messaging)', value: 'message' },
                  { title: 'Calendar (Scheduling)', value: 'calendar' },
                  { title: 'Star (Premium)', value: 'star' },
                  { title: 'Shield (Security)', value: 'shield' },
                  { title: 'Users (Community)', value: 'users' },
                  { title: 'Zap (Performance)', value: 'zap' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'Feature name (e.g., "Smart Notifications").',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'string',
              description: 'Brief description of the feature.',
              validation: (rule) => rule.required().max(100),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
              icon: 'icon',
            },
            prepare({ title, description, icon }) {
              const iconEmojis = {
                bell: '🔔',
                message: '💬',
                calendar: '📅',
                star: '⭐',
                shield: '🛡️',
                users: '👥',
                zap: '⚡',
                other: '🔧',
              };
              const emoji = iconEmojis[icon as keyof typeof iconEmojis] || '🔧';
              return {
                title: `${emoji} ${title}`,
                subtitle: description,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(8),
    }),
    defineField({
      name: 'testimonialStats',
      title: 'Testimonial Statistics',
      type: 'object',
      description: 'Social proof and app rating information.',
      fields: [
        defineField({
          name: 'userCount',
          title: 'User Count',
          type: 'string',
          description: 'Number of users (e.g., "50,000+").',
          validation: (rule) => rule.required().max(20),
        }),
        defineField({
          name: 'userDescription',
          title: 'User Description',
          type: 'string',
          description: 'Description of users (e.g., "professionals already networking smarter").',
          validation: (rule) => rule.required().max(100),
        }),
        defineField({
          name: 'rating',
          title: 'App Rating',
          type: 'number',
          description: 'App store rating (e.g., 4.8).',
          validation: (rule) => rule.required().min(1).max(5),
        }),
        defineField({
          name: 'ratingDescription',
          title: 'Rating Description',
          type: 'string',
          description: 'Rating context (e.g., "rating on app stores").',
          validation: (rule) => rule.max(50),
        }),
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this signup hero block should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mainHeading: 'mainHeading',
      featureCount: 'features',
      media: 'appIcon',
      isActive: 'isActive',
    },
    prepare({ title, mainHeading, featureCount, media, isActive }) {
      const count = Array.isArray(featureCount) ? featureCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `"${mainHeading}" - ${count} features`,
        media: media,
      };
    },
  },
})

