import Image from "next/image"

export default function CorteMasculinoPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Corte de Cabelo Masculino</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Corte de cabelo masculino"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado">Estilo Masculino Moderno</h2>

              <p className="text-cinza-claro leading-relaxed">
                Oferecemos cortes masculinos clássicos e contemporâneos, sempre adaptados ao seu estilo pessoal e
                profissional. Desde cortes executivos até estilos mais descontraídos, temos a solução ideal.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-roxo-acinzentado">Cortes Disponíveis:</h3>
                <ul className="space-y-2 text-cinza-claro">
                  <li>• Corte Clássico</li>
                  <li>• Fade (Degradê)</li>
                  <li>• Undercut</li>
                  <li>• Pompadour</li>
                  <li>• Corte Social</li>
                </ul>
              </div>

              <div className="bg-rosa-palido p-6 rounded-lg">
                <h4 className="font-semibold text-roxo-acinzentado mb-2">Serviços Incluídos:</h4>
                <p className="text-cinza-claro text-sm">
                  Lavagem, corte, finalização e aconselhamento sobre produtos para manter o seu estilo em casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
