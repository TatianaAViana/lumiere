import Image from "next/image"
import { Users, Award, Sparkles, Heart, Star, Trophy } from "lucide-react"

export default function SobrePage() {
  const timeline = [
    {
      year: "2018",
      event: "Fundação do Lumiére Hair Studio",
      icon: <Heart className="h-6 w-6" />,
      side: "left",
    },
    {
      year: "2019",
      event: "Expansão dos serviços de estética",
      icon: <Sparkles className="h-6 w-6" />,
      side: "right",
    },
    {
      year: "2020",
      event: "Implementação de protocolos de segurança",
      icon: <Award className="h-6 w-6" />,
      side: "left",
    },
    {
      year: "2021",
      event: "Introdução da depilação a laser diodo",
      icon: <Star className="h-6 w-6" />,
      side: "right",
    },
    {
      year: "2022",
      event: "Certificação em microblading",
      icon: <Trophy className="h-6 w-6" />,
      side: "left",
    },
    {
      year: "2023",
      event: "Renovação completa das instalações",
      icon: <Users className="h-6 w-6" />,
      side: "right",
    },
    {
      year: "2024",
      event: "Lançamento de novos tratamentos capilares",
      icon: <Sparkles className="h-6 w-6" />,
      side: "left",
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Sobre Nós</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <Image
                src="/images/sobre-nos-new.jpg"
                alt="Interior do Lumiére Hair Studio"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-4">Missão</h2>
                <p className="text-cinza-claro leading-relaxed">
                  A nossa missão é transformar beleza em autoestima, oferecendo serviços de excelência em cabeleireiro e
                  estética. Acreditamos que cada cliente é único e merece um atendimento personalizado que realce a sua
                  beleza natural.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-4">Visão</h2>
                <p className="text-cinza-claro leading-relaxed">
                  Ser reconhecido como o salão de referência em Torres Vedras, destacando-nos pela qualidade dos nossos
                  serviços, inovação constante e pela satisfação dos nossos clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Como Tudo Começou - Faixa branca de ponta a ponta */}
          <div className="mb-16 -mx-4 md:-mx-8 lg:-mx-[100vw] bg-branco-neve py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-6 text-center">Como Tudo Começou</h2>
              <div className="space-y-4 text-cinza-claro leading-relaxed">
                <p>
                  O Lumiére Hair Studio nasceu em 2018 do sonho de criar um espaço onde a beleza e o bem-estar se
                  encontrassem. Localizado no coração de Torres Vedras, começámos como um pequeno salão de cabeleireiro
                  com uma visão clara: oferecer serviços de qualidade superior num ambiente acolhedor e profissional.
                </p>
                <p>
                  Ao longo dos anos, expandimos os nossos serviços para incluir tratamentos estéticos avançados, sempre
                  mantendo o nosso compromisso com a excelência e a satisfação dos nossos clientes. Hoje, somos uma
                  referência na região, com uma equipa de profissionais altamente qualificados e equipamentos de última
                  geração.
                </p>
              </div>
            </div>
          </div>

          {/* A Nossa Jornada - Timeline vertical simplificada */}
          <div className="mb-24">
            <h2 className="text-2xl font-semibold text-roxo-acinzentado mb-16 text-center">A Nossa Jornada</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Linha vertical central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-roxo-acinzentado"></div>

              {/* Timeline items */}
              {timeline.map((item, index) => (
                <div key={index} className="relative h-40 flex items-start">
                  {/* Círculo do ano */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-20 h-20 bg-roxo-acinzentado text-branco-neve rounded-full flex items-center justify-center text-sm font-bold z-20 shadow-lg border-4 border-branco-neve">
                    <span>{item.year}</span>
                  </div>

                  {/* Ícone posicionado abaixo do ano */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-24 w-12 h-12 bg-roxo-acinzentado border-2 border-branco-neve text-branco-neve rounded-full flex items-center justify-center z-20 shadow-md">
                    {item.icon}
                  </div>

                  {/* Balão de fala */}
                  <div
                    className={`absolute top-24 z-10 ${item.side === "right" ? "left-1/2 ml-16" : "right-1/2 mr-16"}`}
                  >
                    <div className="relative">
                      <div className="bg-roxo-acinzentado text-branco-neve p-4 rounded-2xl shadow-lg max-w-80">
                        <p className="text-sm leading-relaxed">{item.event}</p>
                      </div>

                      {/* Seta do balão */}
                      <div
                        className={`absolute top-4 w-0 h-0 ${
                          item.side === "right"
                            ? "left-0 transform -translate-x-full border-t-8 border-b-8 border-r-8 border-transparent border-r-roxo-acinzentado"
                            : "right-0 transform translate-x-full border-t-8 border-b-8 border-l-8 border-transparent border-l-roxo-acinzentado"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
