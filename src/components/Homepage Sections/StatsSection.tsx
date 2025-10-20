"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statsRefs = useRef<HTMLDivElement[]>([]);

  const stats = [
    {
      id: "01",
      title: "$500M+",
      description: "in funding secured for our clients",
      span: "col-span-2 row-span-1",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      id: "02",
      title: "120+",
      description: "Awards backing our excellence",
      span: "col-span-2 sm:col-span-1 row-span-1",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      id: "03",
      title: "2015",
      description: "Founded, 9 years of experience",
      span: "col-span-2 sm:col-span-1 row-span-1",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      id: "04",
      title: "San Francisco",
      description: "Based in heart of AI",
      span: "col-span-2 row-span-1",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      id: "05",
      title: "All-in-One Solution",
      description:
        "From user-research to scalable design systems we've got you covered",
      span: "col-span-2 row-span-1",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Animate heading and description
        gsap.from(sectionRef.current!.querySelectorAll("h2, p"), {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });


        // Animate stat cards
        gsap.fromTo(
          statsRefs.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 md:px-12 bg-bg flex flex-col items-center h-screen justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col items-center text-center gap-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text">
            Our Impact
          </h2>
          <p className="text-lg text-text/70 max-w-2xl">
            Numbers that speak to our commitment to excellence and innovation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6 w-full max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => {
                if (el) statsRefs.current[index] = el;
              }}
              className={`relative rounded-2xl bg-card p-6 flex flex-col justify-center border border-white/10 hover:border-primary/30 transition-all duration-300 group ${stat.span}`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Top-left index */}
              <span className="absolute top-4 left-4 text-sm text-text/50 font-mono">
                / {stat.id}
              </span>

              {/* Text content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="mt-2 text-text/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
