"use client"
import FadeIn from "@/components/FadeIn"; // Import FadeIn

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero: The Vision */}
      <FadeIn className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-toh-gold font-bold uppercase tracking-widest text-sm mb-2">Since 2004</h2>
            <h1 className="text-4xl md:text-6xl font-black text-toh-navy leading-tight">
              A Legacy of <span className="text-toh-gold">God&apos;s Faithfulness.</span>
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
      <FadeIn className="bg-toh-light py-16 sm:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-toh-navy mb-8">Instruction in Local Languages</h2>
          <p className="text-gray-700 text-xl leading-relaxed italic">
            &quot;To bridge the gap for those with limited formal education, we provide technical training in local languages, ensuring that the next generation of West African builders truly understands the &apos;Why&apos; and &apos;How&apos; of technology.&quot;
          </p>
          <div className="mt-10 flex justify-center gap-6 sm:gap-8">
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
      <FadeIn className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-gray-100">
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
              &quot;There were seasons when projects were stalled by economic shifts. During those times, I returned to the lake as a fisherman and to the fields as a farmer. Not just to survive, but to ensure our students&apos; training never stopped. We don&apos;t just build structures; we build people.&quot;
            </p>
            <p className="text-gray-500">
              This commitment to resilience is why TOHBATT has thrived for 21 years. We view every obstacle as a chance to innovate, a philosophy we pass down to every one of our 120+ graduates.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-toh-light py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-2xl font-black text-toh-navy mb-5">Industrial Attachment Opportunity</h2>
            <p className="text-gray-700 leading-relaxed">
              Trust Of Hope Building And Training Technology (TOHBATT) give opportunity to all Technical Schools,
              Technical Universities and Tvet School to have their industrial attachments.
            </p>
          </div>

          <div className="bg-toh-navy rounded-2xl p-8 text-white shadow-xl ring-1 ring-toh-gold/40">
            <h2 className="text-2xl font-black text-toh-gold mb-2">Contact Information</h2>
            <p className="text-gray-300 text-sm mb-6">Reach us directly through office lines, management contacts, or location details.</p>

            <div className="grid gap-4">
              <div className="bg-white/8 border border-white/15 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-toh-gold font-bold uppercase tracking-wide text-xs">Office</p>
                  <p className="text-white font-semibold">0249 886 896 / 0302 966 527</p>
                </div>
              </div>

              <div className="bg-white/8 border border-white/15 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.51 0 4.866.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-toh-gold font-bold uppercase tracking-wide text-xs">Director</p>
                  <p className="text-white font-semibold">0245 733 495 / 0279 711 120</p>
                </div>
              </div>

              <div className="bg-white/8 border border-white/15 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-toh-gold font-bold uppercase tracking-wide text-xs">WhatsApp</p>
                  <p className="text-white font-semibold">+233 24 573 3495</p>
                </div>
              </div>

              <div className="bg-white/8 border border-white/15 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-toh-gold font-bold uppercase tracking-wide text-xs">GPS</p>
                  <p className="text-white font-semibold">GS 0558 5658</p>
                </div>
              </div>

              <div className="bg-white/8 border border-white/15 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-toh-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l6-3m-6 3V2m6 15l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m-6-2l6 2" />
                </svg>
                <div>
                  <p className="text-toh-gold font-bold uppercase tracking-wide text-xs">Address</p>
                  <p className="text-white font-semibold">R657 West End University Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}