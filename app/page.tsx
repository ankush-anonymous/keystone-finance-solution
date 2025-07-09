import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import QuickStepsSection from "@/components/quick-steps-section"
import TestimonialsSection from "@/components/testimonials-section"
import InquiryFormSection from "@/components/inquiry-form-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <QuickStepsSection />
      <TestimonialsSection />
      <InquiryFormSection />
      <Footer />
    </main>
  )
}
