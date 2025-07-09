"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@financepro.com", "support@financepro.com"],
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Financial Street", "New York, NY 10001"],
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
]

export default function ContactUsContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900 relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1400"
            alt="Modern office building"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Geometric Patterns */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-orange-400 transform -rotate-12"></div>
          <div className="absolute bottom-40 right-8 w-28 h-28 border-2 border-green-400 transform rotate-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Ready to turn your homeownership dreams into reality? Our expert team is here to guide you through every
              step of your financial journey. Get in touch today!
            </p>
          </div>
        </div>

        {/* Orange geometric accent */}
        <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-orange-500 transform skew-x-12 opacity-80"></div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute left-0 top-0 bottom-0 w-80 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-400 transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you with all your financial needs. Reach out to us through any of the following
              channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${info.bgColor} rounded-full mb-6`}
                  >
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen py-20 bg-white relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1400"
            alt="Professional consultation"
            fill
            className="object-cover opacity-10"
          />
        </div>

        {/* Blue geometric overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-blue-800 transform skew-x-12 origin-top-left opacity-5"></div>
          </div>
        </div>

        {/* Orange geometric accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-green-500 opacity-10 transform -rotate-45"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Form */}
            <div>
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-3xl text-center">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                          First Name *
                        </Label>
                        <Input id="firstName" placeholder="Enter your first name" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                          Last Name *
                        </Label>
                        <Input id="lastName" placeholder="Enter your last name" className="h-12" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-semibold">
                          Email Address *
                        </Label>
                        <Input id="email" type="email" placeholder="Enter your email" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">
                          Phone Number *
                        </Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700 font-semibold">
                        Service Interest
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="financing">Home Financing</SelectItem>
                          <SelectItem value="refinancing">Refinancing</SelectItem>
                          <SelectItem value="leasing">Leasing Options</SelectItem>
                          <SelectItem value="mortgage">Mortgage Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your financial needs and how we can help you..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Content */}
            <div className="text-gray-900 space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Let's Start Your <br />
                  <span className="text-orange-500">Financial Journey</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're a first-time homebuyer, looking to refinance, or exploring investment opportunities,
                  our experienced team is ready to provide personalized solutions tailored to your unique financial
                  situation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quick Response</h4>
                    <p className="text-gray-600">We'll get back to you within 24 hours with a personalized response.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Expert Consultation</h4>
                    <p className="text-gray-600">
                      Schedule a free consultation with our mortgage specialists to discuss your options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-orange-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Tailored Solutions</h4>
                    <p className="text-gray-600">
                      Receive customized financial solutions designed specifically for your needs and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Orange geometric accent */}
        <div className="absolute top-0 right-0 w-1/4 h-full">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-orange-500 transform -skew-x-12 origin-top-right opacity-10"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              Come meet our team in person at our conveniently located office in the heart of the financial district.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Interactive Map Placeholder</p>
                <p className="text-gray-400">123 Financial Street, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
