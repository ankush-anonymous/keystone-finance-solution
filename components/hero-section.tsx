"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0">
         <Image
              src="/images/family-to-new-house.png"
              alt="Happy family moving into new home"
              fill
              className="object-cover object-right"
              priority
            />
        {/* Soft Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/20"></div>

        {/* Floating Gradient Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-8">
          {/* Animated Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Financing, Leasing & Mortgage
            </span>{" "}
            Solutions.
          </h1>

          {/* Decorative Line with Animation */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-300 mb-8 animate-fade-in-up animation-delay-200"></div>

          {/* Animated Subheadline */}
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            Helping Canadian businesses in aesthetics and hospitality secure the funding they need — with{" "}
            <span className="text-green-300 font-semibold">speed, flexibility, and trust.</span>
          </p>

          {/* Animated CTA Buttons */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-600">
            <Button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white bg-white/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Trust Indicators with Animation */}
          <div className="mt-16 flex flex-wrap items-center gap-8 animate-fade-in-up animation-delay-800">
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Trusted by 500+ Canadian Businesses</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-200"></div>
              <span className="text-sm font-medium">24-Hour Approval Process</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
              <span className="text-sm font-medium">$50M+ Funded to Date</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
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

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
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

        .animate-slow-zoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
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
