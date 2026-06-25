import { business, contacts } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-cream pb-28 pt-10 text-caramel md:pb-10">
      <div className="section-shell grid gap-8 border-t border-caramel/10 pt-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xl font-extrabold text-cocoa">{business.name}</p>
          <p className="mt-2 text-base font-semibold">“{business.tagline}”</p>
          <p className="mt-4 text-sm font-semibold">Location: {business.location}</p>
        </div>

        <div className="md:text-right">
          <p className="text-sm font-extrabold uppercase tracking-normal text-golden">WhatsApp</p>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            {contacts.map((contact) => (
              <li key={contact.name}>
                {contact.name}: {contact.phoneDisplay}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm">© 2026 Peneram Makcik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
