import { contacts, whatsappMessages } from "@/lib/site-data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function FinalCTA() {
  const [hakim, namirah] = contacts;

  return (
    <section id="order" className="bg-cocoa py-14 text-white sm:py-16">
      <div className="section-shell text-center">
        <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl">
          Nak rasa Peneram Makcik?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream sm:text-lg">
          Pilih Small Pack untuk majlis atau Round Container untuk makan bersama keluarga. WhatsApp kami untuk semak stok dan buat tempahan.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-cocoa shadow-card transition hover:bg-beige focus:outline-none focus:ring-4 focus:ring-beige/40"
            href={createWhatsAppLink(hakim.phoneInternational, whatsappMessages.generalOrder)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order dengan Hakim
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-beige/40"
            href={createWhatsAppLink(namirah.phoneInternational, whatsappMessages.generalOrder)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order dengan Namirah
          </a>
        </div>
      </div>
    </section>
  );
}
