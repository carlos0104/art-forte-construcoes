import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Visita técnica",
    text: "Avaliação do local, levantamento de necessidades e definição do escopo da obra.",
  },
  {
    n: "02",
    title: "Orçamento",
    text: "Proposta detalhada com materiais, mão de obra, prazo e formas de pagamento.",
  },
  {
    n: "03",
    title: "Planejamento",
    text: "Cronograma de execução, organização do canteiro e definição de equipe e materiais.",
  },
  {
    n: "04",
    title: "Execução",
    text: "Obra, reforma ou instalação elétrica realizada com acompanhamento técnico contínuo.",
  },
  {
    n: "05",
    title: "Entrega e vistoria",
    text: "Vistoria final, ajustes pontuais e entrega do ambiente pronto para uso.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative bg-ink py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="tag mb-5 sm:mb-6">AF—07 / Processo de trabalho</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
            Um fluxo claro, da visita técnica à entrega da obra.
          </h2>
        </Reveal>

        {/* Desktop: 5 colunas horizontais */}
        <div className="hidden lg:grid lg:grid-cols-5 mt-16 border-t border-line">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="border-r border-line last:border-r-0 p-8 h-full">
                <span className="font-mono text-2xl text-brass">{step.n}</span>
                <h3 className="font-display font-semibold text-lg text-paper mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile / tablet: lista vertical com linha lateral */}
        <div className="lg:hidden mt-12 border-l-2 border-line ml-4 space-y-0">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="relative pl-8 pb-8 last:pb-0">
                {/* Dot na linha */}
                <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-ink border-2 border-brass flex items-center justify-center" />
                <span className="font-mono text-lg sm:text-xl text-brass">{step.n}</span>
                <h3 className="font-display font-semibold text-base sm:text-lg text-paper mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
