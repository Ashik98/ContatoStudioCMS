// schemaTypes/documents/homeTestimonialBlocks.ts
import { defineField, defineType } from 'sanity'

export const homeTestimonialBlocks = defineType({
  name: 'homeTestimonialBlocks',
  title: 'Home Testimonial Blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this testimonial blocks section (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      description: 'Collection of customer testimonials.',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            defineField({
              name: 'rating',
              title: 'Star Rating',
              type: 'number',
              description: 'Rating out of 5 stars (1-5).',
              validation: (rule) => rule.required().min(1).max(5).integer(),
              initialValue: 5,
            }),
            defineField({
              name: 'quote',
              title: 'Testimonial Quote',
              type: 'text',
              rows: 4,
              description: 'The testimonial content/quote from the customer.',
              validation: (rule) => rule.required().max(500),
            }),
            defineField({
              name: 'firstName',
              title: 'First Name',
              type: 'string',
              description: 'Customer\'s first name (used for avatar initials).',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'lastName',
              title: 'Last Name',
              type: 'string',
              description: 'Customer\'s last name (used for avatar initials).',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
              description: 'Customer\'s job title or role.',
              validation: (rule) => rule.max(100),
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              description: 'Customer\'s company or organization.',
              validation: (rule) => rule.max(100),
            }),
            defineField({
              name: 'isActive',
              title: 'Is Active',
              type: 'boolean',
              description: 'Whether this testimonial is active and should be displayed.',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              quote: 'quote',
              firstName: 'firstName',
              lastName: 'lastName',
              company: 'company',
              rating: 'rating',
              isActive: 'isActive',
            },
            prepare({ quote, firstName, lastName, company, rating, isActive }) {
              const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
              const name = `${firstName} ${lastName}`;
              const status = isActive ? '' : ' (Inactive)';
              return {
                title: `${stars} ${name}${status}`,
                subtitle: `${company ? `${company} - ` : ''}${quote?.slice(0, 60)}${quote?.length > 60 ? '...' : ''}`,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(20),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      testimonialCount: 'testimonials',
    },
    prepare({ title, testimonialCount }) {
      const count = Array.isArray(testimonialCount) ? testimonialCount.length : 0;
      const activeCount = Array.isArray(testimonialCount) 
        ? testimonialCount.filter(t => t.isActive !== false).length 
        : 0;
      return {
        title: title || 'Untitled Testimonial Blocks',
        subtitle: `${count} testimonials (${activeCount} active)`,
      };
    },
  },
})

export default homeTestimonialBlocks
