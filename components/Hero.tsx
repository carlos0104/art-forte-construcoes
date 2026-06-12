export default function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden grid-backdrop"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] w-[400px] h-[400px] sm:w-[640px] sm:h-[640px] rounded-full bg-brass/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 w-full">
        <div className="reg-marks border border-line/0 px-0 py-8 sm:py-10 lg:py-16 lg:pl-10">
          <p className="tag mb-5 sm:mb-6 animate-fadeUp opacity-0 [animation-delay:0ms]">
            AF—01 / Construção, Reforma &amp; Elétrica
          </p>

          <h1 className="font-display font-semibold text-paper leading-[1.08] text-[2rem] sm:text-5xl lg:text-7xl max-w-4xl animate-fadeUp opacity-0 [animation-delay:120ms]">
            Obra entregue com a{" "}
            <span className="text-brass">solidez</span> que o seu projeto
            exige.
          </h1>

          {/* Drawn line */}
          <div className="mt-6 sm:mt-8 h-px w-full max-w-xs sm:max-w-md bg-line relative overflow-hidden animate-fadeUp opacity-0 [animation-delay:240ms]">
            <span className="absolute inset-0 origin-left bg-brass animate-drawLine [animation-delay:600ms]" />
          </div>

          <p className="mt-6 sm:mt-8 max-w-xl text-muted text-base sm:text-lg leading-relaxed animate-fadeUp opacity-0 [animation-delay:360ms]">
            A ART FORTE CONSTRUÇÕES executa obras, reformas e instalações
            elétricas com planejamento técnico, prazo definido e
            acabamento de padrão — do projeto à entrega.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 animate-fadeUp opacity-0 [animation-delay:480ms]">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-paper text-ink text-sm font-medium px-7 py-3.5 hover:bg-brass hover:text-paper transition-colors"
            >
              Solicitar orçamento
            </a>
            <a
              href="#parceiros"
              className="inline-flex items-center justify-center rounded-full border border-line text-paper text-sm font-medium px-7 py-3.5 hover:border-brass hover:text-brass transition-colors"
            >
              Ver parceiros
            </a>
          </div>
        </div>

        {/* Technical footer strip — empilhado no mobile */}
        <div className="mt-16 sm:mt-20 lg:mt-28 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-6 border-t border-line pt-6 font-mono text-xs text-muted">
          <span>ESCOPO — CONSTRUÇÃO / REFORMA / ELÉTRICA / ACABAMENTO</span>
          <span>ATUAÇÃO — RESIDENCIAL · COMERCIAL · INCORPORAÇÃO</span>
          <span>STATUS — DISPONÍVEL PARA NOVOS PROJETOS</span>
        </div>
      </div>
    </section>
  );
}
