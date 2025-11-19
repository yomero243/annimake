import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Galeria() {
    const images = [
        {
            src: "/images/gallery/makeup-bridal.png",
            alt: "Maquillaje de Novia",
            category: "Maquillaje",
        },
        {
            src: "/images/gallery/makeup-artistic.png",
            alt: "Maquillaje Artístico",
            category: "Artístico",
        },
        {
            src: "/images/gallery/hairstyle-updo.png",
            alt: "Peinado Recogido",
            category: "Peinado",
        },
        {
            src: "/images/gallery/nails-art.png",
            alt: "Diseño de Uñas",
            category: "Uñas",
        },
    ];

    return (
        <main className="min-h-screen bg-ebony selection:bg-rosegold selection:text-ebony">
            <Navbar />

            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-rosegold mb-6">
                        Galería de Trabajos
                    </h1>
                    <div className="w-24 h-1 bg-rosegold mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Una muestra de nuestra pasión por la belleza y el detalle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-ebony-light border border-ebony-lighter"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ebony/90 via-ebony/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-rosegold text-sm font-medium tracking-wider uppercase mb-2">
                                    {img.category}
                                </span>
                                <h3 className="text-white text-xl font-serif">{img.alt}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
