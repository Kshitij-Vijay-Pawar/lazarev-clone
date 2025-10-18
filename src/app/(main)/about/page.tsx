"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            About Our Agency
          </h1>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            We're a team of passionate designers and developers dedicated to creating exceptional digital experiences for B2B and AI companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-text mb-6">Our Mission</h2>
            <p className="text-lg text-text/70 mb-6 leading-relaxed">
              We believe that great design is the foundation of successful products. Our mission is to help B2B and AI companies create user experiences that not only look beautiful but also drive real business results.
            </p>
            <p className="text-lg text-text/70 leading-relaxed">
              From initial concept to final implementation, we work closely with our clients to ensure every pixel serves a purpose and every interaction feels intuitive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-text/70">User-centered design approach</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-text/70">Data-driven decision making</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-text/70">Collaborative partnership</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-text/70">Continuous innovation</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text mb-8">Ready to Work Together?</h2>
          <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your product vision into reality.
          </p>
          <button className="bg-primary text-bg px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </main>
  );
}
