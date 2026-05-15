export default function MapSection() {
  return (
    <section className="py-24 bg-ebony relative overflow-hidden" id="ubicacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-display text-white mb-6 tracking-tighter uppercase italic">
            Nuestra Ubicación
          </h2>
          <div className="w-32 h-1 bg-linear-to-r from-transparent via-rose-gold to-transparent mx-auto"></div>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto font-body text-lg font-light tracking-widest uppercase">
            Visítanos en nuestro estudio exclusivo en Puebla.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_50px_-12px_rgba(224,192,176,0.15)] h-[600px] bg-background-dark/50 backdrop-blur-md relative">
          <iframe
            src="https://storage.googleapis.com/maps-solutions-8q4saank16/locator-plus/i5io/locator-plus.html"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Ubicación de Anny Pérez Makeup and Nail Artist"
            className="block h-full w-full"
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
    </section>
  );
}
