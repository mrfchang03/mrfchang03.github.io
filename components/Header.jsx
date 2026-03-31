"use client";

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-nav py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
          <img src="/mrc-logo.svg" alt="Matthew Chang" className="h-[72px] w-auto" />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a
            href="#contact"
            className="px-5 py-2 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accentHover transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
