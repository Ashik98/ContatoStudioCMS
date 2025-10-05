// schemaTypes/documents/videoPage.ts
import { defineField, defineType } from 'sanity'

export const videoPage = defineType({
  name: 'videoPage',
  title: 'Video Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this video page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Video Header',
      type: 'VideoHeaderObject',
      description: 'Header section for the video page including filters and descriptions.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      description: 'Collection of videos for this video page.',
      of: [
        {
          type: 'VideoObject',
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: { source: 'pageTitle' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageLayout',
      title: 'Page Layout',
      type: 'string',
      description: 'Choose the layout style for displaying videos.',
      options: {
        list: [
          { title: 'Grid Layout', value: 'grid' },
          { title: 'List Layout', value: 'list' },
          { title: 'Masonry Layout', value: 'masonry' },
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Page Active',
      type: 'boolean',
      description: 'Whether this video page should be publicly accessible.',
      initialValue: true,
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      description: 'SEO optimization settings for the video page.',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
      headerTitle: 'header.mainHeading',
      videoCount: 'videos',
      isActive: 'isActive',
      firstVideoThumbnail: 'videos.0.thumbnails.0',
    },
    prepare({ title, headerTitle, videoCount, isActive, firstVideoThumbnail }) {
      const count = Array.isArray(videoCount) ? videoCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${headerTitle} • ${count} video${count !== 1 ? 's' : ''}`,
        media: firstVideoThumbnail,
      };
    },
  },
})
