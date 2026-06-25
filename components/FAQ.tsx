import { faqs } from "@/lib/site-data";

export default function FAQ() {
  return (
    <section id="faq" className="section-spacing bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="section-heading">Soalan Biasa</h2>
        </div>

        <div className="mt-8 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-caramel/10 bg-cream p-5 shadow-card"
            >
              <summary className="cursor-pointer list-none text-lg font-extrabold text-cocoa focus:outline-none focus:ring-2 focus:ring-golden/40">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-2xl leading-none text-golden group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-caramel">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
