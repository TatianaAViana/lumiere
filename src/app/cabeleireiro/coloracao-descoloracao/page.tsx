import Image from "next/image"
import { Check } from "lucide-react"

export default function ColoracaoDescoloracaoPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Coloração e Descoloração</h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Coloração Capilar */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/coloracao-capilar.jpg"
                alt="Coloração Capilar"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Coloração Capilar</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Transforme o seu visual com cores vibrantes e duradouros. Utilizamos produtos de alta qualidade que
                  respeitam a estrutura capilar.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Coloração Permanente
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Coloração Temporária
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Retoque de Raiz
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cores Fantasia
                  </li>
                </ul>
              </div>
            </div>

            {/* Madeixas */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/madeixas-new.jpg"
                alt="Madeixas"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Madeixas</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Ilumine o seu cabelo com madeixas estrategicamente colocadas para criar profundidade e movimento
                  natural.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Madeixas Clássicas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Babylights
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Chunky Highlights
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Madeixas Coloridas
                  </li>
                </ul>
              </div>
            </div>

            {/* Ombre Hair */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/ombre-hair-new.jpg"
                alt="Ombre hair"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Ombre Hair</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Técnica de coloração em degradê que cria uma transição suave entre duas ou mais cores, do escuro para
                  o claro.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Ombre Clássico
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Sombré
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Balayage
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Ombre Colorido
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-branco-neve p-8">
            <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-4 text-center">Processo Profissional</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-roxo-acinzentado mb-3">Antes do Tratamento:</h4>
                <ul className="text-cinza-claro space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Consulta personalizada
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Análise do tipo de cabelo
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Teste de mecha
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Escolha da cor ideal
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-roxo-acinzentado mb-3">Cuidados Pós-Coloração:</h4>
                <ul className="text-cinza-claro space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Produtos específicos para cabelo colorido
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cronograma de manutenção
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Dicas de cuidados em casa
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Agendamento de retoques
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
