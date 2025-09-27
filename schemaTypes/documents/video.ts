import {defineField, defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title', 
      title: 'Title', 
      type: 'string', 
      validation: (rule) => rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description', 
      title: 'Description', 
      type: 'text',
      rows: 4,
      validation: (rule) => rule.max(500)
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
        accept: 'video/*'
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
      scheme: ['http', 'https']
    }),
  ],
}),

    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      description: 'Mark this video as featured content.',
      initialValue: false,
    }),
    defineField({
      name: 'thumbnails',
      title: 'Video Thumbnails',
      type: 'array',
      description: 'Upload images or add external URLs for video thumbnails.',
      of: [
        {
          type: 'image',
          title: 'Uploaded Thumbnail',
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
        },
        {
          type: 'object',
          name: 'externalThumbnail',
          title: 'External Thumbnail URL',
          fields: [
            defineField({
              name: 'url',
              title: 'Thumbnail URL',
              type: 'url',
              validation: (rule) => rule.required().uri({
                scheme: ['http', 'https']
              }),
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'url',
              subtitle: 'alt',
            },
          },
        },
      ],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: 'duration',
      title: 'Video Duration',
      type: 'string',
      description: 'Duration in format MM:SS or HH:MM:SS (e.g., "05:30" or "1:25:30").',
      validation: (rule) => rule.regex(/^(\d{1,2}:)?[0-5]?\d:[0-5]\d$/, {
        name: 'duration format',
        invert: false,
      }).error('Duration must be in format MM:SS or HH:MM:SS'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      description: 'Select the primary category for this video.',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Add relevant tags to help categorize and discover this video.',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.max(10),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO optimization settings for search engines.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'thumbnails.0',
      videoSource: 'videoSource',
    },
    prepare({ title, subtitle, media, videoSource }) {
      const sourceLabel = videoSource === 'upload' ? '📁' : '🔗';
      return {
        title: `${sourceLabel} ${title}`,
        subtitle: subtitle,
        media: media,
      };
    },
  },
})
