"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    const ring = ringRef.current

    if (!cursor || !dot || !ring) return

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Text input state
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("contenteditable") === "true"
      ) {
        cursor.classList.add("cursor-text")
        return
      }

      // Drag/grab state
      if (
        target.getAttribute("draggable") === "true" ||
        target.classList.contains("cursor-grab") ||
        window.getComputedStyle(target).cursor === "grab" ||
        window.getComputedStyle(target).cursor === "move"
      ) {
        cursor.classList.add("cursor-drag")
        return
      }

      // Hover state (links, buttons)
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover")
      ) {
        cursor.classList.add("cursor-hover")
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      cursor.classList.remove("cursor-hover", "cursor-text", "cursor-drag")
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor hidden md:block">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  )
}
