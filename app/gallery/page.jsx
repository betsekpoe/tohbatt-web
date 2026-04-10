"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { getSiteAssets } from "@/services/sanityService";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    getSiteAssets().then((data) => {
      setImages(data?.galleryImages || []);
    });
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex - 1 + images.length) % images.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex + 1) % images.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, selectedIndex]);

  function openImage(index) {
    setSelectedIndex(index);
    setTouchStartX(null);
    setTouchEndX(null);
  }

  function closeLightbox() {
    setSelectedIndex(null);
    setTouchStartX(null);
    setTouchEndX(null);
  }

  function goToPrevious() {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex - 1 + images.length) % images.length,
    );
  }

  function goToNext() {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % images.length,
    );
  }

  function handleTouchEnd() {
    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 60;

    if (swipeDistance > swipeThreshold) {
      goToNext();
    }

    if (swipeDistance < -swipeThreshold) {
      goToPrevious();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  }

  const activeImage = selectedIndex !== null ? images[selectedIndex] : null;

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
                  <button
                    type="button"
                    onClick={() => openImage(index)}
                    aria-label={`Open gallery image ${index + 1}`}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-toh-gold focus-visible:ring-offset-2 focus-visible:ring-offset-toh-light"
                  >
                    <div className="h-64 bg-gray-100 overflow-hidden">
                      <img
                        src={image.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
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

      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-14 right-0 text-white text-sm uppercase tracking-widest font-bold hover:text-toh-gold"
            >
              Close
            </button>

            <div
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
              onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
              onTouchMove={(event) => setTouchEndX(event.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 text-white rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 text-white rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <img
                src={activeImage.url}
                alt=""
                className="w-full max-h-[80vh] object-contain bg-black"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
              <p>
                {selectedIndex + 1} / {images.length}
              </p>
              <p>Use arrow keys or swipe to move through the gallery.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}