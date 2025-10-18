"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const sectionRef = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map progress to different movement speeds
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] bg-bg flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-card/20 to-bg" />
      
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
        {/* Central content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center z-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text mb-6">
            Innovation in Motion
          </h2>
          <p className="text-xl text-text/70 max-w-2xl mx-auto mb-8">
            Experience the power of cutting-edge design and seamless user experiences
          </p>
          <button className="bg-primary text-bg px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Explore Our Process
          </button>
        </motion.div>

        {/* Floating elements with parallax */}
        <motion.div
          style={{ y: ySlow }}
          className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30"
        >
          <div className="w-8 h-8 bg-primary rounded-lg" />
        </motion.div>

        <motion.div
          style={{ y: yMedium }}
          className="absolute top-32 right-20 w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-secondary/30"
        >
          <div className="w-6 h-6 bg-secondary rounded-lg" />
        </motion.div>

        <motion.div
          style={{ y: yFast }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-card/40 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        >
          <div className="w-10 h-10 bg-text/20 rounded-xl" />
        </motion.div>

        <motion.div
          style={{ y: yReverse }}
          className="absolute top-1/2 right-10 w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/40"
        >
          <div className="w-4 h-4 bg-primary rounded" />
        </motion.div>

        <motion.div
          style={{ y: ySlow }}
          className="absolute bottom-10 right-1/3 w-18 h-18 bg-secondary/25 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-secondary/35"
        >
          <div className="w-7 h-7 bg-secondary rounded-lg" />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
    </section>
  );
}
