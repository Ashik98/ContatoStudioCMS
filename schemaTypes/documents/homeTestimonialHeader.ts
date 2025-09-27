// schemaTypes/documents/homeTestimonialHeader.ts
import { defineField, defineType } from 'sanity'

export const homeTestimonialHeader = defineType({
  name: 'homeTestimonialHeader',
  title: 'Home Testimonial Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this testimonial header (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main testimonial section heading (e.g., "What Our Users Say").',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
      rows: 3,
      description: 'Supporting description text below the main heading.',
      validation: (rule) => rule.required().max(200),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
    },
  },
})

export default homeTestimonialHeader
