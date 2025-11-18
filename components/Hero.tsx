import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-ebony min-h-screen flex items-center justify-center overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-rosegold/5 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-rosegold/5 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rosegold via-white to-rosegold mb-6 animate-fade-in-up">
                    Belleza que Inspira
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-rosegold-light max-w-3xl mx-auto font-light tracking-wide mb-10">
                    Descubre tu mejor versión con nuestros servicios exclusivos de maquillaje, uñas y estilismo.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/reservas"
                        className="px-8 py-4 bg-rosegold text-ebony font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(224,191,184,0.3)]"
                    >
                        Reserva tu Cita
                    </Link>
                    <Link
                        href="/servicios"
                        className="px-8 py-4 border border-rosegold text-rosegold font-bold rounded-full hover:bg-rosegold/10 transition-all duration-300"
                    >
                        Ver Servicios
                    </Link>
                </div>
            </div>
        </div>
    );
}
