"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Bob Harleyu",
    title: "Client 2",
    content:
      "Keystone made the whole process seamless. As a medspa owner, I was nervous about financing, but they handled everything professionally and quickly.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    position: "top-8 left-8",
        rating:5

  },
  {
    name: "Jhon Dhony",
    title: "Client 1",
    content:
      "I needed new kitchen equipment fast. Keystone not only approved my lease quickly, but they also guided me every step of the way",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    position: "top-32 left-64",
        rating:5

  },
  {
    name: "Carmilla Angel",
    title: "Client 3",
    content:
      "They refinanced our previous loan and significantly lowered our monthly payments. Very responsive team and easy to work with",
    avatar:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    position: "top-80 left-16",
    rating:5
  },
];

export default function TestimonialsSection() {
  return (
    <section
  className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: "url('/images/testimonials-bg.png')" }}
>

      {/* Background overlay with people silhouettes */}
{/* 🔵 Blue overlay layer */}
      <div className="absolute inset-0 bg-blue-900/60 z-0" />

      {/* Existing black soft overlay for deeper contrast */}
      <div className="absolute inset-0 bg-black/20 z-0" />


      {/* Background pattern to simulate people silhouettes - Hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden lg:block">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/6 w-28 h-28 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative lg:px-32 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Testimonial cards */}
          <div className="relative">
            {/* Mobile: Stack testimonials vertically */}
            <div className="lg:hidden space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">{testimonial.title}</p>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Desktop: Floating testimonial cards */}
            <div className="hidden lg:block relative h-96 lg:h-[500px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`absolute w-72 bg-white shadow-lg hover:shadow-xl transition-shadow ${testimonial.position}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">{testimonial.title}</p>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white lg:pl-12 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
              What Our <br />
              Client Say
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Hear from our satisfied clients who have successfully grown their businesses with our financing solutions.
            </p>

            {/* Stats - Mobile friendly */}
            <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-sm text-blue-200">Approval Rate</div>
              </div>
            </div>

            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 transition-colors px-6 py-3">
              See More Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
