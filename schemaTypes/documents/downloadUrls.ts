// schemaTypes/documents/downloadUrls.ts
import { defineField, defineType } from 'sanity'

export const downloadUrls = defineType({
  name: 'downloadUrls',
  title: 'Download URLs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this download URLs document (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'appName',
      title: 'App Name',
      type: 'string',
      description: 'Name of the application (e.g., "Contato").',
      validation: (rule) => rule.required().max(50),
      initialValue: 'Contato',
    }),
    defineField({
      name: 'downloadLinks',
      title: 'Download Links',
      type: 'array',
      description: 'Collection of download URLs for different platforms.',
      of: [
        {
          type: 'object',
          name: 'downloadLink',
          title: 'Download Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'Platform or store name.',
              options: {
                list: [
                  { title: 'iOS App Store', value: 'ios-app-store' },
                  { title: 'Google Play Store', value: 'google-play' },
                  { title: 'Web App', value: 'web-app' },
                  { title: 'Mac App Store', value: 'mac-app-store' },
                  { title: 'Microsoft Store', value: 'microsoft-store' },
                  { title: 'Direct Download', value: 'direct-download' },
                  { title: 'APK Download', value: 'apk-download' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'platformName',
              title: 'Custom Platform Name',
              type: 'string',
              description: 'Custom display name (optional, will use platform name if empty).',
              validation: (rule) => rule.max(50),
            }),
            defineField({
              name: 'url',
              title: 'Download URL',
              type: 'url',
              description: 'Full URL to the app download page or direct download.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              description: 'Text to display on download buttons.',
              validation: (rule) => rule.max(30),
              initialValue: 'Download',
            }),
            defineField({
              name: 'version',
              title: 'App Version',
              type: 'string',
              description: 'Current version available on this platform (optional).',
              validation: (rule) => rule.max(20),
            }),
            defineField({
              name: 'isActive',
              title: 'Is Active',
              type: 'boolean',
              description: 'Whether this download link should be displayed.',
              initialValue: true,
            }),
            defineField({
              name: 'isPrimary',
              title: 'Is Primary Platform',
              type: 'boolean',
              description: 'Mark this as a primary/featured download option.',
              initialValue: false,
            }),
            defineField({
              name: 'orderIndex',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which this download link appears (lower numbers first).',
              validation: (rule) => rule.min(0).max(100),
            }),
          ],
          preview: {
            select: {
              platform: 'platform',
              platformName: 'platformName',
              url: 'url',
              isActive: 'isActive',
              isPrimary: 'isPrimary',
            },
            prepare({ platform, platformName, url, isActive, isPrimary }) {
              const displayName = platformName || platform;
              const platformEmojis = {
                'ios-app-store': '📱',
                'google-play': '🤖',
                'web-app': '🌐',
                'mac-app-store': '💻',
                'microsoft-store': '🪟',
                'direct-download': '⬇️',
                'apk-download': '📦',
                'other': '🔗',
              };
              const emoji = platformEmojis[platform as keyof typeof platformEmojis] || '🔗';
              const status = isActive ? '' : ' (Inactive)';
              const primaryFlag = isPrimary ? ' ⭐' : '';
              return {
                title: `${emoji} ${displayName}${status}${primaryFlag}`,
                subtitle: url,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(10),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this download URLs document should be used.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      appName: 'appName',
      linkCount: 'downloadLinks',
      isActive: 'isActive',
    },
    prepare({ title, appName, linkCount, isActive }) {
      const activeLinks = Array.isArray(linkCount) 
        ? linkCount.filter(link => link.isActive !== false).length 
        : 0;
      const totalLinks = Array.isArray(linkCount) ? linkCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${appName} - ${activeLinks}/${totalLinks} active download links`,
      };
    },
  },
})

