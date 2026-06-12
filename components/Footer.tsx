const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20um%20projeto%20com%20a%20ART%20FORTE%20CONSTRU%C3%87%C3%95ES.";

export default function Footer() {
  return (
    <footer id="contato" className="relative bg-ink pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 border-b border-line pb-12 sm:pb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="font-display font-semibold text-xl tracking-[0.18em] text-paper">
              ART<span className="text-brass">·</span>FORTE
            </p>
            <p className="mt-4 text-muted text-sm leading-relaxed max-w-xs">
              Construção, reforma e instalações elétricas — do projeto à
              entrega, com acompanhamento técnico em cada etapa.
            </p>
          </div>

          <div>
            <p className="tag mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@artforteconstrucoes.com.br"
                  className="hover:text-paper transition-colors break-all"
                >
                  contato@artforteconstrucoes.com.br
                </a>
              </li>
              <li>
                <span>Goiânia, GO — Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="tag mb-4">Navegação</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href="#sobre" className="hover:text-paper transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-paper transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-paper transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-paper transition-colors">
                  Processo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 font-mono text-xs text-mutedPaper">
          <span>© {new Date().getFullYear()} ART FORTE CONSTRUÇÕES. Todos os direitos reservados.</span>
          <span className="text-left sm:text-right">Projetado e desenvolvido pela ART FORTE CONSTRUÇÕES</span>
        </div>
      </div>
    </footer>
  );
}
