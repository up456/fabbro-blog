import { Diphylleia } from "next/font/google";
import Link from "next/link";
import React from "react";

const diphylleia = Diphylleia({ subsets: ["latin"], weight: ["400"] });

function Header() {
  return (
    <header
      className={`${diphylleia.className} sticky top-0 flex justify-between items-center p-4`}
    >
      <Link href="/">
        <h1 className="text-3xl font-bold">{"파브로 대장간"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/master">주인장</Link>
        <Link href="/armory">무기고</Link>
        <Link href="/posts">게시판</Link>
      </nav>
    </header>
  );
}

export default Header;
