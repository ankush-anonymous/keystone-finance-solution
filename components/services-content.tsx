"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, RefreshCw, Key, Building } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Financing",
    icon: Home,
    description: "Transform your homeownership dreams into reality with our comprehensive financing solutions.",
    img:"/images/service-1.jpg",
    color: "from-purple-500 to-purple-700",
    features: ["Competitive Rates", "Quick Approval", "Flexible Terms"],
  },
  {
    title: "Refinancing",
    icon: RefreshCw,
    description: "Unlock better terms and lower payments with our expert refinancing services.",
        img:"/images/service-2.jpg",
    color: "from-blue-500 to-blue-700",
    features: ["Lower Payments", "Cash Out Options", "Rate Reduction"],
  },
  {
    title: "Leasing",
    icon: Key,
    description: "Flexible leasing options that provide access to your dream property with favorable terms.",
        img:"/images/service-3.jpg",
    color: "from-teal-500 to-teal-700",
    features: ["Flexible Terms", "Low Down Payment", "Quick Process"],
  },
  {
    title: "Mortgage",
    icon: Building,
    description: "Comprehensive mortgage solutions tailored to your unique financial situation.",
        img:"/images/service-4.jpg",
    color: "from-orange-500 to-orange-700",
    features: ["First-Time Buyer", "Investment Property", "Jumbo Loans"],
  },
]

export default function ServicesContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/service-page-bg.png"
            alt="Financial services background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Geometric Patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 border-2 border-orange-400 transform rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-32 h-32 border-2 border-green-400 transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet your unique needs and help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-indigo-700 delay-75 text-white group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
