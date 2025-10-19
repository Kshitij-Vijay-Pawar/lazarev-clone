"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heading1Ref = useRef<HTMLHeadingElement | null>(null);
  const heading2Ref = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const button1Ref = useRef<HTMLButtonElement | null>(null);
  const button2Ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const h1 = heading1Ref.current;
    const h2 = heading2Ref.current;
    const desc = descRef.current;
    const btn1 = button1Ref.current;
    const btn2 = button2Ref.current;

    if (!container || !h1 || !h2 || !desc || !btn1 || !btn2) return;

    // Set everything visible before animation starts
    gsap.set([container, h1, h2, desc, btn1, btn2], { opacity: 1 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(container, { opacity: 0, y: 40, duration: 0.8 })
        .from(h1, { opacity: 0, y: 40, duration: 0.8 }, "-=0.4")
        .from(h2, { opacity: 0, y: 40, duration: 0.8 }, "-=0.6")
        .from(desc, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        // Buttons animate one after another 👇
        .from(btn1, { opacity: 0, y: 40, duration: 0.6 }, "-=0.2")
        .from(btn2, { opacity: 0, y: 40, duration: 0.6 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-text text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-card/20 pointer-events-none" />

      <div ref={containerRef} className="relative z-10 flex flex-col items-center max-w-6xl opacity-0">
        <p className="text-lg md:text-xl font-medium text-text/80 mb-8 tracking-wider">
          AI + Product Design Agency /// San Francisco
        </p>

        <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-8">
          <h1 ref={heading1Ref} className="mb-2">
            UX-First Design Agency
          </h1>
          <h1 ref={heading2Ref} className="text-primary">
            for B2B + AI Companies
          </h1>
        </div>

        <div className="h-4">

        </div>

        <div
          ref={descRef}
          className="text-lg md:text-xl font-light text-text/80 max-w-3xl mx-auto leading-relaxed mt-14"
        >
          We launch{" "}
          <span className="text-primary font-medium">MVPs</span>, redefine{" "}
          <span className="text-primary font-medium">existing products</span> &
          continuously dive into{" "}
          <span className="text-primary font-medium">customer development</span>
        </div>
        <div className="h-9">

        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 justify-center items-center mt-14">
          <button
            ref={button1Ref}
            className="bg-primary text-bg px-10 py-10 rounded-full font-semibold text-lg hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-primary/30 min-w-[220px] h-12"
          >
            Start Your Project
          </button>
          <button
            ref={button2Ref}
            className="border-2 border-text/30 text-text px-10 py-10 rounded-full font-semibold text-lg hover:border-primary hover:text-primary hover:bg-primary/5 min-w-[220px] h-12"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full opacity-40 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full opacity-50 animate-pulse delay-2000" />
    </section>
  );
};

export default Hero;
