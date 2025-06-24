"use client"

import { useEffect } from "react"

export default function PoliticaPrivacidadePage() {
  useEffect(() => {
    // Scroll para o topo da página quando o componente carrega
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-branco-neve p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-roxo-acinzentado mb-6">Política de Privacidade</h1>

          <div className="prose prose-slate max-w-none">
            <p className="mb-4">
              A sua privacidade é importante para nós. Esta Política de Privacidade explica como o Lumiére Hair Studio
              recolhe, utiliza e protege as suas informações pessoais quando visita o nosso sítio web ou utiliza os
              nossos serviços.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">INFORMAÇÕES QUE RECOLHEMOS</h2>
            <p className="mb-4">Podemos recolher as seguintes informações:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome e informações de contacto, incluindo endereço de correio electrónico e número de telefone</li>
              <li>Informações demográficas como código postal, preferências e interesses</li>
              <li>Outras informações relevantes para inquéritos e/ou ofertas de clientes</li>
            </ul>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">COMO UTILIZAMOS AS INFORMAÇÕES</h2>
            <p className="mb-4">Utilizamos estas informações para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer os nossos serviços de forma eficaz</li>
              <li>Melhorar os nossos produtos e serviços</li>
              <li>
                Enviar correios electrónicos promocionais sobre novos produtos, ofertas especiais ou outras informações
              </li>
              <li>Contactá-lo para pesquisas de mercado</li>
              <li>Personalizar o sítio web de acordo com os seus interesses</li>
            </ul>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">COOKIES</h2>
            <p className="mb-4">
              Um cookie é um pequeno ficheiro que pede autorização para ser colocado no disco rígido do seu computador.
              Uma vez que aceite, o ficheiro é adicionado e o cookie ajuda a analisar o tráfego web ou permite-lhe saber
              quando visita um sítio específico.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">SEGURANÇA</h2>
            <p className="mb-4">
              Estamos empenhados em garantir que as suas informações estejam seguras. Para prevenir o acesso não
              autorizado ou divulgação, implementámos procedimentos físicos, electrónicos e administrativos adequados
              para salvaguardar e proteger as informações que recolhemos online.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">LIGAÇÕES PARA OUTROS SÍTIOS WEB</h2>
            <p className="mb-4">
              O nosso sítio web pode conter ligações para outros sítios web de interesse. No entanto, uma vez que
              utilize estas ligações para sair do nosso sítio, deve notar que não temos qualquer controlo sobre esse
              outro sítio web.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">CONTACTO</h2>
            <p className="mb-4">
              Se tiver alguma dúvida sobre esta Política de Privacidade, pode contactar-nos através do correio
              electrónico:{" "}
              <a href="mailto:contacto@lumierehairstudio.pt" className="text-roxo-acinzentado hover:underline">
                contacto@lumierehairstudio.pt
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
