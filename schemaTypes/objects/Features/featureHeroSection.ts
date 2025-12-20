import { defineField, defineType } from 'sanity'

export const featureHeroSection = defineType({
    name: 'featureHeroSection',
    title: 'Feature Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            description: 'Eg: Feature Spotlight',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (r) => r.required().max(80),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: (r) => r.max(120),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
