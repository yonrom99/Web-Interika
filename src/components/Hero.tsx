'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <section
            ref={heroRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Video */}
            <motion.video
                style={{ opacity, filter: blur }}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/hero-loop.mp4" type="video/mp4" />
            </motion.video>

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>

            {/* Content */}
            <motion.div
                style={{ opacity, filter: blur, scale }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-7xl mx-auto space-y-12"
            >
                {/* Logo Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <img
                        src="/logo-blanco.png"
                        className="w-[280px] sm:w-[320px] md:w-[380px] max-w-[90vw] object-contain"
                        alt="Logo Interika"
                    />


                    {/* Slogan */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 1, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white/80 text-[11px] sm:text-[14px] md:text-[17px] antialiased !font-light uppercase text-center"
                        style={{ letterSpacing: '0.3em', marginTop: '20px' }}
                    >
                        ARQUITECTURA · INTERIORISMO · GESTIÓN
                    </motion.h2>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
                <motion.div
                    animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-16 bg-white/50 origin-top"
                />
            </motion.div>
        </section>
    );
}
