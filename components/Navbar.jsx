'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-toh-navy rounded-lg flex items-center justify-center text-toh-gold font-bold text-xl">T</div>
          <span className="text-2xl font-black tracking-tighter text-toh-navy">TOHBATT</span>
        </div>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-medium text-toh-navy">
        <Link href="/" className="hover:text-toh-gold transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-toh-gold transition-colors">Projects</Link>
        <Link href="/training" className="hover:text-toh-gold transition-colors">Training</Link>
        <Link href="/about" className="hover:text-toh-gold transition-colors">About</Link>
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <button className="bg-toh-navy text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition-all">
          <Link href="#contact-form">Contact Us</Link>
        </button> 
      </div>

      {/* Hamburger Button */}
      <button 
        className="md:hidden text-toh-navy focus:outline-none"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-toh-navy focus:outline-none"
                  aria-label="Close menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div className="flex flex-col gap-6 px-8 py-4 font-medium text-toh-navy text-lg">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-toh-gold transition-colors">Home</Link>
                <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-toh-gold transition-colors">Projects</Link>
                <Link href="/training" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-toh-gold transition-colors">Training</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-toh-gold transition-colors">About</Link>
                <Link href="#contact-form" onClick={() => setIsMobileMenuOpen(false)} className="bg-toh-navy text-white px-6 py-2 rounded-md font-bold text-center mt-4">Contact Us</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}