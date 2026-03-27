"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#101419]/80 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,0,0,0.4)]"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <div className="text-lg md:text-xl font-black text-[#2CFFCA] tracking-tighter font-headline">
          KINETIC MONOLITH
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-headline tracking-tight text-sm uppercase font-bold text-slate-400 hover:text-white transition-colors"
            href="#expertise"
          >
            Expertise
          </a>
          <a
            className="font-headline tracking-tight text-sm uppercase font-bold text-[#2CFFCA] border-b-2 border-[#2CFFCA] pb-1"
            href="#services"
          >
            Services
          </a>
          <a
            className="font-headline tracking-tight text-sm uppercase font-bold text-slate-400 hover:text-white transition-colors"
            href="#robotics"
          >
            Robotics
          </a>
          <a
            className="font-headline tracking-tight text-sm uppercase font-bold text-slate-400 hover:text-white transition-colors"
            href="#iot"
          >
            IoT
          </a>
          <a
            className="font-headline tracking-tight text-sm uppercase font-bold text-slate-400 hover:text-white transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary-container text-on-primary-fixed font-headline font-bold text-xs md:text-sm tracking-widest px-4 md:px-6 py-2 rounded-md hover:bg-primary-fixed-dim transition-colors uppercase"
        >
          GET AUDIT
        </motion.button>
      </div>
    </motion.nav>
  );
};
