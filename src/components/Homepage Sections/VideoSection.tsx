"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Title & text animation
        gsap.from([titleRef.current, textRef.current], {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        // Video animation
        gsap.from(videoRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-bg flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 flex flex-col items-center text-center gap-10">
        {/* Title */}
        <div ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-text">
            Our Work in Action
          </h2>
        </div>

        {/* Description */}
        <p
          ref={textRef}
          className="text-lg text-text/70 max-w-2xl mx-auto leading-relaxed"
        >
          See how we transform ideas into exceptional digital experiences
        </p>

        {/* Video Container */}
        <div
          ref={videoRef}
          className="relative w-full max-w-7xl aspect-video overflow-hidden rounded-3xl bg-card/20 backdrop-blur-sm border border-white/10 shadow-2xl flex justify-center items-center"
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/showreel_preview_1920_v3.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent" />

          {/* Floating dots */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
