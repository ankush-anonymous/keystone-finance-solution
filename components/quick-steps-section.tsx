"use client"
import { DollarSign, BookOpen, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function QuickStepsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden px-46">
      {/* Background Image - Office/Living Space */}
      <div className="absolute inset-0">
        <Image
          src="/images/three-step-bg.jpg"
          alt="Modern office and living space"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Left Geometric Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-80 opacity-20">
        <div className="relative h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 transform rotate-45"></div>
          <div className="absolute top-32 left-20 w-24 h-24 bg-purple-300 transform -rotate-12"></div>
          <div className="absolute top-48 left-5 w-40 h-40 bg-blue-400 transform rotate-12"></div>
          <div className="absolute top-64 left-32 w-28 h-28 bg-purple-400 transform rotate-45"></div>
          <div className="absolute bottom-32 left-8 w-36 h-36 bg-blue-200 transform -rotate-30"></div>
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
        {/* Centered Content Container */}
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-md">
              Quick 3-Step <br />
              Application
            </h2>
          </div>

          {/* Steps Container - Centered */}
          <div className="relative">
            {/* Step 1 - Apply Online (Right side) */}
            <div className="flex justify-end mb-20">
              <div className="flex items-center max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                {/* Image for step 1 */}
                <div className="w-72 h-48 bg-gray-200 rounded-lg mr-8 flex-shrink-0 overflow-hidden">
                 <Image
                  src="/images/step-1-image.jpg"
                  alt="Woman working on laptop"
                  width={320}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
                </div>

                <div className="flex items-center">
                  {/* Connecting line and number */}
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="w-0.5 h-16 border-l-2 border-dashed border-orange-400 mt-4"></div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center mb-4">
                      <DollarSign className="w-6 h-6 text-orange-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Apply Online</h3>
                    </div>
                    <p className="text-gray-600 max-w-sm leading-relaxed">
                      Applying Has Never Gotten Easier! Complete Our 2-Minute Simple And Easy Application Process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Get Approved (Left side) */}
            <div className="flex justify-start mb-20">
              <div className="flex items-center max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="flex items-center">
                  <div className="pt-2 mr-8">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Get Approved</h3>
                    </div>
                    <p className="text-gray-600 max-w-sm leading-relaxed">
                      Get Approved Within 8 Business Hours! Our Lease & Finance Specialist Will Contact You.
                    </p>
                  </div>

                  {/* Connecting line and number */}
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="w-0.5 h-16 border-l-2 border-dashed border-green-400 mt-4"></div>
                  </div>
                </div>

                {/* Image for step 2 */}
                <div className="w-72 h-48 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                 <Image
                  src="/images/step-2-image.jpg"
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
              <div className="flex items-center max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                {/* Image for step 3 */}
                <div className="w-72 h-48 bg-gray-200 rounded-lg mr-8 flex-shrink-0 overflow-hidden">
                  <Image
                  src="/images/step-3-image.jpg"
                  alt="Approved stamp"
                  width={320}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
                </div>

                <div className="flex items-center">
                  {/* Number circle */}
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center mb-4">
                      <ShoppingCart className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Get Your Funding</h3>
                    </div>
                    <p className="text-gray-600 max-w-sm leading-relaxed">
                      We Can Fund On The Same Day You Apply! Our Team Will Work For You Diligently From The Start To
                      Finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
