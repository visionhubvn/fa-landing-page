"use client";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#3A4A43]/15 bg-[#101419]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8">
        <div className="text-lg font-bold text-[#2CFFCA] font-headline">
          KINETIC MONOLITH
        </div>
        <div className="flex gap-12">
          <a
            className="font-label text-[10px] uppercase tracking-[0.1em] text-slate-500 hover:text-[#2CFFCA] transition-colors"
            href="#"
          >
            Privacy Protocol
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.1em] text-slate-500 hover:text-[#2CFFCA] transition-colors"
            href="#"
          >
            Service Terms
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.1em] text-slate-500 hover:text-[#2CFFCA] transition-colors"
            href="#"
          >
            Global Support
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.1em] text-slate-500 hover:text-[#2CFFCA] transition-colors"
            href="#"
          >
            Machine Status
          </a>
        </div>
        <div className="font-label text-[10px] uppercase tracking-[0.1em] text-slate-500">
          © {new Date().getFullYear()} KINETIC MONOLITH. INDUSTRIAL PRECISION
          ENGINEERED.
        </div>
      </div>
    </footer>
  );
};
