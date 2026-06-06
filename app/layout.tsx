import type React from "react"
import type { Metadata } from "next"
import { Manrope, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import ScrollReveal from "@/components/scroll-reveal"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CustomCursor } from "@/components/custom-cursor"
import { Toaster } from "sonner"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Tomás Nadal - Full Stack Developer",
    template: "Tomás Nadal - %s",
  },
  description:
    "Portfolio profesional de Tomás Nadal - Full Stack Developer especializado en React, Next.js, Node.js y soluciones digitales innovadoras. Desarrollo web, análisis de datos y liderazgo de proyectos.",
  keywords: [
    "Tomás Nadal",
    "Full Stack Developer",
    "Desarrollador Web",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Buenos Aires",
    "Argentina",
    "Nexium",
    "Zevetix",
    "Data Science",
    "Web Development",
  ],
  authors: [{ name: "Tomás Nadal", url: "https://tomasnadal.qzz.io" }],
  creator: "Tomás Nadal",
  publisher: "Tomás Nadal",
  metadataBase: new URL("https://tomasnadal.qzz.io"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: "https://tomasnadal.qzz.io",
    title: "Tomás Nadal - Full Stack Developer",
    description:
      "Portfolio profesional de Tomás Nadal - Full Stack Developer especializado en React, Next.js y soluciones digitales innovadoras.",
    siteName: "Tomás Nadal Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tomás Nadal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Nadal - Full Stack Developer",
    description:
      "Portfolio profesional de Tomás Nadal - Full Stack Developer especializado en React, Next.js y soluciones digitales innovadoras.",
    images: ["/logo.png"],
    creator: "@tomasnadal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tomás Nadal",
              url: "https://tomasnadal.qzz.io",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/eltanook",
                "https://www.linkedin.com/in/tomasnadal/",
                "https://www.instagram.com/tominadal_/",
              ],
              description: "Full Stack Developer especializado en React, Next.js y soluciones digitales innovadoras.",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${manrope.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <CustomCursor />
            <Navbar />
            <ScrollReveal />
            {children}
            <WhatsAppFloat />
          </LanguageProvider>
        </ThemeProvider>
        <Toaster position="bottom-left" theme="system" richColors />
      </body>
    </html>
  )
}
