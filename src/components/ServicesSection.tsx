"use client";

import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-headline font-bold text-primary-fixed tracking-[0.3em] uppercase mb-4">
            Core Capabilities
          </h2>
          <h3 className="text-5xl font-headline font-extrabold text-white uppercase tracking-tighter">
            Precision Verticals
          </h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md text-on-surface-variant text-sm uppercase leading-loose font-medium"
        >
          Our modular architecture allows for seamless integration of robotics,
          telemetry, and logic controllers into legacy environments.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-full md:h-[600px]">
        {/* Card 1 */}
        <motion.div
          id="robotics"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 bg-surface-container p-10 flex flex-col justify-between group relative overflow-hidden rounded-xl border border-outline-variant/10 shadow-lg"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span
              className="material-symbols-outlined text-9xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              precision_manufacturing
            </span>
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8">
              precision_manufacturing
            </span>
            <h4 className="text-3xl font-headline font-bold text-white uppercase mb-4">
              Robotic Systems
            </h4>
            <p className="text-on-surface-variant leading-relaxed">
              Autonomous multi-axis kinematic solutions designed for heavy-duty
              assembly and sub-millimeter precision welding.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-primary-fixed font-headline font-bold text-xs tracking-widest uppercase mt-8 group-hover:gap-4 transition-all relative z-10"
            href="#"
          >
            Module Specs{" "}
            <span className="material-symbols-outlined text-sm">north_east</span>
          </a>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          id="iot"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 bg-surface-container-high p-8 flex flex-col justify-between border-b-2 border-transparent hover:border-secondary-container transition-all rounded-xl"
        >
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-secondary-container text-3xl">
              sensors
            </span>
            <span className="text-[10px] font-label font-bold text-outline-variant uppercase">
              Module 02 // IoT
            </span>
          </div>
          <div>
            <h4 className="text-xl font-headline font-bold text-white uppercase mb-2">
              IoT Integration
            </h4>
            <p className="text-on-surface-variant text-sm">
              Edge-computing nodes for real-time telemetry across global factory
              networks.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-surface-container-low p-8 flex flex-col justify-between group rounded-xl hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-primary-fixed-dim text-3xl group-hover:rotate-45 transition-transform">
            analytics
          </span>
          <div>
            <h4 className="text-lg font-headline font-bold text-white uppercase mb-2">
              Predictive Maintenance
            </h4>
            <p className="text-on-surface-variant text-[13px]">
              AI-driven diagnostics to prevent mechanical failure before it
              occurs.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-surface-container-low p-8 flex flex-col justify-between group rounded-xl hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-primary-fixed-dim text-3xl group-hover:scale-110 transition-transform">
            memory
          </span>
          <div>
            <h4 className="text-lg font-headline font-bold text-white uppercase mb-2">
              Custom PLC Solutions
            </h4>
            <p className="text-on-surface-variant text-[13px]">
              Engineered logic control systems for highly specific manufacturing
              workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
