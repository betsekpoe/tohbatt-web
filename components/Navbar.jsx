import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-toh-navy rounded-lg flex items-center justify-center text-toh-gold font-bold text-xl">T</div>
          <span className="text-2xl font-black tracking-tighter text-toh-navy">TOHBATT</span>
        </div>
      </Link>
      
      <div className="hidden md:flex gap-8 font-medium text-toh-navy">
        <Link href="/" className="hover:text-toh-gold transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-toh-gold transition-colors">Projects</Link>
        <Link href="/training" className="hover:text-toh-gold transition-colors">Training</Link>
        <Link href="/about" className="hover:text-toh-gold transition-colors">About</Link>
      </div>

      <button className="bg-toh-navy text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition-all">
        <Link href="#contact-form">Contact Us</Link>
      </button> 
    </nav>
  );
}