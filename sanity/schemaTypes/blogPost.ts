import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogPost',
    title: 'Blog Posts',
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
            name: 'excerpt',
            title: 'Extracto (ES)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'excerptEn',
            title: 'Excerpt (EN)',
            type: 'text',
            rows: 3,
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
            name: 'content',
            title: 'Contenido HTML (ES)',
            type: 'text',
            rows: 20,
        }),
        defineField({
            name: 'contentEn',
            title: 'Content HTML (EN)',
            type: 'text',
            rows: 20,
        }),
        defineField({
            name: 'category',
            title: 'Categoría (ES)',
            type: 'string',
        }),
        defineField({
            name: 'categoryEn',
            title: 'Category (EN)',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Fecha de publicación',
            type: 'date',
        }),
        defineField({
            name: 'readTime',
            title: 'Tiempo de lectura (min)',
            type: 'number',
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'string',
            initialValue: 'Tomás Nadal',
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
