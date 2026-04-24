"use client"

import { useEffect, useState } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentText = texts[currentIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        // Finished deleting, pause briefly then move to next text
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }, 500) // Small pause before typing next
      }
    } else {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration, currentText])

  return (
    <span className={className}>
      <span className="pr-1">{displayText}</span>
      <span className="animate-pulse">|</span>
    </span>
  )
}
