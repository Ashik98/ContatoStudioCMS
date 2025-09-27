// schemaTypes/documents/homePricingFooter.ts
import { defineField, defineType } from 'sanity'

export const homePricingFooter = defineType({
  name: 'homePricingFooter',
  title: 'Home Pricing Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal name for this pricing footer (not visible to end users).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainText',
      title: 'Main Footer Text',
      type: 'string',
      description: 'Primary message about all plans (e.g., "All plans include a 14-day free trial. No credit card required.").',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'features',
      title: 'Footer Features',
      type: 'array',
      description: 'List of key features or benefits shown in the footer.',
      of: [
        {
          type: 'object',
          name: 'footerFeature',
          title: 'Footer Feature',
          fields: [
            defineField({
              name: 'text',
              title: 'Feature Text',
              type: 'string',
              description: 'Feature description (e.g., "Cancel anytime", "24/7 support").',
              validation: (rule) => rule.required().max(50),
            }),
            defineField({
              name: 'icon',
              title: 'Feature Icon',
              type: 'string',
              description: 'Select an icon for this feature.',
              options: {
                list: [
                  { title: 'Checkmark', value: 'checkmark' },
                  { title: 'Cancel', value: 'cancel' },
                  { title: 'Support', value: 'support' },
                  { title: 'Uptime', value: 'uptime' },
                  { title: 'Shield', value: 'shield' },
                  { title: 'Clock', value: 'clock' },
                  { title: 'Star', value: 'star' },
                  { title: 'Other', value: 'other' },
                ],
              },
              validation: (rule) => rule.required(),
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
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this pricing footer should be displayed.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mainText: 'mainText',
      featureCount: 'features',
      isActive: 'isActive',
    },
    prepare({ title, mainText, featureCount, isActive }) {
      const count = Array.isArray(featureCount) ? featureCount.length : 0;
      const status = isActive ? '' : ' (Inactive)';
      return {
        title: `${title}${status}`,
        subtitle: `${count} features - ${mainText?.slice(0, 50)}${mainText?.length > 50 ? '...' : ''}`,
      };
    },
  },
})
