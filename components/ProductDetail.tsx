"use client";
import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Share2, Info } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.variants?.metalColors[0].name || "Yellow Gold");
  const [selectedMetal, setSelectedMetal] = useState(product.variants?.metals[1].name || "14 KT");
  const [selectedSize, setSelectedSize] = useState(product.variants?.diamondSizes[3].size || "2.00");

  const isJewellery = product.category === "Jewellery";

  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="light" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-3xl bg-stone-50 overflow-hidden border border-stone-100 group"
          >
            <Image 
              src={product.id === "cathedral-princess-ring" ? "/images/assets/643c7746-0116-406d-88de-092ba6a53bb0.webp" : (product.mainImage || "/images/assets/643c7746-0116-406d-88de-092ba6a53bb0.webp")} 
              alt={product.name}
              fill
              className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Style No. {product.styleNo || "SJLR0179"}</span>
              <div className="flex gap-4">
                 <button className="text-stone-400 hover:text-stone-900 transition-colors"><Heart className="w-5 h-5" /></button>
                 <button className="text-stone-400 hover:text-stone-900 transition-colors"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>

            <h1 className="text-4xl font-serif text-stone-900 mb-8 leading-tight">
              {product.name}
            </h1>

            <div className="space-y-10">
              {/* Metal Color */}
              {product.variants?.metalColors && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-900">Metal Color</h3>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      InStock Designs
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {product.variants.metalColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`p-4 rounded-xl border transition-all text-center flex flex-col items-center gap-2 ${
                          selectedColor === color.name 
                            ? "border-stone-900 bg-stone-50" 
                            : "border-stone-100 hover:border-stone-300"
                        }`}
                      >
                        <div 
                          className="w-6 h-6 rounded-full border border-stone-200" 
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-[9px] font-bold uppercase tracking-wider">{color.name}</span>
                        <span className={`text-[8px] ${color.stock === "In Stock" ? "text-green-600" : "text-stone-400"}`}>
                          {color.stock}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Metal */}
              {product.variants?.metals && (
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-4">Metal</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {product.variants.metals.map((metal) => (
                      <button
                        key={metal.name}
                        onClick={() => setSelectedMetal(metal.name)}
                        className={`p-4 rounded-xl border transition-all text-center flex flex-col items-center gap-1 ${
                          selectedMetal === metal.name 
                            ? "border-stone-900 bg-stone-50" 
                            : "border-stone-100 hover:border-stone-300"
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider">{metal.name}</span>
                        <span className={`text-[8px] ${metal.stock === "In Stock" ? "text-green-600" : "text-stone-400"}`}>
                          {metal.stock}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Diamond Color & Size */}
              {product.variants && (
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-4">Diamond Color</h3>
                    <div className="p-4 rounded-xl border border-stone-900 bg-stone-50 text-center flex flex-col items-center gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider">FG</span>
                      <span className="text-[8px] text-green-600">In Stock</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-4">Center Diamond Size</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {product.variants.diamondSizes.slice(-2).map((size) => (
                        <button
                          key={size.size}
                          onClick={() => setSelectedSize(size.size)}
                          className={`p-4 rounded-xl border transition-all text-center flex flex-col items-center gap-1 ${
                            selectedSize === size.size 
                              ? "border-stone-900 bg-stone-50" 
                              : "border-stone-100 hover:border-stone-300"
                          }`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider">{size.size}</span>
                          <span className={`text-[8px] ${size.stock === "In Stock" ? "text-green-600" : "text-stone-400"}`}>
                            {size.stock}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Price and Cart */}
              <div className="pt-10 border-t border-stone-100 mt-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-3xl font-black text-stone-900">{product.formattedPrice}</span>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mt-1">Price inclusive of all taxes</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-900 underline flex items-center gap-1 cursor-pointer">
                      <Info className="w-3 h-3" /> Price Breakup
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-[2] bg-stone-900 text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-white border-2 border-stone-900 text-stone-900 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-stone-50 transition-all">
                    Customise
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
