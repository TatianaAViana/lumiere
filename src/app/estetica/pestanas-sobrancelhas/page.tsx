import Image from "next/image"
import { Check } from "lucide-react"

export default function PestanasSobrancelhasPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Pestanas e Sobrancelhas</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/design-sobrancelha.jpg"
                alt="Design de sobrancelha"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Design de Sobrancelha</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Modelagem personalizada das sobrancelhas de acordo com o formato do seu rosto para realçar o seu
                  olhar.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Análise do formato do rosto
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Medição e marcação
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Depilação com pinça
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Finalização com maquilhagem
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/design-com-henna.jpg"
                alt="Design de sobrancelha com henna"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Design com Henna</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Coloração natural das sobrancelhas com henna, proporcionando cor e definição por mais tempo.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Coloração natural
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Duração até 15 dias
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Preenchimento de falhas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Resultado natural
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/extensao-pestanas.jpg"
                alt="Extensão de pestanas"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Extensão de Pestanas</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Alongamento das pestanas fio a fio para um olhar mais intenso e marcante, com resultado natural.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Aplicação fio a fio
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Diferentes comprimentos
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Curvatura personalizada
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Duração 3-4 semanas
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/services/permanente-de-pestanas-new.jpg"
                alt="Permanente de pestanas"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Permanente de Pestanas</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Curvatura duradoura das pestanas naturais, proporcionando um olhar mais aberto e expressivo.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Curvatura natural
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Duração 6-8 semanas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Olhar mais aberto
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Baixa manutenção
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-branco-neve rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src="/services/microblading-new.jpg"
                alt="Microblading"
                width={700}
                height={500}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roxo-acinzentado mb-3">Microblading</h3>
                <p className="text-cinza-claro text-sm mb-4">
                  Técnica de micropigmentação que cria fios naturais nas sobrancelhas, ideal para quem tem falhas ou
                  quer mais definição.
                </p>
                <ul className="text-xs text-cinza-claro space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Fios hiper-realistas
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Duração 12-18 meses
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Resultado natural
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-roxo-acinzentado mr-2" />
                    Consulta prévia obrigatória
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
