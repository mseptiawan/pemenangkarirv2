import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full  flex items-center bg-white pt-20 overflow-hidden">
      {/* Soft Glow Background - Memberikan kesan teknologi tanpa terlihat norak */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full filter blur-[100px] opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* KIRI: Pesan Utama */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4A5DDF] text-xs font-bold mb-6 mt-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              SMART CLINIC ASSISTANT
            </div>

            <h1 className="text-5xl md:text-[50px] font-poppins font-bold text-slate-900 leading-[1.1] mb-6">
              Pasien Terhubung <br />
              <span className="text-[#4A5DDF]">
                Hanya dalam <br /> Hitungan Detik.
              </span>
            </h1>

            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Tugas saya memberikan solusi bagi klinik untuk mentransformasi
              chat WhatsApp menjadi pendaftaran & janji temu otomatis secara
              profesional.
            </p>

            {/* Benefit List */}
            <div className="space-y-3 mb-10">
              {[
                "Respon Cepat 24/7",
                "Janji Temu Otomatis",
                "Sinkronisasi Database",
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
                href="https://wa.me/6289630909617?text=Halo%20PemenangKarir,%20saya%20tertarik%20dengan%20solusi%20AI%20untuk%20otomasi%20klinik.%20Bisa%20bantu%20jelaskan?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A5DDF] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#3b4ab0] transition-all shadow-lg shadow-indigo-100 active:scale-95"
              >
                Konsultasi Gratis <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* KANAN: Visual Medis Modern */}
          <div className="relative">
            {/* Main Image Frame */}
            <div className="hidden md:block relative z-10 rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Medical Assistant Technology"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Info Card */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">
                  99%
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Akurasi Booking
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Pasien Terlayani Instan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
