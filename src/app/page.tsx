'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Technology } from '@/components/ContentSections';
import Portfolio from '@/components/Portfolio';
import AboutSection from '@/components/AboutSection';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isAboutInView, setIsAboutInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center w-full overflow-x-hidden font-outfit">
      <Navbar isBlackBg={isAboutInView} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Portfolio */}
      <Portfolio />

      {/* HUGE SPACER FIX */}
      <div className="w-full h-32 md:h-[50px] bg-white flex-shrink-0" />

      {/* 3. Tecnología Proyectual */}
      <div className="w-full bg-white">
        <Technology />
      </div>

      {/* 4. About Us (Centered & Black) */}
      <AboutSection />

      {/* 5. Contacto (Split Layout) */}
      <section id="contacto" className="py-24 md:py-48 bg-white flex justify-center w-full">
        <div className="max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* IZQUIERDA: Texto y Botones */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start w-full text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-500 uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-[12px] block font-medium"
            >
              Contacto
            </motion.span>

            {/* SEPARADOR EXPLICITO */}
            <div style={{ width: '100%', height: '0px', flexShrink: 0 }}></div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] text-black"
            >
              Hablemos <br /><span className="font-light text-zinc-400">del Proyecto.</span>
            </motion.h2>

            {/* SEPARADOR EXPLICITO */}
            <div style={{ width: '100%', height: '40px', flexShrink: 0 }}></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-zinc-500 font-light leading-relaxed"
            >
              Inicia la ejecución de tu proyecto con certidumbre total.
            </motion.p>

            {/* SEPARADOR EXPLICITO */}
            <div style={{ width: '100%', height: '40px', flexShrink: 0 }}></div>

            <div className="flex flex-row flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
              <motion.a
                href="https://wa.me/524772645319"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 md:gap-4 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500 shadow-sm">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.818 11.818 0 001.59 5.91L0 24l6.117-1.605a11.81 11.81 0 005.928 1.603h.005c6.636 0 12.046-5.411 12.05-12.049a11.817 11.817 0 00-3.535-8.414V14.382z" /></svg>
                </div>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-zinc-400 font-medium pt-2">WhatsApp</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/interika.mx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 md:gap-4 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500 shadow-sm">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-zinc-400 font-medium pt-2">Instagram</span>
              </motion.a>

              <motion.a
                href="mailto:contacto@interika.mx"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 md:gap-4 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500 shadow-sm">
                  {/* Fixed Email Icon (Feather) */}
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" /><polyline points="3 7 12 13 21 7" /></svg>
                </div>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-zinc-400 font-medium pt-2">Email</span>
              </motion.a>
            </div>

            {/* SEPARADOR EXPLICITO ANTES DE UBICACIÓN */}
            <div style={{ width: '100%', height: '60px', flexShrink: 0 }}></div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 tracking-[0.4em] text-[10px] uppercase font-bold flex items-center gap-2"
            >
              📍 León, Gto.
            </motion.p>
          </div>

          {/* DERECHA: Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full bg-zinc-100 overflow-hidden shadow-2xl">
              <Image
                src="/contacto-escritorio.png"
                alt="Contacto Interika"
                fill
                className="object-cover transition-all duration-1000 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SEPARADOR EXPLICITO */}
      <div style={{ width: '100%', height: '150px', flexShrink: 0 }}></div>

      {/* Footer */}
      <footer className="py-32 bg-white w-full border-t border-zinc-50 font-outfit">
        <div className="px-6 flex flex-col items-center text-center gap-2">

          <div className="flex flex-col items-center gap-2">
            <h4 className="text-black font-bold tracking-[0.3em] text-[9px] md:text-xs uppercase">
              INTERIKA | Arquitectura · Interiorismo · Gestión
            </h4>
            <p className="text-zinc-400 text-[9px] md:text-sm tracking-widest max-w-2xl font-light leading-relaxed">
              Transformando la complejidad técnica en ejecución de excelencia.
            </p>
          </div>

          <div className="flex gap-16 text-zinc-400 text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
            <a href="https://www.instagram.com/interika.mx" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-medium">Instagram</a>
            <a href="mailto:contacto@interika.mx" className="hover:text-black transition-colors font-medium">Email</a>
          </div>

          <div className="w-12 h-[1px] bg-zinc-100"></div>

          <p className="text-zinc-300 text-[9px] uppercase tracking-[0.5em]">
            © 2026 Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
