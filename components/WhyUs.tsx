"use client";
import {
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    title: "Respon Kilat 24/7",
    desc: "AI kami memastikan setiap pertanyaan calon pembeli dijawab dalam 2 detik, bahkan saat tim Anda sedang beristirahat atau di hari libur.",
    icon: <Clock size={28} />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Otomasi Leads & Sales",
    desc: "Mulai dari cek stok, hitung simulasi cicilan, hingga reservasi jadwal survey—semuanya berjalan otomatis dan masuk ke database Anda.",
    icon: <Zap size={28} />,
    color: "text-[#4A5DDF]",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Keamanan Data Bisnis",
    desc: "Kami menjamin database pelanggan Anda aman. Sistem terintegrasi langsung dengan infrastruktur cloud pribadi tanpa pihak ketiga yang berisiko.",
    icon: <ShieldCheck size={28} />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Skalabilitas Tanpa Batas",
    desc: "Hadapi lonjakan chat dari iklan (Ads) tanpa perlu menambah biaya gaji admin. Satu sistem AI sanggup melayani ribuan chat sekaligus.",
    icon: <TrendingUp size={28} />,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-8 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* SISI KIRI: PENJELASAN */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full text-[#4A5DDF] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <CheckCircle size={14} /> Solusi Efisiensi Bisnis
            </div>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 leading-[1.2] mb-6 md:mb-8">
              Mengapa Bisnis <br className="hidden md:block" />
              Mempercayakan <br className="hidden md:block" />
              Automasi ke <span className="text-[#4A5DDF]">PemenangKarir?</span>
            </h2>
            <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              Saya membantu owner bisnis menghilangkan hambatan operasional
              melalui teknologi AI yang cerdas, luwes, dan berorientasi pada
              hasil (ROI).
            </p>
          </div>

          {/* SISI KANAN: GRID CARDS */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/40 lg:hover:-translate-y-2 flex flex-col h-full"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 ${r.bgColor} ${r.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform group-hover:rotate-3 group-hover:scale-110`}
                  >
                    {r.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-poppins font-bold text-slate-900 mb-3 md:mb-4">
                    {r.title}
                  </h3>

                  <p className="text-slate-500 font-inter leading-relaxed text-sm md:text-base">
                    {r.desc}
                  </p>

                  <div className="mt-auto pt-6 flex justify-end">
                    <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:w-12 md:group-hover:w-16 group-hover:bg-[#4A5DDF] transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
