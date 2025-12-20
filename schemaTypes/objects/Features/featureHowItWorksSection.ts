import { defineField, defineType } from 'sanity'

export const featureHowItWorksSection = defineType({
    name: 'featureHowItWorksSection',
    title: 'How It Works Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'How It Works',
        }),
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            validation: (r) => r.min(1),
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'stepNumber',
                            title: 'Step Number',
                            type: 'number',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (r) => r.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                    ],
                },
            ],
        }),
    ],
})
