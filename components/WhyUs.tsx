"use client";
import {
  Zap,
  Clock,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    title: "Respon Kilat 24/7",
    desc: "AI kami memastikan setiap pertanyaan pasien dijawab dalam hitungan detik, bahkan di luar jam operasional klinik.",
    icon: <Clock size={28} />, // Ukuran icon sedikit dikecilkan untuk mobile
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Otomasi Janji Temu",
    desc: "Pasien bisa langsung mendaftar dan cek jadwal dokter tanpa perlu antre di WhatsApp, semuanya otomatis masuk database.",
    icon: <Zap size={28} />,
    color: "text-[#4A5DDF]",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Privasi Data Pasien",
    desc: "Kami menerapkan standar enkripsi tinggi untuk menjamin kerahasiaan rekam medis dan database pasien Anda tetap aman.",
    icon: <ShieldCheck size={28} />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Spesialis AI Klinik",
    desc: "Bukan sekadar bot umum, sistem kami dirancang khusus memahami istilah medis dan alur pelayanan kesehatan.",
    icon: <Stethoscope size={28} />,
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
              <CheckCircle size={14} /> Solusi Masa Depan Klinik
            </div>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 leading-[1.2] mb-6 md:mb-8">
              Mengapa Klinik <br className="hidden md:block" />
              Mempercayakan <br className="hidden md:block" />
              AI ke <span className="text-[#4A5DDF]">PemenangKarir?</span>
            </h2>
            <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              Tugas saya adalah memberikan solusi bagi klinik untuk
              menghilangkan hambatan admin melalui teknologi asisten AI yang
              cerdas dan siap pakai.
            </p>

            <button className="group flex items-center gap-3 font-poppins font-bold text-slate-900 hover:text-[#4A5DDF] transition-colors text-base md:text-lg">
              Pelajari Standar Keamanan
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
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

                  {/* Dekorasi Garis bawah - disembunyikan di mobile agar lebih clean, atau tetap ada */}
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
