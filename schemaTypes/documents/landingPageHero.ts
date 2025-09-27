// schemaTypes/documents/landingPageHero.ts
import { defineField, defineType } from 'sanity'

export const landingPageHero = defineType({
  name: 'landingPageHero',
  title: 'Landing Page Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal name for this hero section (not visible to end users).',
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
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'array',
      description: 'The main headline split into parts for styling (e.g., "Network", "Smarter", "Connect Better").',
      of: [
        {
          type: 'object',
          name: 'headlinePart',
          title: 'Headline Part',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              description: 'Part of the headline text.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'style',
              title: 'Text Style',
              type: 'string',
              description: 'Visual style for this part of the headline.',
              options: {
                list: [
                  { title: 'Default', value: 'default' },
                  { title: 'Highlighted (Orange)', value: 'highlighted' },
                  { title: 'Bold', value: 'bold' },
                ],
              },
              initialValue: 'default',
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'style',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'description',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Supporting description text below the main headline.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics Section',
      type: 'array',
      description: 'Key statistics to display (Active Users, Connections Made, App Rating).',
      of: [
        {
          type: 'object',
          name: 'statistic',
          title: 'Statistic',
          fields: [
            defineField({
              name: 'value',
              title: 'Statistic Value',
              type: 'string',
              description: 'The numerical value or rating (e.g., "50K+", "1M+", "5★").',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Statistic Label',
              type: 'string',
              description: 'Description of the statistic (e.g., "Active Users", "Connections Made").',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Value Color',
              type: 'string',
              description: 'Color style for the statistic value.',
              options: {
                list: [
                  { title: 'Orange', value: 'orange' },
                  { title: 'Default', value: 'default' },
                ],
              },
              initialValue: 'orange',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(4),
    }),
    defineField({
      name: 'downloadButtons',
      title: 'Download Buttons',
      type: 'array',
      description: 'App store download buttons (App Store, Google Play).',
      of: [
        {
          type: 'object',
          name: 'downloadButton',
          title: 'Download Button',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'The app store platform.',
              options: {
                list: [
                  { title: 'App Store', value: 'appstore' },
                  { title: 'Google Play', value: 'googleplay' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              description: 'Text displayed on the button (e.g., "Download on the App Store").',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Download URL',
              type: 'url',
              description: 'Link to the app store page.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'buttonStyle',
              title: 'Button Style',
              type: 'string',
              description: 'Visual style of the button.',
              options: {
                list: [
                  { title: 'Dark (App Store)', value: 'dark' },
                  { title: 'Orange (Google Play)', value: 'orange' },
                  { title: 'Custom', value: 'custom' },
                ],
              },
              initialValue: 'dark',
            }),
            defineField({
              name: 'icon',
              title: 'Button Icon',
              type: 'image',
              description: 'Optional icon for the download button.',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'buttonText',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(3),
    }),
    defineField({
      name: 'backgroundStyle',
      title: 'Background Configuration',
      type: 'object',
      description: 'Background styling options for the hero section.',
      fields: [
        defineField({
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Background color hex code (e.g., #f8f8f8).',
          validation: (rule) => rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }).error('Must be a valid hex color code'),
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Optional background image for the hero section.',
          options: {
            hotspot: true,
          },
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
      subtitle: 'companyName',
      media: 'logo',
    },
  },
})
