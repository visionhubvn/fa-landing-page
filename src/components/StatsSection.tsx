"use client";

import { motion } from "framer-motion";

export const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-surface-container-low py-20 px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col border-l-4 border-primary-container pl-8 py-4"
        >
          <span className="text-5xl font-headline font-black text-white mb-2">
            +35%
          </span>
          <span className="text-xs font-label uppercase tracking-widest text-outline">
            Efficiency Increase
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col border-l-4 border-secondary-container pl-8 py-4"
        >
          <span className="text-5xl font-headline font-black text-white mb-2">
            -40%
          </span>
          <span className="text-xs font-label uppercase tracking-widest text-outline">
            Unscheduled Downtime
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col border-l-4 border-primary-container pl-8 py-4"
        >
          <span className="text-5xl font-headline font-black text-white mb-2">
            150+
          </span>
          <span className="text-xs font-label uppercase tracking-widest text-outline">
            Systems Deployed
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
