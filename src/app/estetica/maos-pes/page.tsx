import Image from "next/image"
import { Check } from "lucide-react"

export default function MaosPesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Mãos e Pés</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/manicure-new.jpg"
                alt="Manicure profissional"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Manicure</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Cuidado completo das suas unhas e cutículas com técnicas profissionais e produtos de qualidade
                  superior.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Limpeza e higienização
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Corte e formato das unhas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tratamento de cutículas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Hidratação das mãos
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/unhas-de-gel.jpg"
                alt="Unhas de gel"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Unhas de Gel</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Alongamento e fortalecimento das unhas com gel de alta qualidade para um resultado natural e
                  duradouro.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Alongamento natural
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Fortalecimento das unhas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Acabamento profissional
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Durabilidade até 3 semanas
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/verniz-gel-gelinho.jpg"
                alt="Verniz gel"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Verniz Gel | Gelinho</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Verniz de longa duração com acabamento brilhante e cores vibrantes que se mantêm perfeitas por
                  semanas.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Secagem instantânea
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Brilho duradouro
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Resistente a riscos
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Variedade de cores
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/verniz-gel-fedua.jpg"
                alt="Verniz gel Fedua"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Verniz Gel | Fedua</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Verniz de gel premium da marca Fedua, conhecida pela sua qualidade excepcional e cores exclusivas.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Marca premium italiana
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cores exclusivas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Fórmula inovadora
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Acabamento profissional
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src="/services/pedicure-new.jpg"
                alt="Pedicure profissional"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Pedicure</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Tratamento completo dos pés com cuidados especializados para manter a saúde e beleza dos seus pés.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Banho relaxante dos pés
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Remoção de calosidades
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Corte e tratamento das unhas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Massagem hidratante
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
