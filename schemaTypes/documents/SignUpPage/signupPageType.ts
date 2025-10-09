import { defineField, defineType, defineArrayMember } from 'sanity'

export const signupPageType = defineType({
  name: 'signup',
  title: 'Signup Page',
  type: 'document',
  fields: [
    // Page Basics
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this signup page',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Main App Download Section
    defineField({
      name: 'appDownloadSection',
      title: 'App Download Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'Main heading (e.g., "Get Contato")',
          validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Supporting text under the headline',
          rows: 3,
          validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
          name: 'appIcon',
          title: 'App Icon',
          type: 'image',
          description: 'App icon/logo',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'qrCodes',
          title: 'QR Codes',
          type: 'object',
          fields: [
            defineField({
              name: 'iosQR',
              title: 'iOS QR Code',
              type: 'image',
              description: 'QR code for iOS App Store',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  initialValue: 'QR code to download iOS app',
                }),
              ],
            }),
            defineField({
              name: 'androidQR',
              title: 'Android QR Code', 
              type: 'image',
              description: 'QR code for Google Play Store',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  initialValue: 'QR code to download Android app',
                }),
              ],
            }),
            defineField({
              name: 'iosLabel',
              title: 'iOS Label',
              type: 'string',
              initialValue: 'iOS App',
            }),
            defineField({
              name: 'androidLabel',
              title: 'Android Label',
              type: 'string',
              initialValue: 'Android App',
            }),
          ],
        }),
        defineField({
          name: 'downloadButtons',
          title: 'Download Buttons',
          type: 'object',
          fields: [
            defineField({
              name: 'iosButton',
              title: 'iOS Download Button',
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'Download for iOS',
                }),
                defineField({
                  name: 'url',
                  title: 'App Store URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'enabled',
                  title: 'Show Button',
                  type: 'boolean',
                  initialValue: true,
                }),
              ],
            }),
            defineField({
              name: 'androidButton',
              title: 'Android Download Button',
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'Download for Android',
                }),
                defineField({
                  name: 'url',
                  title: 'Google Play URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'enabled',
                  title: 'Show Button',
                  type: 'boolean',
                  initialValue: true,
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'signInLink',
          title: 'Sign In Link',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Link Text',
              type: 'string',
              initialValue: 'Already have an account? Sign in',
            }),
            defineField({
              name: 'url',
              title: 'Sign In URL',
              type: 'url',
            }),
            defineField({
              name: 'enabled',
              title: 'Show Link',
              type: 'boolean',
              initialValue: true,
            }),
          ],
        }),
      ],
    }),

    // Mobile App Features Section
    defineField({
      name: 'appFeaturesSection',
      title: 'App Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Section Headline',
          type: 'string',
          description: 'Main heading for features section',
          initialValue: 'Network on the go with Contato',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
          description: 'Highlighted text (e.g., "mobile app")',
          initialValue: 'mobile app',
        }),
        defineField({
          name: 'phoneImage',
          title: 'Phone Mockup Image',
          type: 'image',
          description: 'Mobile phone showing the app interface',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'features',
          title: 'App Features',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Feature Icon',
                  type: 'image',
                  description: 'Small icon representing the feature',
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string',
                  validation: (Rule) => Rule.required().max(50),
                }),
                defineField({
                  name: 'description',
                  title: 'Feature Description',
                  type: 'text',
                  rows: 2,
                  validation: (Rule) => Rule.required().max(100),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                  media: 'icon',
                },
              },
            }),
          ],
          validation: (Rule) => Rule.min(2).max(6),
        }),
      ],
    }),

    // Social Proof Section
    defineField({
      name: 'socialProofSection',
      title: 'Social Proof Section',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Show Social Proof',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'userCount',
          title: 'User Count',
          type: 'string',
          description: 'Number of users (e.g., "50,000+")',
          initialValue: '50,000+',
        }),
        defineField({
          name: 'userCountLabel',
          title: 'User Count Label',
          type: 'string',
          initialValue: 'professionals already networking smarter',
        }),
        defineField({
          name: 'rating',
          title: 'App Rating',
          type: 'number',
          description: 'Average app store rating (e.g., 4.8)',
          validation: (Rule) => Rule.min(1).max(5),
          initialValue: 4.8,
        }),
        defineField({
          name: 'ratingLabel',
          title: 'Rating Label',
          type: 'string',
          initialValue: 'rating on app stores',
        }),
        defineField({
          name: 'showStars',
          title: 'Show Star Rating',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),

    // Page Settings
    defineField({
      name: 'pageSettings',
      title: 'Page Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'showHeader',
          title: 'Show Header Navigation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showFooter',
          title: 'Show Footer',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),

    // SEO Settings (using your existing SEO object)
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO meta data for this page.',
    }),

    // Publishing
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  // Preview configuration
  preview: {
    select: {
      title: 'title',
      headline: 'appDownloadSection.headline',
      isPublished: 'isPublished',
    },
    prepare({ title, headline, isPublished }) {
      return {
        title: title || 'Untitled Signup Page',
        subtitle: `${headline || 'No headline'} ${isPublished ? '✅' : '❌'}`,
      }
    },
  },

  // Document ordering
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Recently Updated',
      name: 'updatedDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }],
    },
  ],

  // Initial values
  initialValue: () => ({
    isPublished: true,
    publishedAt: new Date().toISOString(),
    pageSettings: {
      showHeader: true,
      showFooter: true,
      backgroundColor: 'white',
    },
    appDownloadSection: {
      downloadButtons: {
        iosButton: {
          enabled: true,
          text: 'Download for iOS',
        },
        androidButton: {
          enabled: true,
          text: 'Download for Android',
        },
      },
      signInLink: {
        enabled: true,
        text: 'Already have an account? Sign in',
      },
    },
    socialProofSection: {
      enabled: true,
      userCount: '50,000+',
      rating: 4.8,
      showStars: true,
    },
  }),
})
