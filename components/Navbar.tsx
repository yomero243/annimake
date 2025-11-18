"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-ebony/90 backdrop-blur-sm border-b border-ebony-lighter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="shrink-0">
                        <Link href="/" className="text-2xl font-serif text-rosegold tracking-widest hover:text-white transition-colors">
                            Anny Perez Estudio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-rosegold hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Inicio
                            </Link>
                            <Link href="/servicios" className="text-rosegold hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Servicios
                            </Link>
                            <Link href="/galeria" className="text-rosegold hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Galería
                            </Link>
                            <Link href="/sobre-mi" className="text-rosegold hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Sobre Mí
                            </Link>
                            <Link href="/contacto" className="text-rosegold hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contacto
                            </Link>
                            <Link href="/reservas" className="bg-rosegold text-ebony hover:bg-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                                Reserva Cita
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-rosegold hover:text-white hover:bg-ebony-lighter focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menú</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-ebony border-b border-ebony-lighter" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-rosegold hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Inicio
                        </Link>
                        <Link href="/servicios" className="text-rosegold hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Servicios
                        </Link>
                        <Link href="/galeria" className="text-rosegold hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Galería
                        </Link>
                        <Link href="/sobre-mi" className="text-rosegold hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Sobre Mí
                        </Link>
                        <Link href="/contacto" className="text-rosegold hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Contacto
                        </Link>
                        <Link href="/reservas" className="bg-rosegold text-ebony block px-3 py-2 rounded-md text-base font-bold text-center mt-4">
                            Reserva Cita
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
