import Image from "next/image"

export default function ColoracaoPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Coloração e Descoloração</h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Coloração capilar"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Coloração Capilar</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Transforme o seu visual com cores vibrantes e duradouros. Utilizamos produtos de alta qualidade que
                  respeitam a estrutura capilar.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li>• Coloração Permanente</li>
                  <li>• Coloração Temporária</li>
                  <li>• Retoque de Raiz</li>
                  <li>• Cores Fantasia</li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Madeixas"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Madeixas</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Ilumine o seu cabelo com madeixas estrategicamente colocadas para criar profundidade e movimento
                  natural.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li>• Madeixas Clássicas</li>
                  <li>• Babylights</li>
                  <li>• Chunky Highlights</li>
                  <li>• Madeixas Coloridas</li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Ombre hair"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Ombre Hair</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Técnica de coloração em degradê que cria uma transição suave entre duas ou mais cores, do escuro para
                  o claro.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li>• Ombre Clássico</li>
                  <li>• Sombré</li>
                  <li>• Balayage</li>
                  <li>• Ombre Colorido</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-rosa-palido p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-4 text-center">Processo Profissional</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-roxo-acinzentado mb-3">Antes do Tratamento:</h4>
                <ul className="text-cinza-claro space-y-2 text-sm">
                  <li>• Consulta personalizada</li>
                  <li>• Análise do tipo de cabelo</li>
                  <li>• Teste de mecha</li>
                  <li>• Escolha da cor ideal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-roxo-acinzentado mb-3">Cuidados Pós-Coloração:</h4>
                <ul className="text-cinza-claro space-y-2 text-sm">
                  <li>• Produtos específicos para cabelo colorido</li>
                  <li>• Cronograma de manutenção</li>
                  <li>• Dicas de cuidados em casa</li>
                  <li>• Agendamento de retoques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
