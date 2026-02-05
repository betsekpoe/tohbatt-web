"use client"; // Required for Framer Motion
import { useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getPosts } from "@/services/sanityService";
import { urlFor } from "@/lib/sanity";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";
import FadeIn from "@/components/FadeIn";

var targetCounterValue = 120;

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(50, value, {
        duration: 0.8,
        ease: "easeOut",
        onUpdate(latest) {
          if (node) node.textContent = Math.round(latest);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      {/* <section className="bg-toh-navy text-white pt-24 pb-32 px-8">
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
                <Link href="/projects">Our Projects</Link>
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-sm font-black uppercase text-sm tracking-wider">
                Learn Skills
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Visual element representing a modern construction site *
            <div className="aspect-square bg-toh-green rounded-2xl opacity-20 absolute -top-4 -right-4 w-full h-full -z-10"></div>
            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden border-4 border-toh-gold shadow-2xl flex items-center justify-center">
              <span className="text-gray-500 italic">[Project Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section> */}
      <HeroSlider />

      {/* Workers Trained Counter */}
      <FadeIn className="text-center m-16 mb-0 py-3 border border-toh-gold">
        <h2 className="text-toh-navy text-3xl font-extrabold uppercase tracking-tight">
          <Counter value={targetCounterValue} />+ Workers Trained
        </h2>
      </FadeIn>

      {/* Services Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-toh-navy text-4xl font-black uppercase tracking-tight">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-toh-gold mx-auto mt-4"></div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Construction",
                desc: "Using modern technologies to provide excellent construction services with a focus on quality and sustainability.",
                image: "/animated-icons/under-construction.gif",
                link: "/projects",
                cta: "Let's Build",
              },
              {
                title: "Training",
                desc: "Providing comprehensive training to empower individuals with the skills needed in the construction industry.",
                image: "/animated-icons/training.gif",
                link: "/training",
                cta: "Get Started",
              },
            ].map((service, index) => (
              <FadeIn
                key={index}
                delay={index * 0.2}
                className="bg-white rounded-[1.5rem] p-10 text-left transition-all duration-300 ease-in-out border border-gray-200 border-t-[5px] border-t-toh-gold shadow-md relative overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl h-full"
              >
                <div className="flex mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-30 h-30 object-contain"
                  />
                </div>
                <h3 className="text-toh-navy text-2xl font-extrabold mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-0 grow">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="inline-block mt-6 text-toh-navy font-bold uppercase text-sm tracking-wider no-underline border-b-2 border-toh-gold pb-0.5 transition-colors hover:text-toh-gold self-start"
                >
                  {service.cta}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stories Section */}
      <section className="py-24 px-8 bg-toh-light">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-toh-navy text-4xl font-black uppercase tracking-tight">
              Legacy Stories
            </h2>
            <div className="w-20 h-1 bg-toh-gold mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Documenting our impact one project at a time.
            </p>
          </FadeIn>

          {/* Featured Post Card */}
          <div className="mb-12">
            {posts.length > 0 ? (
              <FadeIn>
              <Link href={`/stories/${posts[0].slug}`} className="block group">
                <div className="bg-white rounded-4xl overflow-hidden border border-toh-navy grid md:grid-cols-2 gap-0 relative transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image Side */}
                  <div className="h-64 md:h-auto min-h-100 relative overflow-hidden bg-gray-200">
                    {posts[0].mainImage && (
                      <img
                        src={urlFor(posts[0].mainImage).url()}
                        alt={posts[0].title}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-14 flex flex-col justify-center bg-white">
                    <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-widest">
                      <span className="text-toh-gold">{posts[0].category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">
                        {new Date(posts[0].publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-toh-navy mb-6 leading-tight group-hover:text-toh-gold transition-colors">
                      {posts[0].title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed line-clamp-3 mb-8">
                      {posts[0].body}
                    </p>

                    <div className="flex items-center gap-2 text-toh-navy font-bold uppercase tracking-wider text-sm border-b-2 border-toh-gold pb-1 self-start group-hover:text-toh-gold transition-colors">
                      Read Full Story
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              </FadeIn>
            ) : (
              <FadeIn className="text-center py-20 bg-white rounded-3xl border border-gray-200 border-dashed">
                <p className="text-gray-400 italic text-xl">
                  No stories published yet. Head to Sanity Studio to add one!
                </p>
              </FadeIn>
            )}
          </div>

          <div className="text-center">
            <FadeIn delay={0.2}>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-toh-navy text-toh-navy font-black uppercase tracking-wider rounded-full hover:bg-toh-navy hover:text-white transition-all duration-300"
            >
              View Other Posts
            </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <div id="contact-form">
        <ContactForm/>
      </div>
    </main>
  );
}
