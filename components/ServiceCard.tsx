import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    return (
        <div className="group bg-ebony p-8 rounded-2xl border border-ebony-lighter hover:border-rosegold/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="h-12 w-12 bg-rosegold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-rosegold group-hover:text-ebony transition-colors">
                <span className="text-2xl">{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-6 text-sm flex-grow">{description}</p>
            <Link href={href} className="text-rosegold text-sm font-bold hover:text-white transition-colors inline-flex items-center">
                Saber más
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
    );
}
