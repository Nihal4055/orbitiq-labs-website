import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface Quote {
  quote: string;
  name: string;
  role: string;
  org: string;
  color: string;
  image?: string;
}

const QUOTES: Quote[] = [
  {
    quote:
      "It compressed a three-week literature review into an afternoon — and every claim came back with the paragraph it stood on. That traceability is what earned my trust.",
    name: "Dr. Shamanth Rai",
    role: "Dean of Academics",
    org: "Sahyadri College of Engineering and Management",
    color: "var(--morbius)",
    image: "/paintings/testimonial-shamanth.jpg",
  },
  {
    quote:
      "The multi-agent design mirrors how our lab actually thinks. It doesn't hand me an answer — it hands me a defensible line of reasoning I can interrogate.",
    name: "Dr. Rithesh Pakkala P",
    role: "Head of Department, Information Science & Engineering",
    org: "Sahyadri College of Engineering and Management",
    color: "var(--prometheus)",
    image: "/paintings/testimonial-rithesh.jpg",
  },
  {
    quote:
      "We evaluate a lot of AI tools. This is the first one built with the evidentiary rigor a quant desk demands — every signal traces back to a filing or a dataset.",
    name: "Taylor Okonkwo",
    role: "Head of Quantitative Research",
    org: "Systematic Fund",
    color: "var(--parallax)",
    image: "/paintings/testimonial-taylor.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-surface/20 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="From the field"
          align="center"
          title={
            <>
              What researchers <span className="italic text-accent">say.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 110}>
              <figure className="group flex h-full flex-col rounded-2xl border border-border/60 bg-[oklch(0.13_0.01_265)] p-8 transition-all hover:-translate-y-1 hover:border-border">
                <span
                  className="font-display text-6xl leading-[0.5] italic"
                  style={{ color: q.color, opacity: 0.5 }}
                >
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 font-display text-lg font-light leading-relaxed tracking-tight text-foreground/90">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border/60 pt-5">
                  {/* Circular image placeholder */}
                  <div className="shrink-0">
                    <div 
                      className="h-12 w-12 overflow-hidden rounded-full border-2"
                      style={{ borderColor: q.color }}
                    >
                      {q.image ? (
                        <img 
                          src={q.image} 
                          alt={q.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div 
                          className="flex h-full w-full items-center justify-center font-display text-lg font-light"
                          style={{ background: `color-mix(in oklab, ${q.color} 10%, transparent)`, color: q.color }}
                        >
                          {q.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{q.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                      {q.role}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: q.color }}>
                      {q.org}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center font-mono text-[10px] tracking-widest text-muted-foreground/50">
            Representative voices · design partners in early access
          </p>
        </Reveal>
      </div>
    </section>
  );
}
