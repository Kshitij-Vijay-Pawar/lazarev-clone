"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh] text-text flex-col gap-8 text-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-card/20 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="text-lg md:text-xl font-medium text-text/80 mb-8 tracking-wider">
          AI + Product Design Agency  ///  San Francisco
        </div>
        
        <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-8 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2"
          >
            UX-First Design Agency
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary"
          >
            for B2B + AI Companies
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-light text-text/80 max-w-4xl mx-auto leading-relaxed"
        >
          We launch <span className='text-primary font-medium'>MVPs</span>, redefine <span className='text-primary font-medium'>existing products</span> & continuously dive into <span className='text-primary font-medium'>customer development</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
        >
          <button className="bg-primary text-bg px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 min-w-[200px]">
            Start Your Project
          </button>
          <button className="border-2 border-text/30 text-text px-10 py-5 rounded-full font-semibold text-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 min-w-[200px]">
            View Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full opacity-40 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full opacity-50 animate-pulse delay-2000" />
    </section>
  );
};

export default Hero;
