"use client"
import { registerStudent } from "@/app/actions";
import { useState } from "react";
import FadeIn from "@/components/FadeIn"; // Import FadeIn

export default function TrainingPage() {
  const [status, setStatus] = useState(null);

  async function handleRegister(formData) {
    const result = await registerStudent(formData);
    if (result.success) setStatus("success");
    else setStatus("error");
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-8">
      <FadeIn className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Info Side */}
        <div className="bg-toh-navy p-12 text-white">
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


        {/* Form Side */}
        <div className="p-12">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-toh-navy">Application Received!</h2>
              <p className="text-gray-600 mt-2">The TOHBATT registrar will contact you shortly.</p>
            </div>
          ) : (
            <form action={handleRegister} className="space-y-4">
              <h2 className="text-xl font-bold text-toh-navy mb-4">Enrollment Form</h2>
              <input name="fullName" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
              <input name="email" type="email" placeholder="Email Address" className="w-full p-3 border rounded-md" required />
              <input name="phone" placeholder="Phone Number" className="w-full p-3 border rounded-md" required />
              
              <select name="course" className="w-full p-3 border rounded-md bg-white" required>
                <option value="">Select Course</option>
                <option value="Bio-gas">Bio-gas Construction</option>
                <option value="Masonry">Professional Masonry</option>
                <option value="Agribusiness">Agribusiness</option>
              </select>

              <select name="location" className="w-full p-3 border rounded-md bg-white" required>
                <option value="">Primary Location</option>
                <option value="Ghana">Ghana</option>
                <option value="Liberia">Liberia</option>
              </select>

              <button className="w-full bg-toh-gold text-toh-navy py-3 font-black uppercase tracking-widest hover:bg-yellow-500 transition-all rounded-md">
                Submit Application
              </button>
              {status === "error" && <p className="text-red-500 text-sm text-center">Registration failed. Please try again.</p>}
            </form>
          )}
        </div>
      </FadeIn>

      {/* Additional Content */}
      <div className="max-w-4xl mx-auto mt-24">
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