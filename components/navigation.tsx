"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg border-gray-200/50" : "bg-white border-gray-200",
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">Keystone Financial</span>
                <span className="font-semibold text-sm text-primary leading-tight">Group</span>
              </div>
            </Link>

            {/* Get Started Button - Desktop */}
            <div className="hidden md:block">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity px-6 py-2.5 font-semibold"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-gray-900 leading-tight">Keystone Financial</span>
                      <span className="font-semibold text-sm text-primary leading-tight">Group</span>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary py-2 px-3 rounded-lg",
                          pathname === item.href
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-gray-700 hover:bg-gray-50",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-6 border-t border-gray-200">
                    <Button
                      size="lg"
                      className="w-full gradient-primary text-white hover:opacity-90 transition-opacity font-semibold"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          isScrolled ? "bg-gray-50/90 backdrop-blur-md border-gray-200/50" : "bg-gray-50 border-gray-200",
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="hidden md:flex items-center justify-center h-14">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/60",
                    pathname === item.href ? "text-primary bg-white shadow-sm" : "text-gray-700 hover:text-primary",
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
