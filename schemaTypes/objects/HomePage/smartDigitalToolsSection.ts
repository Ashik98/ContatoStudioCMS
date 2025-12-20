import { defineField, defineType } from 'sanity'

export const smartDigitalToolsSection = defineType({
    name: 'smartDigitalToolsSection',
    title: 'Smart Digital Tools Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2,
        }),

        defineField({
            name: 'cards',
            title: 'Tool Cards (Images)',
            description:
                'Add images and assign their visual position. Exactly 6 cards recommended.',
            type: 'array',
            validation: (rule) => rule.min(1).max(6),
            of: [
                {
                    type: 'object',
                    name: 'toolCard',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            description: 'Accessibility text for the image',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'position',
                            title: 'Layout Position',
                            type: 'string',
                            description:
                                'Controls where this image appears in the layout',
                            options: {
                                list: [
                                    { title: 'Left – 1', value: 'left-1' },
                                    { title: 'Left – 2', value: 'left-2' },
                                    { title: 'Center', value: 'center' },
                                    { title: 'Right – 1', value: 'right-1' },
                                    { title: 'Right – 2', value: 'right-2' },
                                    { title: 'Bottom / Wide', value: 'bottom' },
                                ],
                            },
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'alt',
                            media: 'image',
                            subtitle: 'position',
                        },
                    },
                },
            ],
        }),

        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'ctaBlock', // 👈 reuse existing object
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Smart Digital Tools Section',
            }
        },
    },
})
