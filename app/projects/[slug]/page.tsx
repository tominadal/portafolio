"use client"

import { use, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { ArrowLeft, ExternalLink, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects as allProjects } from "@/lib/projects-data"

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t, language } = useLanguage()
  const { slug } = use(params)
  const project = allProjects.find(p => p.slug === slug)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

  // Get 3 related projects (excluding current one)
  const relatedProjects = allProjects
    .filter(p => p.slug !== slug && p.category === project.category)
    .slice(0, 3)

  // If not enough in same category, fill with any other projects
  if (relatedProjects.length < 3) {
    const remaining = allProjects
      .filter(p => p.slug !== slug && !relatedProjects.includes(p))
      .slice(0, 3 - relatedProjects.length)
    relatedProjects.push(...remaining)
  }

  useEffect(() => {
    document.title = `Tomás Nadal - ${project.title}`
  }, [project.title])

  const openGallery = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
  }

  const nextImage = () => {
    if (project.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
    }
  }

  const prevImage = () => {
    if (project.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 bg-background">
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("projects.backToProjects")}
            </Link>

            {/* Project Header */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {project.category}
                  </span>
                  {project.year && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
                  {project.title}
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                  {language === "es" ? project.content || project.description : project.contentEn || project.descriptionEn || project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full border border-border text-foreground bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("projects.viewDemo")}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative h-[300px] md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Gallery - 2 Column Grid with Modal */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Galería</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                      onClick={() => openGallery(index)}
                    >
                      <div className="relative h-64">
                        <Image
                          src={img}
                          alt={`${project.title} - Imagen ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Modal */}
            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
              <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {project.gallery && (
                  <div className="relative w-full h-[80vh] flex items-center justify-center">
                    <button
                      onClick={prevImage}
                      className="absolute left-4 z-40 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-8 h-8 text-white" />
                    </button>

                    <div className="relative w-full h-full">
                      <Image
                        src={project.gallery[currentImageIndex]}
                        alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 z-40 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-8 h-8 text-white" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                      {currentImageIndex + 1} / {project.gallery.length}
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* Project Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-2xl shadow-sm bg-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{t("projects.category")}</h3>
                <p className="text-lg text-foreground">{project.category}</p>
              </div>

              {project.year && (
                <div className="rounded-2xl shadow-sm bg-card p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">{t("projects.date")}</h3>
                  <p className="text-lg text-foreground">{project.year}</p>
                </div>
              )}

              {project.technologies && (
                <div className="rounded-2xl shadow-sm bg-card p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Tecnologías</h3>
                  <p className="text-lg text-foreground">{project.technologies}</p>
                </div>
              )}
            </div>

            {/* Related Projects */}
            <div className="pt-12 border-t border-border">
              <h2 className="text-3xl font-semibold text-foreground mb-8">{t("projects.relatedProjects")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="group block"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4">
                      <div className="relative h-48">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
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
