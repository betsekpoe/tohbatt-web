"use client"; // Required for Framer Motion
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getPosts } from "@/services/sanityService";
import { urlFor } from "@/lib/sanity";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="bg-toh-navy text-white pt-24 pb-32 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-toh-gold font-bold tracking-widest uppercase text-sm">Now in Ghana & Liberia</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
              Building Infrastructure, <br />
              <span className="text-toh-gold text-outline">Empowering People.</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed">
              From sustainable bio-gas construction to professional masonry training, we provide the technology and skills to build lasting legacies.
            </p>
            <div className="flex gap-4 mt-10">
              <button className="bg-toh-gold text-toh-navy px-8 py-4 rounded-sm font-black uppercase text-sm tracking-wider">
                Our Projects
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-sm font-black uppercase text-sm tracking-wider">
                Learn Skills
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Visual element representing a modern construction site */}
            <div className="aspect-square bg-toh-green rounded-2xl opacity-20 absolute -top-4 -right-4 w-full h-full -z-10"></div>
            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden border-4 border-toh-gold shadow-2xl flex items-center justify-center">
              <span className="text-gray-500 italic">[Project Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-toh-navy text-4xl font-black uppercase tracking-tight">Our Core Pillars</h2>
            <div className="w-20 h-1 bg-toh-gold mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Construction",
                desc: "Specializing in Bio-gas systems, masonry, and sustainable infrastructure.",
                icon: "🏗️"
              },
              {
                title: "Technical Training",
                desc: "Empowering 120+ workers across West Africa with certified technical skills.",
                icon: "🎓"
              },
              {
                title: "Agribusiness",
                desc: "Developing PGLP Agribusiness modules for sustainable food security.",
                icon: "🌱"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 rounded-xl hover:shadow-2xl transition-all border-t-4 border-t-toh-gold shadow-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-toh-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stories Section */}
      <section className="py-24 px-8 bg-toh-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-toh-navy text-4xl font-black uppercase">Legacy Stories</h2>
              <p className="text-gray-600 mt-2">Documenting our impact across West Africa</p>
            </div>
            <button className="text-toh-navy font-bold border-b-2 border-toh-gold pb-1 hover:text-toh-gold transition-all">
              View All Stories
            </button>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {posts.length > 0 ? posts.map((post, index) => (

              /* Single Post Card */
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <div className="h-48 overflow-hidden bg-gray-200">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-toh-gold uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-xl font-bold text-toh-navy mt-2 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.body}</p>
                  <div className="text-toh-navy font-bold text-xs uppercase">Read All →</div>
                </div>
              </div>

            )) : (
              <p className="text-gray-400 italic">No stories published yet. Head to Sanity Studio to add one!</p>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}