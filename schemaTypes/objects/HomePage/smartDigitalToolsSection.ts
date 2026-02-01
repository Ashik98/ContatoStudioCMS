import { defineField, defineType } from 'sanity'

/* =====================================================
   Helper Fields (DECLARE FIRST)
   ===================================================== */

function heading() {
    return defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
        validation: r => r.required(),
    })
}

function subheading() {
    return defineField({
        name: 'subheading',
        title: 'Subheading',
        type: 'string',
    })
}

function description() {
    return defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    })
}

function chipText() {
    return defineField({
        name: 'chipText',
        title: 'Chip Text',
        type: 'string',
    })
}

function icon() {
    return defineField({
        name: 'icon',
        title: 'Icon',
        type: 'string',
        description: 'Icon code to be replaced with an icon in the frontend.',
    })
}

function image() {
    return defineField({
        name: 'image',
        title: 'Image',
        type: 'object',
        fields: [
            {
                name: 'type',
                title: 'Image Source Type',
                type: 'string',
                description: 'Choose how you want to add your image.',
                options: {
                    list: [
                        { title: 'Upload File', value: 'upload' },
                        { title: 'External URL', value: 'url' },
                    ],
                    layout: 'radio',
                },
                initialValue: 'upload',
            },
            {
                name: 'upload',
                title: 'Upload Image',
                type: 'image',
                options: { hotspot: true },
                hidden: ({ parent }) => parent?.type !== 'upload',
            },
            {
                name: 'url',
                title: 'Image URL',
                type: 'url',
                hidden: ({ parent }) => parent?.type !== 'url',
            },
        ],
    })
}

function bulletPoints(count: number) {
    return defineField({
        name: 'bulletPoints',
        title: 'Bullet Points',
        type: 'array',
        validation: r => r.length(count),
        of: [{ type: 'string' }],
    })
}

function cardPreview(label: string) {
    return {
        select: { title: 'heading' },
        prepare({ title }: any) {
            return {
                title: `${label} – ${title || 'Untitled'}`,
            }
        },
    }
}

/* =====================================================
   Section Schema
   ===================================================== */

export const smartDigitalToolsSection = defineType({
    name: 'smartDigitalToolsSection',
    title: 'Smart Digital Tools Section',
    type: 'object',
    fields: [
        heading(),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2,
        }),

        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            validation: r => r.min(1),
            of: [
                {
                    type: 'object',
                    name: 'card1',
                    title: 'Card 1',
                    fields: [
                        image(),
                        icon(),
                        chipText(),
                        heading(),
                        subheading(),
                        description(),
                    ],
                    preview: cardPreview('Card 1'),
                },

                {
                    type: 'object',
                    name: 'card2',
                    title: 'Card 2',
                    fields: [
                        chipText(),
                        heading(),
                        subheading(),
                        icon(),
                        bulletPoints(3),
                        description(),
                    ],
                    preview: cardPreview('Card 2'),
                },

                {
                    type: 'object',
                    name: 'card3',
                    title: 'Card 3',
                    fields: [
                        icon(),
                        heading(),
                        subheading(),
                        chipText(),
                        {
                            name: 'metrics',
                            title: 'Metrics',
                            type: 'array',
                            validation: r => r.length(3),
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'topText', type: 'string' },
                                        { name: 'centerText', type: 'string' },
                                        { name: 'bottomText', type: 'string' },
                                    ],
                                },
                            ],
                        },
                        description(),
                    ],
                    preview: cardPreview('Card 3'),
                },

                {
                    type: 'object',
                    name: 'card4',
                    title: 'Card 4',
                    fields: [
                        icon(),
                        chipText(),
                        heading(),
                        subheading(),
                        description(),
                    ],
                    preview: cardPreview('Card 4'),
                },

                {
                    type: 'object',
                    name: 'card5',
                    title: 'Card 5',
                    fields: [
                        chipText(),
                        heading(),
                        subheading(),
                        image(),
                        description(),
                        icon(),
                    ],
                    preview: cardPreview('Card 5'),
                },

                {
                    type: 'object',
                    name: 'card6',
                    title: 'Card 6',
                    fields: [
                        icon(),
                        chipText(),
                        heading(),
                        subheading(),
                        {
                            name: 'tabs',
                            title: 'Tabs',
                            type: 'array',
                            validation: r => r.min(1),
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'text', type: 'string' },
                                        { name: 'icon', type: 'image' },
                                    ],
                                },
                            ],
                        },
                        description(),
                    ],
                    preview: cardPreview('Card 6'),
                },
            ],
        }),

        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'ctaBlock',
        }),
    ],
})
