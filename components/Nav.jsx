"use client";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-inkMuted font-medium text-sm hover:text-accent transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
