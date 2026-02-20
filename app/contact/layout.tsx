import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contacto",
    description: "¿Tienes un proyecto en mente? Ponte en contacto conmigo para discutir colaboraciones, oportunidades de trabajo o simplemente para saludar.",
    openGraph: {
        title: "Contacto | Tomás Nadal",
        description: "¿Tienes un proyecto en mente? Ponte en contacto conmigo para discutir colaboraciones o saludarnos.",
        url: "https://tomasnadal.com/contact",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
