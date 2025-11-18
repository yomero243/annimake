import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Servicios() {
    const categories = [
        {
            title: "Maquillaje",
            services: [
                { title: "Maquillaje Social", desc: "Para eventos de día o noche, resaltando tu belleza natural.", icon: "💄" },
                { title: "Maquillaje de Novia", desc: "Pruebas y servicio completo para tu día especial.", icon: "👰" },
                { title: "Maquillaje Artístico", desc: "Para sesiones de fotos, disfraces o eventos temáticos.", icon: "🎭" },
            ]
        },
        {
            title: "Uñas",
            services: [
                { title: "Manicura Semipermanente", desc: "Color duradero y brillo impecable por semanas.", icon: "💅" },
                { title: "Esculpidas en Gel/Acrílico", desc: "Extensión y forma perfecta para tus uñas.", icon: "✨" },
                { title: "Nail Art", desc: "Diseños personalizados a mano alzada.", icon: "🎨" },
            ]
        },
        {
            title: "Cabello",
            services: [
                { title: "Peinados Sociales", desc: "Recogidos, semirecogidos y ondas.", icon: "💇‍♀️" },
                { title: "Tratamientos Capilares", desc: "Hidratación profunda y recuperación de brillo.", icon: "💆‍♀️" },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-ebony">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Nuestros Servicios</h1>
                    <p className="text-xl text-rosegold max-w-2xl mx-auto">
                        Explora nuestra gama completa de tratamientos de belleza diseñados para ti.
                    </p>
                </div>

                <div className="space-y-20">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-serif text-rosegold mb-8 border-b border-ebony-lighter pb-4 inline-block pr-12">
                                {category.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.services.map((service, sIdx) => (
                                    <ServiceCard
                                        key={sIdx}
                                        title={service.title}
                                        description={service.desc}
                                        icon={service.icon}
                                        href="/reservas"
                                    />
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
