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
  title: "PemenangKarir | Solusi Chatbot AI Klinik",
  description:
    "Tugas saya adalah memberikan solusi bagi klinik untuk menghubungkan pasien ke janji temu hanya dalam hitungan detik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-inter">{children}</body>
    </html>
  );
}
