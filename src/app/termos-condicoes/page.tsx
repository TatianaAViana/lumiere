"use client"

import { useEffect } from "react"

export default function TermosCondicoesPage() {
  useEffect(() => {
    // Scroll para o topo da página quando o componente carrega
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-branco-neve p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-roxo-acinzentado mb-6">Termos e Condições</h1>

          <div className="prose prose-slate max-w-none">
            <p>
              O presente documento regula as Condições de Utilização do sítio web lumierehairstudio.pt. A utilização
              deste sítio web está ainda sujeita à aceitação da Política de Cookies e Política de Privacidade e
              utilização de dados pessoais, devendo o utilizador reler os respectivos termos em cada nova utilização, a
              fim de verificar se concorda com a mesma. Caso não concorde com todas as condições e políticas definidas,
              não deve utilizar este sítio web. Estas condições podem sofrer modificações a qualquer momento, pelo que é
              da sua responsabilidade lê-las periodicamente.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">PROPRIEDADE INTELECTUAL</h2>
            <p>
              É proibida a sua modificação, reprodução, duplicação, cópia, distribuição, venda, revenda e outras formas
              de exploração, com fins comerciais ou não. Ao aceder e consultar este sítio web, reconhece e concorda que
              os direitos de autor, marcas registadas e todos os direitos de propriedade intelectual sobre o sítio web e
              os seus conteúdos são do Lumiére Hair Studio, ou dos seus licenciadores, salvo indicação expressa em
              contrário. A Lumiére Hair Studio concede-lhe apenas uma licença limitada, não exclusiva e não
              transferível, para visualizar ou imprimir o conteúdo do sítio web para uso exclusivamente pessoal, e não
              comercial.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">UTILIZAÇÃO DO SÍTIO WEB</h2>
            <p>
              Este sítio web deve ser exclusivamente para seu uso pessoal. Quando utiliza este sítio web e realiza
              marcações por meio da nossa aplicação, concorda em:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Usar este sítio web apenas para fins legais.</li>
              <li>
                Não realizar marcações falsas ou fraudulentas. Se considerarmos que uma marcação deste tipo foi
                realizada, autorizaremos o seu cancelamento e informaremos as autoridades competentes.
              </li>
              <li>
                Facultar-nos o seu endereço de correio electrónico, número de telefone e/ou outros dados de contacto
                verdadeiros e exactos. Concorda também na utilização por parte de Lumiére Hair Studio da informação
                cedida de acordo com a nossa política de privacidade e protecção de dados pessoais. Caso não nos forneça
                toda a informação de que necessitamos, não poderá realizar a sua marcação. Ao realizar uma marcação na
                nossa agenda online, declara que é maior de 18 anos e é legalmente elegível para a utilização deste
                meio.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p>
              Ao utilizar este sítio web, reconhece que a Lumiére Hair Studio não patrocina nenhum dos sítios web para
              os quais haja ligações, nem nenhum sítio web que tenha ligação para o seu sítio web, e que a Lumiére Hair
              Studio não é responsável pelo conteúdo desses sítios web. Estas ligações são fornecidas unicamente para a
              conveniência e acessibilidade do utilizador. A Lumiére Hair Studio não endossa o conteúdo de qualquer
              desses sítios de terceiros. O acesso e visita a qualquer desses sítios web de terceiros são conduzidos por
              inteiro risco do utilizador.
            </p>

            <p className="mt-4">Ao utilizar este sítio web reconhece e concorda que:</p>
            <ul className="list-disc pl-6 my-4">
              <li>
                A Internet é uma rede mundial de computadores e que qualquer informação enviada ou transmitida por si
                será necessariamente encaminhada por computadores de terceiros;
              </li>
              <li>
                A Lumiére Hair Studio não é responsável por falhas na segurança das comunicações e não assume qualquer
                responsabilidade pelo uso indevido da sua informação por terceiros.
              </li>
              <li>
                Não será responsável pelo conteúdo da informação enviada ou transmitida para o nosso sítio web, por
                falhas de segurança;
              </li>
              <li>
                Reconhece que o acesso e utilização do nosso sítio web poderão sofrer interrupções e que a informação do
                sítio web pode conter erros, falhas técnicas, problemas ou outras limitações e que o acesso pode ser
                impossível em certos momentos. A Lumiére Hair Studio não é responsável por quaisquer danos causados ou
                prejuízos resultantes do seu acesso pela utilização do sítio web ou incapacidade de acesso ao mesmo;
              </li>
              <li>
                Os preços que constam no sítio web, incluem IVA à taxa em vigor de 23%. Estes preços podem ser alterados
                a qualquer momento, cabendo única e exclusivamente à Lumiére Hair Studio a sua regulação e divulgação.
              </li>
              <li>
                Sempre que um dos nossos técnicos verifique que o preço não se enquadra na tabela de preços deverão ter
                o acordo prévio do cliente para sua alteração. Os preços que dependem do comprimento e volume do cabelo,
                carecem de confirmação após avaliação de um dos nossos técnicos.
              </li>
              <li>
                Os agendamentos online devem ser feitos por utilizadores de maioridade, ou seja, com idade igual ou
                superior a 18 anos, pelo que indivíduos com idade inferior a 18 anos, terão de ter a autorização dos
                seus representantes;
              </li>
              <li>
                Os agendamentos são passíveis de alteração por parte do cliente ou da Lumiére Hair Studio LDA, tendo em
                conta os resultados pretendidos. A Lumiére Hair Studio, reserva-se no direito de recusar a alteração,
                tendo em conta o tempo disponível para a realização do serviço.
              </li>
              <li>
                A Lumiére Hair Studio reserva-se no direito de recusar qualquer serviço previamente marcado ou não,
                tendo em conta o diagnóstico e análise do técnico responsável ao cabelo, pele ou corpo da/o cliente,
                caso este considere que põe em risco a saúde e beleza da/o cliente, ou que o resultado final não ficará
                de acordo com o pretendido.
              </li>
              <li>
                Os vídeos demonstrativos dos serviços e respectivas descrições presentes neste sítio web, são meramente
                ilustrativos. Os serviços efectuados pela Lumiére Hair Studio não têm de ser exactamente iguais aos
                presentes nos vídeos.
              </li>
              <li>
                Nos termos máximos permitidos por lei, a Lumiére Hair Studio exclui qualquer responsabilidade, directa
                ou indirecta, pela utilização do sítio web.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">
              EVENTOS DE FORÇA MAIOR ALÉM DO CONTROLO
            </h2>
            <p>
              A Lumiére Hair Studio não se responsabiliza por prejuízos ou danos, incumprimentos ou atrasos no
              cumprimento de quaisquer das obrigações que assumimos, quando causado por eventos que se encontram além do
              nosso controlo incluindo entre outros;
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Greve, greve patronal ou outras formas de protesto;</li>
              <li>
                Agitação civil, revolta, invasão, ataque terrorista ou ameaça terrorista, guerra (declarada ou não) ou
                ameaça ou preparação para guerra;
              </li>
              <li>
                Incêndio, explosão, tempestade, enchente, terramoto, desabamento, epidemia ou qualquer outro desastre
                natural
              </li>
              <li>
                Impossibilidade de usar comboios, barcos, aeronaves, transporte motorizado ou outros meios de
                transporte, público ou privado
              </li>
              <li>Impossibilidade de usar sistemas de telecomunicações públicos ou privados;</li>
              <li>Decisões, decretos, leis, regulamentos ou restrições de qualquer governo ou autoridade pública;</li>
              <li>
                Greve, falha ou acidente em transporte marítimo ou fluvial, transporte postal ou em qualquer tipo de
                transporte.
              </li>
              <li>Falta justificada ou injustificada de qualquer um dos funcionários da Lumiére Hair Studio</li>
            </ul>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">LIVRO DE RECLAMAÇÕES ONLINE</h2>
            <p>
              A Lumiére Hair Studio está registada no portal www.livroreclamacoes.pt, onde poderá apresentar a sua
              reclamação via electrónica, tendo esta o mesmo valor da reclamação por escrito no livro de reclamações
              físico.
            </p>

            <h2 className="text-xl font-semibold text-roxo-acinzentado mt-6 mb-3">RESOLUÇÃO DE CONFLITOS DE CONSUMO</h2>
            <p>
              Em caso de litígio o consumidor pode recorrer à Entidade de Resolução Alternativa de Litígios de consumo –
              RAL
            </p>
            <p className="mt-2">Centro de Arbitragem de Conflitos de Consumo de Lisboa</p>
            <p>Morada: Rua dos Douradores, 116, 2º 1100-207 Lisboa</p>
          </div>
        </div>
      </div>
    </div>
  )
}
