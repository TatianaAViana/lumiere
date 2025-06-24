"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const brands = [
  {
    id: 1,
    name: "Alfaparf Milano",
    logo: "/logos/alfaparf-logo.avif",
  },
  {
    id: 2,
    name: "L'Oréal",
    logo: "/logos/loreal-logo-new.png",
  },
  {
    id: 3,
    name: "Wella",
    logo: "/logos/wella-logo-new.png",
  },
  {
    id: 4,
    name: "Revlon",
    logo: "/logos/revlon-logo-new.png",
  },
]

export default function BrandsCarousel() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)

  const animate = () => {
    if (containerRef.current) {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.5
        const containerWidth = containerRef.current?.scrollWidth || 0
        const viewportWidth = containerRef.current?.clientWidth || 0

        // Reset position when all logos have scrolled through
        if (Math.abs(newPosition) > containerWidth - viewportWidth) {
          return 0
        }
        return newPosition
      })
    }
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <section className="py-24 bg-lavanda-suave">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-roxo-acinzentado mb-16 text-center">Marcas em que Confiamos</h2>

        <div className="overflow-hidden" ref={containerRef}>
          <div className="flex items-center space-x-12" style={{ transform: `translateX(${position}px)` }}>
            {brands.map((brand) => (
              <div key={brand.id} className="flex-shrink-0">
                <div className="relative h-24 w-40 filter grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
                </div>
              </div>
            ))}

            {/* Duplicate brands for infinite scroll effect */}
            {brands.map((brand) => (
              <div key={`duplicate-${brand.id}`} className="flex-shrink-0">
                <div className="relative h-24 w-40 filter grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
