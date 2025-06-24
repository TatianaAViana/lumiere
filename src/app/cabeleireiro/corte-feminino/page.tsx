import Image from "next/image"

export default function CorteFemininoPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Corte de Cabelo Feminino</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Corte de cabelo feminino"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado">Cortes Personalizados</h2>

              <p className="text-cinza-claro leading-relaxed">
                Criamos cortes únicos que realçam a sua personalidade e estilo de vida. Os nossos profissionais analisam
                o formato do rosto, tipo de cabelo e preferências pessoais para criar o corte perfeito para si.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-roxo-acinzentado">Estilos Populares:</h3>
                <ul className="space-y-2 text-cinza-claro">
                  <li>• Bob Clássico e Moderno</li>
                  <li>• Cortes em Camadas</li>
                  <li>• Franja Personalizada</li>
                  <li>• Cortes Assimétricos</li>
                  <li>• Long Bob (Lob)</li>
                </ul>
              </div>

              <div className="bg-rosa-palido p-6 rounded-lg">
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Consultoria Incluída:</h4>
                <p className="text-cinza-claro text-sm">
                  Análise do formato do rosto, aconselhamento sobre manutenção e dicas de styling para manter o seu
                  corte sempre perfeito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
