"use client"; // Needed for Navbar interactivity if imported here, but Navbar handles its own state. 
// Actually, page.tsx can be server component if Navbar is client. 
// Let's keep page.tsx clean.

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-ebony selection:bg-rosegold selection:text-ebony">
      <Navbar />

      <Hero />

      {/* Services Preview Section - Placeholder for now */}
      <section className="py-20 bg-ebony-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-rosegold mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1 bg-rosegold mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Experiencias diseñadas para resaltar tu elegancia única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Maquillaje Profesional"
              description="Social, novias y artístico. Productos de alta gama para un acabado perfecto."
              icon="✨"
              href="/servicios"
            />
            <ServiceCard
              title="Nail Art & Cuidado"
              description="Manicura rusa, esculpidas y diseños exclusivos a mano alzada."
              icon="💅"
              href="/servicios"
            />
            <ServiceCard
              title="Peinado y Estilismo"
              description="Recogidos, ondas y tratamientos capilares para ocasiones especiales."
              icon="💇‍♀️"
              href="/servicios"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}