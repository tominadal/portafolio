"use client"

import Image from "next/image"
import { ArrowRight, ExternalLink, X } from "lucide-react"
import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"

const oldProjects = [
  { 
    name: "Bunyan Wood", 
    subEs: "Agencia de desarrollo web y marca", 
    subEn: "Web development & branding agency", 
    url: "https://bunyanwood.netlify.app/" 
  },
  { 
    name: "Portafolio 2.0", 
    subEs: "Segundo portafolio personal (2022)", 
    subEn: "Second personal portfolio (2022)", 
    url: "https://tomasnadal1.netlify.app/" 
  },
  { 
    name: "E-Commerce React + Firebase", 
    subEs: "Tienda online de zapatillas con base de datos en tiempo real", 
    subEn: "Online sneaker store with real-time database", 
    url: "https://chocolatesneakers.netlify.app/" 
  },
  { 
    name: "Adexa", 
    subEs: "Sitio web corporativo y de consultoría", 
    subEn: "Corporate and consulting website", 
    url: "https://adexa.netlify.app/" 
  },
  { 
    name: "Code-N-Chill", 
    subEs: "Plataforma de música y temporizador Pomodoro para programar", 
    subEn: "Music player and Pomodoro timer for coding", 
    url: "https://codenchill2.netlify.app/" 
  },
  { 
    name: "App de mensajería", 
    subEs: "Chat grupal con autenticación y base de datos", 
    subEn: "Group chat application with authentication and database", 
    url: "https://github.com/eltanook/Chocolate-Messeger" 
  },
  { 
    name: "Nokia Snake", 
    subEs: "Clon interactivo del clásico juego de la serpiente", 
    subEn: "Interactive clone of the classic snake game", 
    url: "https://snakegame-tomasnadal.netlify.app/" 
  },
  { 
    name: "Portafolio 1.0", 
    subEs: "Primer portafolio personal (HTML y CSS - 2021)", 
    subEn: "First personal portfolio (HTML & CSS - 2021)", 
    url: "https://potafolio2021-tomasnadal.netlify.app/" 
  },
]

export default function CTATestimonials() {
  const { t, language } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isModalOpen])

  return (
    <section className="w-full bg-secondary/30 dark:bg-muted/10 px-8 pt-24 pb-0 overflow-hidden relative border-t border-border/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 rounded-[2.5rem] overflow-hidden relative aspect-[4/3] scroll-reveal group">
           <Image 
              src="/images/cta_reading_person.png" 
              alt="Person reading magazine" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-all duration-1000"
            />
            
            {/* Resting Label */}
            <div className="absolute top-6 left-6 text-accent font-bold text-lg tracking-wider z-10 group-hover:opacity-0 transition-opacity duration-300">
              *mis inicios
            </div>
            
            {/* Hover Overlay with Button */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
              >
                {language === "es" ? "Ver Mis Inicios" : "View My Beginnings"}
              </button>
            </div>


        </div>

        {/* Right Side: CTA Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center scroll-reveal">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-6">
            {t("cta.subtitle")}
          </p>
          <h2 className="text-4xl lg:text-[3rem] leading-[1.1] font-medium tracking-tight mb-6">
            {t("cta.title1")}{t("cta.title2")}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl">
            {t("cta.story")}
          </p>
          
          <div>
            <a href="mailto:tomasnadal04@gmail.com" className="inline-flex items-center group transition-all hover:scale-[1.02]">
              <div className="bg-foreground text-background px-10 h-16 flex items-center justify-center rounded-l-full font-bold text-lg whitespace-nowrap">
                {t("cta.btn")}
              </div>
              <div className="bg-foreground pr-3 pl-1 h-16 rounded-r-full flex items-center justify-center">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Block */}
      <div id="testimonials" className="max-w-7xl mx-auto border-t border-border/10 pt-12 pb-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{t("test.title")}</h3>
          <a href="https://www.linkedin.com/in/tomasnadal/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-medium hover:underline underline-offset-4 hidden md:block">{t("test.explore")}</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <p className="font-medium text-lg leading-snug mb-6">
              {t("test.1.quote")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("test.1.author")}
            </p>
          </div>
          <div>
            <p className="font-medium text-lg leading-snug mb-6">
              {t("test.2.quote")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("test.2.author")}
            </p>
          </div>
        </div>
      </div>

      {/* Modal Mis Inicios */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-3xl bg-background border border-border/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-10">
            <div className="flex items-center justify-between p-6 border-b border-border/10">
              <h3 className="font-bold text-2xl">{language === "en" ? "My Beginnings" : "Mis Inicios"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col gap-3 custom-scrollbar">
              {oldProjects.map((project, i) => (
                <a 
                  key={i} 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-accent group text-foreground hover:text-white transition-colors duration-300 border border-border/5"
                >
                  <div className="flex flex-col gap-0.5 text-left">
                    <span className="text-sm font-semibold">{project.name}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors">
                      — {language === "es" ? project.subEs : project.subEn}
                    </span>
                  </div>
                  <ExternalLink size={16} className="flex-shrink-0 ml-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
