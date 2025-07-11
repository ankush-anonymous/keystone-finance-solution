"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footerElement = document.getElementById("footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
    >
      {/* Geometric pattern background */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 transform -skew-y-1 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-orange-500 transform skew-y-1 opacity-90"></div>

        {/* Floating geometric elements */}
        <div className="absolute top-0 right-0 opacity-10">
          <div className="w-64 h-64 border-2 border-white transform rotate-45 translate-x-32 -translate-y-32 animate-spin-slow"></div>
          <div className="w-32 h-32 border-2 border-orange-400 transform rotate-12 translate-x-48 translate-y-8 animate-pulse"></div>
          <div className="w-48 h-48 border-2 border-green-400 transform -rotate-12 translate-x-40 translate-y-20 animate-bounce-slow"></div>
        </div>

        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Keystone
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-300"></div>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              Canada's fastest-growing financial solution provider specializing in aesthetic and hospitality industries.
              We help businesses secure the capital they need to thrive.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Twitter, href: "#", color: "hover:text-blue-300" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${social.color} hover:bg-white/20 hover:scale-110 transform transition-all duration-300 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h4 className="text-xl font-semibold text-green-400 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-green-400 transition-all duration-300 flex items-center group text-lg"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Serve */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h4 className="text-xl font-semibold text-green-400 mb-6">Industries We Serve</h4>
            <ul className="space-y-4">
              {[
                "Aesthetic & Wellness Clinics",
                "Restaurants & Cafes",
                "Medical Practices",
                "Commercial Real Estate",
                "Equipment Financing",
                "Business Expansion",
              ].map((industry, index) => (
                <li
                  key={index}
                  className="text-blue-100 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group text-lg"
                >
                  <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h4 className="text-xl font-semibold text-green-400 mb-6">Get In Touch</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+1 (416) 400-7674", subtext: "Main Line" },
                { icon: Mail, text: "info@keystonefinancialgrp.com", subtext: "General Inquiries" },
                // { icon: MapPin, text: "123 Financial Street", subtext: "Toronto, ON M5V 3A8" },
                { icon: Clock, text: "Mon - Fri: 9AM - 6PM", subtext: "Saturday: 10AM - 4PM" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-300">
                    <contact.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">
                      {contact.text}
                    </p>
                    <p className="text-blue-200 text-sm">{contact.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-white/20 mt-12 pt-8 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-center md:text-left">
              <p>&copy; 2024 Keystone. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering Canadian businesses with trusted financial solutions.</p>
            </div>

            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-blue-200 hover:text-green-400 transition-colors duration-300 text-sm hover:underline"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg) translateX(128px) translateY(-128px); }
          to { transform: rotate(360deg) translateX(128px) translateY(-128px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) translateX(160px) rotate(-12deg); }
          50% { transform: translateY(-10px) translateX(160px) rotate(-12deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </footer>
  )
}
