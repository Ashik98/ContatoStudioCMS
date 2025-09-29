// schemaTypes/objects/experienceConnectoCarousel.ts
import { defineField, defineType } from 'sanity'

export const experienceConnectoCarousel = defineType({
  name: 'experienceConnectoCarousel',
  title: 'Experience Connecto Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'carouselSlides',
      title: 'Carousel Slides',
      type: 'array',
      description: 'Individual slides in the feature carousel.',
      of: [
        {
          type: 'object',
          name: 'carouselSlide',
          title: 'Carousel Slide',
          fields: [
            defineField({
              name: 'slideTitle',
              title: 'Slide Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'slideDescription',
              title: 'Slide Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'slideImage',
              title: 'Slide Image',
              type: 'image',
              description: 'Main image for this slide (phone mockup, etc.).',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt text',
                  validation: (rule) => rule.required(),
                },
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'features',
              title: 'Slide Features',
              type: 'array',
              description: 'Key features highlighted in this slide.',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'featureName',
                      title: 'Feature Name',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: 'icon',
                      title: 'Feature Icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Shield (Encrypted)', value: 'shield' },
                          { title: 'Share (File Sharing)', value: 'share' },
                          { title: 'Video (Video Call)', value: 'video' },
                        ],
                      },
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'orderIndex',
              title: 'Slide Order',
              type: 'number',
              validation: (rule) => rule.min(0),
            }),
          ],
          preview: {
            select: {
              title: 'slideTitle',
              subtitle: 'slideDescription',
              media: 'slideImage',
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(10),
    }),
    defineField({
      name: 'bottomFeatures',
      title: 'Bottom Features',
      type: 'array',
      description: 'Features displayed below the carousel.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'featureName',
              title: 'Feature Name',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      slides: 'carouselSlides',
    },
    prepare({ title, slides }) {
      const count = Array.isArray(slides) ? slides.length : 0;
      return {
        title: title || 'Experience Connecto Carousel',
        subtitle: `${count} slides`,
      };
    },
  },
})
