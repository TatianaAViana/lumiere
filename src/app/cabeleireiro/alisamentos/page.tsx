import Image from "next/image"

export default function AlisamentosPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Alisamentos</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tratamento de alisamento capilar"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado">Alisamento Profissional</h2>

              <p className="text-cinza-claro leading-relaxed">
                Os nossos tratamentos de alisamento são realizados com produtos de alta qualidade, proporcionando
                resultados duradouros e cabelos sedosos. Utilizamos técnicas modernas que respeitam a estrutura capilar,
                garantindo um alisamento natural e saudável.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-roxo-acinzentado">Tipos de Alisamento:</h3>
                <ul className="space-y-2 text-cinza-claro">
                  <li>• Alisamento Japonês</li>
                  <li>• Escova Progressiva</li>
                  <li>• Botox Capilar</li>
                  <li>• Alisamento com Queratina</li>
                </ul>
              </div>

              <div className="bg-rosa-palido p-6 rounded-lg">
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Benefícios:</h4>
                <p className="text-cinza-claro text-sm">
                  Cabelos mais lisos, macios e brilhantes. Redução do volume e do frizz. Facilita o penteado diário e
                  proporciona um visual elegante e profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
