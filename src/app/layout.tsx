import "./globals.css";
import googleFonts from "./google-fonts.config";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import type { Metadata } from "next";

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
    <html lang="ko" className={googleFonts}>
      <body className="container mx-auto">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
