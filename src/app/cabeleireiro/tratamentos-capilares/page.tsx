import Image from "next/image"

export default function TratamentosCapilaresPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Tratamentos Capilares</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tratamentos capilares profissionais"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado">Cuidados Especializados</h2>

              <p className="text-cinza-claro leading-relaxed">
                Oferecemos uma gama completa de tratamentos capilares para restaurar, nutrir e fortalecer os seus
                cabelos. Cada tratamento é personalizado de acordo com as necessidades específicas do seu tipo de
                cabelo.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-roxo-acinzentado">Nossos Tratamentos:</h3>
                <ul className="space-y-2 text-cinza-claro">
                  <li>• Hidratação Profunda</li>
                  <li>• Reconstrução Capilar</li>
                  <li>• Nutrição Intensiva</li>
                  <li>• Tratamento Anti-Queda</li>
                  <li>• Cauterização Capilar</li>
                </ul>
              </div>

              <div className="bg-rosa-palido p-6 rounded-lg">
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Resultados:</h4>
                <p className="text-cinza-claro text-sm">
                  Cabelos mais fortes, hidratados e com brilho natural. Redução da quebra e melhoria da textura capilar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
