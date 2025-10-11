import { defineField, defineType } from "sanity"

// Our Partners Object Component
export const ourPartners = defineType({
  name: 'ourPartners',
  title: 'Our Partners',
  type: 'object',
  fields: [
    defineField({
      name: 'partners',
      title: 'Partners List',
      description: 'List of partner names to display on the site',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.min(1).error('Please add at least one partner name'),
    }),
  ],
  preview: {
    select: {
      partners: 'partners',
    },
    prepare({ partners }) {
      return {
        title: 'Our Partners',
        subtitle: partners && partners.length > 0
          ? `${partners.length} partner${partners.length > 1 ? 's' : ''} listed`
          : 'No partners added yet',
      }
    },
  },
})
