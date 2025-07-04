"use client"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Home,
  Building2,
  CreditCard,
  PiggyBank,
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { ServicesCarousel } from "@/components/services-carousel"
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations"

export default function HomePage() {
  useGSAPAnimations()

  // Ensure scroll position is reset when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const keyServices = [
    {
      icon: Home,
      title: "Mortgage Solutions",
      description: "Comprehensive home financing with competitive rates and expert guidance",
      features: ["First-Time Buyer Programs", "Refinancing Options", "Investment Property Loans"],
    },
    {
      icon: Building2,
      title: "Business Loans",
      description: "Flexible financing solutions to fuel your business growth and success",
      features: ["Working Capital", "Equipment Financing", "SBA Loans"],
    },
    {
      icon: CreditCard,
      title: "Personal Financing",
      description: "Tailored personal loans for major purchases and life events",
      features: ["Personal Loans", "Auto Financing", "Home Improvement"],
    },
    {
      icon: PiggyBank,
      title: "Debt Consolidation",
      description: "Simplify your finances with lower rates and single payments",
      features: ["Lower Interest Rates", "Single Payment", "Credit Score Improvement"],
    },
  ]

  const benefits = [
    "Fast implementation in under 24 hours",
    "Expert onboarding and training included",
    "24/7 dedicated support team",
    "99.9% uptime guarantee",
    "No long-term contracts required",
    "Free data migration assistance",
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Sales Director",
      company: "TechFlow Solutions",
      content:
        "Keystone Financial Group transformed our equipment financing process. We've seen a 40% increase in approvals and our clients are more satisfied than ever.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthLab Inc",
      content:
        "The best financing partner we've worked with. Their expertise and quick turnaround times have been game-changing for our business.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Operations Manager",
      company: "Innovate Corp",
      content:
        "Professional service and competitive rates. Keystone Financial Group has been instrumental in our equipment expansion.",
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section with Blue Gradient */}
      <section className="relative -mt-[110px] pt-[110px] min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="parallax-slow absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="parallax-slow absolute top-40 right-20 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
          <div className="parallax-slow absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl"></div>
          <div className="parallax-slow absolute bottom-40 right-1/4 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-transparent to-blue-800/30"></div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-16 pb-8 text-center">
          <div className="hero-badge opacity-0">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              🚀 Trusted by 10,000+ businesses nationwide
            </Badge>
          </div>

          <h1 className="hero-title opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            Transform Your Business with
            <br />
            <span className="text-blue-200">Smart Equipment Financing</span>
          </h1>

          <p className="hero-description opacity-0 text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Specialized financing solutions across multiple industries. From medical equipment to heavy machinery, we're
            your trusted financial partner every step of the way.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="hero-carousel opacity-0 relative z-10 container mx-auto px-6 lg:px-8 pb-20">
          <ServicesCarousel />
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-background">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="px-4 py-20 bg-gradient-to-b from-background to-blue-50/30 animate-on-scroll">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Our Core Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white-900">
              Everything You Need to
              <span className="text-primary"> Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to streamline your business operations and accelerate growth
            </p>
          </div>

          <div className="animate-row grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyServices.map((service, index) => (
              <Card
                key={index}
                className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits Highlights */}
      <section className="px-4 py-20 bg-white animate-on-scroll">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Why Choose Keystone Financial Group
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Built for Your Success,
                <span className="text-primary"> Designed for Growth</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that every business is unique. That's why we've created financing solutions that adapt to
                your needs, not the other way around.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="stagger-item flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative stagger-item">
              <div className="absolute inset-0 gradient-primary-light rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-6">
                  <div className="counter text-4xl font-bold text-primary mb-2">2000000000</div>
                  <div className="text-gray-600">Equipment Financed ($)</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="counter text-2xl font-bold text-gray-900 mb-1">95</div>
                    <div className="text-sm text-gray-600">Approval Rate (%)</div>
                  </div>
                  <div>
                    <div className="counter text-2xl font-bold text-gray-900 mb-1">24</div>
                    <div className="text-sm text-gray-600">Quick Decisions (hrs)</div>
                  </div>
                  <div>
                    <div className="counter text-2xl font-bold text-gray-900 mb-1">50</div>
                    <div className="text-sm text-gray-600">Industries Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 bg-gradient-to-b from-blue-50/30 to-background animate-on-scroll">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Customer Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how businesses like yours are achieving remarkable results with Keystone Financial Group
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="stagger-item bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 relative overflow-hidden animate-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="parallax-slow absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"></div>
          <div className="parallax-slow absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto text-center text-white">
          <div className="stagger-item">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Finance Your Growth?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of successful businesses. Get pre-approved today and see how we can help your business
              thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4 h-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Get Pre-Approved Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Speak with an Expert
                </Link>
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-6">No obligation • Quick decisions • Competitive rates</p>
          </div>
        </div>
      </section>
    </div>
  )
}
