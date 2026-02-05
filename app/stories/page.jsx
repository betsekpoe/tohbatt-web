"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPosts } from "@/services/sanityService";
import { urlFor } from "@/lib/sanity";
import FadeIn from "@/components/FadeIn"; // Import FadeIn

export default function StoriesPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-toh-navy text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <span className="text-toh-gold font-bold tracking-widest uppercase text-sm">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
              Legacy Stories
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our projects, training programs, and the impact we are making
              across West Africa. Every structure built and every worker trained tells a story.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-8 bg-toh-light">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <FadeIn
                  key={index}
                  delay={index * 0.1}
                >
                  <Link href={`/stories/${post.slug}`} className="block h-full">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                      
                      {/* Image */}
                      <div className="h-56 overflow-hidden bg-gray-200 relative">
                        {post.mainImage ? (
                           <img
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-400">
                             No Image
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-toh-gold text-toh-navy text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                          {post.category || "News"}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                          {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h3 className="text-xl font-extrabold text-toh-navy mb-3 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                          {post.body}
                        </p>
                        <span className="text-toh-navy font-bold text-xs uppercase tracking-wider border-b-2 border-toh-gold pb-1 self-start group-hover:text-toh-gold transition-colors">
                          Read Full Story →
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          ) : (
             <div className="text-center py-20">
               <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                 <span className="text-4xl">📝</span>
               </div>
               <h3 className="text-xl font-bold text-toh-navy">No stories found</h3>
               <p className="text-gray-500 mt-2">Check back later for updates from the field.</p>
             </div>
          )}
        </div>
      </section>
    </main>
  );
}
