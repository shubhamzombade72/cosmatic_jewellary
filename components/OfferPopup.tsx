"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface OfferPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function OfferPopup({ isVisible, onClose }: OfferPopupProps) {
  const [whatsapp, setWhatsapp] = useState("");

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors border border-white/20"
          >
            <X className="w-5 h-5 text-stone-800" />
          </button>

          {/* Left Side: Form */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-[#fdfcfb]">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2 leading-tight">
              Welcome to <br /> <span className="font-bold">Sonani Jewels</span> 👋
            </h2>
            <p className="text-stone-500 mb-8 text-sm">Please enter your account details below to log in.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">
                  Whatsapp No<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select className="bg-white border border-stone-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-200">
                    <option>+91</option>
                  </select>
                  <input 
                    type="text" 
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Enter WhatsApp No"
                    className="flex-1 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-200"
                  />
                </div>
              </div>

              <button className="w-full bg-[#1e293b] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-all shadow-lg">
                Login
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-100">
              <p className="text-stone-500 text-sm leading-relaxed">
                Join the Sonani world and enjoy <span className="font-bold text-stone-900">Rs.500 off</span> on your first purchase. Timeless brilliance awaits—exclusively for our newest members.
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:block w-[45%] relative min-h-[500px]">
            <Image 
              src="/images/assets/jwe.jpg" 
              alt="Luxury Jewellery" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent flex flex-col justify-end p-8 text-white">
               <div className="mb-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded flex items-center justify-center mb-4">
                     <div className="w-4 h-4 bg-white rounded-full blur-[2px]" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-widest uppercase mb-1">Sonani</h3>
                  <p className="text-[10px] tracking-[0.4em] uppercase opacity-70">Wear it | Feel it | Flaunt it</p>
               </div>
               <p className="text-sm font-light tracking-[0.2em] uppercase leading-relaxed">
                Let your sparkle shine <br /> without compromise
               </p>
               <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Get</div>
                  <div className="text-5xl font-bold mb-1">₹500 <span className="text-2xl opacity-70">OFF</span></div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black">Your First Ethical Treasure</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
