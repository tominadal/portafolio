"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CustomCursor() {
  const [cursorState, setCursorState] = useState({
    isPointer: false,
    isClicking: false,
    isVisible: false
  })
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const requestRef = useRef<number | null>(null)

  useEffect(() => {
    // 1. Mouse Movement Handling (High Performance)
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // If we are over an iframe, hide cursor and stop processing
      if (target && (target.tagName === "IFRAME" || target.closest("iframe"))) {
        setCursorState(prev => ({ ...prev, isVisible: false }))
        return
      }

      pos.current = { x: e.clientX, y: e.clientY }
      
      setCursorState(prev => {
        const nextState = { ...prev }
        if (!prev.isVisible) nextState.isVisible = true

        if (target) {
          const isClickable = 
            target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("button") ||
            target.closest("a")
          
          if (isClickable !== prev.isPointer) {
            nextState.isPointer = !!isClickable
          }
        }
        return nextState
      })
    }

    // 2. Animation Loop (Zero Lag)
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      requestRef.current = requestAnimationFrame(animate)
    }

    // 3. Event Listeners
    const handleMouseDown = () => setCursorState(prev => ({ ...prev, isClicking: true }))
    const handleMouseUp = () => setCursorState(prev => ({ ...prev, isClicking: false }))
    const handleMouseLeave = () => setCursorState(prev => ({ ...prev, isVisible: false }))
    const handleMouseEnter = () => setCursorState(prev => ({ ...prev, isVisible: true }))
    
    // Handle iframes to avoid cursor getting stuck
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isIframe = target && (target.tagName === "IFRAME" || target.closest("iframe"))
      if (isIframe) {
        setCursorState(prev => ({ ...prev, isVisible: false }))
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      // If relatedTarget is null, it means we left the window or entered an iframe
      if (!e.relatedTarget) {
        setCursorState(prev => ({ ...prev, isVisible: false }))
      }
    }

    const handleWindowBlur = () => setCursorState(prev => ({ ...prev, isVisible: false }))

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)
    window.addEventListener("blur", handleWindowBlur)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("blur", handleWindowBlur)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  // Don't show on touch devices (pointer: coarse)
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body:has(iframe:hover) #custom-cursor-container {
          display: none !important;
        }
      `}} />
      <div 
        id="custom-cursor-container"
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform !transition-none"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <AnimatePresence>
          {cursorState.isVisible && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: cursorState.isClicking ? 0.8 : cursorState.isPointer ? 1.4 : 1,
                opacity: 1,
                 backgroundColor: cursorState.isPointer ? "rgba(255, 98, 10, 0.6)" : "rgba(255, 98, 10, 0.35)",
                 borderColor: cursorState.isPointer ? "rgba(255, 98, 10, 0.9)" : "rgba(255, 98, 10, 0.6)"
               }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-6 h-6 rounded-full border backdrop-blur-[2px] !transition-none"
              style={{ x: "-50%", y: "-50%" }}
              transition={{ 
                scale: { type: "spring", stiffness: 400, damping: 28 },
                opacity: { duration: 0.2 }
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
