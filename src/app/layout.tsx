import Header from "@/components/Layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_KR, Diphylleia } from "next/font/google";

import Footer from "@/components/Layout/Footer";
import clsx from "clsx";

const diphylleia = Diphylleia({
  subsets: ["latin"],
  display: "auto",
  weight: ["400"],
  variable: "--font-diphylleia",
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  display: "auto",
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-noto-serif-kr",
});

export const metadata: Metadata = {
  title: "Fabbro 블로그",
  description: "대장간",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={clsx(notoSerifKr.variable, diphylleia.variable)}>
      <body className="flex flex-col max-w-7xl mx-auto">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
