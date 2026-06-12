"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20um%20projeto%20com%20a%20ART%20FORTE%20CONSTRU%C3%87%C3%95ES.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
        <a
          href="#topo"
          className="font-display font-semibold text-base sm:text-lg tracking-[0.18em] text-paper"
        >
          ART<span className="text-brass">·</span>FORTE
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brass/60 text-paper text-sm px-5 py-2.5 rounded-full hover:bg-brass hover:text-ink hover:border-brass transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
        >
          <span
            className={`block h-px w-6 bg-paper transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`md:hidden border-t border-line bg-ink overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base text-paper py-3 border-b border-line/40 last:border-b-0 hover:text-brass transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 border border-brass/60 text-paper text-sm px-5 py-3.5 rounded-full hover:bg-brass hover:text-ink transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
