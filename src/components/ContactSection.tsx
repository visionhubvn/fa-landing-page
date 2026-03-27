"use client";

import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-xs font-headline font-bold text-secondary-container tracking-[0.3em] uppercase mb-6">
              Inquiry Protocol
            </h2>
            <h3 className="text-4xl font-headline font-extrabold text-white uppercase tracking-tighter mb-8">
              Initiate <br /> Consultation
            </h3>
            <p className="text-on-surface-variant mb-12 uppercase text-sm tracking-wide leading-relaxed">
              Complete the fields below to schedule a technical deep-dive with
              our engineering team.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white hover:text-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary-fixed">
                  distance
                </span>
                <span className="text-sm font-label uppercase tracking-widest">
                  Global HQ // Berlin, DE
                </span>
              </div>
              <div className="flex items-center gap-4 text-white hover:text-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary-fixed">
                  alternate_email
                </span>
                <span className="text-sm font-label uppercase tracking-widest">
                  comms@kineticmonolith.tech
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                  Operator Name
                </label>
                <input
                  className="bg-surface-container-highest border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-headline text-sm py-4 transition-all focus:outline-none"
                  placeholder="FULL NAME"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                  Network Identity
                </label>
                <input
                  className="bg-surface-container-highest border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-headline text-sm py-4 transition-all focus:outline-none"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                  Area of Interest
                </label>
                <select className="bg-surface-container-highest border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-headline text-sm py-4 transition-all appearance-none focus:outline-none">
                  <option>ROBOTIC SYSTEMS</option>
                  <option>IOT INTEGRATION</option>
                  <option>PREDICTIVE MAINTENANCE</option>
                  <option>PLC ARCHITECTURE</option>
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-outline">
                  Brief Summary
                </label>
                <textarea
                  className="bg-surface-container-highest border-none border-b-2 border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-headline text-sm py-4 transition-all resize-none focus:outline-none"
                  placeholder="DESCRIBE YOUR PROJECT SCALE..."
                  rows={4}
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full kinetic-gradient py-6 font-headline font-black text-on-primary-fixed uppercase tracking-[0.2em] hover:opacity-90 transition-all rounded-md shadow-lg"
                >
                  Submit Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
