"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ThemeController from "./ThemeController";

const DEFAULT_STYLE = "";
const SCROLL_STYLE = "text-white";

const EXCEPTION_PATH = ["/master"];

function Header() {
  const [headerStyle, setHeaderStyle] = useState(DEFAULT_STYLE);
  const path = usePathname();
  const isPreventTextColorChange = EXCEPTION_PATH.includes(path);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 40) {
      setHeaderStyle(DEFAULT_STYLE);
    } else {
      setHeaderStyle(SCROLL_STYLE);
    }
  }, []);

  useEffect(() => {
    if (isPreventTextColorChange) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, isPreventTextColorChange]);

  return (
    <header
      className={`${headerStyle} sticky inset-0 flex justify-between items-center p-4 z-50 duration-300 ease-in`}
    >
      <Link href="/">
        <h1 className="text-3xl font-bold">Fabbro Blog</h1>
      </Link>
      <nav className="flex gap-4">
        {/* <Link href="/master">주인장</Link> */}
        {/* <Link href="/armory">무기고</Link> */}
        {/* <Link href="/posts">게시판</Link> */}
      </nav>
      <ThemeController />
    </header>
  );
}

export default Header;
