"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
        if (h1Ref.current) {
            const rect = h1Ref.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (h1Ref.current && e.touches.length > 0) {
            const rect = h1Ref.current.getBoundingClientRect();
            const touch = e.touches[0];
            setMousePos({
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top,
            });
        }
    };

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchstart', (e) => handleTouchMove(e as unknown as TouchEvent), { passive: true });
        window.addEventListener('touchmove', (e) => handleTouchMove(e as unknown as TouchEvent), { passive: true });
        
        if (window.innerWidth < 768 && h1Ref.current) {
            const rect = h1Ref.current.getBoundingClientRect();
            setMousePos({ x: rect.width / 2, y: rect.height / 2 });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', (e) => handleTouchMove(e as unknown as TouchEvent));
            window.removeEventListener('touchmove', (e) => handleTouchMove(e as unknown as TouchEvent));
        };
    }, []);

    // En móviles, el scroll suma un desplazamiento extra para que el brillo no se quede estático al bajar
    const spotlightY = mousePos.y + (window.innerWidth < 768 ? scrollY * 0.2 : 0);

    return (
        <div className="relative bg-ebony min-h-screen flex items-center justify-center overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-rosegold/5 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-rosegold/5 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 
                    ref={h1Ref}
                    className="text-5xl md:text-8xl font-serif font-bold text-transparent bg-clip-text mb-6 animate-fade-in-up selection:text-rosegold cursor-default transition-all duration-75 ease-out"
                    style={{
                        backgroundImage: `radial-gradient(circle 150px at ${mousePos.x}px ${spotlightY}px, #fff 0%, rgba(224, 191, 184, 0.6) 40%, rgba(224, 191, 184, 0.1) 80%, transparent 100%)`,
                        backgroundColor: '#1a1a1a',
                    }}
                >
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
