"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { getSiteAssets } from "@/services/sanityService";

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getSiteAssets().then((data) => {
      setImages(data?.galleryImages || []);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-toh-navy text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <span className="text-toh-gold font-bold tracking-widest uppercase text-sm">Visual Projects</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">Image Gallery</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              A curated collection of project visuals uploaded and managed directly by our team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-8 bg-toh-light">
        <div className="max-w-6xl mx-auto">
          {images.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="h-64 bg-gray-100 overflow-hidden">
                      <img
                        src={image.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
              <p className="text-gray-500 font-semibold">No gallery images uploaded yet.</p>
            </FadeIn>
          )}
        </div>
      </section>
    </main>
  );
}