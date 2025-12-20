import { defineField, defineType } from 'sanity'

export const featureKeyFeaturesSection = defineType({
    name: 'featureKeyFeaturesSection',
    title: 'Key Features Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Key Features',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            validation: (r) => r.min(1),
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            options: { hotspot: true },
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
                            type: 'text',
                            rows: 3,
                        }),
                    ],
                },
            ],
        }),
    ],
})
