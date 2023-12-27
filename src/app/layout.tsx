import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikas | Personal Porfolio",
  description:
    "Vikas kumar is a frontend developer with the 1 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-950 h-screen`}>
        <Header />
        <div className="flex items-center justify-center lg:py-20 py-32">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
