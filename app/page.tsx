import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import CTACard from "@/components/CTACard";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
// Ganti bagian <main> di page.tsx Anda menjadi seperti ini:
export default function Home() {
  return (
    // Latar belakang putih dengan gradasi sangat halus di sudut (Professional Look)
    <main className="min-h-screen bg-white bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/40 via-white to-white">
      <Navbar />

      <div className="flex flex-col gap-y-0">
        <Hero />
        {/* Berikan section yang kontras: satu putih, satu abu-abu sangat muda */}
        <div className="bg-slate-50/50">
          <Services />
        </div>
        <WhyUs />
        <div className="bg-[#2E1065]">
          {" "}
          {/* Hanya bagian CTA yang gelap untuk impact */}
          <CTACard />
        </div>
        <FAQ />
        <Blog />
      </div>

      <Footer />
    </main>
  );
}
