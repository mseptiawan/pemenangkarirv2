import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  // Title idealnya 50-60 karakter
  title: "PemenangKarir - Automasi WA & AI Agent Bisnis 24/7",
  description:
    "Ubah WhatsApp bisnis Anda menjadi mesin sales otomatis. Solusi AI Agent untuk Showroom, Properti, Klinik, dan UMKM. Respon cepat, hemat biaya, dan tanpa langganan bulanan.",

  keywords: [
    "AI Automation Indonesia",
    "Chatbot WhatsApp Palembang",
    "AI Agent Bisnis",
    "Automasi Klinik",
    "PemenangKarir",
    "Solusi Admin AI",
  ],

  // Robots Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Tampilan saat link dishare di WA/FB)
  openGraph: {
    title: "PemenangKarir | Automasi AI Bisnis Tanpa Langganan",
    description:
      "Tingkatkan konversi penjualan 24/7 dengan asisten AI pintar. Hemat jutaan rupiah biaya admin!",
    url: "https://pemenangkarir.vercel.app", // Ganti dengan domain asli kamu nanti
    siteName: "PemenangKarir",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder public (1200x630px)
        width: 1200,
        height: 630,
        alt: "PemenangKarir AI Automation",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "PemenangKarir | AI Business Automation",
    description: "Ubah WA jadi mesin closing otomatis dalam 5 menit.",
    images: ["/og-image.png"],
  },

  // Metadata tambahan
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <link rel="canonical" href="https://pemenangkarir.vercel.app" />
      </head>
      <body className="antialiased font-inter text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
