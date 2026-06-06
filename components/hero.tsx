"use client"

import Image from "next/image"
import { ArrowRight, Moon, Sun, Globe } from "lucide-react"
import { useLanguage, Language } from "./language-provider"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Hero() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [faceComplete, setFaceComplete] = useState(false)

  // Block scroll until face animation is complete
  useEffect(() => {
    if (!faceComplete) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      // Scroll to top to ensure they don't get stuck midway if reloading
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [faceComplete])

  // Mouse parallax setup
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // High stiffness and lower damping for near real-time tracking
  const springConfig = { stiffness: 250, damping: 25, mass: 0.5 }
  const bgX = useSpring(mouseX, springConfig)
  const bgY = useSpring(mouseY, springConfig)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const xOffset = (e.clientX / window.innerWidth - 0.5) * 2
      const yOffset = (e.clientY / window.innerHeight - 0.5) * 2
      
      // Move background opposite to cursor, up to 15px (smaller range)
      mouseX.set(xOffset * -15)
      mouseY.set(yOffset * -15)
    }
  }

  if (!mounted) return null

  return (
    <section 
      className="relative w-full h-screen bg-black flex flex-col overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ clipPath: "inset(0)" }}
    >
      {/* Background Image - Fixed to viewport for scroll, but clips to section bounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <motion.div 
            className="absolute -inset-[50px] !transition-none"
            style={{ 
              x: bgX,
              y: bgY
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadingComplete ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src="/images/setup/IMG_8311.jpg"
              alt="Background setup workspace"
              fill
              priority
              quality={85}
              className="object-cover object-center pointer-events-none"
              sizes="100vw"
            />
            {/* Subtle Overlay - Darker for white text contrast */}
            <div className="absolute inset-0 bg-black/50 z-10 !transition-none"></div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Positioned Top Left */}
      <motion.div 
        className="relative flex-1 w-full flex flex-col justify-start px-8 z-20 pt-20 md:pt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loadingComplete ? 1 : 0, y: loadingComplete ? 0 : 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-2xl scroll-reveal">
          <h1 className="text-[clamp(1.725rem,5.175vw,3.45rem)] font-medium leading-tight text-white mb-10 tracking-tight">
            {t("hero.description.start")}
            <motion.span 
              className="bg-no-repeat"
              style={{ 
                backgroundImage: 'linear-gradient(transparent calc(100% - 5px), #ff620a 5px)',
                display: 'inline'
              }}
              initial={{ backgroundSize: "0% 100%" }}
              animate={{ backgroundSize: loadingComplete ? "100% 100%" : "0% 100%" }}
              transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }}
            >
              {t("hero.description.highlight")}
            </motion.span>
            <span>. </span>
            <span className="inline-block w-2"></span>
            <motion.span
              className="inline-flex text-white font-bold origin-center"
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: loadingComplete ? 90 : 0, y: loadingComplete ? 8 : 0 }}
              transition={{ delay: 3.2, duration: 0.6, type: "spring", bounce: 0.4 }}
              onAnimationComplete={() => setFaceComplete(true)}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: loadingComplete ? 1 : 0 }} transition={{ delay: 2.7 }}>:</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: loadingComplete ? 1 : 0 }} transition={{ delay: 2.8 }}>&nbsp;</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: loadingComplete ? 1 : 0 }} transition={{ delay: 2.9 }}>)</motion.span>
            </motion.span>
          </h1>
          <a href="mailto:tomasnadal04@gmail.com" className="inline-flex items-center group shadow-lg shadow-black/10 dark:shadow-black/20 rounded-full transition-all hover:scale-[1.02]">
            <div className="bg-[#484848] text-white px-8 h-14 flex items-center justify-center rounded-l-full font-bold text-base whitespace-nowrap">
              {t("hero.btn")}
            </div>
            <div className="bg-[#484848] pr-2 pl-1 h-14 rounded-r-full flex items-center justify-center">
              <div className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </div>
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-0 w-full flex items-end justify-start px-8 pointer-events-none z-20">
        <div className="relative">
          {/* Base text (low opacity) */}
          <h2 className="text-[clamp(4.6rem,20.7vw,16.1rem)] leading-none font-bold text-white/20 tracking-tighter select-none whitespace-nowrap">
            Tomás Nadal<span className="text-white/20 align-top ml-2">&reg;</span>
          </h2>
          
          {/* Animated fill text */}
          <motion.h2 
            className="absolute top-0 left-0 text-[clamp(4.6rem,20.7vw,16.1rem)] leading-none font-bold text-white tracking-tighter select-none whitespace-nowrap"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            onAnimationComplete={() => setLoadingComplete(true)}
          >
            Tomás Nadal<span className="text-accent align-top ml-2">&reg;</span>
          </motion.h2>
        </div>
      </div>

      {/* Small bottom status */}
      <motion.div 
        className="absolute bottom-8 left-8 text-white/70 text-xs z-30 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff620a] animate-pulse"></div>
          <span>{language === "es" ? "Disponible para proyectos" : "Available for projects"}</span>
        </div>
        <span>&copy; 2026 {t("hero.rights")}</span>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 right-8 text-white/70 text-xs z-30 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {t("hero.scroll")} &darr;
      </motion.div>
    </section>
  )
}
