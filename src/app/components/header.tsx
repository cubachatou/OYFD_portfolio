"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "mailto:alexeyyakuba@gmail.com",
    label: "Contact",
    target: "_blank",
    rel: "noopener",
  },
  {
    href: "https://www.linkedin.com/in/oleksiiyakuba/",
    label: "Linkedin",
    target: "_blank",
    rel: "noopener",
  },
];

const firstLinks = [
  { href: "/about", label: "About" },
  { href: "/", label: "Portfolio" },
];

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/about/") && pathname.split("/").length > 2) {
    return null;
  }

  return (
    <header
      className={`z-10 flex items-baseline sm:justify-between justify-center sm:px-8 px-4 py-4 bg-neon-green`}
    >
      <span className="uppercase text-sm max-sm:hidden">Oleksii Yakuba</span>

      <nav>
        <ul className="flex items-center gap-6">
          {firstLinks.map(({ href, label }) =>
            (pathname === "/" && href === "/about") ||
            (pathname === "/about" && href === "/") ? (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ) : null,
          )}
          {links.map(({ href, label, target, rel }) => (
            <li key={`${href}${label}`}>
              <Link href={href} target={target} rel={rel}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
