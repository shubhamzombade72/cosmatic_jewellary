"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  theme?: 'light' | 'dark';
}

export default function Navbar({ theme = 'light' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === 'dark';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? isDark ? "bg-stone-950/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-white/80 backdrop-blur-md border-b border-stone-200 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center transition-transform group-hover:rotate-12`}>
             <div className="w-4 h-4 bg-white rounded-full blur-[2px]" />
          </div>
          <span className={`text-2xl font-bold tracking-tighter uppercase transition-colors duration-1000 ${isDark ? 'text-white' : 'text-stone-900'}`}>
            Luminous
          </span>
        </Link>

        <div className={`hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-1000 ${isDark ? 'text-white/70' : 'text-stone-600'}`}>
          <Link href="#" className="hover:text-stone-400 transition-colors">Collection</Link>
          <Link href="#" className="hover:text-stone-400 transition-colors">Philosophy</Link>
          <Link href="#" className="hover:text-stone-400 transition-colors">Ritual</Link>
        </div>

        <button className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl ${
          isDark ? 'bg-white text-stone-950' : 'bg-stone-900 text-white'
        }`}>
          Shop Now
        </button>
      </div>
    </nav>
  );
}
