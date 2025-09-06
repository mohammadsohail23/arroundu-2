"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Item = { label: string; href: string };

const items: Item[] = [
  { label: "Welcome",          href: "/" },
  { label: "About",            href: "/about" },
  { label: "Legal Stuff",      href: "/legal" },
  { label: "Reach Us",         href: "/reach-us" },
  { label: "What is AroundU",  href: "/what-is-aroundu" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const current = useMemo(() => (pathname === "/" ? "/" : pathname?.replace(/\/$/, "")), [pathname]);

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-lg px-2 py-1.5 text-sm text-neutral-200">
        {/* Logo (click → home) */}
        <Link href="/" className="ml-1 mr-2 inline-flex items-center">
          <Image
            src="/logo.PNG"   // use exact case, or rename file to logo.png
            alt="AroundU logo"
            width={28}
            height={28}
            className="rounded-full ring-1 ring-white/20"
            priority
          />
        </Link>

        {/* Tabs */}
        <ul className="flex items-center gap-1">
          {items.map((it) => {
            const isActive = current === (it.href === "/" ? "/" : it.href);
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={`group relative inline-flex items-center rounded-full px-4 py-2 transition ${isActive ? "text-white" : "text-neutral-300 hover:text-white"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative">
                    {it.label}
                    {/* thin gradient underline like your screenshot */}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"} transition-opacity`}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
