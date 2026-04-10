import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-toh-navy text-white mt-16">
      <div className="max-w-6xl mx-auto px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-black text-toh-gold">TOHBATT</h3>
          <p className="mt-4 text-gray-300 leading-relaxed text-sm">
            Trust Of Hope Building And Training Technology (TOHBATT) builds
            skilled professionals and delivers quality construction services.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm text-toh-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-200 hover:text-toh-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-200 hover:text-toh-gold transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-200 hover:text-toh-gold transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/training" className="text-gray-200 hover:text-toh-gold transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-200 hover:text-toh-gold transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/stories" className="text-gray-200 hover:text-toh-gold transition-colors">
                Stories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm text-toh-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-200 leading-relaxed">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><span className="font-semibold text-white">Office:</span> 0249 886 896 / 0302 966 527</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.51 0 4.866.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><span className="font-semibold text-white">Director:</span> 0245 733 495 / 0279 711 120</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><span className="font-semibold text-white">WhatsApp:</span> +233 24 573 3495</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><span className="font-semibold text-white">GPS:</span> GS 0558 5658</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l6-3m-6 3V2m6 15l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m-6-2l6 2" />
              </svg>
              <span>R657 West End University Road</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-8 py-5 text-xs text-gray-300 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} TOHBATT. All rights reserved.
          </p>
          <p>Built with trust, opportunities, hope and technology.</p>
        </div>
      </div>
    </footer>
  );
}