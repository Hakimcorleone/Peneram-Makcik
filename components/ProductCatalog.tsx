import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/site-data";

export default function ProductCatalog() {
  return (
    <section id="produk" className="section-spacing bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="section-heading">Pilihan Peneram Makcik</h2>
          <p className="section-copy">
            Pilih small pack untuk majlis atau round container untuk makan bersama keluarga.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
