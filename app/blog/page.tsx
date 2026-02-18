"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { allBlogPostsQuery } from "@/sanity/lib/queries"

interface SanityBlogPost {
  _id: string
  title: string
  titleEn: string
  slug: { current: string }
  excerpt: string
  excerptEn: string
  image: string
  category: string
  categoryEn: string
  date: string
  readTime: number
  author: string
}

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [blogPosts, setBlogPosts] = useState<SanityBlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = language === "es" ? "Tomás Nadal - Blog" : "Tomás Nadal - Blog"
  }, [language])

  useEffect(() => {
    client.fetch(allBlogPostsQuery).then((posts: SanityBlogPost[]) => {
      setBlogPosts(posts)
      setLoading(false)
    })
  }, [])

  // Get featured articles (first 2)
  const featuredPosts = blogPosts.slice(0, 2)
  const regularPosts = blogPosts.slice(2)

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-16 bg-background">
          <section className="relative py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
                  {language === "es" ? "Blog" : "Blog"}
                </h1>
              </div>
              {/* Skeleton featured */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[1, 2].map((i) => (
                  <div key={i}>
                    <div className="skeleton h-72 w-full mb-4" />
                    <div className="skeleton h-5 w-3/4 mb-2" />
                    <div className="skeleton h-4 w-1/2" />
                  </div>
                ))}
              </div>
              {/* Skeleton regular */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i}>
                    <div className="skeleton h-72 w-full mb-4" />
                    <div className="skeleton h-5 w-3/4 mb-2" />
                    <div className="skeleton h-4 w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 bg-background">
        {/* Header */}
        <section className="relative py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
                {language === "es" ? "Blog" : "Blog"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === "es"
                  ? "Reflexiones, aprendizajes y experiencias sobre tecnología, desarrollo y emprendimiento"
                  : "Reflections, learnings and experiences about technology, development and entrepreneurship"}
              </p>
            </div>

            {/* Featured Articles */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                {language === "es" ? "Artículos destacados" : "Featured articles"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post, index) => (
                  <div key={post._id} className="group scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                    <Link href={`/blog/${post.slug.current}`} className="block">
                      <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 mb-4">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={language === "es" ? post.title : post.titleEn}
                          fill
                          className="object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-accent">{language === "es" ? post.category : post.categoryEn}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {language === "es" ? post.title : post.titleEn}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {language === "es" ? post.excerpt : post.excerptEn}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>
                            {post.readTime} {t("blog.minRead")}
                          </span>
                          <span className="mx-2">·</span>
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                {language === "es" ? "Todos los artículos" : "All articles"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                  <div key={post._id} className="group scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                    <Link href={`/blog/${post.slug.current}`} className="block">
                      <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 mb-4">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={language === "es" ? post.title : post.titleEn}
                          fill
                          className="object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-accent">{language === "es" ? post.category : post.categoryEn}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {language === "es" ? post.title : post.titleEn}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {language === "es" ? post.excerpt : post.excerptEn}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>
                            {post.readTime} {t("blog.minRead")}
                          </span>
                          <span className="mx-2">·</span>
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
