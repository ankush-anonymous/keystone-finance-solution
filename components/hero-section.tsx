"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0">
        {/* Background gradient to white */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-100/80 to-transparent z-10" />

        {/* Background image aligned right */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/family-to-new-house.png"
            alt="Happy family moving into new home"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            From Dreams To Reality: <br />
            Embrace Homeownership With Our <br />
            <span className="text-[#4BA327]">Mortgages</span>
          </h1>

          <div className="w-16 h-1 bg-blue-600 mb-8"></div>

          <p className="text-lg text-gray-700 max-w-xl mb-12 leading-relaxed">
            Whether You Are A First-Time Home Buyer, Looking To Refinance Or
            Upgrade Your Dream Home, We Have Expertise And Options To Help You
            Along The Way!
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full">
              Buy A Home
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full">
              Refinance
            </Button>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-white/80 backdrop-blur-sm px-6 py-3 font-semibold rounded-full"
            >
              1st Mortgage
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-white/80 backdrop-blur-sm px-6 py-3 font-semibold rounded-full"
            >
              2nd Mortgage
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
