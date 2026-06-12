import Image from "next/image";
import Reveal from "./Reveal";

const PARTNERS = [
  {
    name: "Vega Incorporações",
    logo: "/partners/vega.png",
  },
  {
    name: "FGR Incorporações S.A.",
    logo: "/partners/fgr.png",
  },
];

export default function Partners() {
  return (
    <section id="parceiros" className="relative bg-ink py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="tag mb-5 sm:mb-6">AF—05 / Parceiros</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
            Incorporadoras e empresas que confiam na ART FORTE.
          </h2>
          <p className="mt-4 text-muted text-sm sm:text-base max-w-xl leading-relaxed">
            Trabalhamos junto a incorporadoras e parceiros comerciais em
            obras e empreendimentos. Novos parceiros são adicionados
            conforme novas parcerias são firmadas.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 120}>
              <div className="flex items-center justify-center h-28 sm:h-40 border border-line bg-paper p-5 sm:p-8 hover:border-brass/60 transition-colors duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={90}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}

          {/* Placeholder próximo parceiro */}
          <Reveal delay={PARTNERS.length * 120}>
            <div className="flex items-center justify-center h-28 sm:h-40 border border-dashed border-line text-muted text-xs sm:text-sm font-mono">
              [ Próximo parceiro ]
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
