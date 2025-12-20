import { defineField, defineType } from 'sanity'

export const aboutCommunicationSection = defineType({
    name: 'aboutCommunicationSection',
    title: 'About Communication Section',
    type: 'object',
    fields: [
        defineField({
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'Small label shown above the heading (e.g., "About Contato")',
        }),
        defineField({
            name: 'heading',
            title: 'Main Heading',
            type: 'object',
            fields: [
                defineField({
                    name: 'prefix',
                    title: 'Heading Prefix',
                    type: 'string',
                    description: 'Text before highlight (e.g., "The Future of")',
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'highlight',
                    title: 'Highlighted Text',
                    type: 'string',
                    description: 'Highlighted word (e.g., "Communication")',
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main description text (supports multiple paragraphs).',
        }),
        defineField({
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'featureItem',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            options: { hotspot: true },
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'mainVisual',
            title: 'Main Visual / Illustration',
            type: 'image',
            options: { hotspot: true },
            description: 'Central illustration or graphic.',
        }),
        defineField({
            name: 'stats',
            title: 'Floating Statistics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'statItem',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            options: { hotspot: true },
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'keyHighlights',
            title: 'Key Highlights',
            description: 'Short highlighted points shown below the description.',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'keyHighlightItem',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'tone',
                            title: 'Indicator Color',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Orange', value: 'orange' },
                                    { title: 'Blue', value: 'blue' },
                                    { title: 'Purple', value: 'purple' },
                                    { title: 'Green', value: 'green' },
                                ],
                                layout: 'radio',
                            },
                            initialValue: 'blue',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'text',
                            subtitle: 'tone',
                        },
                    },
                },
            ],
        }),

    ],
    preview: {
        select: {
            title: 'heading.highlight',
        },
        prepare({ title }) {
            return {
                title: title ? `About Section – ${title}` : 'About Communication Section',
            }
        },
    },
})
