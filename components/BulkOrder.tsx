import { bulkOrderBullets, contacts, whatsappMessages } from "@/lib/site-data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function BulkOrder() {
  const hakim = contacts[0];

  return (
    <section className="bg-white py-6">
      <div className="section-shell">
        <div className="rounded-lg bg-beige p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="section-heading">Nak order untuk majlis?</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-caramel sm:text-lg">
                Boleh order untuk kenduri, office makan-makan, jamuan, doorgift, family gathering atau jualan kecil-kecilan. Untuk kuantiti banyak, mohon order awal supaya sempat kami sediakan.
              </p>
              <a
                className="primary-button mt-6"
                href={createWhatsAppLink(hakim.phoneInternational, whatsappMessages.bulkOrder)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya Bulk Order
              </a>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {bulkOrderBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-md bg-white px-4 py-3 text-sm font-extrabold text-caramel shadow-card"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
