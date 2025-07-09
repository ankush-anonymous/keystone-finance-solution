"use client"
import { DollarSign, BookOpen, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function QuickStepsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Left Geometric Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-80 opacity-20">
        <div className="relative h-full">
          {/* Complex geometric shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 transform rotate-45"></div>
          <div className="absolute top-32 left-20 w-24 h-24 bg-purple-300 transform -rotate-12"></div>
          <div className="absolute top-48 left-5 w-40 h-40 bg-blue-400 transform rotate-12"></div>
          <div className="absolute top-64 left-32 w-28 h-28 bg-purple-400 transform rotate-45"></div>
          <div className="absolute bottom-32 left-8 w-36 h-36 bg-blue-200 transform -rotate-30"></div>
          <div className="absolute bottom-48 left-24 w-20 h-20 bg-purple-200 transform rotate-60"></div>
        </div>
      </div>

      {/* Right Geometric Pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-80 opacity-10">
        <div className="relative h-full">
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-gray-400 transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border-2 border-gray-300 transform -rotate-12"></div>
          <div className="absolute bottom-40 right-8 w-28 h-28 border-2 border-gray-400 transform rotate-30"></div>
          <div className="absolute bottom-20 right-24 w-20 h-20 border-2 border-gray-300 transform -rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Title Section */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-md">
            Quick 3-Step <br />
            Application
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Step 1 - Apply Online (Right side) */}
          <div className="flex justify-end mb-16">
            <div className="flex items-start max-w-2xl">
              {/* Image placeholder for step 1 */}
              <div className="w-80 h-48 bg-gray-200 rounded-lg mr-8 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=192&width=320"
                  alt="Woman working on laptop"
                  width={320}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex items-start">
                {/* Connecting line */}
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div className="w-0.5 h-24 border-l-2 border-dashed border-orange-400 mt-4"></div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-orange-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Apply Online</h3>
                  </div>
                  <p className="text-gray-600 max-w-sm">
                    Applying Has Never Gotten Easier! Complete Our 2-Minute Simple And Easy Application Process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Get Approved (Left side) */}
          <div className="flex justify-start mb-16">
            <div className="flex items-start max-w-2xl">
              <div className="flex items-start">
                <div className="pt-2 mr-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Get Approved</h3>
                  </div>
                  <p className="text-gray-600 max-w-sm">
                    Get Approved Within 8 Business Hours! Our Lease & Finance Specialist Will Contact You.
                  </p>
                </div>

                {/* Connecting line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div className="w-0.5 h-24 border-l-2 border-dashed border-green-400 mt-4"></div>
                </div>
              </div>

              {/* Image placeholder for step 2 */}
              <div className="w-80 h-48 bg-gray-200 rounded-lg flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=192&width=320"
                  alt="Business meeting"
                  width={320}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Step 3 - Get Your Funding (Right side) */}
          <div className="flex justify-end">
            <div className="flex items-start max-w-2xl">
              {/* Image placeholder for step 3 */}
              <div className="w-80 h-48 bg-gray-200 rounded-lg mr-8 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=192&width=320"
                  alt="Approved stamp"
                  width={320}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex items-start">
                {/* Number circle */}
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Get Your Funding</h3>
                  </div>
                  <p className="text-gray-600 max-w-sm">
                    We Can Fund On The Same Day You Apply! Our Team Will Work For You Diligently From The Start To
                    Finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
