"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ProductTextOverlays from "./ProductTextOverlays";
import { Product } from "@/data/products";

interface ProductBottleScrollProps {
  product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalFrames = product.frameCount;
    
    // Reset images when product changes
    setImages([]);
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, '0');
      img.src = `${product.folderPath}/ezgif-frame-${frameIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
        }
      };
      loadedImages[i - 1] = img;
    }
  }, [product.folderPath, product.frameCount]);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[index];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useEffect(() => {
    if (images.length === product.frameCount) {
      requestAnimationFrame(() => drawImage(0));
    }
  }, [images, product.frameCount]);

  useEffect(() => {
    const handleResize = () => {
      const progress = scrollYProgress.get();
      const frameIndex = Math.min(product.frameCount - 1, Math.max(0, Math.floor(progress * product.frameCount)));
      requestAnimationFrame(() => drawImage(frameIndex));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress, product.frameCount]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(product.frameCount - 1, Math.max(0, Math.floor(latest * product.frameCount)));
    requestAnimationFrame(() => drawImage(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Midnight Blue overlays for depth */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f172a]/20 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f172a]/20 to-transparent" />
        </div>

        <canvas 
          ref={canvasRef} 
          className="w-full h-full absolute inset-0 z-10"
        />

        {/* Global Vignette */}
        <div className="absolute inset-0 z-30 pointer-events-none shadow-[inset_0_0_200px_rgba(15,23,42,0.2)]" />

        <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
