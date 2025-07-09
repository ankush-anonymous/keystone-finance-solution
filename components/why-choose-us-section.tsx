"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Your financial information is protected with bank-level security and encryption.",
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Get approved within 8 business hours with our streamlined application process.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our experienced team of financial specialists will guide you every step of the way.",
  },
  {
    icon: Award,
    title: "Best Rates",
    description: "We offer competitive rates and flexible terms to suit your financial needs.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive financial solutions with unmatched service and expertise to help you achieve your
            dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
