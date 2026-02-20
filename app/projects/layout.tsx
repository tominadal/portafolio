import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Explora mi portafolio de proyectos de desarrollo web, análisis de datos y soluciones digitales innovadoras desarrolladas por Tomás Nadal.",
    openGraph: {
        title: "Proyectos | Tomás Nadal",
        description: "Explora mi portafolio de proyectos de desarrollo web, análisis de datos y soluciones digitales innovadoras.",
        url: "https://tomasnadal.com/projects",
    },
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
