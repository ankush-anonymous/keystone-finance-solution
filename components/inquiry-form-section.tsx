"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, AlertCircle, X } from "lucide-react"
import { useState } from "react"
import { gsap } from "gsap"

export default function InquiryFormSection() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errors, setErrors] = useState([])
  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors([])

    // Submit button animation
    gsap.to(".home-submit-button", {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".home-submit-button", {
          scale: 1,
          duration: 0.1,
          ease: "power2.out",
        })
      },
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")

        // Success animation
        gsap.fromTo(
          ".home-success-message",
          {
            scale: 0,
            opacity: 0,
            y: 50,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
        )

        // Confetti animation
        gsap.to(".home-success-icon", {
          rotation: 360,
          scale: 1.2,
          duration: 0.8,
          ease: "back.out(1.7)",
          repeat: 1,
          yoyo: true,
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setErrors(result.errors || [result.message])

        // Error animation
        gsap.fromTo(
          ".home-error-message",
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        )
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrors(["Network error. Please check your connection and try again."])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFieldFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleFieldBlur = () => {
    setFocusedField("")
  }

  const closeMessage = () => {
    gsap.to(".home-status-message", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setSubmitStatus(null)
        setErrors([])
      },
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-600">
              Ready to take the next step? Fill out our inquiry form and our experts will contact you within 24 hours.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">Inquiry Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`home-status-message mb-6 p-4 rounded-lg ${
                    submitStatus === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <div className="home-success-message flex items-center">
                      <CheckCircle className="home-success-icon w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-semibold text-green-800">Inquiry Sent Successfully! 🎉</h4>
                        <p className="text-green-700 text-sm mt-1">
                          Thank you for your interest. We'll contact you within 24 hours with personalized solutions.
                        </p>
                      </div>
                      <button onClick={closeMessage} className="ml-auto text-green-600 hover:text-green-800">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="home-error-message">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-800">Please fix the following errors:</h4>
                          <ul className="text-red-700 text-sm mt-1 space-y-1">
                            {errors.map((error, index) => (
                              <li key={index}>• {error}</li>
                            ))}
                          </ul>
                        </div>
                        <button onClick={closeMessage} className="text-red-600 hover:text-red-800">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="home-firstName" className="text-gray-700 font-semibold">
                      First Name *
                    </Label>
                    <Input
                      id="home-firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className={`transition-all duration-300 ${
                        focusedField === "firstName" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"
                      }`}
                      onFocus={() => handleFieldFocus("firstName")}
                      onBlur={handleFieldBlur}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="home-lastName" className="text-gray-700 font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="home-lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className={`transition-all duration-300 ${
                        focusedField === "lastName" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"
                      }`}
                      onFocus={() => handleFieldFocus("lastName")}
                      onBlur={handleFieldBlur}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="home-email" className="text-gray-700 font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="home-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className={`transition-all duration-300 ${
                        focusedField === "email" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"
                      }`}
                      onFocus={() => handleFieldFocus("email")}
                      onBlur={handleFieldBlur}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="home-phone" className="text-gray-700 font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="home-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className={`transition-all duration-300 ${
                        focusedField === "phone" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"
                      }`}
                      onFocus={() => handleFieldFocus("phone")}
                      onBlur={handleFieldBlur}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="home-service" className="text-gray-700 font-semibold">
                    Service Interest
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financing">Financing</SelectItem>
                      <SelectItem value="refinancing">Refinancing</SelectItem>
                      <SelectItem value="leasing">Leasing</SelectItem>
                      <SelectItem value="mortgage">Mortgage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="home-message" className="text-gray-700 font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="home-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your financial needs..."
                    rows={4}
                    className={`resize-none transition-all duration-300 ${
                      focusedField === "message" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"
                    }`}
                    onFocus={() => handleFieldFocus("message")}
                    onBlur={handleFieldBlur}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="home-submit-button w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Inquiry...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
