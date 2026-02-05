"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn"; // Import FadeIn

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero: The Vision */}
      <FadeIn className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-toh-gold font-bold uppercase tracking-widest text-sm mb-2">Since 2004</h2>
            <h1 className="text-4xl md:text-6xl font-black text-toh-navy leading-tight">
              A Legacy of <span className="text-toh-gold">God's Faithfulness.</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Founded on <span className="font-bold">August 5, 2004</span>, by Mr. Isaac Goddey Nene, TOHBATT began with a vision to transform the construction sector. Starting with just 3 staff members and a first contract of only <span className="font-bold">GH¢30.00</span>, we have grown into a registered Private Limited Company (since 2013).
            </p>
          </div>
          <div className="bg-toh-navy p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-toh-gold/10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-toh-gold font-bold text-2xl mb-6">The TOHBATT Blueprint</h3>
            <ul className="space-y-4">
              {['Trust', 'Opportunities', 'Hope', 'Building', 'Action', 'Technology', 'Training'].map((word) => (
                <li key={word} className="flex items-center gap-3">
                  <span className="text-toh-gold font-black text-xl">{word[0]}</span>
                  <span className="text-gray-300">| {word}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* Philosophy Section */}
      <FadeIn className="bg-toh-light py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-toh-navy mb-8">Instruction in Local Languages</h2>
          <p className="text-gray-700 text-xl leading-relaxed italic">
            "To bridge the gap for those with limited formal education, we provide technical training in local languages, ensuring that the next generation of West African builders truly understands the 'Why' and 'How' of technology."
          </p>
          <div className="mt-10 flex justify-center gap-8">
             <div className="text-center">
                <span className="block text-3xl font-bold text-toh-green">21+</span>
                <span className="text-xs uppercase text-gray-500">Years Experience</span>
             </div>
             <div className="text-center">
                <span className="block text-3xl font-bold text-toh-green">120+</span>
                <span className="text-xs uppercase text-gray-500">Graduates</span>
             </div>
          </div>
        </div>
      </FadeIn>

      {/* Founder's Story: The Resilience */}
      <FadeIn className="py-20 px-8 max-w-6xl mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="aspect-3/4 bg-toh-navy rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-toh-navy to-transparent opacity-60"></div>
              <span className="text-toh-gold font-bold italic z-10">Isaac Goddey Nene</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-toh-gold font-bold uppercase tracking-widest text-sm mb-4">Leadership & Sacrifice</h3>
            <h2 className="text-3xl font-black text-toh-navy mb-6">Beyond the Blueprint</h2>
            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-toh-gold pl-6 mb-6">
              "There were seasons when projects were stalled by economic shifts. During those times, I returned to the lake as a fisherman and to the fields as a farmer. Not just to survive, but to ensure our students' training never stopped. We don't just build structures; we build people."
            </p>
            <p className="text-gray-500">
              This commitment to resilience is why TOHBATT has thrived for 21 years. We view every obstacle as a chance to innovate, a philosophy we pass down to every one of our 120+ graduates.
            </p>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}