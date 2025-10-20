"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AICtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.to(img1Ref.current, {
      yPercent: 80,
      ease: "none",
      scrollTrigger: { trigger: section, scrub: true },
    });

    gsap.to(img2Ref.current, {
      yPercent: -10,
      scale: 1.05,
      ease: "none",
      scrollTrigger: { trigger: section, scrub: true },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#04010E] via-[#10093B] to-[#1E1462]"
    >
      {/* Floating glass shapes */}
      <div
        ref={img1Ref}
        className="absolute top-[-10%] left-[-9%] w-[40%] h-auto opacity-50"
      >
        <div className="relative w-auto h-full aspect-[1/1]">
          <Image
            src="/img2.png" // ring
            alt="3D Glass Shape 1"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div
        ref={img2Ref}
        className="absolute bottom-[-70%] right-[-40%] h-[180vh] w-auto opacity-80 pointer-events-none"
      >
        <div className="relative w-auto h-full aspect-[1/1]">
          <Image
            src="/img1.png"
            alt="3D Glass Shape 2"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 w-full flex flex-col items-center gap-8">
        <h2 className="text-6xl md:text-9xl font-extrabold text-white leading-tight tracking-tight">
          Golden standard in{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            UX + AI
          </span>
        </h2>

        <div className="w-full flex justify-center mt-4">
          <p className="mt-6 text-gray-300 text-xl md:text-3xl leading-relaxed max-w-7xl text-center">
            Look, we’ve been designing AI experiences since 2017 — and we’re not
            just dabbling in it; we’re dominating. We’ve tackled Adtech,
            Salestech, Fintech, Legaltech, Media — you name it.
          </p>
        </div>

        <p className=" mt-6 text-gray-300 text-xl md:text-3xl leading-relaxed max-w-7xl text-center">
          Want to see how we do it?
        </p>
        <div className="h-14">

        </div>

        {/* CTA Button */}
          <Link
            href="/solutions/ai-ml"
            className="flex items-center justify-center gap-2 bg-white text-black font-semibold p-20 rounded-full hover:bg-gray-200 transition-all duration-300 h-14 w-lg"
          >
            CHECK OUR UX + AI INNOVATIONS HERE
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 15 15">
              <path
                fillRule="evenodd"
                d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
