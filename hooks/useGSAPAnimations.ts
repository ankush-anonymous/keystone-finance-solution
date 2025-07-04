"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPAnimations() {
  useEffect(() => {
    // Small delay to ensure elements are rendered
    const initAnimations = () => {
      // Clear any existing animations and ScrollTriggers
      gsap.killTweensOf("*")
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Hero section animations with proper checks
      const heroElements = {
        badge: document.querySelector(".hero-badge"),
        title: document.querySelector(".hero-title"),
        description: document.querySelector(".hero-description"),
        carousel: document.querySelector(".hero-carousel"),
      }

      // Only run hero animations if elements exist
      if (heroElements.badge && heroElements.title && heroElements.description && heroElements.carousel) {
        // Reset elements to initial state
        gsap.set([heroElements.badge, heroElements.title, heroElements.description, heroElements.carousel], {
          opacity: 0,
          y: 50,
          scale: 0.95,
        })

        const heroTl = gsap.timeline({ delay: 0.1 })

        heroTl
          .to(heroElements.badge, {
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: "power2.out",
          })
          .to(
            heroElements.title,
            {
              duration: 1,
              y: 0,
              opacity: 1,
              ease: "power2.out",
            },
            "-=0.5",
          )
          .to(
            heroElements.description,
            {
              duration: 0.8,
              y: 0,
              opacity: 1,
              ease: "power2.out",
            },
            "-=0.3",
          )
          .to(
            heroElements.carousel,
            {
              duration: 1.2,
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.out",
            },
            "-=0.4",
          )
      }

      // Scroll-triggered animations for sections
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        if (element) {
          gsap.fromTo(
            element,
            {
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })

      // Row-based animations for service cards
      gsap.utils.toArray(".animate-row").forEach((row: any, index) => {
        if (row) {
          const cards = row.querySelectorAll(".service-card")

          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              {
                y: 40,
                opacity: 0,
                scale: 0.95,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: row,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
                delay: index * 0.2,
              },
            )
          }
        }
      })

      // Keep existing stagger-item animations for other elements
      gsap.utils.toArray(".stagger-item").forEach((element: any, index) => {
        if (element) {
          gsap.fromTo(
            element,
            {
              y: 40,
              opacity: 0,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.05,
            },
          )
        }
      })

      // Parallax effect for background elements
      gsap.utils.toArray(".parallax-slow").forEach((element: any) => {
        if (element) {
          gsap.to(element, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
        }
      })

      // Counter animations
      gsap.utils.toArray(".counter").forEach((element: any) => {
        if (element) {
          const endValue = Number.parseInt(element.textContent)
          gsap.fromTo(
            element,
            { textContent: 0 },
            {
              textContent: endValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh()
    }

    // Use requestAnimationFrame to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(initAnimations)
    }, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      gsap.killTweensOf("*")
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
