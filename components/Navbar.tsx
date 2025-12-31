"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Layanan", href: "#services" },
    { name: "Fitur", href: "#whyus" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full z-[120] transition-all duration-300">
      {/* BACKGROUND LAYER */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out -z-10 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 opacity-100"
            : "opacity-0"
        }`}
      />

      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2 relative z-[130]">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4A5DDF] rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">
            P
          </div>
          <span className="text-base md:text-xl font-poppins font-bold text-slate-900 tracking-tight">
            Pemenang<span className="text-[#4A5DDF]">Karir</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#4A5DDF] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6289630909617?text=Halo%20PemenangKarir,%20saya%20tertarik%20konsultasi%20mengenai%20layanan%20AI%20untuk%20Klinik."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A5DDF] text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-[#3b4ab3] transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-indigo-100"
          >
            Konsultasi Gratis <ArrowRight size={16} />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <div className="md:hidden relative z-[130]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[125] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full max-w-[280px] flex flex-col items-center">
          {navLinks.map((link, index) => (
            <div key={link.name} className="w-full flex flex-col items-center">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-xl font-poppins font-semibold text-slate-800 hover:text-[#4A5DDF] active:scale-95 transition-all"
              >
                {link.name}
              </a>
              {/* PEMBATAS (DIVIDER) - Tidak muncul di item terakhir */}
              {index !== navLinks.length - 1 && (
                <div className="w-12 h-[1px] bg-slate-100 my-1"></div>
              )}
            </div>
          ))}

          <div className="mt-10 w-full px-6">
            <a
              href="https://wa.me/6289630909617?text=Halo%20PemenangKarir,%20saya%20ingin%20tanya%20lebih%20lanjut%20mengenai%20solusi%20AI%20Klinik%20(Mobile%20Menu)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#4A5DDF] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              Hubungi Kami <ArrowRight size={18} />
            </a>
            <p className="text-center text-slate-400 text-[10px] mt-6 uppercase tracking-[0.2em]">
              PemenangKarir AI Agent
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
