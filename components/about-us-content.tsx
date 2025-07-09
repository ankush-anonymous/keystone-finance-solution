"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const companyValues = [
  "Expertise You Can Trust",
  "Tailored Mortgage Solutions",
  "Transparent Process",
  "Community-Centric Values",
  "Accessible Support",
  "Trusted By Many",
]

export default function AboutUsContent() {
  return (
    <div className="pt-20">
      {/* Top Section - Company Values & Team Image */}
      <section className="min-h-screen py-16 bg-white relative overflow-hidden flex items-center">
        {/* Orange geometric shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-orange-500 transform skew-x-12 origin-top-left"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 opacity-50"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* About Us Title */}
              <div className="mb-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-10 text-xl font-medium">
                  At FinancePro, we believe in transforming homeownership dreams into reality. Our dedicated team of
                  mortgage professionals is committed to guiding you through every step of the financing process with
                  unparalleled expertise, transparency, and personalized service that puts your needs first.
                </p>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose FinancePro?</h3>
                  <ul className="space-y-5">
                    {companyValues.map((value, index) => (
                      <li key={index} className="flex items-center group">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-green-600 transition-colors">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side - Team Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=700"
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
      <section className="relative overflow-hidden min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1400"
            alt="Professional team collaboration"
            fill
            className="object-cover"
          />

          {/* Blue geometric overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-blue-800 transform -skew-x-12 origin-top-right opacity-90"></div>
            </div>
          </div>

          {/* Orange geometric accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-70"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-orange-600 opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-400 opacity-50 rotate-45"></div>

          {/* Content overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Orange Mission Banner */}
        <div className="absolute top-8 left-0 z-20">
          <div className="bg-orange-500 rounded-r-full px-12 py-6">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
        </div>

        {/* Mission Content */}
        <div className="absolute top-32 left-8 z-10 max-w-lg bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Dreams, Building Futures</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We are here to empower you on your journey to homeownership and combine to building a secure and prosperous
            future for you and your family.
          </p>
        </div>

        {/* Green accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
      </section>
    </div>
  )
}
