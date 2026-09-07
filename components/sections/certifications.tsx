"use client"

import { useLanguage } from "@/components/layout/language-provider"
import { ArrowRight } from "lucide-react"

export default function Certifications() {
  const { t } = useLanguage()

  const certs = [
    {
      title: t("cert.1"),
      org: t("cert.1.org")
    },
    {
      title: t("cert.2"),
      org: t("cert.2.org")
    },
    {
      title: t("cert.3"),
      org: t("cert.3.org")
    },
    {
      title: t("cert.4"),
      org: t("cert.4.org")
    }
  ]

  return (
    <section id="certifications" className="w-full bg-secondary/30 dark:bg-muted/10 px-8 pt-12 pb-36 border-t border-border/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-36">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-md:pb-6">{t("cert.title")}</h2>
          <a 
            href="https://www.linkedin.com/in/tomasnadal/details/education/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 max-md:hidden"
          >
            {t("cert.explore")}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-16">
            {certs.map((cert, idx) => (
              <div key={idx}>
                <p className="font-medium text-lg leading-snug mb-2">
                  &quot;{cert.title}&quot;
                </p>
                <p className="text-muted-foreground text-sm">
                  {cert.org}
                </p>
              </div>
            ))}
          </div>

          <a 
            href="https://www.linkedin.com/in/tomasnadal/details/education/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 md:hidden"
          >
            {t("cert.explore")}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
