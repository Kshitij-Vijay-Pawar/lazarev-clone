"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurTrustedClients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and rise animation for title
      gsap.from(".trusted-title", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Fade up logos with stagger
      gsap.from(".trusted-logo", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center text-center py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6">
        <h2 className="trusted-title text-4xl md:text-5xl font-semibold text-white mb-12">
          Trusted by <span className="text-primary">global innovators</span>
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center">
          {[
            "spotify",
            "google",
            "microsoft",
            "amazon",
            "airbnb",
          ].map((logo, i) => (
            <div
              key={i}
              className="trusted-logo flex items-center justify-center opacity-80 hover:opacity-100 transition duration-300"
            >
              <Image
                src={`/logos/${logo}.png`} // ✅ put these inside /public/logos/
                alt={`${logo} logo`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <p className="trusted-title text-gray-400 text-lg mt-12 max-w-2xl mx-auto leading-relaxed">
          Our partnerships span industries — from AI-driven startups to enterprise
          powerhouses redefining user experiences.
        </p>
      </div>
    </section>
  );
}
