"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="expertise" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-lowest opacity-50 -skew-x-12 translate-x-20"></div>

      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            className="w-full h-[500px] object-cover rounded-md shadow-2xl relative z-10"
            alt="Close up of high-tech machine component with intricate wiring and metallic textures in a futuristic workshop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2njfKKBn3CwIiY3zv7X5XKfgJCdg3lS_m-8xUrRhOrUZaGBidmh6XqMkvgoT04vj1p8WX8v0gi8xLqX6cyLKUFV1FzOpQ5TTnmbdR6USLxsijCY8RJU_hxoQVkCRZI8nyxzdujRJ2cMrUgT0s-CAARjzGvY-5_9ngOiPfdN-1oQYnjSNdoCAycLgEHtFAy2AIVdWKdwJbG3dAClCPIDoRPIW0mhGPFYaEF3TUVygFliltaKBGXrxHbnezKSYrzdejKj-umghUuz4"
          />
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-primary-container opacity-30 z-0"></div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 px-8 py-6 bg-surface-container-highest z-20 shadow-xl border-r-4 border-primary-container"
          >
            <p className="text-xs font-headline font-black text-white uppercase tracking-widest leading-none">
              Est. 1998
            </p>
            <p className="text-[10px] text-outline uppercase mt-1">
              Foundry Protocol 1.0
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-headline font-bold text-primary-fixed tracking-[0.3em] uppercase mb-6">
            The Architects of Modern Industry
          </h2>
          <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-white uppercase tracking-tighter mb-8 leading-tight">
            Engineering the <br /> Kinetic Future.
          </h3>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
            <p>
              KINETIC MONOLITH was founded on a singular directive: that precision
              is the ultimate competitive advantage. For over two decades, we have
              bridged the gap between raw hardware and intelligent logic.
            </p>
            <p>
              We don&apos;t just supply robotics; we architect the nervous system
              of the modern factory. Our systems are currently powering heavy
              industry in over 40 countries, defining the standard for the
              fourth industrial revolution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
