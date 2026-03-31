"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] text-ink" />
      </SheetTrigger>
      <SheetContent className="bg-surface flex flex-col">
        <div className="mt-16 mb-10 text-center">
          <span className="text-xl font-bold text-ink">Matthew Chang</span>
        </div>
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg text-inkMuted hover:text-accent font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-6 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accentHover transition-colors duration-200"
          >
            Hire Me
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
