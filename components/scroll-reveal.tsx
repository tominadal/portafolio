"use client"

import { useEffect } from "react"

export function ScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed")
                    }
                })
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        )

        // Observe all elements with scroll-reveal class
        const elements = document.querySelectorAll(".scroll-reveal")
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    // Re-run when route changes (SPA navigation)
    useEffect(() => {
        const timeout = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("revealed")
                        }
                    })
                },
                { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
            )

            const elements = document.querySelectorAll(".scroll-reveal:not(.revealed)")
            elements.forEach((el) => observer.observe(el))

            return () => observer.disconnect()
        }, 100)

        return () => clearTimeout(timeout)
    })

    return null
}
