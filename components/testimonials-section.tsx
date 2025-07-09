"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Bob Harleyu",
    title: "Client 2",
    content:
      "Posuere Aliquam Sed Vestibulum Duis Vestibulum Consectetur. Cursus Nulla Dictum Lacus Euismod Dignissim Habitant Ut Amet Convallis.",
    avatar: "/placeholder.svg?height=60&width=60",
    position: "top-8 left-8",
  },
  {
    name: "Jhon Dhony",
    title: "Client 1",
    content:
      "Sed In Dolor Auctor Vel Aliquam Neque Quis Tellus A. Aliquam Mauris Et Accumsan Cursus Lobortis Lorem Nibh Quam Interdum Urna.",
    avatar: "/placeholder.svg?height=60&width=60",
    position: "top-32 left-64",
  },
  {
    name: "Carmilla Angel",
    title: "Client 3",
    content:
      "Posuere Aliquam Sed Vestibulum Duis Vestibulum Consectetur. Cursus Nulla Dictum Lacus Euismod Dignissim Habitant Ut Amet.",
    avatar: "/placeholder.svg?height=60&width=60",
    position: "top-80 left-16",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen">
      {/* Background overlay with people silhouettes */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background pattern to simulate people silhouettes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/6 w-28 h-28 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Floating Testimonial cards */}
          <div className="relative h-96 lg:h-[500px]">
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

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{testimonial.title}</p>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="text-white lg:pl-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              What Our <br />
              Client Say
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-md">
              Convallis Nec Ac Puruis Nunc. Maecenas Pharetra Scelerisque Tempor Vulputate Enim Bibendum Consectetur.
            </p>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 transition-colors px-6 py-3">
              See More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
