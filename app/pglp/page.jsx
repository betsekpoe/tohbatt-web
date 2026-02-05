"use client"
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn"; // Import FadeIn

export default function PGLPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <FadeIn className="relative h-[60vh] flex items-center justify-center bg-toh-green overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Subtle grid pattern or architectural lines */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', size: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 text-center px-8">
          <h2 className="text-toh-gold font-bold uppercase tracking-[0.3em] mb-4">Division: Agribusiness</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white italic">
            PACIFIC GREENLAND <br /> POND (PGLP)
          </h1>
        </div>
      </FadeIn>

      {/* The Weija Lake Initiative */}
      <FadeIn className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-black text-toh-navy mb-6 uppercase">Sustainability at Scale</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              PGLP is TOHBATT's specialized wing dedicated to food security and sustainable resource management. Based primarily around the <strong>Weija Lake</strong>, we integrate modern construction techniques with ecological preservation.
            </p>
            <div className="space-y-6">
              {[
                { title: "Animal Rearing", desc: "Professional infrastructure for healthy livestock management." },
                { title: "Crop Production", desc: "Implementing irrigation and soil technology for high-yield harvests." },
                { title: "Fishing & Aquaculture", desc: "Sustainable fishing practices and pond construction on Weija Lake." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border-l-4 border-toh-green bg-gray-50">
                  <span className="font-black text-toh-green">0{i+1}</span>
                  <div>
                    <h4 className="font-bold text-toh-navy">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
               {/* Placeholder for Bio-gas/Agri imagery */}
               <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 italic">PGLP Site Image 1</div>
            </div>
            <div className="h-64 bg-toh-navy rounded-2xl mt-8 flex flex-col justify-center p-8">
               <span className="text-toh-gold text-4xl font-black mb-2">15+</span>
               <p className="text-white text-sm uppercase tracking-widest">Bio-gas Units Built for Farms</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-toh-navy py-16 text-center px-8"
      >
        <h2 className="text-white text-2xl font-bold mb-8 italic">Interested in Sustainable Agribusiness Solutions?</h2>
        <a href="/contact" className="inline-block bg-toh-gold text-toh-navy px-10 py-4 font-black uppercase tracking-tighter hover:scale-105 transition-transform">
          Partner With Us
        </a>
      </motion.section>
    </main>
  );
}