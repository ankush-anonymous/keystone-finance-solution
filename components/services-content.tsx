"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, RefreshCw, Key, Building } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Financing",
    icon: Home,
    description:
      "Grow Without the Stress of Capital Constraints. We offer simple and fast financing options to help you move your business forward — whether it's opening a new location or investing in high-value equipment.",
    img: "/images/service-1.jpg",
    color: "from-blue-500 to-blue-600",
    features: ["Fast pre-approvals", "Competitive terms", "Personalized plans"],
    industries: "Clinics, Restaurants, Hospitality, Medical",
  },
  {
    title: "Refinancing",
    icon: RefreshCw,
    description:
      "Unlock Better Terms On Existing Loans. Reduce interest rates, consolidate debt, or restructure your repayments — without interrupting your operations.",
    img: "/images/service-2.jpg",
    color: "from-green-500 to-green-600",
    features: [
      "Loan restructuring",
      "Debt consolidation",
      "Monthly payment optimization",
    ],
    industries: "",
  },
  {
    title: "Leasing",
    icon: Key,
    description:
      "Access What You Need — Without Heavy Upfront Costs. We specialize in equipment leasing, making it easier for you to upgrade or expand with zero stress.",
    img: "/images/service-3.jpg",
    color: "from-teal-500 to-teal-600",
    features: [
      "Flexible lease terms",
      "Low upfront commitment",
      "Equipment vendor support",
    ],
    industries: "",
  },
  {
    title: "Mortgage",
    icon: Building,
    description:
      "Commercial Mortgage Solutions That Work For You. From new property acquisition to refinancing existing assets — our team handles it all efficiently.",
    img: "/images/service-4.jpg",
    color: "from-slate-500 to-slate-600",
    features: [
      "Real estate investment guidance",
      "Construction and development loans",
      "Mortgage refinancing",
    ],
    industries: "",
  },
];

export default function ServicesContent() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const servicesGridRef = useRef(null);
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      // Animate hero background
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
        }
      );

      // Animate title with split text effect
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
        }
      );

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
        }
      );

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
        }
      );

      // Services grid animations with ScrollTrigger
      serviceCardsRef.current.forEach((card, index) => {
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
              },
            }
          );

          // Hover animations for service cards
          const cardImage = card.querySelector(".service-image");
          const cardIcon = card.querySelector(".service-icon");
          const cardFeatures = card.querySelectorAll(".service-feature");
          const cardButton = card.querySelector(".service-button");

          // Card hover effect
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(cardImage, {
              scale: 1.1,
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(cardIcon, {
              rotation: 360,
              scale: 1.2,
              duration: 0.6,
              ease: "back.out(1.7)",
            });

            gsap.to(cardFeatures, {
              x: 10,
              duration: 0.3,
              stagger: 0.1,
              ease: "power2.out",
            });

            gsap.to(cardButton, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(cardImage, {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(cardIcon, {
              rotation: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });

            gsap.to(cardFeatures, {
              x: 0,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out",
            });

            gsap.to(cardButton, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        }
      });

      // Floating animation for geometric patterns
      gsap.to(".floating-pattern-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".floating-pattern-2", {
        y: 15,
        x: -15,
        rotation: -8,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden flex items-center"> */}
        {/* Background Image */}
       <div ref={heroRef} className="absolute inset-0 z-0 overflow-hidden">
  <div className="relative w-full h-full scale-100 sm:scale-100 xs:scale-95">
    <Image
      src="/images/services-page-banner.png"
      alt="Financial services background"
      fill
      className="object-cover sm:object-center object-[60%_top]"
    />
    {/* Optional overlay for readability on mobile */}
    <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />
  </div>
</div>


        {/* Geometric Patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="floating-pattern-1 absolute top-20 right-20 w-40 h-40 border-2 border-orange-400 transform rotate-45"></div>
          <div className="floating-pattern-2 absolute bottom-40 right-10 w-32 h-32 border-2 border-green-400 transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-[#0a346b]">Services</span>
            </h1>
            <div className="hero-line w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p
              ref={subtitleRef}
              className="text-xl lg:text-2xl font-semibold text-blue-900 leading-relaxed max-w-3xl mx-auto"
            >
              Tailored Financial Solutions for Every Stage of Your Business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesGridRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className="overflow-hidden shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="service-image object-cover transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="service-icon w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="service-feature px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium transition-transform duration-300 border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {service.industries && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                        Industries:
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {service.industries}
                      </p>
                    </div>
                  )}
<Link href={"/contact"}>
                  <Button className="service-button w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white group transition-all duration-300 py-3">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
