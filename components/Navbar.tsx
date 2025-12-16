import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-20 border-b border-white/5 bg-shisu-black/75 backdrop-blur">
      <header className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.35em] text-shisu-gold"
        >
          Shisu Sushi
        </Link>
        <nav className="hidden gap-8 text-sm text-white/70 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/reservations"
          className="rounded-full border border-shisu-gold bg-shisu-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-shisu-ivory hover:bg-shisu-gold/20"
        >
          Reserve
        </Link>
      </header>
    </div>
  );
}


