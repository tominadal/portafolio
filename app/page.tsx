import Hero from "@/components/hero"
import AboutStats from "@/components/about-stats"
import ExpertiseCards from "@/components/expertise-cards"
import WorksCarousel from "@/components/works-carousel"
import ApproachAccordion from "@/components/approach-accordion"
import ZevetixSection from "@/components/zevetix-section"
import LatestArticles from "@/components/latest-articles"
import CTATestimonials from "@/components/cta-testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutStats />
      <ExpertiseCards />
      <WorksCarousel />
      <ApproachAccordion />
      <ZevetixSection />
      <LatestArticles />
      <CTATestimonials />
      <Footer />
    </main>
  )
}
