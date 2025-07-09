"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">FinancePro</div>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/apply" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Apply Now
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact Us
              </Link>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
