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
        type: 'image',
        options: { hotspot: true },
    })
}

function image() {
    return defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
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
                    name: 'smartToolCardL1',
                    title: 'L1 – Image Card',
                    fields: [
                        chipText(),
                        heading(),
                        subheading(),
                        image(),
                        description(),
                        icon(),
                    ],
                    preview: cardPreview('L1'),
                },

                {
                    type: 'object',
                    name: 'smartToolCardL2',
                    title: 'L2 – Bullet Card',
                    fields: [
                        chipText(),
                        heading(),
                        subheading(),
                        icon(),
                        bulletPoints(3),
                        description(),
                    ],
                    preview: cardPreview('L2'),
                },

                {
                    type: 'object',
                    name: 'smartToolCardL3',
                    title: 'L3 – Metrics Card',
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
                    preview: cardPreview('L3'),
                },

                {
                    type: 'object',
                    name: 'smartToolCardC1',
                    title: 'C1 – Tall Card',
                    fields: [
                        image(),
                        icon(),
                        heading(),
                        subheading(),
                        description(),
                        bulletPoints(3),
                    ],
                    preview: cardPreview('C1'),
                },

                {
                    type: 'object',
                    name: 'smartToolCardR1',
                    title: 'R1 – Image Right',
                    fields: [
                        image(),
                        icon(),
                        chipText(),
                        heading(),
                        subheading(),
                        description(),
                    ],
                    preview: cardPreview('R1'),
                },

                {
                    type: 'object',
                    name: 'smartToolCardR2',
                    title: 'R2 – Tabs Card',
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
                    preview: cardPreview('R2'),
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
