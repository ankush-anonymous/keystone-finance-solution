"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Check,
  Home,
  Building2,
  CreditCard,
  PiggyBank,
  Calculator,
  TrendingUp,
  Shield,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations"

export default function ServicesPage() {
  useGSAPAnimations()

  const services = [
    {
      icon: Home,
      title: "Mortgage Solutions",
      description:
        "Whether you're a first-time homebuyer or looking to refinance, our comprehensive mortgage solutions offer competitive rates and personalized guidance throughout the entire process.",
      features: [
        "First-Time Buyer Programs",
        "Conventional & FHA Loans",
        "Refinancing Options",
        "Investment Property Loans",
        "Jumbo Mortgages",
        "VA Loans",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Building2,
      title: "Business Loans",
      description:
        "Fuel your business growth with flexible financing solutions designed for entrepreneurs and established businesses. From working capital to equipment financing, we have the right solution for your needs.",
      features: [
        "Working Capital Loans",
        "Equipment Financing",
        "SBA Loans",
        "Business Lines of Credit",
        "Commercial Real Estate",
        "Invoice Factoring",
      ],
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: CreditCard,
      title: "Personal Financing",
      description:
        "Achieve your personal goals with our tailored loan solutions. Whether it's a major purchase, home improvement, or unexpected expense, we offer competitive rates and flexible terms.",
      features: [
        "Personal Loans",
        "Auto Financing",
        "Home Improvement Loans",
        "Education Loans",
        "Medical Financing",
        "Vacation Loans",
      ],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: PiggyBank,
      title: "Debt Consolidation",
      description:
        "Simplify your financial life by consolidating multiple debts into one manageable payment. Lower your interest rates and reduce monthly payments while improving your credit score.",
      features: [
        "Lower Interest Rates",
        "Single Monthly Payment",
        "Credit Score Improvement",
        "Flexible Terms",
        "No Prepayment Penalties",
        "Expert Guidance",
      ],
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: Calculator,
      title: "Credit Counseling",
      description:
        "Get expert financial guidance with our professional credit counseling services. We'll help you understand your options, create a budget, and develop a plan for financial success.",
      features: [
        "Credit Report Analysis",
        "Budget Planning",
        "Debt Management Plans",
        "Financial Education",
        "Credit Score Improvement",
        "Ongoing Support",
      ],
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description:
        "Build and protect your wealth with our strategic investment planning services. From retirement planning to portfolio management, we help you achieve long-term financial success.",
      features: [
        "Portfolio Management",
        "Retirement Planning",
        "Wealth Building Strategies",
        "Risk Assessment",
        "Tax-Efficient Investing",
        "Estate Planning",
      ],
      gradient: "from-teal-500 to-cyan-400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 animate-on-scroll">
        <Badge variant="secondary" className="mb-4">
          Our Financial Services
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Financial Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From mortgages to business loans, personal financing to investment planning - we provide the financial
          services you need to achieve your goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        {/* First Row - Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card */}
        <div className="animate-row grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <Card
              key={index}
              className="service-card h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="gradient-primary text-white hover:opacity-90 transition-opacity">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card */}
        <div className="animate-row grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(3, 6).map((service, index) => (
            <Card
              key={index + 3}
              className="service-card h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="gradient-primary text-white hover:opacity-90 transition-opacity">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <Card className="mb-16 animate-on-scroll">
        <CardHeader className="text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl">Why Choose Keystone Financial Group?</CardTitle>
          <CardDescription className="text-lg">
            We're committed to providing exceptional financial services with integrity, expertise, and personalized
            attention.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="stagger-item">
              <h3 className="font-semibold mb-2 text-primary">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Our experienced financial professionals provide personalized advice tailored to your unique situation.
              </p>
            </div>
            <div className="stagger-item">
              <h3 className="font-semibold mb-2 text-primary">Competitive Rates</h3>
              <p className="text-sm text-muted-foreground">
                We work with multiple lenders to secure the best rates and terms for your financial needs.
              </p>
            </div>
            <div className="stagger-item">
              <h3 className="font-semibold mb-2 text-primary">Fast Approvals</h3>
              <p className="text-sm text-muted-foreground">
                Streamlined processes and quick decision-making to get you the funding you need when you need it.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center animate-on-scroll">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take the first step towards achieving your financial goals. Contact us today for a free consultation and
          personalized quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity" asChild>
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Get Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
