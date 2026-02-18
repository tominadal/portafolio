import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Proyectos',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título (ES)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleEn',
            title: 'Title (EN)',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción (ES)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'descriptionEn',
            title: 'Description (EN)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'content',
            title: 'Contenido detallado (ES)',
            type: 'text',
            rows: 10,
        }),
        defineField({
            name: 'contentEn',
            title: 'Detailed content (EN)',
            type: 'text',
            rows: 10,
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Galería',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
        }),
        defineField({
            name: 'demoUrl',
            title: 'URL Demo',
            type: 'url',
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'featured',
            title: 'Proyecto Destacado',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Orden',
            type: 'number',
        }),
        defineField({
            name: 'year',
            title: 'Año',
            type: 'number',
        }),
        defineField({
            name: 'technologies',
            title: 'Tecnologías',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            subtitle: 'category',
        },
    },
})
