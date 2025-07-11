"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Heart, Utensils, Building2, Stethoscope, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"


// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const industries = [
  {
    title: "Medical Aesthetics Clinics",
    icon: Sparkles,
    description: "Lasers, spa machines, devices",
    image: "/images/medical-aesthetics-bg.png",
    color: "from-pink-500 to-rose-500",
    hoverColor: "hover:from-pink-600 hover:to-rose-600",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "Beauty & Wellness Spas",
    icon: Heart,
    description: "Hydrofacials, chairs, decor upgrades",
    image: "/images/beauty-spa-bg.png",
    color: "from-purple-500 to-violet-500",
    hoverColor: "hover:from-purple-600 hover:to-violet-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Restaurants & Cafés",
    icon: Utensils,
    description: "Ovens, fridges, POS systems",
    image: "/images/restraunts-bg.png",
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:from-orange-600 hover:to-red-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Fast-Casual Franchises",
    icon: Building2,
    description: "Kitchen equipment, expansion funding",
    image: "/images/fast-casual-bg.png",
    color: "from-blue-500 to-indigo-500",
    hoverColor: "hover:from-blue-600 hover:to-indigo-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Medical & Dental Offices",
    icon: Stethoscope,
    description: "Chairs, software, renovation",
    image: "/images/medical-dental-bg.png",
    color: "from-teal-500 to-cyan-500",
    hoverColor: "hover:from-teal-600 hover:to-cyan-600",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Commercial Real Estate Investors",
    icon: TrendingUp,
    description: "Mortgage financing, asset growth",
    image: "/images/real-estate-bg.png",
    color: "from-emerald-500 to-green-500",
    hoverColor: "hover:from-emerald-600 hover:to-green-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
]

export default function IndustriesContent() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const industriesGridRef = useRef(null)
  const industryCardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        heroRef.current,
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
      )

      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          rotationX: 90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.3,
        },
      )

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.6,
        },
      )

      // Animate decorative line
      gsap.fromTo(
        ".hero-line",
        {
          width: 0,
          opacity: 0,
        },
        {
          width: "6rem",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.9,
        },
      )

      // Industry cards animations
     industryCardsRef.current.forEach((card) => {
  if (card) {
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
        willChange: "transform, opacity",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: true, // prevents repeated animation
        },
      }
    )
  }
})


      // Floating patterns
      gsap.to(".floating-pattern-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".floating-pattern-2", {
        y: 15,
        x: -15,
        rotation: -8,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      })

      gsap.to(".floating-pattern-3", {
        y: 10,
        x: 20,
        rotation: 12,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen  relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div ref={heroRef} className="absolute inset-0">
          <Image
            src="/images/industry-banner.png"
            alt="Industries background"
            fill
            className="object-cover "
          />
        </div>

        {/* Floating Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="floating-pattern-1 absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl"></div>
          <div className="floating-pattern-2 absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl"></div>
          <div className="floating-pattern-3 absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-[#38b6ff]">Focused Industries.</span>
              <br />
              Proven Results.
            </h1>
            <div className="hero-line w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
            <p ref={subtitleRef} className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
              Specialized financing solutions tailored for specific industries, helping businesses grow and thrive with
              equipment they need.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={industriesGridRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                ref={(el) => (industryCardsRef.current[index] = el)}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white"
              >
                {/* Icon Header */}
                <div className="relative p-8 pb-4">
                  <div
                    className={`industry-icon w-16 h-16 ${industry.iconBg} rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300`}
                  >
                    <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                  </div>

                  {/* Small illustration/image */}
                  <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="industry-image object-cover transition-transform duration-500"
                    />
                    {/* <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-20`}></div> */}
                  </div>
                </div>

                <CardContent className="px-8 pb-8">
                  <h3 className="industry-title text-xl font-bold text-gray-700 mb-3 text-center transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="industry-description text-gray-600 text-center mb-6 leading-relaxed transition-transform duration-300">
                    {industry.description}
                  </p>

                 <Link href="/contact" passHref>
  <Button
    className={`industry-button w-full bg-gradient-to-r ${industry.color} ${industry.hoverColor} text-white transition-all duration-300 rounded-full py-3 group`}
  >
    Get Financing
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-orange-400 transform -rotate-45 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-blue-400 transform rotate-12 animate-spin"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-[#38b6ff]">Grow Your Business?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join thousands of successful businesses across Canada that have chosen our specialized financing solutions
              to fuel their growth and expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                               <Link href="/contact" passHref>

              <Button className="bg-[#004aad] hover:bg-[#38b6ff] hover:text-[#004aad] hover:font-bold text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Apply Now
              </Button>
              </Link>
                               <Link href="/contact" passHref>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-transparent rounded-full transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Button>
                            </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
