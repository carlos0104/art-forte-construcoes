import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Equipe própria",
    text: "Mão de obra qualificada e acompanhada de perto, sem depender de terceirizações soltas a cada etapa da obra.",
  },
  {
    title: "Prazo e custo combinados",
    text: "Cronograma definido antes do início da obra, com comunicação clara sobre qualquer alteração de prazo ou orçamento.",
  },
  {
    title: "Normas técnicas e de segurança",
    text: "Execução elétrica e estrutural seguindo as normas vigentes, reduzindo riscos e retrabalho futuro.",
  },
  {
    title: "Acompanhamento direto",
    text: "Contato direto com o responsável técnico durante toda a obra, sem intermediários.",
  },
];

export default function Differentials() {
  return (
    <section className="relative bg-surface py-20 sm:py-24 lg:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="tag mb-5 sm:mb-6">AF—06 / Diferenciais</p>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight max-w-md">
                O que muda quando a obra é acompanhada do início ao fim.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-px bg-line border border-line">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="bg-surface p-6 sm:p-8 flex items-start gap-5 sm:gap-8">
                  <span className="font-mono text-xs text-brass shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-paper mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm max-w-md">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
