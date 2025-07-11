"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
       <Image
  src="/images/keystone-main-banner.png"
  alt="Happy family moving into new home"
  fill
  className="object-cover object-[20%] sm:object-center"
  priority
/>


        {/* Floating Blue Gradient Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#004aad] to-[#38b6ff] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#0a346b] to-[#004aad] rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 ">
        <div className="max-w-4xl mx-8 lg:py-32 ">
          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#004aad] leading-tight mb-6 animate-fade-in-up">
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-[#004aad]">
              Financing, Leasing & Mortgage
            </span>{" "}
            Solutions.
          </h1>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#004aad] to-[#0a346b] mb-8 animate-fade-in-up animation-delay-200"></div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-[#0a346b] max-w-3xl mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            Helping Canadian businesses in aesthetics and hospitality secure the funding they need — with{" "}
            <span className="text-[#38b6ff] font-semibold">speed, flexibility, and trust.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-600">
            <Link href={"/contact"}>
            <Button className="bg-gradient-to-r from-[#004aad] to-[#0a346b] hover:from-[#0a346b] hover:to-[#004aad] text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
              Get Started Today
            </Button>
            </Link>
            <Link href={"/services"}>
            <Button
              variant="outline"
              className="border-2 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white bg-white/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
            </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 animate-fade-in-up animation-delay-800">
            <div className="flex items-center space-x-2 text-[#004aad]">
              <div className="w-3 h-3 bg-[#38b6ff] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Trusted by 500+ Canadian Businesses</span>
            </div>
            <div className="flex items-center space-x-2 text-[#004aad]">
              <div className="w-3 h-3 bg-[#38b6ff] rounded-full animate-pulse animation-delay-200"></div>
              <span className="text-sm font-medium">24-Hour Approval Process</span>
            </div>
            <div className="flex items-center space-x-2 text-[#0a346b]">
              <div className="w-3 h-3 bg-[#38b6ff] rounded-full animate-pulse animation-delay-400"></div>
              <span className="text-sm font-medium">$50M+ Funded to Date</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  )
}
