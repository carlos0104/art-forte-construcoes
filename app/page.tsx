import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Differentials from "@/components/Differentials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink">
      <Header />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Differentials />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
