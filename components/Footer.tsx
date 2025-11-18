import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-ebony-light border-t border-ebony-lighter text-rosegold py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-serif mb-4 tracking-widest text-white">Anny Perez Estudio</h3>
                        <p className="text-sm opacity-80 leading-relaxed">
                            Realzando tu belleza natural con servicios profesionales y personalizados.
                            Experiencia de lujo en cada detalle.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                            <li><Link href="/precios" className="hover:text-white transition-colors">Lista de Precios</Link></li>
                            <li><Link href="/galeria" className="hover:text-white transition-colors">Portafolio</Link></li>
                            <li><Link href="/reservas" className="hover:text-white transition-colors">Reservar Cita</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Contacto</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Calle Principal 123, Ciudad</li>
                            <li>+34 600 000 000</li>
                            <li>contacto@annyperezestudio.com</li>
                            <li className="flex space-x-4 mt-4">
                                {/* Social Icons Placeholders */}
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                                <a href="#" className="hover:text-white transition-colors">TikTok</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-ebony-lighter text-center text-xs opacity-60">
                    <p>&copy; {new Date().getFullYear()} Anny Perez Estudio. Todos los derechos reservados.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/legal" className="hover:text-white">Aviso Legal</Link>
                        <Link href="/privacidad" className="hover:text-white">Política de Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
