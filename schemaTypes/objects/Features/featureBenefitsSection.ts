import { defineField, defineType } from 'sanity'

export const featureBenefitsSection = defineType({
    name: 'featureBenefitsSection',
    title: 'Feature Benefits Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: "Why You’ll Love This Feature",
        }),
        defineField({
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            validation: (r) => r.min(1),
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Benefit Text',
                            type: 'string',
                            validation: (r) => r.required(),
                        }),
                    ],
                },
            ],
        }),
    ],
})
