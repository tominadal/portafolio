import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tomasnadal.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://tomasnadal.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tomasnadal.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tomasnadal.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]
}
