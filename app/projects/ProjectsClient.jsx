"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ProjectsClient({ projects }) {
  return (
    <main className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <FadeIn>
            <h2 className="text-toh-gold font-bold uppercase tracking-widest text-sm mb-2">
              Our Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-black text-toh-navy uppercase italic tracking-tighter">
              Legacy Builders
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl">
              From the first GH¢30.00 contract in 2004 to international
              infrastructure today. Explore our footprint in construction and
              bio-gas technology.
            </p>
          </FadeIn>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                href={`/stories/${project.slug}`}
                className="group bg-toh-light rounded-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl block h-full"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-toh-navy text-toh-gold text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                    {project.category || "General Construction"}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-toh-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6">
                    {/* Fallback text if body is empty */}
                    {project.body
                      ? "Click to view full case study and project impact."
                      : "Project details coming soon."}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
