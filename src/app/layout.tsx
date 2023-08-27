import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import Footer from "@/components/Footer";

const notoSerifKR = Noto_Serif_KR({
  weight: ["200", "300", "400", "500", "600"],
  display: "auto",
  subsets: ["latin"],
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
    <html lang="ko" className={notoSerifKR.className}>
      <body className="flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
