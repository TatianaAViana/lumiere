import Image from "next/image"

export default function TratamentosCouroPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Tratamentos ao Couro Cabeludo</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tratamento do couro cabeludo"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado">Saúde do Couro Cabeludo</h2>

              <p className="text-cinza-claro leading-relaxed">
                Um couro cabeludo saudável é fundamental para cabelos bonitos e fortes. Os nossos tratamentos
                especializados cuidam da raiz, promovendo o crescimento saudável e combatendo problemas como caspa,
                oleosidade excessiva e irritações.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-roxo-acinzentado">Tratamentos Disponíveis:</h3>
                <ul className="space-y-2 text-cinza-claro">
                  <li>• Limpeza Profunda</li>
                  <li>• Massagem Relaxante</li>
                  <li>• Tratamento Anti-Caspa</li>
                  <li>• Controlo de Oleosidade</li>
                  <li>• Estimulação do Crescimento</li>
                </ul>
              </div>

              <div className="bg-rosa-palido p-6 rounded-lg">
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Benefícios:</h4>
                <p className="text-cinza-claro text-sm">
                  Couro cabeludo equilibrado, redução da caspa e coceira, melhoria da circulação sanguínea e estímulo ao
                  crescimento capilar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
