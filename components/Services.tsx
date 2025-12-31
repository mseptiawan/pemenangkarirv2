import {
  Globe,
  ArrowRight,
  Sparkles,
  Bot,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Judul Utama */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full text-[#4A5DDF] text-xs font-bold uppercase tracking-widest mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold text-slate-900 leading-tight tracking-tight">
            Solusi Pintar <span className="text-[#4A5DDF]">Klinik Modern</span>
          </h2>
          <p className="mt-6 text-slate-500 font-inter text-lg max-w-2xl mx-auto">
            Kami menghadirkan infrastruktur AI yang memastikan operasional
            klinik Anda tetap berjalan optimal tanpa bergantung penuh pada admin
            manual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* CARD UTAMA (AI AGENTS) */}
          <div className="lg:col-span-8 group relative bg-gradient-to-br from-[#4A5DDF] to-[#2E1065] rounded-[3.5rem] p-10 md:p-16 overflow-hidden shadow-2xl shadow-indigo-100 transition-all duration-500 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full -mr-40 -mt-40"></div>

            <div className="relative z-10 flex flex-col h-full text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-8 w-fit">
                <Sparkles size={12} className="text-yellow-300 md:w-[14px]" />
                Specialized AI Agent
              </div>

              <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-6 leading-tight">
                Asisten Digital <br className="hidden md:block" /> Profesional
                24/7
              </h3>

              <p className="text-indigo-100 font-inter text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                Tingkatkan kepuasan pasien dengan asisten AI berbasis n8n yang
                tidak hanya menjawab, tapi mengerti kebutuhan pasien secara
                manusiawi.
              </p>

              {/* Fitur Highlights sebagai Benefit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                  "Jadwalkan Janji Temu Otomatis",
                  "Cek Jadwal Dokter & Praktik",
                  "Bahasa Manusiawi & Ingat Konteks",
                  "Sinkronisasi Kalender & Email",
                  "Knowledge Base FAQ Medis",
                  "Respon Instan dalam Detik",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 text-white/90 font-medium text-sm md:text-base"
                  >
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              <button className="w-full sm:w-fit px-10 py-5 bg-[#10B981] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-[#10B981] transition-all shadow-xl active:scale-95">
                Mulai Automasi Klinik <ArrowRight size={18} />
              </button>
            </div>

            <Bot className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 -rotate-12" />
          </div>

          {/* CARD KANAN (MAINTENANCE & INFRASTRUCTURE) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Maintenance Card */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 transition-all hover:bg-white hover:shadow-lg flex-1">
              <div className="w-12 h-12 bg-indigo-50 text-[#4A5DDF] rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-poppins font-bold text-slate-900 mb-2">
                Terima Beres
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Kami tangani seluruh maintenance dan update sistem. Anda cukup
                fokus melayani pasien.
              </p>
              <div className="flex items-center gap-2 text-[#4A5DDF] text-xs font-bold uppercase">
                Fully Managed Solution
              </div>
            </div>

            {/* Web Support Card */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 transition-all hover:bg-white hover:shadow-lg flex-1">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-poppins font-bold text-slate-900 mb-2">
                Web Infrastructure
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Landing page profesional untuk mendukung sistem pendaftaran
                online klinik Anda.
              </p>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center group/link cursor-pointer">
                <span className="text-sm font-bold">Portofolio Web</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
