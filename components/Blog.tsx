import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Otomasi",
    title: "Cara AI Meningkatkan Reservasi Barbershop Hingga 50%",
    desc: "Pelajari bagaimana teknologi chatbot membantu bisnis lokal mengelola jadwal tanpa admin manual.",
  },
  {
    category: "Tips Bisnis",
    title: "Menjawab Chat Pelanggan: Manual vs AI Chatbot",
    desc: "Perbandingan efisiensi waktu dan konversi penjualan antara penggunaan admin manusia dan AI.",
  },
  {
    category: "Teknologi",
    title: "Mengenal Fitur Appointment Otomatis via WhatsApp",
    desc: "Integrasi kalender pintar yang memungkinkan pelanggan booking jadwal langsung dari chat.",
  },
];

export default function Blog() {
  return (
    <section className="py-20 " id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full border border-indigo-200 text-indigo-600 text-sm font-semibold inline-block mb-4">
            Articles News
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest News & Blogs
          </h2>
          <p className="text-slate-500">
            Solusi cerdas dan edukasi teknologi untuk memajukan UMKM Indonesia.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-indigo-100 transition duration-300"
            >
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-6">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {post.desc}
              </p>
              <a
                href="https://blog-pemenangkarir.vercel.app"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Read More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <a
            href="https://blog-pemenangkarir.vercel.app"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition inline-flex items-center gap-2"
          >
            View More News <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
