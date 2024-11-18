"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/demos/") && pathname.split("/").length > 2) {
    return null;
  }

  return <footer className="h-0"></footer>;
}
