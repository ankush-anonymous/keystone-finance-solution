"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Utensils, Sparkles, Play, CheckCircle } from "lucide-react"
import Image from "next/image"

const industries = [
  {
    title: "Restaurant Equipment Financing",
    icon: Utensils,
    description:
      "Fuel your culinary dreams with specialized equipment financing for restaurants and food service businesses.",
    image: "/placeholder.svg?height=400&width=600",
    videoPlaceholder: "/placeholder.svg?height=300&width=500",
    color: "from-red-500 to-orange-600",
    benefits: [
      "Up to $500K financing available",
      "Quick 24-hour approval process",
      "Flexible payment terms",
      "New & used equipment options",
      "Seasonal payment structures",
    ],
    stats: [
      { number: "95%", label: "Approval Rate" },
      { number: "24hrs", label: "Quick Decision" },
      { number: "$500K", label: "Max Financing" },
    ],
  },
  {
    title: "Aesthetic Machines Financing",
    icon: Sparkles,
    description:
      "Enhance your practice with cutting-edge aesthetic equipment through our specialized financing solutions.",
    image: "/placeholder.svg?height=400&width=600",
    videoPlaceholder: "/placeholder.svg?height=300&width=500",
    color: "from-pink-500 to-purple-600",
    benefits: [
      "Latest aesthetic technology access",
      "Competitive interest rates",
      "Equipment upgrade programs",
      "Tax advantage opportunities",
      "Maintenance & warranty options",
    ],
    stats: [
      { number: "90%", label: "Client Satisfaction" },
      { number: "48hrs", label: "Fast Processing" },
      { number: "$1M", label: "Max Credit Line" },
    ],
  },
]

export default function IndustriesContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1400"
            alt="Industries background"
            fill
            className="object-cover opacity-15"
          />
        </div>

        {/* Animated Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-green-500 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500 opacity-20 transform rotate-45 animate-spin"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-orange-500">Industries</span> We Serve
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Specialized financing solutions tailored for specific industries, helping businesses grow and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section
          key={index}
          className={`min-h-screen py-20 relative overflow-hidden ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          {/* Background Geometric Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute top-0 ${index % 2 === 0 ? "right-0" : "left-0"} w-1/3 h-full`}>
              <div className="relative h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${industry.color} transform ${
                    index % 2 === 0 ? "skew-x-12" : "-skew-x-12"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content Side */}
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center`}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">{industry.title}</h2>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">{industry.description}</p>

                {/* Benefits List */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Key Benefits</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {industry.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button
                  className={`bg-gradient-to-r ${industry.color} hover:opacity-90 text-white px-8 py-4 text-lg group`}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual Side */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                {/* Main Image */}
                <Card className="overflow-hidden shadow-2xl">
                  <div className="relative h-80">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-20`}></div>
                  </div>
                </Card>

                {/* Video Placeholder */}
                <Card className="overflow-hidden shadow-xl">
                  <div className="relative h-64 bg-gray-900 flex items-center justify-center group cursor-pointer">
                    <Image
                      src={industry.videoPlaceholder || "/placeholder.svg"}
                      alt="Video thumbnail"
                      fill
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Watch Success Stories</p>
                      <p className="text-sm opacity-80">See how we've helped businesses grow</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white transform rotate-45 animate-spin"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white transform -rotate-45 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses that have chosen our financing solutions to fuel their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
