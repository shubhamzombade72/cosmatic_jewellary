"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
  product: Product;
  scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: ProductTextOverlaysProps) {
  const isJewellery = product.category === "Jewellery";
  
  // Dynamic text colors based on category
  const titleColor = isJewellery ? "text-white" : "text-stone-800";
  const subtitleColor = isJewellery ? "text-stone-300" : "text-stone-500";
  const labelColor = isJewellery ? "text-stone-400" : "text-stone-500/60";

  // Fade in and out sections based on scroll progress
  const o1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const o2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  const o3 = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [50, -50]);

  const o4 = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
      <div className="w-full max-w-7xl px-6 relative h-full">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: o1, y: y1 }}
          className="absolute top-1/3 left-6 md:left-24 max-w-2xl"
        >
          <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${labelColor} mb-6`}>
            {isJewellery ? "Handcrafted Heritage" : "Dermatologically Refined"}
          </p>
          <h1 className={`text-7xl md:text-[8rem] font-bold mb-8 tracking-tighter ${titleColor} leading-[0.85] uppercase drop-shadow-lg`}>
            {product.section1.title}
          </h1>
          <p className={`text-2xl md:text-3xl ${subtitleColor} font-light tracking-[0.2em]`}>
            {product.section1.subtitle}
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: o2, y: y2 }}
          className="absolute top-1/2 right-6 md:right-24 max-w-lg text-right"
        >
          <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${labelColor} mb-6`}>
            {isJewellery ? "Artisanal Excellence" : "The Secret of Glow"}
          </p>
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${titleColor} uppercase drop-shadow-lg`}>
            {product.section2.title}
          </h2>
          <p className={`text-xl md:text-2xl ${subtitleColor} font-light leading-relaxed tracking-wide`}>
            {product.section2.subtitle}
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: o3, y: y3 }}
          className="absolute top-1/2 left-6 md:left-24 max-w-lg"
        >
          <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${labelColor} mb-6`}>
            {isJewellery ? "Goldsmith's Ritual" : "Deep Penetration"}
          </p>
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${titleColor} uppercase drop-shadow-lg`}>
            {product.section3.title}
          </h2>
          <p className={`text-xl md:text-2xl ${subtitleColor} font-light leading-relaxed tracking-wide`}>
            {product.section3.subtitle}
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          style={{ opacity: o4, y: y4 }}
          className="absolute top-1/3 text-center w-full left-0 px-6"
        >
          <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${labelColor} mb-6`}>
            {isJewellery ? "Timeless Brilliance" : "Experience Tomorrow"}
          </p>
          <h2 className={`text-6xl md:text-[7rem] font-bold mb-8 tracking-tighter ${titleColor} uppercase leading-none drop-shadow-2xl`}>
            {product.section4.title}
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
