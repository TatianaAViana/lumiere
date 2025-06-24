import Image from "next/image"
import { Check } from "lucide-react"

export default function CorpoRostoPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Corpo e Rosto</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/tratamentos-de-corpo-new.jpg"
                alt="Tratamentos de corpo"
                width={1000}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Tratamentos de Corpo</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Cuidados especializados para o corpo com tratamentos que promovem o bem-estar e a beleza da sua pele.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1 mb-4">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Esfoliação corporal
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Hidratação profunda
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tratamentos anti-celulite
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Massagens relaxantes
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tratamentos firmadores
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/tratamentos-de-rosto-new.jpg"
                alt="Tratamentos de rosto"
                width={1000}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Tratamentos de Rosto</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Cuidados faciais personalizados para cada tipo de pele, promovendo a saúde e luminosidade do seu
                  rosto.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1 mb-4">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Limpeza de pele profunda
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Hidratação facial
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tratamentos anti-idade
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Peeling químico
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Máscaras nutritivas
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/depilacao-com-cera-quente.jpg"
                alt="Depilação com cera quente"
                width={1000}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Depilação com Cera Quente</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Depilação eficaz e duradoura com cera quente de alta qualidade, adequada para todas as áreas do corpo.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1 mb-4">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Remoção completa dos pelos
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Resultado duradouro
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cera hipoalergénica
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Todas as áreas do corpo
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cuidados pós-depilação
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/depilacao-a-laser-diodo.jpg"
                alt="Depilação a laser diodo"
                width={1000}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Depilação a Laser Diodo</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Tecnologia avançada de laser diodo para depilação definitiva, segura e eficaz para todos os tipos de
                  pele.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1 mb-4">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Depilação definitiva
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tecnologia laser diodo
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Seguro para todos os tipos de pele
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Resultados progressivos
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Consulta prévia gratuita
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-rosa-palido p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-4 text-center">Processo de Tratamento</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-roxo-acinzentado text-branco-neve w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Consulta</h4>
                <p className="text-cinza-claro text-sm">
                  Avaliação personalizada das suas necessidades e tipo de pele.
                </p>
              </div>
              <div>
                <div className="bg-roxo-acinzentado text-branco-neve w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Tratamento</h4>
                <p className="text-cinza-claro text-sm">
                  Aplicação do tratamento escolhido com técnicas profissionais e produtos de qualidade.
                </p>
              </div>
              <div>
                <div className="bg-roxo-acinzentado text-branco-neve w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Acompanhamento</h4>
                <p className="text-cinza-claro text-sm">
                  Orientações pós-tratamento e agendamento de sessões de manutenção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
