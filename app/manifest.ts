import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Tomás Nadal - Full Stack Developer Portfolio',
        short_name: 'Tomás Nadal',
        description: 'Portfolio profesional de Tomás Nadal - Full Stack Developer especializado en React, Next.js y soluciones digitales innovadoras',
        start_url: '/',
        display: 'standalone',
        background_color: '#f5f5f5',
        theme_color: '#ff620a',
        icons: [
            {
                src: '/logo.png',
                sizes: 'any',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ]
    }
}
