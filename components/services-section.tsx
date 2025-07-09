"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    title: "Financing",
    description:
      "Replacing Your Existing Home Loan With A New One, Typically With Better Terms. Get it done with us easily",
    features: [
      "Lower Interest Rates",
      "Monthly Payment Reduction",
      "Change In Loan Duration",
      "Access Home Equity",
    ],
    color: "bg-purple-600",
    img:"/images/service-1.jpg"
  },
  {
    title: "Refinancing",
    description:
      "It Is The Cornerstone Of Homeownership, The Key To Unlock Your Dream Home, And The Foundation Of Your Journey.",
    features: [
      "Primary Home Loan",
      "Largest Mortgage",
      "Equity Building",
      "Ownership Foundation",
    ],
    color: "bg-blue-600",
        img:"/images/service-2.jpg"

  },
  {
    title: "Leasing",
    description:
      "It's Acts As Your Financial Wingman, Tapping Into Your Home's Latent Potential To Fund Your Dreams With Favorable Terms.",
    features: [
      "Access To Home Equity",
      "Debt Consolidation",
      "Flexible Use Of Funds",
      "Extended Repayment Terms",
    ],
    color: "bg-teal-600",
        img:"/images/service-3.jpg"

  },
  {
    title: "Mortgage",
    description:
      "It's Acts As Your Financial Wingman, Tapping Into Your Home's Latent Potential To Fund Your Dreams With Favorable Terms.",
    features: [
      "Access To Home Equity",
      "Debt Consolidation",
      "Flexible Use Of Funds",
      "Extended Repayment Terms",
    ],
    color: "bg-gray-600",
        img:"/images/service-4.jpg"

  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/services-bg.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Colored strip */}
              <div className={`${service.color} h-2`} />

              <CardContent className="p-6">
                {/* 🔹 Image cutout (replace `service.image` with actual image path) */}
                <div className="w-full h-32 mb-4 relative overflow-hidden rounded-md">
                  <img
                    src={`${service.img}`}
                    alt={`${service.title} illustration`}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Title Badge */}
                <div
                  className={`inline-block px-4 py-2 ${service.color} text-white rounded-full text-sm font-semibold mb-4`}
                >
                  {service.title}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
