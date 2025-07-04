"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  FileText,
  Home,
  Building2,
  CreditCard,
  PiggyBank,
  Calculator,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "Mortgage Solutions",
    subtitle: "Home Financing Made Simple",
    description:
      "Comprehensive mortgage solutions for first-time buyers, refinancing, and investment properties with competitive rates and expert guidance.",
    icon: Home,
    features: ["First-Time Buyer Programs", "Refinancing Options", "Investment Property Loans"],
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    title: "Business Loans",
    subtitle: "Fuel Your Business Growth",
    description:
      "Flexible business financing solutions to help entrepreneurs and established businesses expand, manage cash flow, and achieve their goals.",
    icon: Building2,
    features: ["Working Capital", "Equipment Financing", "SBA Loans"],
    gradient: "from-green-500 to-emerald-400",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    id: 3,
    title: "Personal Financing",
    subtitle: "Achieve Your Personal Goals",
    description:
      "Tailored personal loan solutions for major purchases, home improvements, education, or life events with flexible terms and competitive rates.",
    icon: CreditCard,
    features: ["Personal Loans", "Auto Financing", "Home Improvement"],
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    id: 4,
    title: "Debt Consolidation",
    subtitle: "Simplify Your Financial Life",
    description:
      "Streamline multiple debts into one manageable payment with lower interest rates and simplified monthly payments.",
    icon: PiggyBank,
    features: ["Lower Interest Rates", "Single Payment", "Improved Credit Score"],
    gradient: "from-orange-500 to-red-400",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    id: 5,
    title: "Credit Counseling",
    subtitle: "Expert Financial Guidance",
    description:
      "Professional credit counseling and financial education to help you understand your options and build a stronger financial future.",
    icon: Calculator,
    features: ["Credit Analysis", "Financial Planning", "Debt Management"],
    gradient: "from-indigo-500 to-blue-400",
    bgGradient: "from-indigo-50 to-blue-50",
  },
  {
    id: 6,
    title: "Investment Services",
    subtitle: "Build Your Financial Future",
    description:
      "Strategic investment planning and wealth management services to help you grow and protect your assets for long-term financial success.",
    icon: TrendingUp,
    features: ["Portfolio Management", "Retirement Planning", "Wealth Building"],
    gradient: "from-teal-500 to-cyan-400",
    bgGradient: "from-teal-50 to-cyan-50",
  },
]

export function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleSlideChange = (newSlideOrFunction: number | ((prev: number) => number)) => {
    if (isAnimating) return

    setIsAnimating(true)
    const newSlide = typeof newSlideOrFunction === "function" ? newSlideOrFunction(currentSlide) : newSlideOrFunction

    setTimeout(() => {
      setCurrentSlide(newSlide)
      setTimeout(() => setIsAnimating(false), 100)
    }, 150)
  }

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % services.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    handleSlideChange(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentService = services[currentSlide]

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Main Carousel Card */}
      <div className="relative max-w-6xl w-full">
        <Card
          className={`
            relative overflow-hidden border-0 shadow-2xl transform transition-all duration-500 ease-out
            ${isAnimating ? "scale-95 opacity-90" : "scale-100 opacity-100"}
            bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40
          `}
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                <div
                  className={`transform transition-all duration-700 ${isAnimating ? "translate-x-8 opacity-0" : "translate-x-0 opacity-100"}`}
                >
                  <Badge variant="secondary" className="mb-4 bg-white/80 text-gray-700 border-0 shadow-sm">
                    {currentService.subtitle}
                  </Badge>

                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {currentService.title}
                  </h1>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{currentService.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {currentService.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/60 text-gray-800 text-sm font-medium rounded-full border border-white/40 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Today
                    </Button>
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-300 text-gray-700 hover:bg-white/80 bg-white/60 backdrop-blur-sm shadow-lg"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Get Free Quote
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Element */}
              <div className="relative flex items-center justify-center p-8 lg:p-12">
                <div
                  className={`transform transition-all duration-700 ${isAnimating ? "scale-75 opacity-0 rotate-12" : "scale-100 opacity-100 rotate-0"}`}
                >
                  {/* Large Icon with Gradient Background */}
                  <div
                    className={`
                    relative w-64 h-64 rounded-full bg-gradient-to-br ${currentService.gradient} 
                    flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300
                    ring-4 ring-blue-200/30
                  `}
                  >
                    <currentService.icon className="h-32 w-32 text-white" />

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 -left-8 w-6 h-6 bg-white/15 rounded-full animate-pulse delay-700"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 -z-10">
                    <div className={`absolute top-8 left-8 w-32 h-32 bg-blue-400/10 rounded-full blur-xl`}></div>
                    <div className={`absolute bottom-8 right-8 w-24 h-24 bg-blue-500/15 rounded-full blur-lg`}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white hover:bg-gray-50 text-gray-700 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white hover:bg-gray-50 text-gray-700 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${currentService.gradient} scale-125 shadow-lg`
                  : "bg-gray-300 hover:bg-gray-400"
              } disabled:opacity-50`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/90 rounded-full backdrop-blur-sm shadow-lg border border-gray-200">
            <div
              className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
            ></div>
            <span className="text-gray-700 text-sm font-medium">{isAutoPlaying ? "Auto" : "Manual"}</span>
          </div>
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-lg overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentService.gradient} transition-all duration-100 ease-linear animate-pulse`}
              style={{
                width: `${((currentSlide + 1) / services.length) * 100}%`,
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>
      </div>
    </div>
  )
}
