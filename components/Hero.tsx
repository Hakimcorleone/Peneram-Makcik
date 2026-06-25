import Image from "next/image";
import { business, contacts, heroBadges, whatsappMessages } from "@/lib/site-data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const [hakim, namirah] = contacts;

  return (
    <section className="section-spacing bg-cream">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-beige/80 px-4 py-2 text-sm font-bold text-caramel">
            {business.tagline}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-cocoa sm:text-5xl lg:text-6xl">
            Peneram Warisan Asli di Puncak Alam
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-caramel sm:text-xl">
            Lemak manis, rangup di luar, lembut di dalam — dibuat dengan resepi warisan yang dirindui.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-golden/20 bg-white px-4 py-2 text-sm font-bold text-caramel shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="primary-button"
              href={createWhatsAppLink(hakim.phoneInternational, whatsappMessages.generalOrder)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order dengan Hakim
            </a>
            <a
              className="secondary-button"
              href={createWhatsAppLink(namirah.phoneInternational, whatsappMessages.generalOrder)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order dengan Namirah
            </a>
          </div>

          <p className="mt-5 text-sm font-semibold text-caramel/80">
            COD sekitar {business.codArea}. Luar kawasan boleh WhatsApp dulu untuk bincang postage atau delivery.
          </p>
        </div>

        <figure className="relative overflow-hidden rounded-lg bg-beige p-3 shadow-soft">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white">
            <Image
              src="/images/peneram-round-container.jpg"
              alt="Round Container Peneram Makcik sebagai gambar utama"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 px-1 pt-3 text-sm font-bold text-caramel">
            <span>Round Container • 32 pcs</span>
            <span>RM15 / container</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
