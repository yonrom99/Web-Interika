'use client';

import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const portfolioProjects = [
    {
        id: 1,
        title: 'CASA PRISMA',
        concept: 'Ubicada en León, Guanajuato, esta obra de volúmenes pétreos elevados desafía la topografía mediante un diálogo entre masa y vacío. Cada arista es fruto de nuestra resolución técnica y capacitación constante, donde la maestría en la ejecución traduce la complejidad estructural en una experiencia de precisión absoluta.',
        src: '/proyectos/proyecto-1/portada.png',
        span: 'md:col-span-2 md:row-span-2',
        images: ['/proyectos/proyecto-1/imagen-1.png', '/proyectos/proyecto-1/imagen-2.png', '/proyectos/proyecto-1/imagen-3.png', '/proyectos/proyecto-1/imagen-4.png', '/proyectos/proyecto-1/imagen-5.png', '/proyectos/proyecto-1/imagen-6.png', '/proyectos/proyecto-1/imagen-7.png']
    },
    {
        id: 2,
        title: 'ESTUDIO ADRIANA',
        concept: 'Ubicado en León, Guanajuato, este espacio de interiorismo redefine la cocina como una pieza de mobiliario integral. A través de una selección de materiales nobles se logra una atmósfera de calidez minimalista. El diseño apuesta por la supresión del ruido visual y la optimización funcional, garantizando una ejecución impecable donde la tecnología oculta y la estética atemporal conviven en equilibrio absoluto.',
        src: '/proyectos/proyecto-2/portada.png',
        span: 'md:col-span-2',
        images: ['/proyectos/proyecto-2/imagen-1.png', '/proyectos/proyecto-2/imagen-2.png', '/proyectos/proyecto-2/imagen-3.png', '/proyectos/proyecto-2/imagen-4.png', '/proyectos/proyecto-2/imagen-5.png', '/proyectos/proyecto-2/imagen-6.png', '/proyectos/proyecto-2/imagen-7.png', '/proyectos/proyecto-2/imagen-8.png']
    },
    {
        id: 3,
        title: 'CASA PABELLÓN',
        concept: 'Ubicado en León, Guanajuato, este proyecto de convivencia exterior se define por una geometría audaz que rompe con la horizontalidad tradicional. Una cubierta angular de gran escala actúa como un gesto escultórico que protege y enmarca el área social, donde la calidez de la madera y la integración paisajística crean un refugio sofisticado.',
        src: '/proyectos/proyecto-3/portada.png',
        span: 'md:col-span-1',
        images: ['/proyectos/proyecto-3/imagen-1.png', '/proyectos/proyecto-3/imagen-2.png', '/proyectos/proyecto-3/imagen-3.png', '/proyectos/proyecto-3/imagen-4.png', '/proyectos/proyecto-3/imagen-5.png']
    },
    {
        id: 4,
        title: 'CASA RT',
        concept: 'Situado en León, Guanajuato, este desarrollo residencial redefine la escala a través de una arquitectura tectónica y audaz. Un imponente pórtico de concreto expuesto actúa como anclaje visual y estructural, soportando un volumen suspendido que se proyecta hacia el paisaje, transformando la masividad del material en una pieza de habitabilidad sofisticada y transparente.',
        src: '/proyectos/proyecto-4/portada.png',
        span: 'md:col-span-1',
        images: ['/proyectos/proyecto-4/imagen-1.png', '/proyectos/proyecto-4/imagen-2.png', '/proyectos/proyecto-4/imagen-3.png', '/proyectos/proyecto-4/imagen-4.png', '/proyectos/proyecto-4/imagen-5.png', '/proyectos/proyecto-4/imagen-6.png', '/proyectos/proyecto-4/imagen-7.png']
    },
    {
        id: 5,
        title: 'CASA NOGAL',
        concept: 'Ubicado en León, Guanajuato, este ingreso residencial se concibe como una transición táctil y volumétrica. El diseño articula un diálogo entre la calidez orgánica del plafón de madera y la sobriedad técnica de las columnas monolíticas. La marquesina angular protege el acceso, maximizando la limpieza visual y la precisión en el detalle constructivo.',
        src: '/proyectos/proyecto-5/portada.png',
        span: 'md:col-span-2 md:row-span-2',
        images: ['/proyectos/proyecto-5/imagen-1.png', '/proyectos/proyecto-5/imagen-2.png', '/proyectos/proyecto-5/imagen-3.png', '/proyectos/proyecto-5/imagen-4.png']
    },
    {
        id: 6,
        title: 'SECUENCIA 06',
        concept: 'Ubicada en León, Guanajuato, esta residencia se define por una envolvente rítmica de listones de madera que unifica la volumetría superior. El diseño equilibra la privacidad con la entrada de luz tamizada, creando una fachada dinámica que protege e integra.',
        src: '/proyectos/proyecto-6/portada.png',
        span: 'md:col-span-2',
        images: ['/proyectos/proyecto-6/imagen-1.png', '/proyectos/proyecto-6/imagen-2.png']
    },
    {
        id: 7,
        title: 'ESTANCIA LATER',
        concept: 'Ubicada en León, Guanajuato, esta zona de esparcimiento exterior se fundamenta en la honestidad de sus materiales y la pureza de sus planos. El proyecto articula un diálogo entre la calidez del ladrillo artesanal y la sobriedad de la estructura metálica, creando un refugio privado que integra agua y vegetación sensorial. Cada nivel y transición de materiales fue ejecutado con precisión, transformando el diseño de paisaje en una experiencia de serenidad absoluta y alta gama.',
        src: '/proyectos/proyecto-7/portada.png',
        span: 'md:col-span-1',
        images: ['/proyectos/proyecto-7/imagen-1.png', '/proyectos/proyecto-7/imagen-2.png', '/proyectos/proyecto-7/imagen-3.png', '/proyectos/proyecto-7/imagen-4.png', '/proyectos/proyecto-7/imagen-5.png']
    },
    {
        id: 8,
        title: 'MÓDULO 08',
        concept: 'Ubicado en León, Guanajuato, este pabellón de esparcimiento se define por su pureza volumétrica y su integración total con el área social exterior. El diseño emplea una estructura metálica esbelta que soporta una planta alta de vistas panorámicas, equilibrando la masividad del muro de piedra con la ligereza del cristal.',
        src: '/proyectos/proyecto-8/portada.png',
        span: 'md:col-span-1',
        images: ['/proyectos/proyecto-8/imagen-1.png', '/proyectos/proyecto-8/imagen-2.png', '/proyectos/proyecto-8/imagen-3.png']
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    useEffect(() => {
        if (isInView) {
            document.body.classList.add('bg-dark');
        } else {
            document.body.classList.remove('bg-dark');
        }

        return () => document.body.classList.remove('bg-dark');
    }, [isInView]);

    return (
        <section id="portafolio" ref={ref} className="pb-32 bg-white transition-colors duration-1000 flex flex-col items-center w-full" style={{ paddingTop: '50px' }}>
            <div className="max-w-7xl w-full mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-24 md:mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 uppercase tracking-[0.5em] text-[12px] mb-8 block font-medium"
                    >
                        Portafolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-[0.9] mb-4"
                    >
                        SELECCIÓN DE
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-light tracking-tighter text-zinc-400 leading-[0.9]"
                    >
                        PROYECTOS.
                    </motion.h3>
                </div>

                <div className="max-w-2xl w-full mx-auto px-2 mb-16">
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: 50, opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-px bg-gray-100"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${project.span} relative overflow-hidden group cursor-pointer bg-zinc-100`}
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <Image src={project.src} alt={project.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <p className="text-white text-[10px] uppercase tracking-[0.4em]">Ver Proyecto</p>
                            </div>
                        </motion.div>
                    ))}                    {/* removed */}

                    {/* removed */}

                    {/* removed */}

                    {/* removed */}

                    {/* removed */}
                </div>
            </div>

            {/* MODAL DEL PROYECTO (Flotante) */}
            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-6xl h-[85vh] bg-white overflow-hidden flex flex-col shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón de cerrar (x) */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-8 z-50 text-black hover:opacity-50 transition-opacity uppercase text-xs tracking-widest flex items-center gap-2"
                            >
                                <span>Cerrar</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </button>

                            {/* Contenido Dinámico del Modal */}
                            {selectedProject !== null && (
                                <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start px-8 md:px-16 pt-48 md:pt-[25vh] pb-16 text-center text-black">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                        className="text-zinc-400 uppercase tracking-[0.6em] text-xs mb-8 mt-24"
                                    >
                                        Proyecto {String(selectedProject).padStart(2, '0')}
                                    </motion.span>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                        className="text-5xl md:text-7xl font-light tracking-[0.15em] mb-12 leading-[1.1] text-zinc-900"
                                    >
                                        {portfolioProjects[selectedProject - 1].title}
                                    </motion.h3>

                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                                        className="w-16 h-px bg-zinc-300 mb-12 origin-center"
                                    />

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                        className="max-w-3xl text-zinc-500 font-light leading-[2] text-sm md:text-lg mb-40 px-4"
                                    >
                                        {portfolioProjects[selectedProject - 1].concept}
                                    </motion.p>

                                    {/* Galería de imágenes del proyecto */}
                                    {portfolioProjects[selectedProject - 1].images && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                                            className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-16"
                                        >
                                            {portfolioProjects[selectedProject - 1].images.map((imgSrc, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`relative w-full overflow-hidden bg-zinc-100 ${idx === 0 ? 'md:col-span-2 aspect-[16/10] md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'}`}
                                                >
                                                    <Image
                                                        src={imgSrc}
                                                        alt={`${portfolioProjects[selectedProject - 1].title} - Imagen ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        quality={100}
                                                    />
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
