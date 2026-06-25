import Image from "next/image";
import { contacts, type Product } from "@/lib/site-data";
import { createWhatsAppLink } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const hakim = contacts[0];
  const promoAction =
    "promoMessage" in product && "promoLabel" in product
      ? { label: product.promoLabel, message: product.promoMessage }
      : null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-caramel/10 bg-white shadow-card">
      <div className="relative aspect-[4/3] bg-beige/50">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-center"
        />
        <span className="absolute left-4 top-4 rounded-full bg-caramel px-4 py-2 text-sm font-extrabold text-white shadow-card">
          {product.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-extrabold text-cocoa">{product.name}</h3>
            <p className="mt-1 text-sm font-bold uppercase tracking-normal text-golden">
              {product.quantity}
            </p>
          </div>
          <p className="rounded-full bg-beige/70 px-4 py-2 text-sm font-extrabold text-caramel">
            {product.price}
          </p>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {product.highlights.map((highlight) => (
            <p
              key={highlight}
              className="rounded-md border border-caramel/10 bg-cream px-3 py-2 text-sm font-bold text-caramel"
            >
              {highlight}
            </p>
          ))}
        </div>

        <p className="mt-5 flex-1 text-base leading-7 text-caramel">{product.description}</p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            className="primary-button w-full"
            href={createWhatsAppLink(hakim.phoneInternational, product.orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {product.orderLabel}
          </a>

          {promoAction ? (
            <a
              className="secondary-button w-full"
              href={createWhatsAppLink(hakim.phoneInternational, promoAction.message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {promoAction.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
