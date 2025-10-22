"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for smoother sequencing
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

      tl.from(".header", { opacity: 0, y: 50 })
        .from(".mission", { opacity: 0, x: -50 }, "-=0.3")
        .from(".values", { opacity: 0, x: 50 }, "-=0.5")
        .from(".cta", { opacity: 0, y: 50 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 header">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            About Our Agency
          </h1>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            We&apos;re a team of passionate designers and developers dedicated to
            creating exceptional digital experiences for B2B and AI companies.
          </p>
        </div>

        {/* Mission + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="mission">
            <h2 className="text-3xl font-bold text-text mb-6">Our Mission</h2>
            <p className="text-lg text-text/70 mb-6 leading-relaxed">
              We believe that great design is the foundation of successful
              products. Our mission is to help B2B and AI companies create user
              experiences that not only look beautiful but also drive real
              business results.
            </p>
            <p className="text-lg text-text/70 leading-relaxed">
              From initial concept to final implementation, we work closely with
              our clients to ensure every pixel serves a purpose and every
              interaction feels intuitive.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-white/10 values">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
            <ul className="space-y-4">
              {[
                "User-centered design approach",
                "Data-driven decision making",
                "Collaborative partnership",
                "Continuous innovation",
              ].map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text/70">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center cta">
          <h2 className="text-3xl font-bold text-text mb-8">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your product vision into
            reality.
          </p>
          <button className="bg-primary text-bg px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </main>
  );
}
