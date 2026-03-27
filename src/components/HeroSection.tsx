"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          alt="Futuristic automated factory floor with robotic arms and atmospheric blue and cyan lighting in a high-tech facility"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB94dVHTGdDsIDD9g4JH7J9IpBmr3SP-1DtisEccW8Omsb-FwqU2ExTeo1_mL0lp9LwA5f7dIiHgErFzBthJfmiVcI7_iTZWkO17JqNOiQmvnmCQ8e2VtYCeRQVWfAWX0g-hVjpR_0XF7a7xdF-3tVH7qlkE61Pibp0dqln6kV4QMN9H7vz0HjSnhEmY9NzRrxhS27m-KZORMLRhXyVU3-7C_qDhhM_H3l3TYNI19_yEFhXf5jqeM5uReojKO27_4kBe6NZTe32bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/15"
        >
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-primary-fixed">
            System Status: Active
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white leading-[1.1] md:leading-tight tracking-tighter mb-6 uppercase"
        >
          Intelligent{" "}
          <span className="text-transparent bg-clip-text kinetic-gradient">
            Automation
          </span>{" "}
          for the Modern Factory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-on-surface-variant max-w-2xl mb-10 font-light leading-relaxed md:leading-relaxed"
        >
          Scale your production with AI-driven robotics and IoT integration.
          Precision engineered for high-stakes industrial performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="kinetic-gradient text-on-primary-fixed font-headline font-bold text-base md:text-lg tracking-widest px-8 md:px-10 py-4 md:py-5 rounded-md hover:opacity-90 transition-all shadow-xl uppercase w-full sm:w-auto"
          >
            Request an Audit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border border-outline-variant/30 font-headline font-bold text-base md:text-lg tracking-widest hover:bg-surface-container-high transition-all uppercase w-full sm:w-auto"
          >
            View Ecosystem
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-24 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-outline rotate-90 origin-left mb-12">
          DECRYPT_DATA
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-primary-container to-transparent"></div>
      </motion.div>
    </section>
  );
};
