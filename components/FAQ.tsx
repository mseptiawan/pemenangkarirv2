"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqData = [
  {
    question: "Apa itu Solusi Automasi dari PemenangKarir?",
    answer:
      "Kami membangun sistem asisten digital berbasis AI yang terintegrasi langsung dengan WhatsApp bisnis Anda. Sistem ini mampu menangani chat pelanggan secara mandiri, mulai dari menjawab pertanyaan produk, cek stok real-time, hingga mengatur janji temu secara otomatis 24/7.",
  },
  {
    question: "Apakah data bisnis dan pelanggan saya aman?",
    answer:
      "Sangat aman. Kami menggunakan infrastruktur cloud pribadi (seperti Supabase) dengan enkripsi standar industri. Data Anda tidak dibagikan ke pihak ketiga, dan seluruh riwayat percakapan tetap berada dalam kendali penuh bisnis Anda.",
  },
  {
    question: "Apakah sistem ini sulit dioperasikan?",
    answer:
      "Sama sekali tidak. Kami menerapkan prinsip 'Terima Beres'. Tim kami yang akan melakukan setup, integrasi, hingga pengujian. Anda dan tim admin cukup memantau dashboard atau membiarkan AI bekerja secara otomatis tanpa perlu keahlian IT.",
  },
  {
    question: "Berapa biaya operasional setelah sistem terpasang?",
    answer:
      "Sistem kami dirancang untuk efisiensi maksimal. Anda tidak perlu membayar biaya langganan software yang mahal setiap bulan. Biaya hanya dikeluarkan untuk penggunaan token AI (OpenAI) yang sangat murah, hanya sekitar Rp 15 - Rp 50 per balasan chat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 rounded-full text-[#4A5DDF] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <HelpCircle size={14} /> Information Center
          </div>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-6 tracking-tight">
            Pertanyaan <span className="text-[#4A5DDF]">Umum</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-inter">
            Segala hal yang perlu Anda ketahui tentang implementasi AI untuk
            efisiensi bisnis Anda.
          </p>
        </div>

        {/* Modern Accordion */}
        <div className="grid gap-3 md:gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-500 rounded-xl md:rounded-2xl border ${
                  isOpen
                    ? "bg-white border-[#4A5DDF] shadow-[0_15px_40px_rgba(74,93,223,0.08)]"
                    : "bg-slate-50/50 border-transparent hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-5 md:px-8 md:py-7 flex items-center justify-between text-left"
                >
                  <span
                    className={`text-base md:text-lg font-poppins font-semibold transition-colors duration-300 pr-4 ${
                      isOpen ? "text-[#4A5DDF]" : "text-slate-700"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`transition-transform duration-500 shrink-0 ${
                      isOpen ? "rotate-180 text-[#4A5DDF]" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={3} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 md:px-8 md:pb-8 pt-2 text-slate-500 font-inter leading-relaxed text-sm md:text-base border-t border-slate-100/50 mt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Support Card */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
            <div className="w-12 h-12 bg-[#4A5DDF] rounded-full flex items-center justify-center shrink-0">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="font-bold text-base md:text-lg">
                Punya kebutuhan khusus?
              </p>
              <p className="text-slate-400 text-xs md:text-sm">
                Diskusikan kebutuhan spesifik bisnis Anda dengan tim kami.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6289630909617"
            className="w-full md:w-auto bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-[#4A5DDF] hover:text-white transition-all text-center"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
