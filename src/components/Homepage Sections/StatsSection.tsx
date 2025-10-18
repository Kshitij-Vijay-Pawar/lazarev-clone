"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
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
      description: "From user-research to scalable design systems we've got you covered",
      span: "col-span-2 row-span-1",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl bg-card p-6 flex flex-col justify-end border border-white/10 hover:border-primary/30 transition-all duration-300 group ${stat.span}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Top left index */}
              <span className="absolute top-4 left-4 text-sm text-text/50 font-mono">
                / {stat.id}
              </span>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="mt-2 text-text/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
