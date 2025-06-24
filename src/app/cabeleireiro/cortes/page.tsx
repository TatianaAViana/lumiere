import Image from "next/image"
import { Check } from "lucide-react"

export default function CortesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Cortes e Brushing</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Corte Feminino */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/corte-feminino.jpg"
                alt="Corte Feminino"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Corte Feminino</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Criamos cortes únicos que realçam a sua personalidade e estilo de vida. Os nossos profissionais
                  analisam o formato do rosto e tipo de cabelo.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Bob Clássico e Moderno
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cortes em Camadas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Franja Personalizada
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Cortes Assimétricos
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Long Bob (Lob)
                  </li>
                </ul>
              </div>
            </div>

            {/* Corte Masculino */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/corte-masculino.jpg"
                alt="Corte Masculino"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Corte Masculino</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Oferecemos cortes masculinos clássicos e contemporâneos, sempre adaptados ao seu estilo pessoal e
                  profissional.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Corte Clássico
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Fade (Degradê)
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Undercut
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Pompadour
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Corte Social
                  </li>
                </ul>
              </div>
            </div>

            {/* Brushing */}
            <div className="bg-branco-neve overflow-hidden">
              <Image
                src="/services/brushing.jpg"
                alt="Brushing"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Brushing</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  O brushing é a arte de criar penteados elegantes e duradouros. Utilizamos técnicas profissionais e
                  produtos de qualidade.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Liso Natural
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Ondas Suaves
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Volume na Raiz
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Brushing com Caracóis
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Penteados para Eventos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-branco-neve p-8 mt-12">
            <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-4 text-center">Serviços Incluídos</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-roxo-acinzentado text-branco-neve w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Consulta</h4>
                <p className="text-cinza-claro text-sm">
                  Análise do formato do rosto e aconselhamento personalizado sobre o melhor corte.
                </p>
              </div>
              <div>
                <div className="bg-roxo-acinzentado text-branco-neve w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Execução</h4>
                <p className="text-cinza-claro text-sm">
                  Corte profissional com técnicas modernas e produtos de qualidade superior.
                </p>
              </div>
              <div>
                <div className="bg-roxo-acinzentado text-branco-neve w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Finalização</h4>
                <p className="text-cinza-claro text-sm">
                  Styling final e dicas de manutenção para manter o seu corte sempre perfeito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
