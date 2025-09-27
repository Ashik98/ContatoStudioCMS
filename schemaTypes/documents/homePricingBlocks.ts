// schemaTypes/documents/homePricingBlocks.ts
import { defineField, defineType } from 'sanity'

export const homePricingBlocks = defineType({
  name: 'homePricingBlocks',
  title: 'Home Pricing Blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this pricing blocks section (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pricingPlans',
      title: 'Pricing Plans',
      type: 'array',
      description: 'Collection of pricing plan cards.',
      of: [
        {
          type: 'object',
          name: 'pricingPlan',
          title: 'Pricing Plan',
          fields: [
            defineField({
              name: 'planName',
              title: 'Plan Name',
              type: 'string',
              description: 'Name of the plan (e.g., "Basic", "Pro", "Enterprise").',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'planSubtitle',
              title: 'Plan Subtitle',
              type: 'string',
              description: 'Additional subtitle like "Free", "Custom", etc.',
              validation: (rule) => rule.max(50),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'Plan price (e.g., "Free", "$12", "Custom").',
              validation: (rule) => rule.required().max(20),
            }),
            defineField({
              name: 'pricePeriod',
              title: 'Price Period',
              type: 'string',
              description: 'Billing period (e.g., "/forever", "/per month", "/pricing").',
              validation: (rule) => rule.max(30),
            }),
            defineField({
              name: 'description',
              title: 'Plan Description',
              type: 'text',
              rows: 3,
              description: 'Brief description of what this plan offers.',
              validation: (rule) => rule.required().max(200),
            }),
            defineField({
              name: 'features',
              title: 'Plan Features',
              type: 'array',
              description: 'List of features included in this plan.',
              of: [
                {
                  type: 'object',
                  name: 'feature',
                  title: 'Feature',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Feature Text',
                      type: 'string',
                      description: 'Feature description.',
                      validation: (rule) => rule.required().max(100),
                    }),
                    defineField({
                      name: 'included',
                      title: 'Is Included',
                      type: 'boolean',
                      description: 'Whether this feature is included in the plan.',
                      initialValue: true,
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      included: 'included',
                    },
                    prepare({ title, included }) {
                      return {
                        title: `${included ? '✓' : '✗'} ${title}`,
                      };
                    },
                  },
                },
              ],
              validation: (rule) => rule.min(1).max(15),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              description: 'Text for the call-to-action button.',
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: 'buttonUrl',
              title: 'Button URL',
              type: 'url',
              description: 'URL for the call-to-action button.',
            }),
            defineField({
              name: 'isPopular',
              title: 'Is Most Popular',
              type: 'boolean',
              description: 'Mark this plan as "Most Popular" with special styling.',
              initialValue: false,
            }),
            defineField({
              name: 'badgeText',
              title: 'Badge Text',
              type: 'string',
              description: 'Optional badge text (e.g., "Most Popular", "Best Value").',
              validation: (rule) => rule.max(30),
            }),
            defineField({
              name: 'planIcon',
              title: 'Plan Icon',
              type: 'string',
              description: 'Select an icon for this pricing plan.',
              options: {
                list: [
                  { title: 'Lightning (Basic)', value: 'lightning' },
                  { title: 'Crown (Pro)', value: 'crown' },
                  { title: 'Building (Enterprise)', value: 'building' },
                  { title: 'Star', value: 'star' },
                  { title: 'Diamond', value: 'diamond' },
                  { title: 'Shield', value: 'shield' },
                  { title: 'Rocket', value: 'rocket' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              planName: 'planName',
              price: 'price',
              isPopular: 'isPopular',
              planIcon: 'planIcon',
            },
            prepare({ planName, price, isPopular, planIcon }) {
              const popularBadge = isPopular ? ' ⭐' : '';
              return {
                title: `${planName}${popularBadge}`,
                subtitle: `${price} - Icon: ${planIcon}`,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      planCount: 'pricingPlans',
    },
    prepare({ title, planCount }) {
      const count = Array.isArray(planCount) ? planCount.length : 0;
      return {
        title: title || 'Untitled Pricing Blocks',
        subtitle: `${count} pricing plan${count !== 1 ? 's' : ''}`,
      };
    },
  },
})
