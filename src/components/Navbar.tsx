'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    isBlackBg?: boolean;
}

export default function Navbar({ isBlackBg }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDarkText = menuOpen || (!isBlackBg && scrolled);
    const navBackgroundClass = menuOpen 
        ? "bg-white py-4 shadow-sm" 
        : isBlackBg 
            ? "bg-black py-4 border-b border-zinc-900" 
            : scrolled 
                ? "bg-white py-4 shadow-sm" 
                : "bg-transparent";

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .force-nav-padding { padding-left: 24px; padding-right: 24px; box-sizing: border-box; }
                @media (min-width: 768px) {
                    .force-nav-padding { padding-left: 60px !important; padding-right: 60px !important; }
                }
            `}} />
            <nav className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-700 font-outfit py-6 force-nav-padding",
                navBackgroundClass
            )}>
            <div className="w-full flex items-center justify-between relative">
                <Link href="/" className="relative transition-all duration-700 z-50" onClick={() => setMenuOpen(false)}>
                    <img
                        src={isDarkText ? "/logo-negro.png" : "/logo-blanco.png"}
                        alt="Interika"
                        className="transition-all duration-700 object-contain w-auto h-6 md:h-8"
                    />
                </Link>

                <div className="ml-auto flex items-center">
                    {/* Desktop Links */}
                    <div className={cn(
                        "hidden md:flex gap-10 text-xs uppercase tracking-widest font-light transition-colors duration-700",
                        isDarkText ? "text-black" : "text-white"
                    )}>
                        <Link href="#portafolio" className="hover:opacity-40 transition-opacity">Portafolio</Link>
                        <Link href="#tecnologia" className="hover:opacity-40 transition-opacity">Tecnología</Link>
                        <Link href="#about" className="hover:opacity-40 transition-opacity">About Us</Link>
                        <Link href="#contacto" className="hover:opacity-40 transition-opacity">Contacto</Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50 cursor-pointer gap-[4.5px]"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={cn("block w-5 h-[1.5px] rounded-full transition-transform duration-300 ease-in-out", isDarkText ? "bg-black" : "bg-white", menuOpen ? "rotate-45 translate-y-[6px]" : "")}></span>
                        <span className={cn("block w-5 h-[1.5px] rounded-full transition-opacity duration-300 ease-in-out", isDarkText ? "bg-black" : "bg-white", menuOpen ? "opacity-0" : "opacity-100")}></span>
                        <span className={cn("block w-5 h-[1.5px] rounded-full transition-transform duration-300 ease-in-out", isDarkText ? "bg-black" : "bg-white", menuOpen ? "-rotate-45 -translate-y-[6px]" : "")}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col pt-4 pb-12 px-8 font-outfit md:hidden border-t border-zinc-100 overflow-hidden"
                    >
                        <div className="flex flex-col items-end gap-8 text-[11px] uppercase tracking-[0.3em] font-light text-black">
                            <Link href="#portafolio" className="hover:opacity-40 transition-opacity" onClick={() => setMenuOpen(false)}>Portafolio</Link>
                            <Link href="#tecnologia" className="hover:opacity-40 transition-opacity" onClick={() => setMenuOpen(false)}>Tecnología</Link>
                            <Link href="#about" className="hover:opacity-40 transition-opacity" onClick={() => setMenuOpen(false)}>About Us</Link>
                            <Link href="#contacto" className="hover:opacity-40 transition-opacity" onClick={() => setMenuOpen(false)}>Contacto</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
        </>
    );
}
