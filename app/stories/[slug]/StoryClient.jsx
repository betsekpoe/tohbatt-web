"use client";

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function StoryClient({ story }) {
    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <FadeIn className="text-center">
                    <h1 className="text-3xl font-bold text-toh-navy mb-6">Story Not Found</h1>
                    <Link href="/projects" className="text-toh-gold font-bold underline hover:text-toh-green transition">
                        Return to Projects
                    </Link>
                </FadeIn>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Header */}
            <header className="pt-20 pb-12 px-4 sm:px-8 bg-linear-to-b from-gray-50 to-white border-b border-gray-200">
                <FadeIn className="max-w-3xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-toh-navy italic leading-tight mb-4">
                        {story.title}
                    </h1>
                    {story.publishedAt && (
                        <p className="text-gray-500 text-sm font-medium">
                            {new Date(story.publishedAt).toLocaleDateString('en-US', { 
                                year: 'numeric', month: 'long', day: 'numeric' 
                            })}
                        </p>
                    )}
                </FadeIn>
            </header>

            {/* Content Section */}
            <article className="py-12 sm:py-20 px-4 sm:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Featured Image */}
                    {story.imageUrl && (
                        <FadeIn className="mb-8 sm:mb-12">
                            <img 
                                src={story.imageUrl} 
                                alt={story.title} 
                                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </FadeIn>
                    )}
                    
                    {/* Body Content */}
                    <FadeIn className="prose prose-lg max-w-none 
                                                    prose-headings:text-toh-navy prose-headings:font-black prose-headings:italic prose-headings:mt-8 prose-headings:mb-4
                                                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                                    prose-a:text-toh-gold prose-a:font-bold prose-a:no-underline hover:prose-a:text-toh-green prose-a:transition
                                                    prose-strong:text-toh-navy prose-strong:font-bold
                                                    prose-blockquote:border-l-4 prose-blockquote:border-toh-gold prose-blockquote:pl-4 prose-blockquote:italic
                                                    prose-img:rounded-2xl prose-img:shadow-md prose-img:my-8
                                                    prose-ul:my-6 prose-ol:my-6 prose-li:my-2">
                        <PortableText value={story.body} />
                    </FadeIn>
                </div>
            </article>
        </main>
    );
}
