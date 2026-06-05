"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { client } from "@/sanity/lib/client"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface Project {
  _id: string
  title: string
  titleEn?: string
  category: string
  image: string
  year?: number
  demoUrl?: string
  slug: { current: string }
}

export default function WorksCarousel() {
  const { t, language } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project" && !(_id in path("drafts.**"))] | order(order asc, year desc) {
          _id,
          title,
          titleEn,
          category,
          "image": mainImage.asset->url,
          year,
          demoUrl,
          slug
        }`
        const data = await client.fetch(query)
        const uniqueData = Array.from(new Map(data.map((item: any) => [item.slug.current, item])).values()) as Project[]
        setProjects(uniqueData.slice(0, 6))
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  // Calculate the horizontal scroll range for 1:1 scroll speed
  // Use ResizeObserver for the most accurate and reactive width measurements
  useEffect(() => {
    if (!carouselRef.current) return

    const updateScrollRange = () => {
      if (carouselRef.current) {
        const range = carouselRef.current.scrollWidth - window.innerWidth
        setScrollRange(Math.max(0, range))
      }
    }

    updateScrollRange()
    
    // Also update on window resize
    window.addEventListener("resize", updateScrollRange)

    const resizeObserver = new ResizeObserver(() => {
      updateScrollRange()
    })

    resizeObserver.observe(carouselRef.current)

    return () => {
      window.removeEventListener("resize", updateScrollRange)
      resizeObserver.disconnect()
    }
  }, [loading, projects])

  // Framer Motion Scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  // Add a very subtle spring to smooth out the mouse wheel without feeling disconnected
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    mass: 0.1,
    restDelta: 0.001
  })

  // FIX: Framer Motion cannot interpolate between "0%" and "calc(-100% + 100vw)".
  // This causes the animation to snap instantly to the end (the "cortito scroll" issue).
  // Instead, we use a functional transform that strictly returns pixel values.
  const x = useTransform(smoothProgress, (p) => {
    return `${p * -scrollRange}px`
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-secondary/30 dark:bg-muted/10 rounded-t-[3rem] z-10 border-t border-border/10"
      // Provide a default 300vh height just in case, but use precise scrollRange when available
      style={{ height: scrollRange > 0 ? `calc(${scrollRange}px + 100vh)` : "300vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10">

        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ff620a 1px, transparent 1px),
              linear-gradient(to bottom, #ff620a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Horizontal track driven by JS */}
        {/* Added !transition-none to fix global CSS transition interference with framer-motion transform */}
        <motion.div
          ref={carouselRef}
          className="flex items-center gap-12 md:gap-24 px-8 md:px-24 w-max relative z-10 !transition-none"
          style={{ x }}
        >
          {/* First Slide: Header Text */}
          <div className="flex-shrink-0 w-[300px] md:w-[600px] flex flex-col justify-center gap-10">
            <div className="space-y-6">
              <h3 className="text-foreground text-[1.1rem] font-medium tracking-tight scroll-reveal">
                {t("works.subtitle")}
              </h3>
              <h2 className="text-[2.2rem] leading-[1.2] font-medium tracking-tight max-w-3xl scroll-reveal text-foreground">
                {t("works.title1")}{t("works.title2")}
              </h2>
            </div>

            <div className="flex items-center gap-4 text-foreground scroll-reveal">
              <span className="text-sm font-bold tracking-widest uppercase">{t("general.scroll")}</span>
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight size={32} strokeWidth={3} className="text-accent" />
              </motion.div>
            </div>
          </div>

          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[350px] md:w-[650px] aspect-[16/10] bg-muted/50 animate-pulse rounded-[2.5rem]" />
            ))
          ) : (
            projects.map((project, idx) => (
              <div
                key={`${project._id}-${idx}`}
                className="group flex-shrink-0 w-[350px] md:w-[650px] relative scroll-reveal"
              >
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 bg-muted/20 shadow-xl group-hover:shadow-[0_20px_50px_rgba(255,98,10,0.2)] transition-all duration-700">
                  <Link href={`/projects/${project.slug.current}`} className="block w-full h-full">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={language === "en" ? (project.titleEn || project.title) : project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority={idx < 2}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">{t("general.noImage")}</div>
                  )}
                  </Link>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 pointer-events-none group-hover:pointer-events-auto">
                      <Link 
                        href={`/projects/${project.slug.current}`}
                        className="w-14 h-14 bg-white hover:bg-accent hover:text-white rounded-full flex items-center justify-center text-black transition-all duration-300 shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        title={language === "es" ? "Ver detalles" : "View details"}
                      >
                        <ArrowUpRight size={22} />
                      </Link>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-14 h-14 bg-white hover:bg-accent hover:text-white rounded-full flex items-center justify-center text-black transition-all duration-300 shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 delay-[50ms]"
                          title={language === "es" ? "Visitar sitio" : "Visit website"}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </a>
                      )}
                  </div>

                  <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md text-[11px] font-bold px-6 py-2.5 rounded-full border border-accent/20 tracking-widest text-accent">
                    {project.year || "2025"}
                  </div>
                </div>

                <div className="px-4">
                  <Link href={`/projects/${project.slug.current}`} className="inline-block">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                      {language === "en" ? (project.titleEn || project.title) : project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground font-medium tracking-[0.3em] uppercase">{project.category}</p>
                </div>
              </div>
            ))
          )}


          {/* View All Card */}
          {!loading && projects.length > 0 && (
            <div className="group flex-shrink-0 w-[350px] md:w-[650px] relative scroll-reveal">
              <Link
                href="/projects"
                className="flex items-center justify-center w-full aspect-[16/10] rounded-[3rem] border-2 border-dashed border-accent/30 hover:border-accent hover:bg-accent/5 transition-all duration-500 mb-10"
              >
                <div className="text-center">
                  <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4 group-hover:text-accent transition-colors">
                    {language === "es" ? "Ver todos los proyectos" : "View all projects"}
                  </p>
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </Link>
              <div className="px-4 opacity-0 pointer-events-none">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{t("general.placeholder")}</h3>
                <p className="text-sm font-medium tracking-[0.3em] uppercase">{t("general.category")}</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
