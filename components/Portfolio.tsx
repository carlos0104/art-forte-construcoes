import Reveal from "./Reveal";

type ClientCard = {
  name: string;
  segment: string;
  description: string;
  status: string;
  link?: string;
  placeholder?: boolean;
};

const CLIENTS: ClientCard[] = [
  {
    name: "Vega Incorporadora",
    segment: "Incorporação imobiliária",
    description:
      "Solução digital personalizada para presença institucional no mercado imobiliário, com foco em credibilidade e apresentação de empreendimentos.",
    status: "Projeto desenvolvido",
    link: "https://vcinc.com.br/",
  },
  {
    name: "[ Nome do cliente ]",
    segment: "[ Segmento ]",
    description:
      "Espaço reservado para o próximo case. Substitua por uma breve descrição do projeto entregue.",
    status: "Cliente atendido",
    placeholder: true,
  },
  {
    name: "[ Nome do cliente ]",
    segment: "[ Segmento ]",
    description:
      "Espaço reservado para o próximo case. Substitua por uma breve descrição do projeto entregue.",
    status: "Cliente atendido",
    placeholder: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="tag mb-6">AF—05 / Portfólio</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-paper leading-tight max-w-xl">
            Empresas reais, com presença real no mercado.
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Uma seleção de clientes atendidos pela ART FORTE CONSTRUÇÕES. Novos projetos
            são adicionados conforme são concluídos.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {CLIENTS.map((client, i) => {
            const Wrapper = client.link ? "a" : "div";
            return (
              <Reveal key={client.name + i} delay={i * 120}>
                <Wrapper
                  {...(client.link
                    ? {
                        href: client.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className={`group block h-full border border-line bg-surface p-8 transition-colors duration-300 ${
                    client.link
                      ? "hover:border-brass/60"
                      : "border-dashed opacity-70"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-semibold text-xl text-paper">
                      {client.name}
                    </h3>
                    {client.link && (
                      <span className="font-mono text-xs text-brass mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="tag mt-3 mb-4">{client.segment}</p>
                  <p className="text-muted leading-relaxed text-sm">
                    {client.description}
                  </p>
                  <p className="mt-6 font-mono text-xs text-mutedPaper">
                    {client.status}
                  </p>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
