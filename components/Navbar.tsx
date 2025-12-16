"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close dropdown when you navigate to a new page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-20 border-b border-white/5 bg-shisu-black/75 backdrop-blur">
      <header className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.35em] text-shisu-gold"
        >
          Shisu Sushi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 text-sm text-white/70 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-white ${
                pathname === item.href ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Reserve (always visible) */}
          <Link
            href="/reservations"
            className="rounded-full border border-shisu-gold bg-shisu-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-shisu-ivory hover:bg-shisu-gold/20"
          >
            Reserve
          </Link>

          {/* Mobile hamburger (only on small screens) */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:bg-white/10 sm:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile dropdown panel */}
      {open && (
        <nav className="sm:hidden">
          <div className="mx-auto max-w-content px-6 pb-4">
            <div className="rounded-2xl border border-white/10 bg-shisu-black/90 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-3 py-3 text-sm ${
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
