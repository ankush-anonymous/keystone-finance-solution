"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-indigo-700 text-white overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-green-500 via-blue-600 to-green-500 transform -skew-y-1"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-blue-800 transform skew-y-1"></div>

        {/* Geometric shapes */}
        <div className="absolute top-0 right-0 opacity-10">
          <div className="w-64 h-64 border-2 border-white transform rotate-45 translate-x-32 -translate-y-32"></div>
          <div className="w-32 h-32 border-2 border-white transform rotate-12 translate-x-48 translate-y-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">FinancePro</h3>
            <p className="text-orange-100 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-orange-200 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-orange-200 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-orange-200 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-orange-200 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-orange-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="text-orange-100 hover:text-white transition-colors">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-orange-100 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Most Visited Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Most Visited Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-orange-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-orange-100 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-orange-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-orange-100 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4">NEED HELP</h4>
            <div className="space-y-2 text-orange-100">
              <p>Phone: +(123) 456-7890</p>
              <p>Fax: (456) 678-9012</p>
              <p>E-Mail: info@financepro.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-400 mt-12 pt-8 text-center text-orange-100">
          <p>&copy; 2024 FinancePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
