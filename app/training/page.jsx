"use client"
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn"; // Import FadeIn
import { getSiteAssets } from "@/services/sanityService";

export default function TrainingPage() {
  const [prospectusUrl, setProspectusUrl] = useState(null);

  useEffect(() => {
    getSiteAssets().then((data) => {
      setProspectusUrl(data?.prospectusUrl || null);
    });
  }, []);

  const whatsappHref = "https://wa.me/233245733495?text=Hello%20TOHBATT,%20I%20would%20like%20to%20apply%20for%20training.%20Please%20share%20the%20next%20steps.";

  return (
    <main className="min-h-screen bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-8">
      <FadeIn className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Info Side */}
        <div className="bg-toh-navy p-8 sm:p-10 md:p-12 text-white">
          <h1 className="text-3xl font-black mb-6">Empowering the Next Generation</h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Join over 120 certified professionals trained by TOHBATT across West Africa. Our courses are 80% practical and 20% theory.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">✅ Bio-gas Specialist Certification</li>
            <li className="flex items-center gap-3">✅ Modern Masonry & Infrastructure</li>
            <li className="flex items-center gap-3">✅ Sustainable Agribusiness</li>
          </ul>
        </div>


        {/* Apply Now Side */}
        <div className="p-8 sm:p-10 md:p-12 flex items-center">
          <div className="w-full bg-toh-light border border-toh-gold rounded-2xl p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-toh-gold/20 text-toh-navy text-2xl mb-5">
              ☎
            </div>
            <h2 className="text-2xl font-black text-toh-navy mb-3">Apply Now</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ready to enroll? Send us a WhatsApp message and we will guide you through the next steps.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 px-6 rounded-md font-black uppercase tracking-widest hover:bg-green-700 transition-all"
            >
              {/* <span className="text-lg">WhatsApp</span> */}
              <span>Send Us a Message</span>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              +233 24 573 3495
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Additional Content */}
      <div id="courses" className="max-w-4xl mx-auto mt-24 scroll-mt-24">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm mb-12">
          <h2 className="text-2xl font-black text-toh-navy mb-4">Courses Offering</h2>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Masonry, Tilling and Steel bending -- All in one course</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm mb-12">
          <h2 className="text-2xl font-black text-toh-navy mb-4">Partnership Courses</h2>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
            <li>General Carpentry</li>
            <li>Glass Fabrication</li>
            <li>Interior Decoration (POP installation, Painting , Skimming and Graffiato)</li>
            <li>Metal Fabrication (wielding)</li>
            <li>Electrical Engineering and CCT installation</li>
            <li>Plumbing and Bio-Digester</li>
          </ul>
        </div>

        <div className="bg-toh-light border border-toh-gold rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-2xl font-black text-toh-navy mb-2">Prospectus</h2>
            <p className="text-gray-700 leading-relaxed">Download the latest training prospectus for complete program details.</p>
          </div>
          {prospectusUrl ? (
            <a
              href={prospectusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-toh-navy text-white font-black uppercase tracking-wider rounded-full hover:bg-toh-gold hover:text-toh-navy transition-all duration-300"
            >
              View Prospectus
            </a>
          ) : (
            <span className="text-sm font-semibold text-gray-500">Prospectus file not uploaded yet.</span>
          )}
        </div>

        <div className="bg-toh-light border border-toh-gold rounded-2xl p-6 sm:p-8 mb-16">
          <h2 className="text-2xl font-black text-toh-navy mb-4">Probation Period</h2>
          <p className="text-gray-700 leading-relaxed">
            Thirty (30) working days probationer test will be conducted, before signing an agreement form.
          </p>
        </div>

        <h2 className="text-3xl font-black text-toh-navy text-center mb-12">Why Choose TOHBATT?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-toh-gold/20 flex items-center justify-center rounded-full mb-4 text-2xl">🛠️</div>
            <h3 className="font-bold text-toh-navy mb-2">Practical Focus</h3>
            <p className="text-gray-600 text-sm leading-relaxed">80% of our curriculum involves hands-on training on active construction sites, ensuring you are job-ready.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-toh-green/20 flex items-center justify-center rounded-full mb-4 text-2xl">🌱</div>
            <h3 className="font-bold text-toh-navy mb-2">Sustainable Tech</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Master cutting-edge bio-gas and eco-friendly construction techniques that are in high demand.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full mb-4 text-2xl">📜</div>
            <h3 className="font-bold text-toh-navy mb-2">Recognized Certification</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Receive industry-recognized certification upon successful project completion to boost your career.</p>
          </div>
        </div>

        <div className="mt-20">
             <h2 className="text-3xl font-black text-toh-navy text-center mb-12">Your Journey to Mastery</h2>
             <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-gray-200">
                <div className="relative flex gap-8 items-start">
                    <div className="w-10 h-10 rounded-full bg-toh-navy text-white shrink-0 flex items-center justify-center font-bold z-10 ring-4 ring-gray-50">1</div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 flex-1 shadow-sm">
                        <h3 className="text-xl font-bold text-toh-navy">Theory & Safety Foundation</h3>
                        <p className="text-gray-600 mt-2">Introduction to construction principles, site safety protocols, and material science to build a solid base.</p>
                    </div>
                </div>
                <div className="relative flex gap-8 items-start">
                    <div className="w-10 h-10 rounded-full bg-toh-navy text-white shrink-0 flex items-center justify-center font-bold z-10 ring-4 ring-gray-50">2</div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 flex-1 shadow-sm">
                        <h3 className="text-xl font-bold text-toh-navy">Specialized Workshops</h3>
                        <p className="text-gray-600 mt-2">Intensive modules on your chosen specialization (Bio-gas, Masonry, etc.) led by master craftsmen.</p>
                    </div>
                </div>
                <div className="relative flex gap-8 items-start">
                    <div className="w-10 h-10 rounded-full bg-toh-navy text-white shrink-0 flex items-center justify-center font-bold z-10 ring-4 ring-gray-50">3</div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 flex-1 shadow-sm">
                        <h3 className="text-xl font-bold text-toh-navy">Site Practicals</h3>
                        <p className="text-gray-600 mt-2">Three months of supervised work on actual TOHBATT client projects to apply your skills in the real world.</p>
                    </div>
                </div>
                 <div className="relative flex gap-8 items-start">
                    <div className="w-10 h-10 rounded-full bg-toh-gold text-toh-navy shrink-0 flex items-center justify-center font-bold z-10 ring-4 ring-gray-50">4</div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 flex-1 shadow-sm border-l-4 border-l-toh-gold">
                        <h3 className="text-xl font-bold text-toh-navy">Graduation & Placement</h3>
                        <p className="text-gray-600 mt-2">Final assessment, award of certificates, and potential job placement assistance for top performers.</p>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </main>
  );
}