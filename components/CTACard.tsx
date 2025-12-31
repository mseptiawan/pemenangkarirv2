import { MessageCircle, ArrowRight, Sparkles, Check } from "lucide-react";

export default function CTACard() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto relative group">
        {/* Efek Cahaya Halus - Dikurangi blurnya di mobile agar performa ringan */}
        <div className="absolute inset-0 bg-[#4A5DDF] blur-[60px] md:blur-[100px] opacity-10 group-hover:opacity-15 transition-opacity duration-700"></div>

        <div className="relative bg-gradient-to-br from-[#2E1065] to-[#1e1b4b] rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center overflow-hidden shadow-2xl">
          {/* Ornamen Latar Belakang */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Badge Penawaran */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[#38BDF8] text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8">
              <Sparkles size={14} /> Penawaran Terbatas
            </div>

            <h2 className="text-3xl md:text-6xl font-poppins font-bold text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight max-w-4xl">
              Siap Mentransformasi <br className="hidden md:block" />
              Layanan <span className="text-[#38BDF8]">Klinik Anda?</span>
            </h2>

            <p className="text-indigo-100 font-inter text-base md:text-xl mb-10 md:mb-12 max-w-2xl leading-relaxed">
              Tingkatkan kepuasan pasien dengan respon instan. Dapatkan{" "}
              <span className="text-white font-bold underline decoration-[#10B981] decoration-2 md:decoration-4 underline-offset-4">
                Promo Khusus
              </span>{" "}
              untuk 5 klinik pertama bulan ini.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full">
              {/* Button WhatsApp Utama */}
              <a
                href="https://wa.me/yournumber"
                className="group/btn w-full sm:w-auto bg-[#10B981] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-white hover:text-[#10B981] transition-all duration-300 shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3"
              >
                Hubungi Sekarang
                <ArrowRight
                  size={20}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </a>

              {/* Button Konsultasi */}
              <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
                <MessageCircle size={20} /> Konsultasi Gratis
              </button>
            </div>

            {/* Indikator Kepercayaan - Dibuat 1 kolom di mobile layar sangat kecil */}
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 text-indigo-200/60 text-xs md:text-sm font-medium">
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-emerald-400" /> Keamanan Data
                Terjamin
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-emerald-400" /> Setup Cepat 3-7
                Hari
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-emerald-400" /> Support 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
