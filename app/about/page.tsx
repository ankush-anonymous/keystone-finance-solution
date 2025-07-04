"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Heart, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations"

export default function AboutPage() {
  useGSAPAnimations()

  const values = [
    {
      icon: Users,
      title: "Client-Centered Excellence",
      description:
        "Every decision we make puts our clients' financial well-being first, ensuring personalized solutions that truly serve their needs.",
    },
    {
      icon: Target,
      title: "Innovation & Accessibility",
      description:
        "We leverage cutting-edge technology to make financial services more accessible and intuitive for all Canadians.",
    },
    {
      icon: Award,
      title: "Integrity & Transparency",
      description:
        "We operate with complete honesty, providing clear information and fair terms without hidden fees or surprises.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "We're committed to strengthening Canadian communities by empowering individuals and businesses to achieve their financial goals.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Passionate about democratizing financial services for all Canadians.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Building innovative technology solutions that simplify complex financial processes.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Client Success",
      description: "Dedicated to ensuring every client achieves their financial aspirations.",
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      description: "Streamlining processes to deliver exceptional service and rapid approvals.",
    },
  ]

  const principles = [
    "Transparent pricing with no hidden fees",
    "Rapid approval processes within 24-48 hours",
    "Personalized financial guidance for every client",
    "Cutting-edge security protecting your information",
    "Flexible solutions that adapt to your needs",
    "Ongoing support throughout your financial journey",
  ]

  return (
    <div className="container mx-auto px-8 py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 animate-on-scroll">
        <Badge variant="secondary" className="mb-4">
          About Keystone Financial Group
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Built to Guide Canadians Toward Financial Freedom</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to transform how Canadians access and manage their financial services, making the path to
          financial success clearer, faster, and more achievable for everyone.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-on-scroll p-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Keystone Financial Group, we believe every Canadian deserves access to fair, transparent, and
              innovative financial solutions. We're built to bridge the gap between traditional banking limitations and
              modern financial needs, providing personalized services that adapt to your unique circumstances and goals.
            </p>
            <p>
              Our vision is simple yet powerful: to become Canada's most trusted financial partner by combining
              cutting-edge technology with genuine human care. We're not just processing loans – we're building lasting
              relationships that help individuals, families, and businesses thrive in an ever-changing economic
              landscape.
            </p>
          </div>
        </div>
        <div className="relative stagger-item">
          <div className="absolute inset-0 gradient-primary-light rounded-2xl transform rotate-3"></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-6">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Commitment</h3>
              <p className="text-gray-600">To Canadian Financial Success</p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Canadian Focused</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">Client Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Fast</div>
                <div className="text-sm text-gray-600">Approvals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Fair</div>
                <div className="text-sm text-gray-600">Transparent Terms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These fundamental principles guide every interaction, decision, and innovation as we work to serve Canadians
            better.
          </p>
        </div>

        <div className="animate-row grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="service-card text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="mb-20 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're redefining financial services for the modern Canadian, combining innovation with integrity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {principles.map((principle, index) => (
                <div key={index} className="stagger-item flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Modern financial services"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-20 animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals united by a shared vision of transforming Canadian financial services.
          </p>
        </div>

        <div className="animate-row grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Card className="mb-16 animate-on-scroll">
        <CardContent className="py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Ready to Serve Canada</h3>
            <p className="text-muted-foreground">
              Built with the scale and expertise to support Canadian financial growth
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="stagger-item">
              <div className="text-4xl font-bold text-primary mb-2">All</div>
              <div className="text-sm text-muted-foreground">Provinces & Territories</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Client Support</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold text-primary mb-2">48hr</div>
              <div className="text-sm text-muted-foreground">Approval Process</div>
            </div>
            <div className="stagger-item">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Transparent Terms</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center animate-on-scroll">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the growing number of Canadians who are discovering a better way to achieve their financial goals. Let's
          build your financial future together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity" asChild>
            <Link href="/contact">
              <Users className="mr-2 h-5 w-5" />
              Start Your Journey
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            asChild
          >
            <Link href="/services">
              <Target className="mr-2 h-5 w-5" />
              Explore Our Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
