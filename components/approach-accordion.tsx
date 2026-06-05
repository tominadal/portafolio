"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "./language-provider"
import CvModal from "./cv-modal"

export default function ApproachAccordion() {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(1)
  const [isCvOpen, setIsCvOpen] = useState(false)

  const accordionData = [
    {
      num: "(01)",
      title: t("app.1.title"),
      content: t("app.1.desc"),
    },
    {
      num: "(02)",
      title: t("app.2.title"),
      content: t("app.2.desc"),
    },
    {
      num: "(03)",
      title: t("app.3.title"),
      content: t("app.3.desc"),
    },
    {
      num: "(04)",
      title: t("app.4.title"),
      content: t("app.4.desc"),
    },
    {
      num: "(05)",
      title: t("app.5.title"),
      content: t("app.5.desc"),
    },
    {
      num: "(06)",
      title: t("app.6.title"),
      content: t("app.6.desc"),
    },
    {
      num: "(07)",
      title: t("app.7.title"),
      content: t("app.7.desc"),
    }
  ]

  return (
    <section id="approach" className="w-full bg-background border-t border-border/10 px-8 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_400px] gap-12 lg:gap-24">
        {/* Left Side: Text and Accordion */}
        <div>
          <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium tracking-tight mb-20 max-w-xl">
            {t("approach.title1")}{t("approach.title2")}
          </h2>

          <div className="flex flex-col border-t border-border/10">
            {accordionData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div key={idx} className="border-b border-border/10">
                  <button 
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full py-8 flex items-center justify-between text-left transition-colors hover:text-accent ${isActive ? 'text-foreground' : 'text-foreground'}`}
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-sm font-medium w-8">{item.num}</span>
                      <span className="text-2xl font-bold">{item.title}</span>
                    </div>
                    {isActive ? (
                      <ChevronUp className="text-accent" />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-64 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-16 pr-8">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Side: Header and Image */}
        <div className="flex flex-col relative h-full">
          <div className="hidden md:block mb-12">
            <h3 className="text-accent font-bold text-xs tracking-widest  mb-4">{t("approach.whatWeDo")}</h3>
            <p className="text-muted-foreground italic text-sm">
              {t("approach.cuz")}
            </p>
          </div>
          
          <div 
            className="sticky top-24 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 group cursor-pointer"
            onClick={() => setIsCvOpen(true)}
          >
             <Image 
                src="/images/setup/IMG_8350.jpg" 
                alt="Teclado setup" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: "60% bottom" }}
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-accent text-white px-6 py-3 rounded-full font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {t("approach.cv") || "Ver mi CV"}
                </div>
              </div>
              <div className="absolute top-4 left-4 text-accent text-4xl group-hover:opacity-0 transition-opacity">
                *
              </div>
          </div>
        </div>
      </div>
      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
        cvUrl={language === "es" ? "/cv.pdf" : "/cv-en.pdf"} 
      />
    </section>
  )
}
