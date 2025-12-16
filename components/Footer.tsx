export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Shisu Sushi.</span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/60">
          Omakase &amp; Modern Sushi Bar
        </span>
      </div>
    </footer>
  );
}


