"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const IMAGES = [
  "/hero/IMG-20251201-WA0030.jpg",
  "/hero/IMG-20251201-WA0031.jpg",
  "/hero/IMG-20251201-WA0032.jpg",
  "/hero/IMG-20251201-WA0033.jpg",
  "/hero/IMG-20251206-WA0009.jpg",
  "/hero/IMG-20251206-WA0012.jpg",
  "/hero/IMG-20251206-WA0013.jpg",
  "/hero/IMG-20251206-WA0018.jpg",
  "/hero/IMG-20251206-WA0019.jpg",
  "/hero/IMG-20251206-WA0020.jpg",
  "/hero/Layer 0.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-toh-navy">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }} // Keep opacity low so text is readable
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={IMAGES[index]} 
            className="w-full h-full object-cover" 
            alt="TOHBATT Industrial Work"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-toh-gold font-bold uppercase tracking-[0.3em] mb-4"
        >
          Trust of Hope Building And Training Technology
        </motion.h2>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white italic leading-tight uppercase"
        >
          Quality Construction. <br />
          <span className="text-toh-gold uppercase not-italic">Skilled Training.</span>
        </motion.h1>
        
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="mt-10 flex gap-4"
        >
          <button className="bg-toh-gold text-toh-navy px-8 py-4 font-black uppercase tracking-tighter hover:bg-white cursor-pointer transition-colors">
            <Link href="/projects">OUR PROJECTS</Link>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 font-black uppercase tracking-tighter hover:bg-white hover:text-toh-navy cursor-pointer transition-all">
            <Link href="/about">LEARN MORE</Link>
          </button>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {IMAGES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 ${index === i ? "w-12 bg-toh-gold" : "w-4 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}