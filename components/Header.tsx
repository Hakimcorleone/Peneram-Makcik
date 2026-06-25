import { business, navItems } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-caramel/10 bg-cream/95 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <a href="#top" className="text-lg font-extrabold tracking-normal text-cocoa">
          {business.name}
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-caramel transition hover:text-cocoa focus:outline-none focus:ring-2 focus:ring-golden/40"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="section-shell flex gap-2 overflow-x-auto pb-3 md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-caramel/15 bg-white px-4 py-2 text-sm font-semibold text-caramel shadow-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
