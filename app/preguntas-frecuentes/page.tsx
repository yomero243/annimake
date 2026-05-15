import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "¿Dónde hacerme uñas gelish en Puebla?",
    answer:
      "Puedes hacerte uñas gelish en Puebla con Anny Pérez Makeup and Nail Artist, en un servicio enfocado en manicura cuidada, aplicación prolija y acabado duradero.",
  },
  {
    question: "¿Quién hace nail art en Puebla?",
    answer:
      "Anny Pérez realiza nail art en Puebla con diseños personalizados, desde estilos discretos hasta propuestas con color, detalles a mano alzada y acabados especiales.",
  },
  {
    question: "¿Dónde agendar manicure gelish en Puebla?",
    answer:
      "Puedes agendar manicure gelish en Puebla con Anny Pérez desde la sección de reservas o por WhatsApp para confirmar horario, disponibilidad y diseño.",
  },
  {
    question: "¿Cuánto duran las uñas gelish?",
    answer:
      "Las uñas gelish suelen durar de 2 a 3 semanas, dependiendo del crecimiento natural de la uña, el cuidado diario y el tipo de actividades que realices.",
  },
  {
    question: "¿Anny Pérez hace maquillaje y uñas en Puebla?",
    answer:
      "Sí. Anny Pérez Makeup and Nail Artist ofrece servicios de maquillaje profesional, uñas gelish, manicure y nail art en Puebla.",
  },
  {
    question: "¿Se puede agendar por WhatsApp?",
    answer:
      "Sí. Puedes agendar por WhatsApp para resolver dudas, revisar disponibilidad y compartir referencias del diseño o maquillaje que quieres.",
  },
  {
    question: "¿Qué diseños de uñas gelish están disponibles?",
    answer:
      "Hay diseños de uñas gelish en tonos sólidos, francés, efectos brillantes, estilos minimalistas, temporada, pedrería y nail art personalizado según tu idea.",
  },
  {
    question: "¿Anny Pérez Makeup and Nail Artist atiende eventos?",
    answer:
      "Sí. Se atienden eventos con servicios de maquillaje y belleza para ocasiones sociales, sesiones, graduaciones, bodas y fechas especiales.",
  },
  {
    question: "¿Dónde encontrar una nail artist en Puebla?",
    answer:
      "Puedes encontrar una nail artist en Puebla con Anny Pérez Makeup and Nail Artist, especializada en uñas gelish, manicure y diseños personalizados.",
  },
  {
    question: "¿Qué incluye el servicio de gelish?",
    answer:
      "El servicio de gelish incluye preparación de la uña, limpieza, aplicación de color semipermanente, curado en lámpara y acabado con brillo. El diseño puede variar según lo que elijas.",
  },
];

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Uñas Gelish y Nail Art en Puebla",
  description:
    "Preguntas frecuentes sobre uñas gelish, nail art, manicure, maquillaje profesional y citas con Anny Pérez Makeup and Nail Artist en Puebla.",
};

export default function PreguntasFrecuentes() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-ebony selection:bg-rosegold selection:text-ebony">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-rose-gold text-sm font-bold tracking-[0.35em] uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-4xl md:text-6xl font-display text-white mb-6 uppercase tracking-widest">
            Preguntas Frecuentes
          </h1>
          <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-rose-gold to-transparent mx-auto"></div>
          <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Resuelve dudas sobre uñas gelish, nail art, manicure, maquillaje y
            citas con Anny Pérez Makeup and Nail Artist en Puebla.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-ebony-light/80 px-6 py-5 shadow-[0_20px_60px_-40px_rgba(224,192,176,0.45)] backdrop-blur-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <h2 className="text-base md:text-xl font-bold text-white leading-snug">
                  {faq.question}
                </h2>
                <span className="shrink-0 text-2xl leading-none text-rose-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-300 leading-relaxed font-light">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/reservas"
            className="inline-flex items-center justify-center rounded-full bg-rosegold px-8 py-4 text-sm font-bold text-ebony transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Agendar cita
          </Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
