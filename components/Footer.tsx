import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Brand Identity */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-9 h-9 md:w-11 md:h-11 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo PemenangKarir"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-poppins font-bold text-slate-900 tracking-tight">
                Pemenang<span className="text-[#4A5DDF]">Karir</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Spesialis integrasi AI Agents untuk klinik dan layanan kesehatan.
              Membantu operasional medis lebih efisien, responsif, dan
              terotomasi secara profesional.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#4A5DDF] hover:border-[#4A5DDF] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Layanan */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Layanan
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#services" className="hover:text-[#4A5DDF] transition">
                  AI Appointment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4A5DDF] transition">
                  Smart FAQ Bot
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4A5DDF] transition">
                  n8n Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4A5DDF] transition">
                  Infrastructure Support
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Bantuan */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Bantuan
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-[#4A5DDF] transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#4A5DDF] transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A5DDF] transition">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A5DDF] transition">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin size={18} className="text-[#4A5DDF] shrink-0" />
                <span>Palembang, Sumatera Selatan, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={18} className="text-[#4A5DDF] shrink-0" />
                <span>mseptiawan017@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={18} className="text-[#4A5DDF] shrink-0" />
                <span>+62 8963 0909 617</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © 2025 PemenangKarir. Specialized AI Agent for Medical Services.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
