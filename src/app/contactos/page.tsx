"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteMetadata } from "../../config/site-metadata"

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    motivo: "Dúvidas sobre serviços e preços",
    mensagem: "",
    privacidade: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "351214744028"
    const message = "Olá! Gostaria de marcar um serviço no Lumiére Hair Studio."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailClick = () => {
    const emailAddress = "vianahub@vianahub.pt"
    const subject = "Contacto - Lumiére Hair Studio"
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`
    window.open(mailtoUrl, "_blank")
  }

  return (
    <div className="pt-20 min-h-screen bg-lavanda-suave">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Contactos</h1>

          {/* Formulário de Contacto Centralizado */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-6 text-center">Deixe-nos a sua mensagem</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-black mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite o seu nome"
                  className="w-full px-4 py-3 bg-branco-neve border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo-acinzentado focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Correio electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite o seu correio electrónico"
                  className="w-full px-4 py-3 bg-branco-neve border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo-acinzentado focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="motivo" className="block text-sm font-medium text-black mb-2">
                  Motivo do contacto
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-branco-neve border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo-acinzentado focus:border-transparent"
                >
                  <option>Dúvidas sobre serviços e preços</option>
                  <option>Informações gerais</option>
                  <option>Sugestões</option>
                  <option>Reclamações</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-black mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Deixe a sua mensagem"
                  rows={5}
                  className="w-full px-4 py-3 bg-branco-neve border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo-acinzentado focus:border-transparent"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacidade"
                  name="privacidade"
                  checked={formData.privacidade}
                  onChange={handleChange}
                  className="mt-1 mr-3 rounded"
                  required
                />
                <label htmlFor="privacidade" className="text-sm text-black">
                  Declaro que em relação à nossa{" "}
                  <a href="/politica-privacidade" className="text-roxo-acinzentado hover:underline">
                    Política de privacidade
                  </a>{" "}
                  li e aceito.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-roxo-acinzentado text-branco-neve px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors text-lg font-semibold"
              >
                Enviar
              </button>
            </form>

            {/* Informações de Contacto Reorganizadas */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Coluna Esquerda: Morada e Horário */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-roxo-acinzentado text-branco-neve p-4 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-black font-medium">{siteMetadata.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-roxo-acinzentado text-branco-neve p-4 rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <div className="text-black text-sm">
                        <p className="font-medium">Segunda a Sexta: 9h00 - 19h00</p>
                        <p className="font-medium">Sábado: 9h00 - 17h00</p>
                        <p className="font-medium">Domingo: Encerrado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Telefone e Email */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-roxo-acinzentado text-branco-neve p-4 rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Contactar via WhatsApp"
                    >
                      <Phone className="h-6 w-6" />
                    </button>
                    <div className="ml-4">
                      <p className="text-black font-medium text-sm">Clique para contactar via WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={handleEmailClick}
                      className="bg-roxo-acinzentado text-branco-neve p-4 rounded-full hover:bg-opacity-90 transition-colors"
                      aria-label="Enviar email"
                    >
                      <Mail className="h-6 w-6" />
                    </button>
                    <div className="ml-4">
                      <p className="text-black font-medium text-sm">Clique para enviar email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
