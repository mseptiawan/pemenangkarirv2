"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#services" },
    { name: "Fitur", href: "#whyus" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-slate-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#4A5DDF] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-indigo-200 shadow-lg">
            P
          </div>
          <span className="text-xl font-poppins font-bold text-slate-900 tracking-tight">
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

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#4A5DDF] transition-all active:scale-95 flex items-center gap-2">
            Konsultasi Gratis <ArrowRight size={16} />
          </button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
