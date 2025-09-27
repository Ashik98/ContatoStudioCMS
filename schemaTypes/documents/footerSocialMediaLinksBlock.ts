// schemaTypes/documents/footerSocialMediaLinksBlock.ts
import { defineField, defineType } from 'sanity'

export const footerSocialMediaLinksBlock = defineType({
  name: 'footerSocialMediaLinksBlock',
  title: 'Footer Social Media Links Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this social media links block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
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
  preview: {
    select: {
      title: 'title',
      linkCount: 'socialLinks',
      isActive: 'isActive',
    },
    prepare({ title, linkCount, isActive }) {
      const activeLinks = Array.isArray(linkCount) 
        ? linkCount.filter(link => link.isActive !== false).length 
        : 0;
      const totalLinks = Array.isArray(linkCount) ? linkCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${activeLinks}/${totalLinks} active social links`,
      };
    },
  },
})
