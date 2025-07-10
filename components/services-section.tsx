"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    title: "Financing",
    headline: "Empower Your Business With Smart Financing.",
    description:
      "Access tailored funding solutions that align with your goals — whether you're expanding your restaurant or upgrading your medical spa.",
    // features: ["Lower Interest Rates", "Monthly Payment Reduction", "Change In Loan Duration", "Access Home Equity"],
    color: "bg-purple-600",
    hoverColor: "group-hover:border-purple-500",
    underlineColor: "bg-purple-500",
    img: "/images/service-1.jpg",
  },
  {
    title: "Refinancing",
    headline: "Reduce Payments. Reclaim Control.",
    description:
      "Let us help you optimize your existing loans for better terms, lower rates, and improved cash flow.",
    // features: ["Primary Home Loan", "Largest Mortgage", "Equity Building", "Ownership Foundation"],
    color: "bg-blue-600",
    hoverColor: "group-hover:border-blue-500",
    underlineColor: "bg-blue-500",
    img: "/images/service-2.jpg",
  },
  {
    title: "Leasing",
    headline: "Flexible Leasing That Fits Your Needs.",
    description:
      "Get the equipment your business needs — with manageable payments and minimal upfront costs.",
    // features: ["Access To Home Equity", "Debt Consolidation", "Flexible Use Of Funds", "Extended Repayment Terms"],
    color: "bg-teal-600",
    hoverColor: "group-hover:border-teal-500",
    underlineColor: "bg-teal-500",
    img: "/images/service-3.jpg",
  },
  {
    title: "Mortgage",
    headline: "Commercial & Investment Mortgages Made Simple.",
    description:
      "Secure competitive mortgage solutions for your business or real estate goals, without the hassle.",
    // features: ["Access To H?ome Equity", "Debt Consolidation", "Flexible Use Of Funds", "Extended Repayment Terms"],
    color: "bg-gray-600",
    hoverColor: "group-hover:border-gray-500",
    underlineColor: "bg-gray-500",
    img: "/images/service-4.jpg",
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
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative border-2 border-transparent hover:border-opacity-50"
            >
              {/* Curved Header Section */}
              {/* Curved Header Section */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                {/* Background image fills the header */}
                <img
                  src={service.img}
                  alt={`${service.title} illustration`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay tint */}
                {/* <div
                  className={`absolute inset-0 ${service.color} bg-opacity-50`}
                ></div> */}

                {/* Orange Ribbon Title */}
                <div className="absolute top-6 left-0 z-20">
                  <div className="bg-indigo-500 rounded-r-full px-8 py-3 shadow-md">
                    <h3 className="text-white font-bold text-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Optional curved SVG at bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg
                    viewBox="0 0 400 100"
                    className="w-full h-16 fill-white"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,100 C150,0 250,0 400,100 L400,100 L0,100 Z" />
                  </svg>
                </div>
              </div>

              <CardContent className="p-6 pt-2 relative">
                {/* Color Underline - appears on hover */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 ${service.underlineColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>

                {/* Headline */}
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {service.headline}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-2 group-hover:shadow-lg transition-all duration-300">
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
