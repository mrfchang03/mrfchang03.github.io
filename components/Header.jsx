"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle"; // ⬅ add this

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-surfaceLight dark:bg-primary text-textLight dark:text-textDark">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent dark:text-accentDark"></span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <Link href="/contact">
            <Button radius="none">Hire me</Button>
          </Link>
          <ThemeToggle /> {/* ⬅ theme switch */}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-4">
          <MobileNav />
          <ThemeToggle /> {/* optional on mobile too */}
        </div>
      </div>
    </header>
  );
};

export default Header;
