"use client"
 
import { useEffect, useState, useRef } from "react"
import { ArrowRight, FileText } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useLanguage } from "./language-provider"
import { client } from "@/sanity/lib/client"
import { motion } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Python",
  "R",
  "Git",
]
 
function CountUp({ end, duration = 3500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])
 
  return <span ref={ref}>{count}</span>
}
 
function calculateAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
 
export default function AboutStats() {
  const { t, language } = useLanguage()
  const [projectCount, setProjectCount] = useState(30) // Fallback
  const age = calculateAge(new Date(2004, 10, 17))
 
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const slugs = await client.fetch(`*[_type == "project" && !(_id in path("drafts.**"))].slug.current`)
        if (slugs) {
          const uniqueCount = new Set(slugs.filter(Boolean)).size
          setProjectCount(uniqueCount > 0 ? uniqueCount : 30)
        }
      } catch (error) {
        console.error("Error fetching project count:", error)
      }
    }
    fetchCount()
  }, [])
  
  return (
    <section id="about" className="w-full bg-background text-foreground border-b border-border/10 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[30vh] max-w-7xl w-full mx-auto">
        {/* Left Side: Stats */}
        <div className="py-12 md:py-16 md:pr-12 lg:pr-16 border-b md:border-b-0 md:border-r border-border/10 flex flex-col justify-between">
          <div>
            <h3 className="text-foreground font-bold text-3xl mb-12 scroll-reveal">{t("about.tag")}</h3>
            
            <div className="grid grid-cols-3 gap-8 scroll-reveal">
              <div className="mb-6">
                <h2 className="text-6xl font-bold tracking-tighter">
                  <CountUp end={5} />
                  <span className="text-accent">+</span>
                </h2>
                <p className="text-muted-foreground text-sm font-medium mt-2">
                  {t("about.yearsShort")}
                </p>
              </div>
 
              <div className="mb-6">
                <h2 className="text-6xl font-bold tracking-tighter">
                  <CountUp end={projectCount} />
                  <span className="text-accent">+</span>
                </h2>
                <p className="text-muted-foreground text-sm font-medium mt-2">
                  {t("about.projectsLabel")}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-6xl font-bold tracking-tighter">
                  <CountUp end={age} />
                </h2>
                <p className="text-muted-foreground text-sm font-medium mt-2">
                  {t("about.ageLabel")}
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden mt-8 max-w-md h-8 scroll-reveal">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
              <motion.div 
                className="flex w-max gap-3 hover:[animation-play-state:paused]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
              >
                {[...technologies, ...technologies].map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium whitespace-nowrap flex-shrink-0 border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
 
        {/* Right Side: Statement */}
        <div className="py-12 md:py-16 md:pl-12 lg:pl-16 col-span-2 flex flex-col justify-center gap-12 scroll-reveal">
          <h2 className="text-[2.2rem] leading-[1.2] font-medium tracking-tight max-w-3xl">
            {t("about.statement")}
          </h2>
          
          <div className="flex flex-wrap items-center gap-8">
            <a href="mailto:tomasnadal04@gmail.com" className="inline-flex items-center group transition-all hover:scale-[1.02]">
              <div className="bg-foreground text-background px-6 h-12 flex items-center justify-center rounded-l-full font-bold text-sm whitespace-nowrap">
                {t("about.btn")}
              </div>
              <div className="bg-foreground pr-2 pl-1 h-12 rounded-r-full flex items-center justify-center">
                <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/eltanook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-accent transition-all duration-500 group"
                aria-label="GitHub"
              >
                <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tomasnadal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-accent transition-all duration-500 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={language === "es" ? "/cv.pdf" : "/cv-en.pdf"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-accent transition-all duration-500 group"
                aria-label="CV"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
