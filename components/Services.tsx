import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Construção residencial",
    text: "Execução de obras novas, do alicerce à entrega, com acompanhamento técnico em cada etapa.",
  },
  {
    title: "Construção comercial",
    text: "Obras para lojas, salas comerciais e empreendimentos, com prazo e cronograma definidos.",
  },
  {
    title: "Reformas e retrofit",
    text: "Reforma de ambientes residenciais e comerciais, atualizando estrutura, instalações e acabamento.",
  },
  {
    title: "Instalações elétricas",
    text: "Projetos e execução de instalações elétricas residenciais, comerciais e prediais, dentro das normas técnicas.",
  },
  {
    title: "Hidráulica",
    text: "Instalação e manutenção de sistemas hidráulicos, com foco em durabilidade e ausência de retrabalho.",
  },
  {
    title: "Pintura e acabamento",
    text: "Pintura interna e externa, revestimentos e acabamentos finais que valorizam o imóvel.",
  },
  {
    title: "Alvenaria e estrutura",
    text: "Levantamento de alvenaria, estruturas e fundações, seguindo o projeto e as normas vigentes.",
  },
  {
    title: "Manutenção predial",
    text: "Manutenção preventiva e corretiva de edificações, reduzindo custos e prolongando a vida útil do imóvel.",
  },
  {
    title: "Gestão de obra",
    text: "Planejamento, cronograma e acompanhamento da execução, com comunicação clara sobre prazo e custo.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-surface py-20 sm:py-24 lg:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="tag mb-5 sm:mb-6">AF—04 / Serviços</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
            Tudo o que sua obra precisa, em uma única empreiteira.
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <div className="group bg-surface hover:bg-ink transition-colors duration-300 p-6 sm:p-8 h-full flex flex-col">
                <span className="font-mono text-xs text-brass mb-3 sm:mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-base sm:text-lg text-paper mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
