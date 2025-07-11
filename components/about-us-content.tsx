"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const companyValues = [
  "Expertise You Can Trust",
  "Tailored Mortgage Solutions",
  "Transparent Process",
 
]

export default function AboutUsContent() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const valuesRef = useRef([])
  const missionRef = useRef(null)
  const missionContentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out",
        },
      )

      // Title animation with 3D effect
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

      // Content animation
      gsap.fromTo(
        contentRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.6,
        },
      )

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          x: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.8,
        },
      )

      // Values animation with stagger
      valuesRef.current.forEach((value, index) => {
        if (value) {
          gsap.fromTo(
            value,
            {
              x: -30,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              delay: 1 + index * 0.1,
            },
          )

          // Hover animation for values
          value.addEventListener("mouseenter", () => {
            gsap.to(value, {
              x: 10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            })
          })

          value.addEventListener("mouseleave", () => {
            gsap.to(value, {
              x: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            })
          })
        }
      })

      // Mission section animation
      gsap.fromTo(
        missionRef.current,
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Mission content animation
      gsap.fromTo(
        missionContentRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: missionContentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Floating animations for geometric elements
      gsap.to(".floating-shape-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".floating-shape-2", {
        y: 15,
        x: -15,
        rotation: -8,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      })

      gsap.to(".floating-shape-3", {
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
    {/* Top Section - Company Values & Team Image */}
    <section ref={heroRef} className="min-h-screen py-16 bg-white relative overflow-hidden flex items-center">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="floating-shape-1 absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#004aad] to-[#0a346b] rounded-full blur-xl"></div>
        <div className="floating-shape-2 absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-[#38b6ff] to-[#004aad] rounded-full blur-xl"></div>
        <div className="floating-shape-3 absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-[#0a346b] to-[#004aad] rounded-full blur-lg"></div>
      </div>

      {/* Blue geometric shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="relative h-full">
          <div className="absolute inset-0 bg-[#004aad] transform skew-x-12 origin-top-left opacity-10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a346b] opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* About Us Title */}
            <div className="mb-12">
              <h1 ref={titleRef} className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Us
              </h1>
              <div className="w-20 h-1 bg-[#38b6ff]"></div>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed mb-10 text-xl font-medium">
                At Keystone, we believe in transforming homeownership dreams into reality. Our dedicated team of
                mortgage professionals is committed to guiding you through every step of the financing process with
                unparalleled expertise, transparency, and personalized service that puts your needs first.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Keystone?</h3>
                <ul className="space-y-5">
                  {companyValues.map((value, index) => (
                    <li
                      key={index}
                      ref={(el) => (valuesRef.current[index] = el)}
                      className="flex items-center group cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-[#004aad] rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#0a346b] transition-colors duration-300">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors duration-300">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Team Image */}
          <div ref={imageRef} className="relative">
            <div className="relative z-10">
              <Image
                src="/images/about-us-hero.png"
                alt="Professional team meeting"
                width={700}
                height={600}
                className="rounded-lg shadow-lg w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section ref={missionRef} className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-us-banner.png"
          alt="Professional team collaboration"
          fill
          className="object-cover"
        />

        {/* Blue overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-[#004aad] transform -skew-x-12 origin-top-right opacity-90"></div>
          </div>
        </div>

        {/* Blue floating accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a346b] opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#004aad] opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#38b6ff] opacity-50 rotate-45"></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Blue Mission Banner */}
      <div className="absolute top-8 left-0 z-20">
        <div className="bg-[#0a346b] rounded-r-full px-12 py-6">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
        </div>
      </div>

      {/* Mission Content */}
      <div
        ref={missionContentRef}
        className="absolute top-32 left-8 z-10 max-w-lg bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Dreams, Building Futures</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We are here to empower you on your journey to homeownership and combine to building a secure and prosperous
          future for you and your family.
        </p>
      </div>

      {/* Bottom blue line */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#38b6ff] to-[#004aad]"></div>
    </section>
  </div>
)

}
