"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Users, Calendar, CalendarCheck } from "lucide-react"

interface CounterProps {
  end: number
  label: string
  prefix: string
  icon: React.ReactNode
  duration?: number
  isVisible: boolean
}

const Counter = ({ end, label, prefix, icon, duration = 2000, isVisible }: CounterProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)

      const startTime = Date.now()
      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)

        // Easing function para animação suave
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeOutCubic * end)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, hasAnimated, end, duration])

  // Reset quando não está visível
  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      setHasAnimated(false)
    }
  }, [isVisible])

  return (
    <div className="flex flex-col items-center">
      <div className="bg-roxo-acinzentado text-branco-neve p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold text-roxo-acinzentado mb-2">
        {prefix}
        {count}
      </h3>
      <p className="text-black text-center">{label}</p>
    </div>
  )
}

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="counter-section" ref={sectionRef} className="py-16 bg-branco-neve">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter
            end={4200}
            label="Clientes satisfeitas"
            prefix="+"
            icon={<Users className="h-8 w-8" />}
            isVisible={isVisible}
          />
          <Counter
            end={400}
            label="Atendimentos/mês"
            prefix="+"
            icon={<Calendar className="h-8 w-8" />}
            isVisible={isVisible}
          />
          <Counter
            end={300}
            label="Agendamentos online/mês"
            prefix="+"
            icon={<CalendarCheck className="h-8 w-8" />}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}
