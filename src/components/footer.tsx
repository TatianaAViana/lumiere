"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Instagram, Youtube, X } from "lucide-react"
import { siteMetadata } from "../config/site-metadata"

export default function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    // Check if cookies have been accepted in this session
    const cookiesAccepted = sessionStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleAcceptCookies = () => {
    setShowCookieBanner(false)
    // Set session storage instead of localStorage for session-only persistence
    sessionStorage.setItem("cookiesAccepted", "true")
  }

  return (
    <>
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-roxo-acinzentado text-branco-neve p-4 shadow-lg z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              Este sítio utiliza cookies para permitir uma melhor experiência por parte do utilizador. Ao navegar no
              sítio estará a consentir a sua utilização.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAcceptCookies}
                className="bg-branco-neve text-roxo-acinzentado px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors text-sm font-semibold"
              >
                OK
              </button>
              <Link
                href="/politica-privacidade"
                className="border border-branco-neve text-branco-neve px-4 py-2 rounded-full hover:bg-branco-neve hover:text-roxo-acinzentado transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
            </div>
            <button
              onClick={handleAcceptCookies}
              className="absolute top-2 right-2 text-branco-neve hover:text-opacity-70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <footer className="bg-roxo-acinzentado text-branco-neve">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{siteMetadata.title}</h3>
              <p className="text-sm opacity-90 mb-4">
                Transformamos beleza em autoestima. Cortes, coloração e cuidados personalizados para realçar o seu
                melhor.
              </p>
              <p className="text-sm opacity-90">{siteMetadata.address}</p>
            </div>

            <div>
              <div className="space-y-2 text-sm">
                <Link href="/termos-condicoes" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Termos e Condições
                </Link>
                <Link href="/politica-privacidade" className="block opacity-90 hover:opacity-100 transition-opacity">
                  Política de Privacidade
                </Link>
                <a
                  href="https://www.livroreclamacoes.pt/Inicio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-90 hover:opacity-100 transition-opacity"
                >
                  Livro de Reclamações
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <Link
                  href={siteMetadata.socialMedia.facebook}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href={siteMetadata.socialMedia.instagram}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href={siteMetadata.socialMedia.youtube}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-branco-neve/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 {siteMetadata.title}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
