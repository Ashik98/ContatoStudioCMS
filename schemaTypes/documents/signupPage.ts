// schemaTypes/documents/signupPage.ts
import { defineField, defineType } from 'sanity'

export const signupPage = defineType({
  name: 'signupPage',
  title: 'Signup Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal name for this signup page (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The primary headline shown on the signup page (e.g., "Network on the go with Contato").',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'appName',
      title: 'App Name',
      type: 'string',
      description: 'The name of your mobile app.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Supporting text that appears below the main heading (e.g., "mobile app").',
      validation: (rule) => rule.max(100),
    }),
    defineField({
      name: 'appIcon',
      title: 'App Icon',
      type: 'image',
      description: 'The main app icon displayed at the top of the page.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'App Features',
      type: 'array',
      description: 'List of key features to highlight on the signup page.',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'icon',
              title: 'Feature Icon',
              type: 'image',
              description: 'Icon representing this feature.',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              description: 'Name of the feature (e.g., "Smart Notifications").',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 2,
              description: 'Brief description of what this feature does.',
              validation: (rule) => rule.required().max(100),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'icon',
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(6),
    }),
    defineField({
      name: 'statistics',
      title: 'User Statistics',
      type: 'object',
      description: 'Statistics to display social proof (e.g., number of users).',
      fields: [
        defineField({
          name: 'userCount',
          title: 'User Count',
          type: 'string',
          description: 'Number of users (e.g., "50,000+").',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'userDescription',
          title: 'User Description',
          type: 'string',
          description: 'Description of the users (e.g., "professionals already networking smarter").',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'appRating',
      title: 'App Rating',
      type: 'object',
      description: 'App store rating information.',
      fields: [
        defineField({
          name: 'rating',
          title: 'Rating Score',
          type: 'number',
          description: 'Rating score (e.g., 4.8).',
          validation: (rule) => rule.required().min(0).max(5),
        }),
        defineField({
          name: 'ratingText',
          title: 'Rating Text',
          type: 'string',
          description: 'Rating description (e.g., "rating on app stores").',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'backgroundColorHex',
      title: 'Background Color',
      type: 'string',
      description: 'Background color hex code for the signup page (e.g., #f5f5f5).',
      validation: (rule) => rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
        name: 'hex color',
        invert: false,
      }).error('Must be a valid hex color code (e.g., #ffffff or #fff)'),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      description: 'Primary signup/download button configuration.',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'Text displayed on the CTA button (e.g., "Download Now", "Sign Up").',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'url',
          description: 'Where the button should link to (app store, signup form, etc.).',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' },
            ],
          },
          initialValue: 'primary',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine & social sharing settings for this page.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
      media: 'appIcon',
    },
  },
})
