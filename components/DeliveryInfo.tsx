import { deliveryCards } from "@/lib/site-data";

export default function DeliveryInfo() {
  return (
    <section id="cod" className="section-spacing bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="section-heading">COD Sekitar Puncak Alam</h2>
          <p className="section-copy">
            Kami buat COD sekitar Puncak Alam. Kalau luar kawasan, boleh WhatsApp dulu untuk bincang ikut jarak, kuantiti order dan pilihan postage.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-caramel/10 bg-cream p-5 shadow-card"
            >
              <h3 className="text-lg font-extrabold text-cocoa">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold leading-6 text-caramel">
                {card.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
