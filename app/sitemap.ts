import type { MetadataRoute } from 'next'
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2026-02-18',
    useCdn: false,
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://tomasnadal.com'

    // Fetch slugs from Sanity
    const [projectSlugs, blogSlugs] = await Promise.all([
        client.fetch<{ slug: string }[]>(`*[_type == "project"] { "slug": slug.current }`),
        client.fetch<{ slug: string }[]>(`*[_type == "blogPost"] { "slug": slug.current, date }`),
    ])

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Dynamic project pages
    const projectPages: MetadataRoute.Sitemap = projectSlugs.map((p) => ({
        url: `${baseUrl}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Dynamic blog pages
    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((p: any) => ({
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: p.date ? new Date(p.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...projectPages, ...blogPages]
}
