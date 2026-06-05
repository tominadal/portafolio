import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Do not index the sanity studio
    },
    sitemap: 'https://tomasnadal.qzz.io/sitemap.xml',
  }
}
