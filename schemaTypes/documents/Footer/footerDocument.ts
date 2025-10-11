// schemaTypes/documents/footerDocument.ts
import { defineField, defineType } from 'sanity'

export const footerDocument = defineType({
  name: 'footerDocument',
  title: 'Footer Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Footer Name',
      type: 'string',
      description: 'Internal name for this footer configuration (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO meta data for this page.',
    }),
    // Footer Header Object
    defineField({
      name: 'footerHeader',
      title: 'Footer Header',
      type: 'object',
      description: 'Header section with call-to-action content.',
      fields: [
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
    }),

    // Footer Address Block Object
    defineField({
      name: 'footerAddressBlock',
      title: 'Footer Address Block',
      type: 'object',
      description: 'Company information and address details.',
      fields: [
        defineField({
          name: 'companyName',
          title: 'Company Name',
          type: 'string',
          description: 'Company or brand name (e.g., "Contato").',
          validation: (rule) => rule.required().max(50),
        }),
        defineField({
          name: 'companyLogo',
          title: 'Company Logo',
          type: 'image',
          description: 'Optional company logo/icon.',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'description',
          title: 'Company Description',
          type: 'text',
          rows: 4,
          description: 'Brief description of the company or platform.',
          validation: (rule) => rule.required().max(300),
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          description: 'Company contact details.',
          fields: [
            defineField({
              name: 'email',
              title: 'Email Address',
              type: 'string',
              description: 'Primary contact email address.',
              validation: (rule) => rule.required().email(),
            }),
            defineField({
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
              description: 'Primary phone number with country code.',
              validation: (rule) => rule.max(20),
            }),
            defineField({
              name: 'address',
              title: 'Physical Address',
              type: 'object',
              description: 'Company physical address.',
              fields: [
                defineField({
                  name: 'street',
                  title: 'Street Address',
                  type: 'string',
                  validation: (rule) => rule.max(100),
                }),
                defineField({
                  name: 'city',
                  title: 'City',
                  type: 'string',
                  validation: (rule) => rule.required().max(50),
                }),
                defineField({
                  name: 'state',
                  title: 'State/Province',
                  type: 'string',
                  validation: (rule) => rule.max(50),
                }),
                defineField({
                  name: 'zipCode',
                  title: 'ZIP/Postal Code',
                  type: 'string',
                  validation: (rule) => rule.max(20),
                }),
                defineField({
                  name: 'country',
                  title: 'Country',
                  type: 'string',
                  validation: (rule) => rule.max(50),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'isActive',
          title: 'Is Active',
          type: 'boolean',
          description: 'Whether this footer address block should be displayed.',
          initialValue: true,
        }),
      ],
    }),

    // Footer Navigation Links Block Object
    defineField({
      name: 'footerNavLinksBlock',
      title: 'Footer Navigation Links Block',
      type: 'object',
      description: 'Navigation columns and links for the footer.',
      fields: [
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
    }),

    // Footer Social Media Links Block Object
    defineField({
      name: 'footerSocialMediaLinksBlock',
      title: 'Footer Social Media Links Block',
      type: 'object',
      description: 'Social media platform links.',
      fields: [
        defineField({
          name: 'socialLinks',
          title: 'Social Media Links',
          type: 'array',
          description: 'Collection of social media platform links.',
          of: [
            {
              type: 'object',
              name: 'socialLink',
              title: 'Social Media Link',
              fields: [
                defineField({
                  name: 'platform',
                  title: 'Social Platform',
                  type: 'string',
                  description: 'Select the social media platform.',
                  options: {
                    list: [
                      { title: 'Twitter/X', value: 'twitter' },
                      { title: 'LinkedIn', value: 'linkedin' },
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'YouTube', value: 'youtube' },
                      { title: 'TikTok', value: 'tiktok' },
                      { title: 'GitHub', value: 'github' },
                      { title: 'Discord', value: 'discord' },
                      { title: 'Telegram', value: 'telegram' },
                      { title: 'WhatsApp', value: 'whatsapp' },
                      { title: 'Other', value: 'other' },
                    ],
                  },
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'platformName',
                  title: 'Platform Display Name',
                  type: 'string',
                  description: 'Custom display name (optional, will use platform name if empty).',
                  validation: (rule) => rule.max(30),
                }),
                defineField({
                  name: 'url',
                  title: 'Profile URL',
                  type: 'url',
                  description: 'Full URL to your social media profile.',
                  validation: (rule) => rule.required().uri({
                    scheme: ['http', 'https'],
                  }),
                }),
                defineField({
                  name: 'isActive',
                  title: 'Is Active',
                  type: 'boolean',
                  description: 'Whether this social link should be displayed.',
                  initialValue: true,
                }),
                defineField({
                  name: 'orderIndex',
                  title: 'Display Order',
                  type: 'number',
                  description: 'Order in which this link appears (lower numbers first).',
                  validation: (rule) => rule.min(0).max(100),
                }),
              ],
              preview: {
                select: {
                  platform: 'platform',
                  platformName: 'platformName',
                  url: 'url',
                  isActive: 'isActive',
                },
                prepare({ platform, platformName, url, isActive }) {
                  const displayName = platformName || platform;
                  const platformEmojis = {
                    twitter: '🐦',
                    linkedin: '💼',
                    facebook: '📘',
                    instagram: '📷',
                    youtube: '📺',
                    tiktok: '🎵',
                    github: '🐙',
                    discord: '🎮',
                    telegram: '💬',
                    whatsapp: '📱',
                    other: '🔗',
                  };
                  const emoji = platformEmojis[platform as keyof typeof platformEmojis] || '🔗';
                  const status = isActive ? '' : ' (Inactive)';
                  return {
                    title: `${emoji} ${displayName}${status}`,
                    subtitle: url,
                  };
                },
              },
            },
          ],
          validation: (rule) => rule.min(1).max(15),
        }),
        defineField({
          name: 'isActive',
          title: 'Is Active',
          type: 'boolean',
          description: 'Whether this social media links block should be displayed.',
          initialValue: true,
        }),
      ],
    }),

    defineField({
  name: 'footerPolicies',
  title: 'Footer – Privacy Policy, Cookie & Terms Section',
  type: 'array',
  of: [
    defineField({
      name: 'policyItem',
      title: 'Policy Item',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          description: 'Enter the policy label (e.g., Privacy Policy, Cookies, Terms & Conditions)',
          validation: (rule) => rule.required().error('Policy text is required'),
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'Enter the link to the policy page',
          validation: (rule) =>
            rule
              .uri({ scheme: ['http', 'https', 'mailto'] })
              .required()
              .error('A valid URL is required'),
        }),
      ],
    }),
  ],
  validation: (rule) => rule.min(1).error('At least one footer policy link is required'),
}),


    // Footer Copyright Text Object
    defineField({
      name: 'footerCopyrightText',
      title: 'Footer Copyright Text',
      type: 'object',
      description: 'Copyright information and additional footer text.',
      fields: [
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
    }),

    // Global Footer Settings
    defineField({
      name: 'isActive',
      title: 'Footer Active',
      type: 'boolean',
      description: 'Whether this footer configuration is active and should be displayed.',
      initialValue: true,
    }),
    
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order of footer sections display (lower numbers first).',
      validation: (rule) => rule.min(0).max(100),
      initialValue: 1,
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      companyName: 'footerAddressBlock.companyName',
      headerHeading: 'footerHeader.heading',
      isActive: 'isActive',
      logo: 'footerAddressBlock.companyLogo',
    },
    prepare({ title, companyName, headerHeading, isActive, logo }) {
      const status = isActive ? '' : ' (Inactive)';
      const subtitle = companyName 
        ? `${companyName} - ${headerHeading || 'No header'}` 
        : headerHeading || 'No company/header';
      return {
        title: `${title}${status}`,
        subtitle: subtitle,
        media: logo,
      };
    },
  },
})

export default footerDocument
