"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    text: "Adoro o atendimento do Lumiére Hair Studio! A equipa é super profissional e o resultado do meu cabelo fica sempre perfeito. Recomendo a todos!",
  },
  {
    id: 2,
    name: "Mariana Costa",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    text: "Excelente experiência! Fiz um tratamento capilar e o resultado superou as minhas expectativas. Ambiente acolhedor e atendimento de primeira.",
  },
  {
    id: 3,
    name: "Joana Martins",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4,
    text: "Fiz as unhas de gel e ficaram lindas! Duraram muito tempo e recebi vários elogios. Já agendei o próximo serviço.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  return (
    <section className="py-16 bg-branco-neve">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-roxo-acinzentado mb-10 text-center">A Opinião das Nossas Clientes</h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-roxo-acinzentado">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-roxo-acinzentado mb-2">{testimonials[currentIndex].name}</h3>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonials[currentIndex].rating
                      ? "text-roxo-acinzentado fill-roxo-acinzentado"
                      : "text-cinza-claro"
                  }`}
                />
              ))}
            </div>

            <p className="text-cinza-claro text-center italic max-w-2xl">"{testimonials[currentIndex].text}"</p>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-roxo-acinzentado" : "bg-cinza-claro opacity-50"
                }`}
                aria-label={`Ver testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
