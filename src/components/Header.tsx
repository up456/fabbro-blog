"use client";

import { Diphylleia } from "next/font/google";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const DEFAULT_STYLE = "";
const SCROLL_STYLE = "text-white";
const DIPHYLLEIA = Diphylleia({ subsets: ["latin"], weight: ["400"] });

function Header() {
  const [headerStyle, setHeaderStyle] = useState(DEFAULT_STYLE);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 40) {
      setHeaderStyle(DEFAULT_STYLE);
    } else {
      setHeaderStyle(SCROLL_STYLE);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`${DIPHYLLEIA.className} ${headerStyle} sticky top-0 flex justify-between items-center p-4 z-50 duration-300 ease-in`}
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
