"use client"

import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { useLanguage } from "./language-provider"

// Assuming a custom X icon or similar if needed. For now we use text "X" inside a circle
export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="w-full bg-[#111111] text-white pt-24 pb-0 px-8 rounded-t-[2.5rem] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        
        {/* Col 1 */}
        <div className="space-y-8">
          <div>
            <p className="text-white/50 text-sm mb-4">{t("footer.office")}</p>
            <p className="text-sm leading-relaxed">
              Buenos Aires,<br />
              Argentina
            </p>
          </div>
          <div>
            <p className="text-white/50 text-sm mb-4">{t("footer.contact")}</p>
            <p className="text-sm">+54 11 3647-4934</p>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <p className="text-white/50 text-sm mb-4">{t("footer.nav")}</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">{t("footer.home")}</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">{t("nav.expertise")}</a></li>
            <li><a href="#works" className="hover:text-accent transition-colors">{t("nav.works")}</a></li>
            <li><a href="#expertise" className="hover:text-accent transition-colors">{t("nav.expertise")}</a></li>
            <li><a href="#approach" className="hover:text-accent transition-colors">{t("nav.expertise")}</a></li>
          </ul>
        </div>

        {/* Col 3 & 4 (Email and Socials) */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <p className="text-white/50 italic text-sm mb-6">{t("footer.touch")}</p>
            <a href="mailto:tomasnadal04@gmail.com" className="text-2xl md:text-4xl lg:text-5xl font-medium hover:text-accent transition-colors break-all">
              tomasnadal04@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-between mt-16 border-t border-white/10 pt-8">
            <p className="text-white/50 text-sm">{t("footer.social")}</p>
            <div className="flex gap-3">
              <a href="https://github.com/eltanook" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://www.instagram.com/tominadal_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/tomasnadal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Line Divider */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 pb-12 scroll-reveal"></div>

      {/* Massive Text */}
      <div className="w-full overflow-hidden flex justify-center items-end scroll-reveal">
        <h1 className="text-[clamp(3rem,14vw,11rem)] leading-[0.8] font-bold tracking-tighter text-center opacity-80 whitespace-nowrap">
          <span className="text-accent align-top mr-4">&copy;</span>Tomás Nadal
        </h1>
      </div>
    </footer>
  )
}
