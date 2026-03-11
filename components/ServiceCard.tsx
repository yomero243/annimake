import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
    level: string;
    title: string;
    description: string;
    image: string;
    href: string;
    className?: string;
}

export default function ServiceCard({ level, title, description, image, href, className = "" }: ServiceCardProps) {
    return (
        <div className={`service-card-3d relative group aspect-3/4 overflow-hidden rounded-sm glass-morphism ${className}`}>
            <Image
                src={image}
                alt={`${title} - Anny Perez Estudio`}
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
                <span className="text-rose-gold text-[10px] tracking-[0.4em] uppercase mb-2 block">{level}</span>
                <h3 className="text-2xl font-display text-white uppercase tracking-tight mb-4">{title}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed mb-6">
                    {description}
                </p>
                <Link href={href} className="inline-flex items-center text-white text-[10px] uppercase tracking-[0.3em] border-b border-rose-gold pb-1 hover:text-rose-gold transition-colors">
                    Enter Module
                </Link>
            </div>
        </div>
    );
}
