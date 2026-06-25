import BulkOrder from "@/components/BulkOrder";
import DeliveryInfo from "@/components/DeliveryInfo";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import PromoPostage from "@/components/PromoPostage";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ProductCatalog />
        <PromoPostage />
        <BulkOrder />
        <DeliveryInfo />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
