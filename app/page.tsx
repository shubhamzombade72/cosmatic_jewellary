"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const product = products[currentIndex];
  const isJewellery = product.category === "Jewellery";

  return (
    <main className={`min-h-screen relative transition-colors duration-1000 ${isJewellery ? 'selection:bg-stone-100 selection:text-stone-900' : 'selection:bg-stone-500 selection:text-white'}`}>
      <Navbar theme={isJewellery ? 'dark' : 'light'} />

      {/* Luxury Framing - Left Side Vertical Text */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <p className={`rotate-180 [writing-mode:vertical-lr] text-[9px] tracking-[0.8em] uppercase font-black transition-colors duration-1000 ${isJewellery ? 'text-white/40' : 'text-stone-500/60'}`}>
          {isJewellery ? 'Handcrafted Heritage • Est. 1920' : 'Advanced Skincare • Est. 2024'}
        </p>
      </div>

      {/* Luxury Framing - Right Side Vertical Text */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <p className={`[writing-mode:vertical-lr] text-[9px] tracking-[0.8em] uppercase font-black transition-colors duration-1000 ${isJewellery ? 'text-white/40' : 'text-stone-500/60'}`}>
          Luminous {product.category} • Limited Edition
        </p>
      </div>

      {/* Category Pill Menu */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 bg-stone-950/80 backdrop-blur-3xl p-1.5 rounded-full border border-white/10 shadow-2xl">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 ${
                idx === currentIndex
                  ? "bg-white text-stone-950 shadow-xl scale-105"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <ProductBottleScroll product={product} />

          {/* Transition to details */}
          <div className={`relative z-10 transition-colors duration-1000 ${isJewellery ? 'bg-stone-950 text-white' : 'bg-stone-100 text-stone-900'}`}>
            
            {/* Product Details Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h3 className={`text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter transition-colors duration-1000 ${isJewellery ? 'text-white' : 'text-stone-800'}`}>{product.detailsSection.title}</h3>
                <p className={`text-xl leading-relaxed mb-8 font-light transition-colors duration-1000 ${isJewellery ? 'text-stone-300' : 'text-stone-600'}`}>
                  {product.detailsSection.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {product.features.map((feature, i) => (
                    <span key={i} className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-1000 ${isJewellery ? 'bg-white text-stone-950' : 'bg-stone-800 text-stone-100'}`}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.stats.map((stat, i) => (
                  <div key={i} className={`backdrop-blur-3xl p-8 rounded-3xl border shadow-2xl transition-all duration-1000 ${isJewellery ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'}`}>
                    <div className={`text-5xl font-bold mb-2 transition-colors duration-1000 ${isJewellery ? 'text-white' : 'text-stone-800'}`}>{stat.val}</div>
                    <div className={`font-bold text-[10px] uppercase tracking-[0.2em] transition-colors duration-1000 ${isJewellery ? 'text-stone-400' : 'text-stone-500'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Core Values Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto px-6 py-32 text-center"
            >
              <h3 className={`text-4xl md:text-5xl font-bold mb-6 uppercase transition-colors duration-1000 ${isJewellery ? 'text-white' : 'text-stone-800'}`}>{product.freshnessSection.title}</h3>
              <p className={`text-xl leading-relaxed max-w-2xl mx-auto font-light italic transition-colors duration-1000 ${isJewellery ? 'text-stone-300' : 'text-stone-600'}`}>
                {product.freshnessSection.description}
              </p>
            </motion.section>

            {/* Buy Now Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto px-6 py-48"
            >
              <div className={`backdrop-blur-3xl p-8 md:p-16 rounded-[4rem] border shadow-2xl flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ${isJewellery ? 'bg-white/5 border-white/10 text-white' : 'bg-stone-900/95 border-white/10 text-white'}`}>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter">Experience {product.name}</h2>
                  <p className="text-2xl text-stone-400 mb-10 font-light italic tracking-widest">{product.subName}</p>
                  
                  <div className="space-y-6 mb-10">
                    {product.buyNowSection.processingParams.map((param, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-stone-200 tracking-wide">{param}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-stone-500 space-y-3 font-medium">
                    <p>🚚 {product.buyNowSection.deliveryPromise}</p>
                    <p>🛡️ {product.buyNowSection.returnPolicy}</p>
                  </div>
                </div>

                <div className="w-full md:w-[450px] bg-white p-12 rounded-[3rem] text-center shadow-2xl">
                  <div className="text-6xl font-bold mb-2 text-stone-950">{product.buyNowSection.price}</div>
                  <div className="text-stone-500 mb-10 uppercase tracking-[0.3em] text-[10px] font-black">{product.buyNowSection.unit}</div>
                  <button 
                    className="w-full py-5 rounded-full text-white font-black text-xl transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl uppercase tracking-widest"
                    style={{ backgroundColor: isJewellery ? '#000' : product.themeColor }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.section>
          </div>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
