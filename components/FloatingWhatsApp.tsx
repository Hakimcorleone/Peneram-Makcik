import { contacts, whatsappMessages } from "@/lib/site-data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const hakim = contacts[0];

  return (
    <a
      href={createWhatsAppLink(hakim.phoneInternational, whatsappMessages.generalOrder)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-whatsapp px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:bg-[#168A48] focus:outline-none focus:ring-4 focus:ring-green-200 sm:bottom-5 sm:right-5"
      aria-label="Order Peneram Makcik melalui WhatsApp"
    >
      Order WhatsApp
    </a>
  );
}
