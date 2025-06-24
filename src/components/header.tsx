"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { siteMetadata } from "../config/site-metadata"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-sm shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "bg-roxo-acinzentado/95" : "bg-black/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-branco-neve">
            {siteMetadata.title}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-branco-neve hover:text-lavanda-suave transition-colors"
                onClick={() => toggleDropdown("cabeleireiro")}
              >
                Cabeleireiro <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-branco-neve shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/cabeleireiro/especialidades"
                    className="block px-4 py-2 text-sm text-black hover:bg-lavanda-suave"
                  >
                    Alisamentos e Tratamentos
                  </Link>
                  <Link
                    href="/cabeleireiro/cortes"
                    className="block px-4 py-2 text-sm text-black hover:bg-lavanda-suave"
                  >
                    Cortes e Brushing
                  </Link>
                  <Link
                    href="/cabeleireiro/coloracao-descoloracao"
                    className="block px-4 py-2 text-sm text-black hover:bg-lavanda-suave"
                  >
                    Coloração e Descoloração
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-branco-neve hover:text-lavanda-suave transition-colors">
                Estética <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-branco-neve shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/estetica/maos-pes" className="block px-4 py-2 text-sm text-black hover:bg-lavanda-suave">
                    Mãos e Pés
                  </Link>
                  <Link
                    href="/estetica/pestanas-sobrancelhas"
                    className="block px-4 py-2 text-sm text-black hover:bg-lavanda-suave"
                  >
                    Pestanas e Sobrancelhas
                  </Link>
                  <Link
                    href="/estetica/corpo-rosto"
                    className="block px-4 py-2 text-sm text-black hover:bg-lavanda-suave"
                  >
                    Corpo e Rosto
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/sobre" className="text-branco-neve hover:text-lavanda-suave transition-colors">
              Sobre
            </Link>
            <Link href="/contactos" className="text-branco-neve hover:text-lavanda-suave transition-colors">
              Contactos
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-branco-neve" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-roxo-acinzentado border-t border-branco-neve/20">
            <div className="py-4 space-y-2">
              <button
                className="w-full text-left px-4 py-2 text-branco-neve flex items-center justify-between"
                onClick={() => toggleDropdown("mobile-cabeleireiro")}
              >
                Cabeleireiro <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === "mobile-cabeleireiro" && (
                <div className="pl-8 space-y-1">
                  <Link href="/cabeleireiro/especialidades" className="block py-1 text-sm text-branco-neve opacity-80">
                    Alisamentos e Tratamentos
                  </Link>
                  <Link href="/cabeleireiro/cortes" className="block py-1 text-sm text-branco-neve opacity-80">
                    Cortes e Brushing
                  </Link>
                  <Link
                    href="/cabeleireiro/coloracao-descoloracao"
                    className="block py-1 text-sm text-branco-neve opacity-80"
                  >
                    Coloração e Descoloração
                  </Link>
                </div>
              )}

              <button
                className="w-full text-left px-4 py-2 text-branco-neve flex items-center justify-between"
                onClick={() => toggleDropdown("mobile-estetica")}
              >
                Estética <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "mobile-estetica" && (
                <div className="pl-8 space-y-1">
                  <Link href="/estetica/maos-pes" className="block py-1 text-sm text-branco-neve opacity-80">
                    Mãos e Pés
                  </Link>
                  <Link
                    href="/estetica/pestanas-sobrancelhas"
                    className="block py-1 text-sm text-branco-neve opacity-80"
                  >
                    Pestanas e Sobrancelhas
                  </Link>
                  <Link href="/estetica/corpo-rosto" className="block py-1 text-sm text-branco-neve opacity-80">
                    Corpo e Rosto
                  </Link>
                </div>
              )}

              <Link href="/sobre" className="block px-4 py-2 text-branco-neve">
                Sobre
              </Link>
              <Link href="/contactos" className="block px-4 py-2 text-branco-neve">
                Contactos
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
