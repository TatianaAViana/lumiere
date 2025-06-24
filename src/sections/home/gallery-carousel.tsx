"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    image: "/images/coloracao.jpg",
    title: "Coloração",
  },
  {
    id: 2,
    image: "/images/tratamentos-capilares.jpg",
    title: "Tratamentos Capilares",
  },
  {
    id: 3,
    image: "/images/corte-feminino.jpg",
    title: "Corte Feminino",
  },
  {
    id: 4,
    image: "/images/manicure.jpg",
    title: "Manicure",
  },
  {
    id: 5,
    image: "/images/design-pestanas.jpg",
    title: "Design de Pestanas",
  },
]

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const pauseAutoPlay = () => setIsAutoPlaying(false)
  const resumeAutoPlay = () => setIsAutoPlaying(true)

  return (
    <section className="py-16 bg-lavanda-suave">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-roxo-acinzentado inline-block">Os Nossos Serviços</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" onMouseEnter={pauseAutoPlay} onMouseLeave={resumeAutoPlay}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="relative h-96 md:h-[32rem]">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    {/* Overlay com nome do serviço */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <h3 className="text-branco-neve text-2xl md:text-3xl font-bold text-center drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-branco-neve p-2 rounded-full hover:bg-roxo-acinzentado hover:text-branco-neve transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-branco-neve p-2 rounded-full hover:bg-roxo-acinzentado hover:text-branco-neve transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-roxo-acinzentado" : "bg-cinza-claro opacity-50"}`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
