'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    const values = [
        { t: "Gestión de Excelencia", d: "Rigor administrativo para optimizar cada recurso." },
        { t: "Innovación Tecnológica Aplicada", d: "La tecnología como motor de precisión." },
        { t: "Transparencia Radical", d: "Confianza construida con datos reales y claros." },
        { t: "Rigor en el Detalle", d: "La perfección técnica como nuestra firma personal." },
        { t: "Compromiso de Resolución", d: "Capacidad técnica para absorber y resolver la complejidad." }
    ];

    return (
        <section id="about" className="bg-black text-white py-32 md:py-48 px-6 w-full font-outfit flex flex-col items-center">
            {/* Este div es el que asegura que TODO el contenido esté centrado en la pantalla */}
            <div className="max-w-6xl w-full mx-auto">

                {/* GLOBAL TITLE */}
                <div className="text-center flex flex-col items-center justify-center">
                    {/* ESPACIO SUPERIOR (antes del título 'About Us') */}
                    <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                    <span className="text-zinc-500 uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-[12px] mb-8 block font-medium">
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9] uppercase">
                        SOBRE NOSOTROS
                    </h2>
                </div>

                {/* ESPACIO MEDIO (entre el gran título y el párrafo) */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* INTRODUCCIÓN FULL WIDTH */}
                <div className="w-full text-center mx-auto mb-0">
                    <p className="text-sm md:text-base lg:text-lg text-zinc-400 font-light leading-relaxed">
                        Somos un estudio de arquitectura de rigor técnico y estética atemporal. En Interika nos especializamos en fusionar tecnología de vanguardia y capacitación constante para lograr una ejecución de obra precisa y de alta calidad.
                    </p>
                </div>

                {/* ESPACIO INFERIOR (entre el párrafo y la imagen/manifiesto) */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* BLOQUE PRINCIPAL: IMAGEN Y MANIFIESTO */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24 mb-0 w-full">
                    {/* LADO IZQUIERDO: IMAGEN Y PIE DE IMAGEN */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                        <div className="relative aspect-[3/4] w-full max-w-[280px] lg:max-w-xs overflow-hidden bg-zinc-900 border border-zinc-800">
                            <img
                                src="/aboutus.png"
                                alt="Equipo Interika"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </div>
                        <div className="mt-6 flex flex-col gap-1.5 text-[9px] tracking-[0.1em] text-zinc-500 font-light w-full max-w-[280px] lg:max-w-xs text-center lg:text-left leading-relaxed">
                            <p>Uriel Emilio Rojas Muñoz – Director de Estrategia & Gestión</p>
                            <p>Eugenia Muñoz Hernández – Directora de Diseño & Visualización</p>
                        </div>
                    </div>

                    {/* LADO DERECHO: MANIFIESTO */}
                    <div className="flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-auto">
                        <span className="text-zinc-600 uppercase tracking-[0.5em] text-[12px] mb-8 font-medium">
                            Manifiesto
                        </span>
                        <p className="text-sm md:text-base lg:text-lg text-zinc-300 font-light leading-relaxed text-justify max-w-lg">
                            Interika nace de la unión entre la sensibilidad estética y el rigor administrativo. No entendemos la arquitectura como un proceso aislado, sino como una gestión integral donde el diseño de alta gama y la tecnología convergen para dar certidumbre al cliente. Somos un equipo dedicado a materializar visiones complejas con una ejecución impecable, garantizando que cada trazo digital se traduzca en una realidad tangible de excelencia.
                        </p>
                    </div>
                </div>

                {/* ESPACIO INFERIOR MANIFIESTO */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                <div className="w-full border-t border-zinc-900"></div>

                {/* ESPACIO SUPERIOR MISION Y VISION */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* BLOQUE SECUNDARIO: MISIÓN Y VISIÓN */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 text-center lg:text-left w-full items-start">
                    {/* COLUMNA 1: MISIÓN */}
                    <div className="flex flex-col items-center lg:items-start w-full">
                        <span className="text-zinc-500 tracking-[0.4em] text-[10px] uppercase mb-8 block font-medium">Misión</span>
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-8 tracking-tighter leading-snug text-white">
                            Gestión de Excelencia, Ejecución de Paz
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-zinc-400 font-light leading-relaxed text-justify">
                            Materializar arquitectura de alta gama mediante rigor técnico y tecnología de vanguardia. Nuestra misión es absorber la complejidad administrativa y técnica para asegurar una ejecución de excelencia y la total tranquilidad de nuestros clientes.
                        </p>
                    </div>

                    {/* COLUMNA 2: VISIÓN */}
                    <div className="flex flex-col items-center lg:items-start w-full">
                        <span className="text-zinc-500 tracking-[0.4em] text-[10px] uppercase mb-8 block font-medium">Visión</span>
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-8 tracking-tighter leading-snug text-white">
                            Liderando la Transformación Digital en la Arquitectura
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-zinc-400 font-light leading-relaxed text-justify">
                            Ser el referente en la digitalización de la arquitectura, transformando la industria mediante innovación y transparencia total. Aspiramos a establecer un estándar de precisión y claridad informativa que elimine la incertidumbre en cada etapa del proyecto.
                        </p>
                    </div>
                </div>

                {/* LIMITADOR VALORES */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* COLUMNA 3: VALORES (ANCHO COMPLETO HORIZONTAL) */}
                <div className="w-full flex flex-col items-center lg:items-center text-center">
                    <span className="text-zinc-500 tracking-[0.4em] text-[10px] uppercase mb-8 block font-medium">Valores</span>
                    <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tighter leading-snug text-white mb-0">
                        Rigor Técnico, Honestidad Estructural
                    </h3>

                    {/* SEPARADOR EXPLICITO */}
                    <div style={{ width: '100%', height: '20px', flexShrink: 0 }}></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 w-full text-center md:text-justify">
                        {values.map((v, i) => (
                            <div key={i} className="flex flex-col items-center md:items-start">
                                <strong className="text-white text-xs lg:text-sm mb-3 uppercase tracking-wide font-medium text-center md:text-left">{v.t}</strong>
                                <span className="text-[11px] lg:text-xs text-zinc-400 font-light leading-relaxed">{v.d}</span>
                            </div>
                        ))}
                    </div>

                    {/* SEPARADOR EXPLICITO */}
                    <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>
                </div>

                {/* LINEA BLANCA (SEPARADOR) */}
                <div className="w-full border-t border-zinc-200 opacity-20 my-16"></div>

                {/* SEPARADOR EXPLICITO */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* EL MÉTODO INTERIKA */}
                <div className="w-full flex flex-col items-center mt-8 lg:mt-16">
                    <span className="text-zinc-500 tracking-[0.4em] text-[10px] uppercase mb-8 block font-medium">El Método Interika</span>
                    <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-5 tracking-tighter leading-snug text-white">
                        Nuestro Proceso
                    </h3>

                    {/* TIMELINE DESKTOP */}
                    <div className="hidden lg:flex relative w-full h-[280px] items-center -mt-2">
                        {/* Línea horizontal */}
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-zinc-700 -translate-y-1/2"></div>

                        {/* NODOS */}
                        {/* 1. Diagnóstico */}
                        <div className="flex-1 flex justify-center relative z-10">
                            <div className="w-4 h-4 bg-zinc-300 rounded-full border-4 border-black relative z-10 shadow-[0_0_0_6px_rgba(0,0,0,1)]"></div>

                            <div className="absolute top-8 flex flex-col items-center w-[280px]">
                                <span className="text-zinc-500 text-sm font-medium mb-3">1</span>
                                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[11px] mb-4 text-center">Diagnóstico & Estrategia</h4>
                                <div className="text-center w-full">
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">Analizamos el potencial de cada proyecto para trazar una ruta crítica de diseño desde el día uno.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Desarrollo Inmersivo */}
                        <div className="flex-1 flex justify-center relative z-10">
                            <div className="w-4 h-4 bg-zinc-300 rounded-full border-4 border-black relative z-10 shadow-[0_0_0_6px_rgba(0,0,0,1)]"></div>

                            <div className="absolute bottom-6 flex flex-col items-center w-[280px]">
                                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[11px] mb-4 text-center">Desarrollo Inmersivo</h4>
                                <div className="text-center w-full mb-4">
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">Proyectamos con tecnología VR/AR para que habites tu espacio y valides cada detalle antes de la construcción.</p>
                                </div>
                                <span className="text-zinc-500 text-sm font-medium">2</span>
                            </div>
                        </div>

                        {/* 3. Gestión de Ejecución */}
                        <div className="flex-1 flex justify-center relative z-10">
                            <div className="w-4 h-4 bg-zinc-300 rounded-full border-4 border-black relative z-10 shadow-[0_0_0_6px_rgba(0,0,0,1)]"></div>

                            <div className="absolute top-8 flex flex-col items-center w-[280px]">
                                <span className="text-zinc-500 text-sm font-medium mb-3">3</span>
                                <h4 className="text-white font-medium uppercase tracking-[0.2em] text-[11px] mb-4 text-center">Gestión de Ejecución</h4>
                                <div className="text-center w-full">
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">Supervisamos la obra bajo un esquema de transparencia radical con reportes en tiempo real a través de nuestra App.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TIMELINE MOBILE */}
                    <div className="flex lg:hidden flex-col gap-12 w-full mt-4 relative max-w-sm mx-auto">
                        {/* Línea vertical centrada */}
                        <div className="absolute top-2 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-zinc-800 z-0"></div>

                        {/* 1. Diagnóstico */}
                        <div className="relative pt-8 flex flex-col items-center w-full text-center">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-zinc-300 rounded-full border-4 border-black shadow-[0_0_0_4px_rgba(0,0,0,1)] z-20"></div>

                            <div className="bg-black relative z-10 flex flex-col items-center px-4 w-[280px]">
                                <span className="text-zinc-500 text-xs font-medium mb-2">Paso 1</span>
                                <h4 className="text-white font-medium uppercase tracking-[0.1em] text-xs mb-4">Diagnóstico & Estrategia</h4>
                                <div className="text-center w-full">
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">Analizamos el potencial de cada proyecto para trazar una ruta crítica de diseño desde el día uno.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Desarrollo Inmersivo */}
                        <div className="relative pt-8 flex flex-col items-center w-full text-center">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-zinc-300 rounded-full border-4 border-black shadow-[0_0_0_4px_rgba(0,0,0,1)] z-20"></div>

                            <div className="bg-black relative z-10 flex flex-col items-center px-4 w-[280px]">
                                <span className="text-zinc-500 text-xs font-medium mb-2">Paso 2</span>
                                <h4 className="text-white font-medium uppercase tracking-[0.1em] text-xs mb-4">Desarrollo Inmersivo</h4>
                                <div className="text-center w-full">
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">Proyectamos con tecnología VR/AR para que habites tu espacio y valides cada detalle antes de la construcción.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Gestión de Ejecución */}
                        <div className="relative pt-8 flex flex-col items-center w-full text-center">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-zinc-300 rounded-full border-4 border-black shadow-[0_0_0_4px_rgba(0,0,0,1)] z-20"></div>

                            <div className="bg-black relative z-10 flex flex-col items-center px-4 w-[280px]">
                                <span className="text-zinc-500 text-xs font-medium mb-2">Paso 3</span>
                                <h4 className="text-white font-medium uppercase tracking-[0.1em] text-xs mb-4">Gestión de Ejecución</h4>
                                <div className="text-center w-full">
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed">Supervisamos la obra bajo un esquema de transparencia radical con reportes en tiempo real a través de nuestra App.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEPARADOR EXPLICITO */}
                    <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>
                </div>

                {/* LINEA BLANCA (SEPARADOR SERVICIOS) */}
                <div className="w-full border-t border-zinc-200 opacity-20 my-8 lg:my-16"></div>

                {/* SEPARADOR EXPLICITO */}
                <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>

                {/* NUESTROS SERVICIOS */}
                <div className="w-full flex flex-col items-center mt-8 lg:mt-16">
                    <span className="text-zinc-500 tracking-[0.4em] text-[10px] uppercase mb-8 block font-medium">Unidades de Negocio</span>
                    <h3 className="text-2xl lg:text-3xl font-bold uppercase mb-16 lg:mb-24 tracking-tighter leading-snug text-white text-center">
                        Nuestros Servicios
                    </h3>
                    {/* SEPARADOR EXPLICITO */}
                    <div style={{ width: '100%', height: '20px', flexShrink: 0 }}></div>

                    {/* SERVICIOS - ACCORDION MODERNO */}
                    <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px] lg:h-[700px] gap-2 lg:gap-4 text-left">
                        {/* 1. Arquitectura */}
                        <div className="relative w-full h-[250px] md:h-full md:flex-1 md:hover:flex-[3] lg:hover:flex-[4] transition-all duration-700 ease-in-out group overflow-hidden cursor-default border border-zinc-900 md:border-none">
                            <Image src="/servicios/arquitectura.png" alt="Arquitectura de Autor" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-60 md:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-700"></div>
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col justify-end">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-white/50 font-light text-xs tracking-widest">01</span>
                                    <div className="h-[1px] w-6 bg-white/30 transition-all duration-700 group-hover:w-12 group-hover:bg-white"></div>
                                </div>
                                <h4 className="text-white font-medium uppercase tracking-[0.15em] text-sm md:text-lg leading-tight mb-2 md:mb-0">Arquitectura de<br className="hidden md:block" /> Autor</h4>
                                <div className="overflow-hidden max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed mt-0 md:mt-4 md:max-w-sm">
                                        Proyectos ejecutivos de alta gama, desde la conceptualización hasta el último detalle técnico.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Interiorismo */}
                        <div className="relative w-full h-[250px] md:h-full md:flex-1 md:hover:flex-[3] lg:hover:flex-[4] transition-all duration-700 ease-in-out group overflow-hidden cursor-default border border-zinc-900 md:border-none">
                            <Image src="/servicios/interiorismo.png" alt="Interiorismo & Curaduría" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-60 md:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-700"></div>
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col justify-end">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-white/50 font-light text-xs tracking-widest">02</span>
                                    <div className="h-[1px] w-6 bg-white/30 transition-all duration-700 group-hover:w-12 group-hover:bg-white"></div>
                                </div>
                                <h4 className="text-white font-medium uppercase tracking-[0.15em] text-sm md:text-lg leading-tight mb-2 md:mb-0">Interiorismo &<br className="hidden md:block" /> Curaduría</h4>
                                <div className="overflow-hidden max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed mt-0 md:mt-4 md:max-w-sm">
                                        Diseño de atmósferas exclusivas, selección de acabados y mobiliario de alta calidad.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Gestión & Construcción */}
                        <div className="relative w-full h-[250px] md:h-full md:flex-1 md:hover:flex-[3] lg:hover:flex-[4] transition-all duration-700 ease-in-out group overflow-hidden cursor-default border border-zinc-900 md:border-none">
                            <Image src="/servicios/gestion.png" alt="Gestión & Construcción" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-60 md:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-700"></div>
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col justify-end">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-white/50 font-light text-xs tracking-widest">03</span>
                                    <div className="h-[1px] w-6 bg-white/30 transition-all duration-700 group-hover:w-12 group-hover:bg-white"></div>
                                </div>
                                <h4 className="text-white font-medium uppercase tracking-[0.15em] text-sm md:text-lg leading-tight mb-2 md:mb-0">Gestión &<br className="hidden md:block" /> Construcción</h4>
                                <div className="overflow-hidden max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed mt-0 md:mt-4 md:max-w-sm">
                                        Administración profesional de obra con enfoque en la optimización de recursos y tiempos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Visualización Inmersiva */}
                        <div className="relative w-full h-[250px] md:h-full md:flex-1 md:hover:flex-[3] lg:hover:flex-[4] transition-all duration-700 ease-in-out group overflow-hidden cursor-default border border-zinc-900 md:border-none">
                            <Image src="/servicios/visualizacion.png" alt="Visualización Inmersiva" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-60 md:opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-700"></div>
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col justify-end">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-white/50 font-light text-xs tracking-widest">04</span>
                                    <div className="h-[1px] w-6 bg-white/30 transition-all duration-700 group-hover:w-12 group-hover:bg-white"></div>
                                </div>
                                <h4 className="text-white font-medium uppercase tracking-[0.15em] text-sm md:text-lg leading-tight mb-2 md:mb-0">Visualización<br className="hidden md:block" /> Inmersiva</h4>
                                <div className="overflow-hidden max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed mt-0 md:mt-4 md:max-w-sm">
                                        Renders de ultra-alta definición, recorridos virtuales (VR) y realidad aumentada (AR).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEPARADOR EXPLICITO FINAL */}
                    <div style={{ width: '100%', height: '50px', flexShrink: 0 }}></div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;