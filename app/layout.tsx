import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ART FORTE CONSTRUÇÕES — Construção, Reforma & Elétrica",
  description:
    "ART FORTE CONSTRUÇÕES projeta e constrói sites, sistemas, landing pages e automações sob medida para empresas que precisam de presença digital sólida e profissional.",
  keywords: [
    "ART FORTE CONSTRUÇÕES",
    "desenvolvimento web",
    "landing page",
    "sistemas web",
    "UI/UX design",
    "automações digitais",
    "fullstack",
  ],
  openGraph: {
    title: "ART FORTE CONSTRUÇÕES — Construção, Reforma & Elétrica",
    description:
      "Construção civil, reformas e instalações elétricas executadas com planejamento técnico e padrão de acabamento.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
