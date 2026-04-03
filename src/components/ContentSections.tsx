'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { MoveRight, MoveLeft, ScanEye } from 'lucide-react';

// --- COMPONENT1: IPHONE MOCKUP CAROUSEL ---
const appImages = [
    '/tecnologia/app-dashboard.png',
    '/tecnologia/app-feedback.png',
    '/tecnologia/app-hub.png'
];

function IPhoneMockup() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % appImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-[340px] h-[240px] sm:w-[500px] sm:h-[350px] lg:w-[650px] lg:h-[450px] mx-auto bg-zinc-900 rounded-[24px] md:rounded-[32px] p-2 md:p-4 shadow-2xl shadow-black/40 ring-1 ring-zinc-800 flex-shrink-0">
            {/* iPad Camera Bezel */}
            <div className="absolute top-2 inset-x-0 hidden md:flex justify-center z-50 pointer-events-none">
                <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
            </div>

            {/* Inner Screen */}
            <div className="relative w-full h-full bg-zinc-950 rounded-[16px] md:rounded-[20px] overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={appImages[currentIndex]}
                            alt={`App Interface ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20">
                    {appImages.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 shadow-sm ${i === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-zinc-400/50 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- COMPONENT2: BEFORE/AFTER SLIDER ---
function BeforeAfterSlider() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percent);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-[340px] h-[240px] sm:w-[500px] sm:h-[350px] lg:w-[650px] lg:h-[450px] mx-auto rounded-xl md:rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none shadow-xl border border-zinc-100 flex-shrink-0"
            onPointerMove={(e) => handleMove(e.clientX)}
            onPointerDown={(e) => handleMove(e.clientX)}
        >
            {/* Image 1: Antes (Back/Right Side - Always Visible beneath) */}
            <Image
                src="/tecnologia/ar-antes.png"
                alt="Terreno Antes"
                fill
                className="object-cover"
            />

            {/* Image 2: Después (Front/Left Side - Masked) */}
            <div
                className="absolute inset-0 w-full h-full z-10"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
                <Image
                    src="/tecnologia/ar-despues.png"
                    alt="Proyecto Después"
                    fill
                    className="object-cover pointer-events-none"
                />
            </div>

            {/* Slider Divider Line */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
                {/* Thumb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black backdrop-blur-sm pointer-events-none ring-4 ring-black/10">
                    <MoveLeft size={14} className="mr-0.5" />
                    <MoveRight size={14} className="ml-0.5" />
                </div>
            </div>
        </div>
    );
}

// --- COMPONENT3: SPLIT-SCREEN VR VIDEO ---
function SplitScreenVideo() {
    return (
        <div className="relative w-[340px] h-[240px] sm:w-[500px] sm:h-[350px] lg:w-[650px] lg:h-[450px] mx-auto flex-shrink-0 rounded-xl md:rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 group border border-zinc-800/50">
            <video
                src="/tecnologia/vr-split.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Overlay Text */}
            <div className="absolute top-4 md:top-6 inset-x-6 md:inset-x-8 flex justify-between z-10 opacity-80 text-white text-[8px] md:text-[10px] uppercase tracking-widest font-bold pointer-events-none">
                <span className="flex items-center gap-2"><ScanEye size={12} /> VISTA FÍSICA</span>
                <span>RENDER VR 360°</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
        </div>
    );
}

// --- MAIN WRAPPER SECTION ---
export function Technology() {
    return (
        <section id="tecnologia" className="pt-48 pb-24 md:pt-[300px] md:pb-48 bg-zinc-50 overflow-hidden flex flex-col items-center w-full">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* GLOBAL TITLE */}
                <div className="text-center flex flex-col items-center justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-[12px] mb-8 block font-medium"
                    >
                        Nuestra Tecnología
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-[0.9] mb-4"
                    >
                        LA INNOVACIÓN
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-light tracking-tighter text-zinc-400 leading-[0.9]"
                    >
                        COMO ESTÁNDAR.
                    </motion.h3>
                </div>

                {/* FORCE SPACER */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* MODULE 1: APP MÓVIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-40 items-center mb-64 lg:mb-[550px]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 md:order-1"
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-black leading-[1.1]">
                            Gestión en <br /><span className="font-medium">Tiempo Real.</span>
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-zinc-500 font-light leading-relaxed">
                            Nuestra plataforma exclusiva permite un seguimiento exhaustivo de cada etapa del proyecto. Desde el modelado inicial hasta la validación final, visualiza el avance técnico y creativo de tus activos digitales, optimizando la comunicación y eliminando la incertidumbre en los tiempos de entrega.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="order-1 md:order-2 flex justify-center w-full"
                    >
                        <IPhoneMockup />
                    </motion.div>
                </div>

                {/* FORCE SPACER */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* MODULE 2: REALIDAD AUMENTADA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-40 items-center mb-64 lg:mb-[550px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="order-2 md:order-1 flex justify-center md:block"
                    >
                        <BeforeAfterSlider />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="flex flex-col justify-center space-y-6 md:space-y-8 order-1 md:order-2"
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-black leading-[1.1]">
                            Realidad <br /><span className="font-medium">Aumentada (AR).</span>
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-zinc-500 font-light leading-relaxed">
                            Visualiza el impacto arquitectónico antes de la primera excavación. Mediante tecnología AR, proyectamos la volumetría del proyecto a escala real, permitiendo validar vistas, asoleamiento e integración con el entorno físico de manera inmediata.
                        </p>
                    </motion.div>
                </div>

                {/* FORCE SPACER */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* MODULE 3: REALIDAD VIRTUAL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-40 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 md:order-1"
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-black leading-[1.1]">
                            Realidad <br /><span className="font-medium">Virtual (VR).</span>
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-zinc-500 font-light leading-relaxed">
                            Habita el espacio antes de construirlo. Nuestros recorridos 360° de ultra-alta fidelidad permiten experimentar escalas, materiales e iluminación con un nivel de realismo que trasciende el render estático, facilitando la toma de decisiones críticas en fase de preventa.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="order-1 md:order-2 flex justify-center md:block"
                    >
                        <SplitScreenVideo />
                    </motion.div>
                </div>

                {/* FORCE SPACER */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

            </div>
        </section>
    );
}
