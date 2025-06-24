import Image from "next/image"

export default function BrushingPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Brushing</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Brushing profissional"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado">Penteados Perfeitos</h2>

              <p className="text-cinza-claro leading-relaxed">
                O brushing é a arte de criar penteados elegantes e duradouros. Utilizamos técnicas profissionais e
                produtos de qualidade para garantir um resultado impecável que se mantém durante todo o dia.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-roxo-acinzentado">Estilos de Brushing:</h3>
                <ul className="space-y-2 text-cinza-claro">
                  <li>• Liso Natural</li>
                  <li>• Ondas Suaves</li>
                  <li>• Volume na Raiz</li>
                  <li>• Brushing com Caracóis</li>
                  <li>• Penteados para Eventos</li>
                </ul>
              </div>

              <div className="bg-rosa-palido p-6 rounded-lg">
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Ideal Para:</h4>
                <p className="text-cinza-claro text-sm">
                  Eventos especiais, reuniões importantes, ou simplesmente para se sentir mais confiante no dia a dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
