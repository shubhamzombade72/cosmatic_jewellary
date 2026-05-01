"use client";
import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-stone-100"
      >
        <div className="relative aspect-square overflow-hidden bg-stone-50">
          {product.badge && (
            <div className="absolute top-4 left-0 z-10">
               <div className="bg-red-500 text-white text-[8px] font-black tracking-widest px-3 py-1 pr-4 rounded-r-full flex items-center gap-1">
                  {product.badge}
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
               </div>
            </div>
          )}
          <Image 
            src={product.mainImage || "/images/assets/81be160f-12d0-43d4-ab83-1d1de39311be.png"} 
            alt={product.name}
            fill
            className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-stone-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-stone-400" />
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-[11px] font-bold text-stone-900 uppercase tracking-wider mb-2 line-clamp-2 h-[32px]">
            {product.name}
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-black text-stone-900">{product.formattedPrice}</span>
            <div className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors">
               <div className="w-2 h-2 rounded-full bg-stone-200 group-hover:bg-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

interface ProductRowProps {
  title: string;
  products: Product[];
}

export function ProductRow({ title, products }: ProductRowProps) {
  return (
    <section className="py-24 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-serif text-stone-900 tracking-tight">{title}</h2>
          <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors border-b border-stone-200 pb-1">
            View All Collection
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
