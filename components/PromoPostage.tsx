import { promoPostageCards } from "@/lib/site-data";

export default function PromoPostage() {
  return (
    <section id="postage" className="section-spacing bg-cream">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="section-heading">Promo Postage</h2>
          <p className="section-copy">
            Ringkasan mudah untuk customer pilih postage ikut jenis peneram dan kuantiti order.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {promoPostageCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-caramel/10 bg-white p-5 shadow-card"
            >
              <h3 className="text-xl font-extrabold text-cocoa">{card.title}</h3>
              <ul className="mt-4 space-y-3 text-base font-semibold leading-7 text-caramel">
                {card.lines.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-golden" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
