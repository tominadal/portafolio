"use client"

import { useState } from "react"
import { Cpu, Palette, Zap, ArrowRight, X } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function ExpertiseCards() {
  const { t, language } = useLanguage()
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      icon: <Cpu size={24} className="text-foreground" />,
      iconBg: "bg-muted",
      title: t("exp.1.title"),
      description: t("exp.1.desc"),
      expandedInfo: t("app.1.desc"),
      cardBg: "bg-card"
    },
    {
      icon: <Zap size={24} className="text-white" />,
      iconBg: "bg-accent",
      title: t("exp.2.title"),
      description: t("exp.2.desc"),
      expandedInfo: t("app.2.desc"),
      cardBg: "bg-accent/5 dark:bg-accent/10 border-accent/20" 
    },
    {
      icon: <Palette size={24} className="text-foreground" />,
      iconBg: "bg-muted",
      title: t("exp.3.title"),
      description: t("exp.3.desc"),
      expandedInfo: t("app.3.desc"),
      cardBg: "bg-card"
    }
  ]

  return (
    <section id="expertise" className="w-full bg-background px-6 md:px-12 lg:px-20 py-24 border-b border-border/10 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full mx-auto">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`rounded-[2.5rem] p-8 md:p-10 flex flex-col border border-border/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/20 cursor-pointer ${card.cardBg}`}
            onClick={() => setActiveCard(idx)}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-2xl tracking-tight leading-tight">{card.title}</h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {activeCard !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-background/80" onClick={() => setActiveCard(null)}>
          <div className="bg-card border border-border/10 shadow-2xl rounded-[2.5rem] p-8 md:p-12 max-w-2xl w-full relative animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-white transition-all" onClick={() => setActiveCard(null)}>
              <X size={20} />
            </button>
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${cards[activeCard].iconBg}`}>
                {cards[activeCard].icon}
              </div>
              <h3 className="font-bold text-3xl tracking-tight">{cards[activeCard].title}</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {cards[activeCard].expandedInfo}
            </p>
            <button className="bg-foreground text-background px-8 h-12 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all" onClick={() => setActiveCard(null)}>
              {language === "es" ? "Cerrar" : "Close"}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
