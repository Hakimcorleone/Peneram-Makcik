import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="testimoni" className="section-spacing bg-cream">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="section-heading">Apa orang suka tentang Peneram Makcik</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Placeholder testimonials: replace with real customer feedback later. */}
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial}
              className="rounded-lg border border-caramel/10 bg-white p-5 shadow-card"
            >
              <blockquote className="text-lg font-bold leading-8 text-cocoa">
                “{testimonial}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
