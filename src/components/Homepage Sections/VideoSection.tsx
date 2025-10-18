"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="w-full py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            See how we transform ideas into exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-6xl mx-auto flex justify-center"
        >
          {/* Video Container */}
          <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-3xl bg-card/20 backdrop-blur-sm border border-white/10 shadow-2xl">
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
            
            {/* Play button overlay (optional) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
