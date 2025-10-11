// schemaTypes/objects/pricingPlans.ts
import { defineField, defineType } from 'sanity'

export const pricingPlans = defineType({
  name: 'pricingPlans',
  title: 'Pricing Plans Section',
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
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingPlan',
          fields: [
            defineField({
              name: 'planName',
              title: 'Plan Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'planType',
              title: 'Plan Type',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'priceUnit',
              title: 'Price Unit',
              type: 'string',
              description: 'e.g., "/per month", "//forever", "//pricing"',
            }),
            defineField({
              name: 'description',
              title: 'Plan Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'features',
              title: 'Plan Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'buttonUrl',
              title: 'Button URL',
              type: 'url',
            }),
            defineField({
              name: 'isPopular',
              title: 'Most Popular Plan',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'planName',
              subtitle: 'price',
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'string'
    }),
    defineField({
  name: 'highlights',
  title: 'Highlights',
  description: 'Short marketing highlights like “No credit card required”, “Cancel anytime”, etc.',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    layout: 'tags', // Displays items as tags in the Studio
  },
  validation: (rule) => rule.min(1).error('Please add at least one highlight'),
})

  ],
  preview: {
    select: {
      title: 'sectionHeading',
      plans: 'plans',
    },
    prepare({ title, plans }) {
      const count = Array.isArray(plans) ? plans.length : 0;
      return {
        title: title || 'Pricing Plans Section',
        subtitle: `${count} plans`,
      };
    },
  },
})
