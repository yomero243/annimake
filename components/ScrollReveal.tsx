"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;

        // Animate the container
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Inicia cuando el top del elemento está al 85% del viewport
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Animate images if present inside
        const images = el.querySelectorAll("img");
        if (images.length > 0) {
            gsap.fromTo(
                images,
                {
                    filter: "grayscale(100%)",
                },
                {
                    filter: "grayscale(0%)",
                    duration: 1.5,
                    delay: delay + 0.2, // Slightly delayed for effect
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [delay]);

    return (
        <div ref={elRef} className={className}>
            {children}
        </div>
    );
}
