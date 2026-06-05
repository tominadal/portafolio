"use client"

import { X, Download, Link as LinkIcon, Check } from "lucide-react"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"

interface CvModalProps {
  isOpen: boolean
  onClose: () => void
  cvUrl: string
}

export default function CvModal({ isOpen, onClose, cvUrl }: CvModalProps) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopyLink = () => {
    const url = window.location.origin + cvUrl
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareText = "CV Tomás Nadal"
  const shareUrl = typeof window !== 'undefined' ? window.location.origin + cvUrl : ''

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-background border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/30">
          <h3 className="font-bold text-lg">{t("approach.cv") || "Mi CV / My Resume"}</h3>
          <div className="flex items-center gap-2">
            
            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2 mr-4">
              <a 
                href={cvUrl} 
                download
                className="flex items-center gap-2 text-sm bg-accent text-white px-3 py-1.5 rounded-md hover:bg-accent/90 transition-colors"
              >
                <Download size={16} /> {t("approach.downloadCv") || "Descargar"}
              </a>
              
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted-foreground hover:text-[#25D366] hover:bg-muted rounded-md transition-colors"
                title={t("approach.shareWhatsapp") || "Compartir por WhatsApp"}
              >
                <FaWhatsapp size={18} />
              </a>
              
              <a 
                href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent('Puedes ver mi CV aquí: ' + shareUrl)}`}
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                title="Enviar por Email"
              >
                <FaEnvelope size={18} />
              </a>
              
              <button 
                onClick={handleCopyLink}
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                title={t("approach.copyLink") || "Copiar enlace"}
              >
                {copied ? <Check size={18} className="text-green-500" /> : <LinkIcon size={18} />}
              </button>
            </div>

            <button 
              onClick={onClose}
              className="p-2 bg-muted/50 hover:bg-muted rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Mobile Action Buttons (Visible only on small screens) */}
        <div className="flex sm:hidden items-center justify-center gap-4 p-3 border-b border-border/50 bg-muted/10">
          <a href={cvUrl} download className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
            <Download size={20} />
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-[#25D366] hover:bg-muted rounded-md">
            <FaWhatsapp size={20} />
          </a>
          <a href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent('Puedes ver mi CV aquí: ' + shareUrl)}`} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
            <FaEnvelope size={20} />
          </a>
          <button onClick={handleCopyLink} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
            {copied ? <Check size={20} className="text-green-500" /> : <LinkIcon size={20} />}
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 w-full h-full bg-neutral-100/50 dark:bg-neutral-900/50 overflow-auto" style={{ WebkitOverflowScrolling: "touch" }}>
          <iframe 
            src={`${cvUrl}#toolbar=0`} 
            className="w-full h-full border-none min-h-[50vh] sm:min-h-full"
            title="CV"
          />
        </div>
      </div>
    </div>
  )
}
