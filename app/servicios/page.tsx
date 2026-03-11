import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Servicios() {
    const categories = [
        {
            title: "Maquillaje",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoXbcKeK03-SePWFFJjqA3ZTruJfSRb-5X2naLoFG32-dv3SzwMcWo19V1PyDnX0drQG_Y8hE3nvjUmRJkXMN4JtJirb089OwHVHTCZy9YjUvXseow4MulzbzKF88844KxAW7CimoS6kl3kRZFygCbui7_Q8cHcq02PhePz7O8oR_0zmg9Uo1j4mKfTyr1khhmph4xTpNB7NfYwyOwc4Rpjiahv4OkNYB523qsszWA_EeqzXWcVnxt8Qeju0ByN6Z31D5HwW0j3Dde",
            services: [
                { title: "Maquillaje Social", desc: "Para eventos de día o noche, resaltando tu belleza natural." },
                { title: "Maquillaje de Novia", desc: "Pruebas y servicio completo para tu día especial." },
                { title: "Maquillaje Artístico", desc: "Para sesiones de fotos, disfraces o eventos temáticos." },
            ]
        },
        {
            title: "Uñas",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrjQ_HyliOX5E79X4vif75nJzc93kjdD22PrTEM2IddnSai-4wQXPjuesYEQVcuUMEAXzEbAGRk8Bwfj7gXC6NCsPxeYWgHEhh10iArccZQjsq1ZcIdz3RLkMoyYfdP9YpD6vZwvxPa5SrECLq3GZLmIJ0eoJOybFL9zwtfvBCXe_JpyQtHGZWQe4yjUeq8liNmzS1sCJXJlxQceOf0TO1G-eMC63FxugV4bKvliWyhAsD5IKoY4A9wZ0SJI-i5NU37vt2HdQWPTvN",
            services: [
                { title: "Manicura Semipermanente", desc: "Color duradero y brillo impecable por semanas." },
                { title: "Esculpidas en Gel/Acrílico", desc: "Extensión y forma perfecta para tus uñas." },
                { title: "Nail Art", desc: "Diseños personalizados a mano alzada." },
            ]
        },
        {
            title: "Cabello",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6oVPmXG-Rfo-hYxFe7CMqEY6FMzP6KbCbkpPXkBc9n6CT8WhX-siuC005NqYeavvDpCP8LxAGrHXFQbKlTdWeHPVQjhcxPgjRAypZncRux17Bw_WzdYc2QLpU7cQeLNGYe_sXZ8UHHFCVcuGGoGd-f01x_VyxHKp9VhOnObvyRJqXjF0b9Z0v9s0QvZAn7VeSu-vkWJLckNjduHnF8r8saf1hVsr8fr3BbujnYepU46tY4Y353NK5mHVll_lH4_LzW9ZdiB9XQ0Mc",
            services: [
                { title: "Peinados Sociales", desc: "Recogidos, semirecogidos y ondas." },
                { title: "Tratamientos Capilares", desc: "Hidratación profunda y recuperación de brillo." },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-ebony selection:bg-rose-gold selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-24">
                        <h1 className="text-4xl md:text-6xl font-display text-white mb-6 uppercase tracking-widest">Nuestros Servicios</h1>
                        <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-rose-gold to-transparent mx-auto"></div>
                        <p className="mt-8 text-xl text-rosegold/80 max-w-2xl mx-auto font-light font-body">
                            Explora nuestra gama completa de tratamientos de belleza diseñados para ti.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-32">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <ScrollReveal delay={0.1}>
                                <h2 className="text-3xl font-display text-white mb-12 border-l-4 border-rose-gold pl-6 uppercase tracking-wider">
                                    {category.title}
                                </h2>
                            </ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                                {category.services.map((service, sIdx) => (
                                    <ScrollReveal key={sIdx} delay={0.2 + (sIdx * 0.1)} className="h-full">
                                        <ServiceCard
                                            level={`0${idx + 1}.${sIdx + 1}`}
                                            title={service.title}
                                            description={service.desc}
                                            image={category.image}
                                            href="/reservas"
                                            className="h-full"
                                        />
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
