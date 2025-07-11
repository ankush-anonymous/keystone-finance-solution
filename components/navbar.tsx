"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { gsap } from "gsap"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
      gsap.fromTo(
        ".mobile-menu-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.1 }
      )
    }
  }

  const closeMenu = () => {
    gsap.to(".mobile-menu", {
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setIsOpen(false),
    })
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About Us" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-sm ${
          isScrolled ? "bg-white/90 shadow-md" : "bg-white/70"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/keystone-logo.png"
              alt="Keystone Logo"
              width={200}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex  items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700  lg:text-lg hover:text-blue-600 transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-base font-medium">
              <Link
                href={"/contact"}
                className="text-white text-base font-medium"
              >
              Contact Us
                
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-gray-700" : "text-blue-600"
              } hover:bg-gray-100`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
          <div className="mobile-menu absolute top-0 right-0 w-72 sm:w-80 h-full bg-white shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/images/keystone-logo.png"
                  alt="Keystone Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <button onClick={closeMenu} className="text-gray-500 hover:bg-gray-100 p-2 rounded-md">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="mobile-menu-item block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50 transition text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <Button
                  onClick={closeMenu}
                  className="mobile-menu-item w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-base"
                >
                  Get Started Today
                </Button>

                <Button
                  variant="outline"
                  onClick={closeMenu}
                  className="mobile-menu-item w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 rounded-full text-base"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
                <div className="text-gray-600 mb-1">Quick Contact</div>
                <div className="font-medium text-gray-900">+1 (416) 400-7674</div>
                <div className="text-gray-600"> info@keystonefinancialgrp.com
</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
