// schemaTypes/objects/userTestimonials.ts
import { defineField, defineType } from 'sanity'

export const userTestimonials = defineType({
  name: 'userTestimonials',
  title: 'User Testimonials Section',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({
              name: 'rating',
              title: 'Rating (out of 5)',
              type: 'number',
              validation: (rule) => rule.required().min(1).max(5),
            }),
            defineField({
              name: 'testimonialText',
              title: 'Testimonial Text',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'authorTitle',
              title: 'Author Title/Company',
              type: 'string',
            }),
            defineField({
              name: 'authorInitials',
              title: 'Author Initials',
              type: 'string',
              description: 'For avatar display (e.g., "SJ", "MC")',
              validation: (rule) => rule.max(3),
            }),
          ],
          preview: {
            select: {
              title: 'authorName',
              subtitle: 'testimonialText',
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(20),
    }),
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      testimonials: 'testimonials',
    },
    prepare({ title, testimonials }) {
      const count = Array.isArray(testimonials) ? testimonials.length : 0;
      return {
        title: title || 'User Testimonials Section',
        subtitle: `${count} testimonials`,
      };
    },
  },
})
