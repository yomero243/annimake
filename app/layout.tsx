
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
        className={`${syncopate.variable} ${spaceGrotesk.variable} antialiased font-body text-charcoal bg-background-light selection:bg-rose-gold selection:text-white`}
      >
        <BackgroundParallax />
        {children}
      </body>
    </html>
  );
}


