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
  { href: "/demos", label: "Demos" },
  { href: "/", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/demos/") && pathname.split("/").length > 2) {
    return null;
  }

  return (
    <header
      className={`z-10 flex items-baseline justify-between sm:px-8 px-4 py-4 ${
        pathname === "/" ? "bg-neon-green" : "bg-neutral-100"
      }`}
    >
      <span className="uppercase sm:text-sm text-xs">Oleksii Yakuba</span>

      <nav>
        <ul className="flex items-center sm:gap-6 gap-3">
          {firstLinks.map(({ href, label }) =>
            (pathname === "/" && href === "/demos") ||
            (pathname === "/demos" && href === "/") ? (
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
