import Image from "next/image"
import { Check } from "lucide-react"

export default function EspecialidadesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Alisamentos e Tratamentos</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Alisamentos */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/alisamentos.jpg"
                alt="Alisamentos"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Alisamentos</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Os nossos tratamentos de alisamento são realizados com produtos de alta qualidade, proporcionando
                  resultados duradouros e cabelos sedosos.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Alisamento Japonês
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Escova Progressiva
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Botox Capilar
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Alisamento com Queratina
                  </li>
                </ul>
              </div>
            </div>

            {/* Tratamentos Capilares */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/tratamentos-capilares-new.jpg"
                alt="Tratamentos Capilares"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Tratamentos Capilares</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Oferecemos uma gama completa de tratamentos capilares para restaurar, nutrir e fortalecer os seus
                  cabelos.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Hidratação Profunda
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Reconstrução Capilar
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Nutrição Intensiva
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tratamento Anti-Queda
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cauterização Capilar
                  </li>
                </ul>
              </div>
            </div>

            {/* Tratamentos ao Couro Cabeludo */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/tratamento-ao-couro-cabeludo-new.jpg"
                alt="Tratamentos ao Couro Cabeludo"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Tratamentos ao Couro Cabeludo</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Um couro cabeludo saudável é fundamental para cabelos bonitos e fortes. Os nossos tratamentos
                  especializados cuidam da raiz.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Limpeza Profunda
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Massagem Relaxante
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Tratamento Anti-Caspa
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Controlo de Oleosidade
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Estimulação do Crescimento
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-branco-neve p-8 mt-12">
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
                    Teste de mecha quando necessário
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Escolha do tratamento ideal
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-roxo-acinzentado mb-3">Cuidados Pós-Tratamento:</h4>
                <ul className="text-cinza-claro space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Produtos específicos recomendados
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
                    Agendamento de sessões de retoque
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
