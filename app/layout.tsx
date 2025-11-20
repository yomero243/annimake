
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import BackgroundParallax from "@/components/BackgroundParallax";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anny Perez Estudio | Belleza y Estilo",
  description: "Servicios de belleza profesional: maquillaje, uñas, peinados y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased text-rosegold selection:bg-rosegold selection:text-ebony`}
      >
        <BackgroundParallax />
        {children}
      </body>
    </html>
  );
}


