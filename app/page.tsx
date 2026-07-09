import Hero from "@/components/hero"
import AboutStats from "@/components/about-stats"
import ExpertiseCards from "@/components/expertise-cards"
import WorksCarousel from "@/components/works-carousel"
import dynamic from "next/dynamic"

const ApproachAccordion = dynamic(() => import("@/components/approach-accordion"), { ssr: true })
const ZevetixSection = dynamic(() => import("@/components/zevetix-section"), { ssr: true })
const LatestArticles = dynamic(() => import("@/components/latest-articles"), { ssr: true })
const CTATestimonials = dynamic(() => import("@/components/cta-testimonials"), { ssr: true })
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: true })
const Footer = dynamic(() => import("@/components/footer"), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutStats />
      <ExpertiseCards />
      <WorksCarousel />
      <ApproachAccordion />
      <ZevetixSection />
      <CTATestimonials />
      <LatestArticles />
      <Testimonials />
      <Footer />
    </main>
  )
}
