import Reveal from "./Reveal";

const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20um%20projeto%20com%20a%20ART%20FORTE%20CONSTRU%C3%87%C3%95ES.";

export default function CTA() {
  return (
    <section className="relative bg-surface py-20 sm:py-24 lg:py-32 border-y border-line grid-backdrop">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <div className="reg-marks border border-line/0 max-w-3xl py-4">
            <p className="tag mb-5 sm:mb-6">AF—08 / Próximo passo</p>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl text-paper leading-tight">
              Vamos planejar a sua obra, reforma ou instalação elétrica?
            </h2>
            <p className="mt-5 sm:mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Conte um pouco sobre o projeto e receba um direcionamento
              claro sobre escopo, prazo e orçamento.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brass text-ink text-sm font-medium px-8 py-3.5 hover:bg-paper transition-colors"
              >
                Iniciar conversa no WhatsApp
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-line text-paper text-sm font-medium px-8 py-3.5 hover:border-brass hover:text-brass transition-colors"
              >
                Ver formas de contato
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
