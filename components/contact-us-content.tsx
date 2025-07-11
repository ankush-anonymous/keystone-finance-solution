"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Zap,
  HelpCircle,
  AlertCircle,
  X,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (416) 400-7674"],
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["vijay@keystonefinancialgrp.com", "info@keystonefinancialgrp.com"],
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  // {
  //   icon: MapPin,
  //   title: "Address",
  //   details: ["123 Financial Street", "New York, NY 10001"],
  //   color: "text-green-500",
  //   bgColor: "bg-green-100",
  // },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
]

const faqData = [
  {
    question: "How fast is the approval process?",
    answer: "Our team works quickly — most applications are reviewed within 24–48 hours with a 95% approval rate.",
    icon: Zap,
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in aesthetic clinics, restaurants, cafés, medical professionals, and commercial real estate.",
    icon: Users,
  },
  {
    question: "Do I need a high credit score to qualify?",
    answer: "We work with businesses of all credit profiles and assess the overall strength of your business.",
    icon: Shield,
  },
  {
    question: "Can I lease and then own the equipment?",
    answer: "Yes. Many of our lease programs offer a buyout option at the end of the term.",
    icon: TrendingUp,
  },
  {
    question: "Is there an obligation if I apply?",
    answer: "No. Our application process is free, simple, and comes with no obligations.",
    icon: CheckCircle,
  },
]

export default function ContactUsContent() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const formRef = useRef(null)
  const faqRef = useRef(null)
  const contactCardsRef = useRef([])

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errors, setErrors] = useState([])
  const [focusedField, setFocusedField] = useState("")

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        heroRef.current,
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
      )

      // Title animation with 3D effect
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          rotationX: 90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.3,
        },
      )

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.6,
        },
      )

      // Decorative line animation
      gsap.fromTo(
        ".hero-line",
        {
          width: 0,
          opacity: 0,
        },
        {
          width: "5rem",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.9,
        },
      )

      // Contact cards animation
      contactCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              y: 60,
              opacity: 0,
              scale: 0.9,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Hover animations for contact cards
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              duration: 0.3,
              ease: "power2.out",
            })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out",
            })
          })
        }
      })

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // FAQ section animation
      gsap.fromTo(
        faqRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Floating background elements
      gsap.to(".floating-element-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".floating-element-2", {
        y: 15,
        x: -15,
        rotation: -8,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      })
    })

    return () => ctx.revert()
  }, [])

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors([])

    // Submit button animation
    gsap.to(".submit-button", {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".submit-button", {
          scale: 1,
          duration: 0.1,
          ease: "power2.out",
        })
      },
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")

        // Success animation
        gsap.fromTo(
          ".success-message",
          {
            scale: 0,
            opacity: 0,
            y: 50,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
        )

        // Confetti animation
        gsap.to(".success-icon", {
          rotation: 360,
          scale: 1.2,
          duration: 0.8,
          ease: "back.out(1.7)",
          repeat: 1,
          yoyo: true,
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setErrors(result.errors || [result.message])

        // Error animation
        gsap.fromTo(
          ".error-message",
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        )
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrors(["Network error. Please check your connection and try again."])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFieldFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleFieldBlur = () => {
    setFocusedField("")
  }

  const closeMessage = () => {
    gsap.to(".status-message", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setSubmitStatus(null)
        setErrors([])
      },
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
     <section className="min-h-screen relative overflow-hidden flex items-center">
  {/* Background Image */}
  <div ref={heroRef} className="absolute inset-0">
    <Image
      src="/images/contact-banner.png"
      alt="Professional team meeting"
      fill
      className="object-cover bg-cover bg-center bg-no-repeat"
    />
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="floating-element-1 absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#004aad] to-[#0a346b] rounded-full blur-xl"></div>
    <div className="floating-element-2 absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-[#38b6ff] to-[#004aad] rounded-full blur-xl"></div>
  </div>

  {/* Text Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl text-left text-white">
      <h1
        ref={titleRef}
        className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-[#0a346b]"
      >
        Let's Start Your{" "}
        <span className="text-[#38b6ff]">Financial Journey</span>{" "}
        <span className="text-[#38b6ff]">Today</span>.
      </h1>

      <div className="hero-line w-20 h-1 bg-[#38b6ff] mb-8 rounded-full"></div>

      <p
        ref={subtitleRef}
        className="text-xl lg:text-2xl text-[#004aad] leading-relaxed max-w-3xl"
      >
        Tell us a bit about your business, and we'll guide you with the best possible solution.
      </p>
    </div>
  </div>
</section>


      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you with all your financial needs. Reach out to us through any of the following
              channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                ref={(el) => (contactCardsRef.current[index] = el)}
                className="text-center transition-all duration-300 cursor-pointer border-0 shadow-lg"
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

      {/* Contact Form and FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div ref={formRef}>
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                  <CardTitle className="text-3xl text-center">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Status Messages */}
                  {submitStatus && (
                    <div
                      className={`status-message mb-6 p-4 rounded-lg ${
                        submitStatus === "success"
                          ? "bg-green-50 border border-green-200"
                          : "bg-red-50 border border-red-200"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <div className="success-message flex items-center">
                          <CheckCircle className="success-icon w-6 h-6 text-green-600 mr-3" />
                          <div>
                            <h4 className="font-semibold text-green-800">Message Sent Successfully! 🎉</h4>
                            <p className="text-green-700 text-sm mt-1">
                              Thank you for contacting us. We'll get back to you within 24 hours.
                            </p>
                          </div>
                          <button onClick={closeMessage} className="ml-auto text-green-600 hover:text-green-800">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="error-message">
                          <div className="flex items-start">
                            <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h4 className="font-semibold text-red-800">Please fix the following errors:</h4>
                              <ul className="text-red-700 text-sm mt-1 space-y-1">
                                {errors.map((error, index) => (
                                  <li key={index}>• {error}</li>
                                ))}
                              </ul>
                            </div>
                            <button onClick={closeMessage} className="text-red-600 hover:text-red-800">
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          className={`h-12 transition-all duration-300 ${
                            focusedField === "firstName" ? "border-green-500 ring-2 ring-green-200" : "border-gray-300"
                          }`}
                          onFocus={() => handleFieldFocus("firstName")}
                          onBlur={handleFieldBlur}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          className={`h-12 transition-all duration-300 ${
                            focusedField === "lastName" ? "border-green-500 ring-2 ring-green-200" : "border-gray-300"
                          }`}
                          onFocus={() => handleFieldFocus("lastName")}
                          onBlur={handleFieldBlur}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          className={`h-12 transition-all duration-300 ${
                            focusedField === "email" ? "border-green-500 ring-2 ring-green-200" : "border-gray-300"
                          }`}
                          onFocus={() => handleFieldFocus("email")}
                          onBlur={handleFieldBlur}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className={`h-12 transition-all duration-300 ${
                            focusedField === "phone" ? "border-green-500 ring-2 ring-green-200" : "border-gray-300"
                          }`}
                          onFocus={() => handleFieldFocus("phone")}
                          onBlur={handleFieldBlur}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700 font-semibold">
                        Service Interest
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
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
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your financial needs and how we can help you..."
                        rows={5}
                        className={`resize-none transition-all duration-300 ${
                          focusedField === "message" ? "border-green-500 ring-2 ring-green-200" : "border-gray-300"
                        }`}
                        onFocus={() => handleFieldFocus("message")}
                        onBlur={handleFieldBlur}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-button w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-4 text-lg font-semibold transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div ref={faqRef} className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked <span className="text-green-600">Questions</span>
                </h2>
                <div className="w-20 h-1 bg-green-500 mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get quick answers to common questions about our financing solutions and application process.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-green-500 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-100 group-data-[state=open]:bg-green-100 rounded-full flex items-center justify-center transition-all duration-300">
                          <faq.icon className="w-5 h-5 text-gray-600 group-data-[state=open]:text-green-600 transition-colors duration-300" />
                        </div>
                        <span className="font-semibold text-gray-900 group-data-[state=open]:text-green-700 transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2">
                      <div className="ml-14 text-gray-600 leading-relaxed">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
                    <p className="text-gray-600 mb-4">
                      Our team is here to help. Contact us directly for personalized assistance.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Contact Support</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
