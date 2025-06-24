"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#counter-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-branco-neve px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Transformamos beleza em autoestima</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Cortes, coloração e cuidados personalizados para realçar o seu melhor.
        </p>
        <Link
          href="/contactos"
          className="inline-block bg-roxo-acinzentado text-branco-neve px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Marque já!
        </Link>
      </div>

      {/* Botão flutuante de scroll */}
      <button
        onClick={scrollToNextSection}
        className="scroll-indicator bg-branco-neve/20 backdrop-blur-sm text-branco-neve p-3 rounded-full hover:bg-branco-neve/30 transition-all duration-300"
        aria-label="Scroll para baixo"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  )
}
