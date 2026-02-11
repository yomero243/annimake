"use client"; // Needed for Navbar interactivity if imported here, but Navbar handles its own state. 
// Actually, page.tsx can be server component if Navbar is client. 
// Let's keep page.tsx clean.

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-ebony selection:bg-rosegold selection:text-ebony">
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* Services Preview Section */}
      <section className="py-20 bg-ebony-light/80 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">Nuestros Servicios</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto"></div>
              <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
                Experiencias diseñadas para resaltar tu elegancia única.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-[-100px] md:space-y-0 md:grid md:grid-cols-3 md:gap-8 perspective-1000 pb-20 md:pb-0">
            <ScrollReveal delay={0.4} className="h-full">
              <ServiceCard
                level="Level 01"
                title="Maquillaje Profesional"
                description="Social, novias y artístico. Productos de alta gama para un acabado perfecto."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBoXbcKeK03-SePWFFJjqA3ZTruJfSRb-5X2naLoFG32-dv3SzwMcWo19V1PyDnX0drQG_Y8hE3nvjUmRJkXMN4JtJirb089OwHVHTCZy9YjUvXseow4MulzbzKF88844KxAW7CimoS6kl3kRZFygCbui7_Q8cHcq02PhePz7O8oR_0zmg9Uo1j4mKfTyr1khhmph4xTpNB7NfYwyOwc4Rpjiahv4OkNYB523qsszWA_EeqzXWcVnxt8Qeju0ByN6Z31D5HwW0j3Dde"
                href="/servicios"
                className="z-30"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.6} className="h-full">
              <ServiceCard
                level="Level 02"
                title="Nail Art & Cuidado"
                description="Manicura rusa, esculpidas y diseños exclusivos a mano alzada."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDrjQ_HyliOX5E79X4vif75nJzc93kjdD22PrTEM2IddnSai-4wQXPjuesYEQVcuUMEAXzEbAGRk8Bwfj7gXC6NCsPxeYWgHEhh10iArccZQjsq1ZcIdz3RLkMoyYfdP9YpD6vZwvxPa5SrECLq3GZLmIJ0eoJOybFL9zwtfvBCXe_JpyQtHGZWQe4yjUeq8liNmzS1sCJXJlxQceOf0TO1G-eMC63FxugV4bKvliWyhAsD5IKoY4A9wZ0SJI-i5NU37vt2HdQWPTvN"
                href="/servicios"
                className="z-20 md:mt-12"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.8} className="h-full">
              <ServiceCard
                level="Level 03"
                title="Productos"
                description="Productos exclusivos para el cuidado de tu belleza en casa."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuC6oVPmXG-Rfo-hYxFe7CMqEY6FMzP6KbCbkpPXkBc9n6CT8WhX-siuC005NqYeavvDpCP8LxAGrHXFQbKlTdWeHPVQjhcxPgjRAypZncRux17Bw_WzdYc2QLpU7cQeLNGYe_sXZ8UHHFCVcuGGoGd-f01x_VyxHKp9VhOnObvyRJqXjF0b9Z0v9s0QvZAn7VeSu-vkWJLckNjduHnF8r8saf1hVsr8fr3BbujnYepU46tY4Y353NK5mHVll_lH4_LzW9ZdiB9XQ0Mc"
                href="/servicios"
                className="z-10 md:mt-24"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}