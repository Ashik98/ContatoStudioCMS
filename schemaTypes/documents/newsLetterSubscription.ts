import { defineField, defineType } from 'sanity'

export const newsletterSubscription = defineType({
  name: 'newsletterSubscription',
  title: 'Newsletter Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Subscriber email address',
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: 'status',
      title: 'Subscription Status',
      type: 'string',
      description: 'Current subscription status',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Unsubscribed', value: 'unsubscribed' },
        ],
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      description: 'When the user subscribed',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'email',
      status: 'status',
      subscribedAt: 'subscribedAt',
    },
    prepare({ title, status, subscribedAt }) {
      const statusIcon = status === 'active' ? '✅' : '❌'
      const date = subscribedAt ? new Date(subscribedAt).toLocaleDateString() : 'No date'
      
      return {
        title: title || 'No Email',
        subtitle: `${statusIcon} ${status} • ${date}`,
      }
    },
  },

  orderings: [
    {
      title: 'Recently Subscribed',
      name: 'subscribedDesc',
      by: [{ field: 'subscribedAt', direction: 'desc' }],
    },
    {
      title: 'Email A-Z',
      name: 'emailAsc',
      by: [{ field: 'email', direction: 'asc' }],
    },
  ],
})
