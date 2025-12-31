"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqData = [
  {
    question: "Apa itu chatbot WhatsApp PemenangKarir?",
    answer:
      "Chatbot WhatsApp PemenangKarir adalah program cerdas berbasis AI yang dirancang khusus untuk mensimulasikan percakapan manusia. Fokus utamanya adalah mengotomatisasi layanan klinik seperti pendaftaran pasien, penjadwalan janji temu, dan menjawab FAQ medis secara instan 24/7.",
  },
  {
    question: "Apakah sistem ini aman untuk data privasi pasien?",
    answer:
      "Keamanan adalah prioritas kami. Sistem PemenangKarir menggunakan enkripsi tingkat tinggi dan dirancang untuk mematuhi regulasi privasi data kesehatan. Kami memastikan informasi pasien tetap aman, rahasia, dan hanya dapat diakses oleh pihak berwenang di klinik Anda.",
  },
  {
    question: "Bagaimana cara kerja chatbot untuk penjadwalan janji temu?",
    answer:
      "Alurnya sangat simpel: Pasien memilih menu 'Janji Temu', lalu AI akan menampilkan jadwal dokter secara real-time. Setelah pasien memilih waktu, sistem secara otomatis mengonfirmasi slot tersebut dan mengirimkan notifikasi instan ke admin klinik serta kalender sistem.",
  },
  {
    question: "Berapa biaya untuk implementasi chatbot WhatsApp ini?",
    answer:
      "Kami menawarkan paket yang fleksibel mulai dari Rp 200.000 per bulan. Biaya ini mencakup infrastruktur AI yang andal. Selain itu, kami juga menyediakan akses ke rekaman webinar tutorial untuk membantu Anda memahami potensi penuh otomasi ini.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      {/* Ornamen Latar Belakang Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 rounded-full text-[#4A5DDF] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <HelpCircle size={14} /> Information Center
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6 tracking-tight">
            Pertanyaan <span className="text-[#4A5DDF]">Umum</span>
          </h2>
          <p className="text-slate-500 text-lg font-inter">
            Temukan jawaban cepat seputar integrasi AI untuk operasional klinik
            Anda.
          </p>
        </div>

        {/* Modern Accordion */}
        <div className="grid gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group transition-all duration-500 rounded-2xl border ${
                  isOpen
                    ? "bg-white border-[#4A5DDF] shadow-[0_20px_50px_rgba(74,93,223,0.1)]"
                    : "bg-slate-50/50 border-transparent hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <span
                    className={`text-lg font-poppins font-semibold transition-colors duration-300 ${
                      isOpen ? "text-[#4A5DDF]" : "text-slate-700"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`transition-transform duration-500 ${
                      isOpen ? "rotate-180 text-[#4A5DDF]" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown size={20} strokeWidth={3} />
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
                    <div className="px-8 pb-8 pt-2 text-slate-500 font-inter leading-relaxed text-base border-t border-slate-100/50 mt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Support Card */}
        <div className="mt-16 p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#4A5DDF] rounded-full flex items-center justify-center">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="font-bold text-lg">Masih punya pertanyaan?</p>
              <p className="text-slate-400 text-sm">
                Tim kami siap membantu klinik Anda.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/yournumber"
            className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-[#4A5DDF] hover:text-white transition-all whitespace-nowrap"
          >
            Chat Support
          </a>
        </div>
      </div>
    </section>
  );
}
