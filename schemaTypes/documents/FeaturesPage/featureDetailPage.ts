import { defineField, defineType } from 'sanity'

export const featureDetailPage = defineType({
  name: 'featureDetailPage',
  title: 'Feature Detail Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'hero.title', maxLength: 96 },
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'featureHeroSection',
    }),

    defineField({
      name: 'benefits',
      title: 'Benefits Section',
      type: 'featureBenefitsSection',
    }),

    defineField({
      name: 'keyFeatures',
      title: 'Key Features Section',
      type: 'featureKeyFeaturesSection',
    }),

    defineField({
      name: 'howItWorks',
      title: 'How It Works Section',
      type: 'featureHowItWorksSection',
    }),

    defineField({
      name: 'science',
      title: 'Science Behind Section',
      type: 'featureScienceSection',
    }),

    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),

    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'hero.title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title: title || 'Feature Detail Page',
        subtitle: slug ? `/${slug}` : '',
      }
    },
  },
})
