// schemaTypes/documents/homeVideoBlock.ts
import { defineField, defineType } from 'sanity'

export const homeVideoBlock = defineType({
  name: 'homeVideoBlock',
  title: 'Home Video Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this video block section (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the video block (e.g., "Learn More About Our Platform").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 4,
      description: 'Supporting description text below the heading.',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      description: 'List of bullet points with icons.',
      of: [
        {
          type: 'object',
          name: 'bulletPoint',
          title: 'Bullet Point',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Select an icon for this bullet point.',
              options: {
                list: [
                  { title: 'Collaboration', value: 'collaboration' },
                  { title: 'Analytics', value: 'analytics' },
                  { title: 'Success Stories', value: 'success' },
                  { title: 'Learning', value: 'learning' },
                  { title: 'Growth', value: 'growth' },
                  { title: 'Team', value: 'team' },
                  { title: 'Productivity', value: 'productivity' },
                  { title: 'Insights', value: 'insights' },
                  { title: 'Platform', value: 'platform' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Bullet Point Text',
              type: 'string',
              description: 'Text content for this bullet point.',
              validation: (rule) => rule.required().max(100),
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'icon',
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: `Icon: ${subtitle}`,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(8),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button (e.g., "Get Started").',
      validation: (rule) => rule.max(30),
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url',
      description: 'URL for the call-to-action button.',
    }),
    defineField({
      name: 'videoSource',
      title: 'Video Source Type',
      type: 'string',
      description: 'Choose how you want to add your video.',
      options: {
        list: [
          { title: 'Upload File', value: 'upload' },
          { title: 'External URL', value: 'url' },
        ],
        layout: 'radio',
      },
      initialValue: 'upload',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video File',
      type: 'file',
      description: 'Upload a video file from your device.',
      options: {
        accept: 'video/*',
      },
      hidden: ({ document }) => document?.videoSource !== 'upload',
      validation: (rule) => rule.custom((value, context) => {
        const { document } = context;
        if (document?.videoSource === 'upload' && !value) {
          return 'Video file is required when upload is selected';
        }
        return true;
      }),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Enter the URL of your video (YouTube, Vimeo, direct link, etc.).',
      hidden: ({ document }) => document?.videoSource !== 'url',
      validation: (rule) => [
        rule.custom((value, context) => {
          const { document } = context;
          if (document?.videoSource === 'url' && !value) {
            return 'Video URL is required when URL is selected';
          }
          return true;
        }),
        rule.uri({
          scheme: ['http', 'https'],
        }),
      ],
    }),
    defineField({
      name: 'videoPosterImage',
      title: 'Video Poster Image',
      type: 'image',
      description: 'Optional poster/thumbnail image for the video.',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
      media: 'videoPosterImage',
    },
  },
})
