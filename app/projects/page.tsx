"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink, Search, ChevronLeft, ChevronRight, ChevronDown, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import { allProjectsQuery } from "@/sanity/lib/queries"

interface Project {
  _id: string
  slug: { current: string }
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  image: string
  tags: string[]
  category: string
  demoUrl?: string
  order: number
}

const categories = ["All", "landing page", "website corporativo", "landing page / e-commerce híbrido", "website / portal reservas"]
const ITEMS_PER_PAGE = 8

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const [allProjects, setAllProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("recent")
  const [currentPage, setCurrentPage] = useState(1)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  useEffect(() => {
    document.title = language === "es" ? "Tomás Nadal - Proyectos" : "Tomás Nadal - Projects"
  }, [language])

  useEffect(() => {
    client.fetch(allProjectsQuery).then((projects: Project[]) => {
      // Exclude Zevetix and Nexium from projects page (they appear only on home page)
      const filtered = projects.filter((p: Project) => {
        const slug = p.slug?.current || ''
        return slug !== 'zevetix' && slug !== 'nexium'
      })
      setAllProjects(filtered)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale",
    )
    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view")
            }
          })
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
  }, [])

  const filteredProjects = allProjects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "recent") return (a.order || 0) - (b.order || 0)
      if (sortBy === "oldest") return (b.order || 0) - (a.order || 0)
      return 0
    })

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE))
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-16 bg-background">
          <section className="relative py-16 sm:py-20 overflow-hidden">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-4 text-balance">
                  {t("projects.title")}
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Skeleton filter panel */}
                <aside className="lg:w-64 shrink-0">
                  <div className="skeleton h-80 w-full" />
                </aside>
                {/* Skeleton cards */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i}>
                        <div className="skeleton h-64 w-full mb-4" />
                        <div className="skeleton h-5 w-3/4 mb-2" />
                        <div className="skeleton h-4 w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
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
        {/* Hero Section */}
        <section className="relative py-10 sm:py-16 lg:py-20">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3 sm:mb-4 text-balance">
                {t("projects.title")}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                {t("projects.subtitle")}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 lg:self-start">
                {/* Mobile/Tablet: compact horizontal filter bar */}
                <div className="lg:hidden bg-card border-0 rounded-lg shadow-sm p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Search */}
                    <div className="sm:col-span-1">
                      <label className="text-xs font-semibold text-foreground mb-1.5 block">{t("projects.search")}</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder={t("projects.searchPlaceholder")}
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value)
                            setCurrentPage(1)
                          }}
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        />
                      </div>
                    </div>
                    {/* Category */}
                    <div className="sm:col-span-1">
                      <label className="text-xs font-semibold text-foreground mb-1.5 block">{t("projects.categories")}</label>
                      <div className="relative">
                        <button
                          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 bg-background border border-border rounded-md text-sm text-foreground hover:border-accent transition-colors"
                        >
                          <span className="truncate">{selectedCategory}</span>
                          <ChevronDown
                            className={`w-4 h-4 shrink-0 ml-2 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isCategoryOpen && (
                          <div className="absolute z-10 w-full mt-1 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                            {categories.map((category) => (
                              <button
                                key={category}
                                onClick={() => {
                                  setSelectedCategory(category)
                                  setCurrentPage(1)
                                  setIsCategoryOpen(false)
                                }}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedCategory === category
                                  ? "bg-accent text-accent-foreground font-medium"
                                  : "text-foreground hover:bg-accent/10"
                                  }`}
                              >
                                {category}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Sort */}
                    <div className="sm:col-span-1">
                      <label className="text-xs font-semibold text-foreground mb-1.5 block">{t("projects.sortBy")}</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSortBy("recent")}
                          className={`flex-1 text-center px-3 py-2 rounded-md text-sm transition-colors ${sortBy === "recent"
                            ? "bg-foreground text-background font-medium"
                            : "text-muted-foreground bg-background border border-border hover:bg-accent/10 hover:text-foreground"
                            }`}
                        >
                          {t("projects.recent")}
                        </button>
                        <button
                          onClick={() => setSortBy("oldest")}
                          className={`flex-1 text-center px-3 py-2 rounded-md text-sm transition-colors ${sortBy === "oldest"
                            ? "bg-foreground text-background font-medium"
                            : "text-muted-foreground bg-background border border-border hover:bg-accent/10 hover:text-foreground"
                            }`}
                        >
                          {t("projects.oldest")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: vertical sidebar (unchanged) */}
                <div className="hidden lg:block space-y-6 bg-card border-0 rounded-lg shadow-sm p-6">
                  {/* Search */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">{t("projects.search")}</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder={t("projects.searchPlaceholder")}
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          setCurrentPage(1)
                        }}
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">{t("projects.categories")}</h3>
                    <div className="relative">
                      <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 bg-background border border-border rounded-md text-sm text-foreground hover:border-accent transition-colors"
                      >
                        <span>{selectedCategory}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isCategoryOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => {
                                setSelectedCategory(category)
                                setCurrentPage(1)
                                setIsCategoryOpen(false)
                              }}
                              className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedCategory === category
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-foreground hover:bg-accent/10"
                                }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">{t("projects.sortBy")}</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSortBy("recent")}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${sortBy === "recent"
                          ? "bg-foreground text-background font-medium"
                          : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                          }`}
                      >
                        {t("projects.recent")}
                      </button>
                      <button
                        onClick={() => setSortBy("oldest")}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${sortBy === "oldest"
                          ? "bg-foreground text-background font-medium"
                          : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                          }`}
                      >
                        {t("projects.oldest")}
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-start">
                  {paginatedProjects.map((project, index) => (
                    <div key={project._id} className="group flex flex-col scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                      <Link href={`/projects/${project.slug.current}`}>
                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-600 mb-3 sm:mb-4 bg-[#1a1a1a] dark:bg-[#232323] pt-4 px-4 sm:pt-6 sm:px-6 pb-0 flex items-end justify-center">
                          <div className="relative w-full aspect-[16/9]">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover rounded-t-lg group-hover:scale-105 transition-all duration-840"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-840 flex items-center justify-center gap-3">
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-700"
                            >
                              <span>
                                <Eye className="w-4 h-4 mr-2" />
                                {t("projects.viewDetails")}
                              </span>
                            </Button>
                            {project.demoUrl && (
                              <Button
                                asChild
                                size="sm"
                                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-700"
                                onClick={(e) => {
                                  e.preventDefault()
                                  window.open(project.demoUrl, '_blank')
                                }}
                              >
                                <span>
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  {t("projects.visitSite")}
                                </span>
                              </Button>
                            )}
                          </div>
                        </div>
                      </Link>

                      <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-1000">
                          {language === "en" && project.titleEn ? project.titleEn : project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                          {language === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags && project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/10 text-accent font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">{t("projects.noProjectsFound")}</p>
                  </div>
                )}

                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1 || totalPages === 1}
                    className={`bg-transparent shadow-sm ${totalPages === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      disabled={totalPages === 1}
                      className={
                        currentPage === page
                          ? `bg-foreground text-background ${totalPages === 1 ? "opacity-50" : ""}`
                          : `bg-transparent hover:bg-accent/10 shadow-sm ${totalPages === 1 ? "opacity-50 cursor-not-allowed" : ""}`
                      }
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages || totalPages === 1}
                    className={`bg-transparent shadow-sm ${totalPages === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
