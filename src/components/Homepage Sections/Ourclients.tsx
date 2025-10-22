"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const clientsRef = useRef<HTMLDivElement[]>([]);

  const clients = [
    {
      logo: "SHOPIFY",
      name: "Shopify",
      description:
        "We enhanced the UX for advanced Shopify analytics, helping Peel raise $5M and leading to its acquisition by Shopify.",
    },
    {
      logo: "BOEING",
      name: "Boeing",
      description:
        "Streamlining Boeing's blueprint approval process, we optimized and simplified company-wide procedures.",
    },
    {
      logo: "BLADE",
      name: "Blade",
      description:
        "Supporting Blade's marketing activities in the US and Europe, we boosted their market presence and engagement.",
    },
    {
      logo: "VT.COM",
      name: "VT.com",
      description:
        "We transformed internal communication and onboarding at Hewlett Packard by creating a series of engaging motion/reels, making the training process more effective.",
    },
    {
      logo: "VT.COM",
      name: "VT.com",
      description:
        "Designed an AI + News platform for content company founded by Patric Bet-David.",
    },
    {
      logo: "COREL DRAW",
      name: "Corel Draw",
      description:
        "Improving UX on Corel Draw's landing pages, we enhanced user experience and engagement.",
    },
    {
      logo: "ABU DHABI UNIVERSITY",
      name: "Abu Dhabi University",
      description:
        "Creating a new learning experience for Abu Dhabi University, we drove educational innovation and engagement.",
    },
    {
      logo: "MERKLE",
      name: "Merkle",
      description:
        "Designing digital campaigns for Merkle, we attracted more customers and drove engagement.",
    },
    {
      logo: "SOPRA BANKING",
      name: "Sopra Banking Software",
      description:
        "We uplifted Sopra Banking Software website design system for scalability, enhancing their digital presence.",
    },
  ];

  // ✅ Add each div to refs array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !clientsRef.current.includes(el)) {
      clientsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Description animation
      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Client cards stagger animation
      gsap.from(clientsRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1
            ref={headingRef}
            className="text-5xl lg:text-7xl font-bold mb-8"
          >
            Our clients
          </h1>
          <p
            ref={descRef}
            className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed"
          >
            Whether you&apos;re an AI startup aiming for Series D or an established
            brand seeking a digital transformation, our award-winning team will
            take your user-experience to the next level.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group cursor-pointer"
            >
              <div className="border border-gray-800 hover:border-gray-600 transition-all duration-500 p-8 h-full flex flex-col">
                {/* Logo */}
                <div className="mb-6 h-12 flex items-center">
                  <span className="text-2xl font-bold tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                    {client.logo}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-start">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/50">
            READ ALL OUTCOMES
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
