import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="relative bg-ink py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Apresentação */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="tag mb-5 sm:mb-6">AF—02 / Sobre a ART FORTE</p>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight max-w-md">
                Uma construtora para quem trata a obra como parte essencial
                do negócio.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                A ART FORTE CONSTRUÇÕES atua em obras de construção civil,
                reformas e instalações elétricas para clientes
                residenciais, comerciais e incorporadoras. Acompanhamos o
                projeto do início ao fim — planejamento, execução e
                acabamento — com equipe própria e fornecedores
                qualificados.
              </p>
              <p className="mt-5 sm:mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Trabalhamos com transparência de prazo e custo, entregando
                o padrão que o cliente espera, seja em uma reforma pontual,
                em uma instalação elétrica completa ou em uma obra de maior
                porte.
              </p>
            </Reveal>
          </div>
        </div>

        {/* O que fazemos */}
        <div className="mt-20 sm:mt-24 lg:mt-32 grid lg:grid-cols-12 gap-8 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="tag mb-5 sm:mb-6">AF—03 / O que fazemos</p>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight max-w-md">
                Da fundação ao acabamento final.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
            {[
              {
                title: "Construção",
                text:
                  "Obras civis residenciais e comerciais, do planejamento à execução, com acompanhamento técnico em todas as etapas.",
              },
              {
                title: "Reforma",
                text:
                  "Reformas completas ou pontuais, com foco em prazo, organização do canteiro e qualidade no acabamento.",
              },
              {
                title: "Elétrica",
                text:
                  "Instalações e manutenções elétricas residenciais, comerciais e prediais, seguindo normas técnicas e de segurança.",
              },
              {
                title: "Acabamento",
                text:
                  "Pintura, revestimentos e detalhes finais que definem o padrão visual da obra entregue.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="bg-ink p-6 sm:p-8 h-full">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-paper mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm sm:text-base">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
