
import type { Metadata } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundParallax from "@/components/BackgroundParallax";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anny Perez Estudio | Belleza y Estilo en Maquillaje y Uñas",
  description: "Descubre Anny Perez Estudio: Expertos en maquillaje profesional, nail art, peinados y cuidado personal. Realzamos tu belleza natural con servicios exclusivos y productos de alta gama.",
  keywords: ["maquillaje profesional", "nail art", "estudio de belleza", "Anny Perez", "peinados", "manicura", "belleza profesional"],
  authors: [{ name: "Anny Perez" }],
  openGraph: {
    title: "Anny Perez Estudio | Belleza y Estilo",
    description: "Servicios de belleza profesional: maquillaje, uñas, peinados y más.",
    url: "https://annyperezestudio.com",
    siteName: "Anny Perez Estudio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anny Perez Estudio | Belleza y Estilo",
    description: "Servicios de belleza profesional: maquillaje, uñas, peinados y más.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${syncopate.variable} ${spaceGrotesk.variable} antialiased font-body text-charcoal bg-background-light selection:bg-rose-gold selection:text-white`}
      >
        <BackgroundParallax />
        {children}
      </body>
    </html>
  );
}


