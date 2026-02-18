"use client"

import { useEffect } from "react"

export function ScrollReveal() {
    useEffect(() => {
        const observerOptions = { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed")
                    observer.unobserve(entry.target)
                }
            })
        }, observerOptions)

        // Observe existing elements
        const observe = (el: Element) => {
            if (!el.classList.contains("revealed")) {
                observer.observe(el)
            }
        }

        document.querySelectorAll(".scroll-reveal").forEach(observe)

        // Watch for dynamically added elements (Sanity async loads)
        const mutation = new MutationObserver((mutations) => {
            mutations.forEach((m) => {
                m.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        if (node.classList.contains("scroll-reveal")) observe(node)
                        node.querySelectorAll?.(".scroll-reveal").forEach(observe)
                    }
                })
            })
        })

        mutation.observe(document.body, { childList: true, subtree: true })

        return () => {
            observer.disconnect()
            mutation.disconnect()
        }
    }, [])

    return null
}
