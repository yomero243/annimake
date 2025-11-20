"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundParallax() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bg = bgRef.current;
        if (!bg) return;

        gsap.to(bg, {
            yPercent: 30, // Mueve el fondo un 30% de su altura mientras se hace scroll
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            ref={bgRef}
            className="fixed inset-0 -z-50 h-[130vh] w-full"
            style={{
                backgroundImage: "url('/background/bgimagen1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
}
