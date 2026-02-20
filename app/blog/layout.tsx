import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Reflexiones, aprendizajes y experiencias sobre tecnología, desarrollo y emprendimiento en el blog de Tomás Nadal.",
    openGraph: {
        title: "Blog | Tomás Nadal",
        description: "Reflexiones, aprendizajes y experiencias sobre tecnología, desarrollo y emprendimiento.",
        url: "https://tomasnadal.com/blog",
    },
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
