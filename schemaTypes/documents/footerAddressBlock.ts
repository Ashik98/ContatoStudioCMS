// schemaTypes/documents/footerAddressBlock.ts
import { defineField, defineType } from 'sanity'

export const footerAddressBlock = defineType({
  name: 'footerAddressBlock',
  title: 'Footer Address Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this footer address block (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
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
  preview: {
    select: {
      title: 'title',
      companyName: 'companyName',
      email: 'contactInfo.email',
      isActive: 'isActive',
      media: 'companyLogo',
    },
    prepare({ title, companyName, email, isActive, media }) {
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${companyName} - ${email}`,
        media: media,
      };
    },
  },
})


