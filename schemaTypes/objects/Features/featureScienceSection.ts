import { defineField, defineType } from 'sanity'

export const featureScienceSection = defineType({
    name: 'featureScienceSection',
    title: 'Science Behind Section',
    type: 'object',
    fields: [
        defineField({
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'string',
            initialValue: 'THE SCIENCE BEHIND',
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content Blocks',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
