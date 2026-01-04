import React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center bg-white pt-20 overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full filter blur-[100px] opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* KIRI: Pesan Utama (Multi-Niche) */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4A5DDF] text-xs font-bold mb-6 mt-8">
              <Zap size={14} className="fill-indigo-500" />
              AI & WORKFLOW AUTOMATION
            </div>

            <h1 className="text-5xl md:text-[54px] font-poppins font-bold text-slate-900 leading-[1.1] mb-6">
              Bisnis Tetap Jalan, <br />
              <span className="text-[#4A5DDF]">
                Walau Anda <br /> Sedang Tidur.
              </span>
            </h1>

            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Kami mentransformasi cara bisnis Anda melayani pelanggan. Gantikan
              kerja manual dengan sistem AI yang cerdas, cepat, dan bekerja 24/7
              di WhatsApp Anda.
            </p>

            {/* Benefit List - Dibuat Universal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-10">
              {[
                "Respon Instan 2 Detik",
                "Booking & Reservasi Otomatis",
                "Update Stok & Harga Real-time",
                "Integrasi CRM & Database",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-600 font-medium"
                >
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6289630909617?text=Halo,%20saya%20tertarik%20dengan%20solusi%20AI%20Automation%20untuk%20bisnis%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A5DDF] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#3b4ab0] transition-all shadow-lg shadow-indigo-100 active:scale-95"
              >
                Konsultasi Strategi Gratis <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* KANAN: Visual Dashboard/Tech Modern */}
          <div className="relative">
            {/* Main Image - Gunakan gambar yang lebih umum (Modern Tech/Office) */}
            <div className="hidden md:block relative z-10 rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="AI Business Automation Technology"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Info Card */}
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 text-[#4A5DDF] rounded-full flex items-center justify-center font-bold">
                  24/7
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Sistem Selalu Aktif
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Otomasi Tanpa Henti
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Industry Badge */}
            <div className="hidden md:block absolute -top-6 -left-6 bg-white py-3 px-6 rounded-xl shadow-lg z-20 border border-slate-50">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                Industri Tercover
              </p>
              <p className="text-sm font-bold text-indigo-600">
                Showroom • Klinik • Properti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
