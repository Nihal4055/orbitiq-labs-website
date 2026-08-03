import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32 lg:py-44">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* faint drifting grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-4">
            <span className="rule-ornament w-10" />
            <span className="label-mono">Enter the orbit</span>
            <span className="rule-ornament w-10" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display mt-8 text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.94] tracking-[-0.04em]">
            Discover at the
            <br />
            <span className="italic text-accent">speed of thought.</span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
            Join the researchers and institutions building the next era of science on OrbitIQ.
            Start with Morbius today — Prometheus and Parallax are opening in beta.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild variant="solid" size="xl">
              <Link to="/$slug" params={{ slug: "morbius" }}>
                Try Morbius →
              </Link>
            </Button>
            <Button asChild variant="wire" size="xl">
              <a href="#contact">Book an Institutional Demo</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <p className="mt-10 font-mono text-[10px] tracking-widest text-muted-foreground/50">
            NO CREDIT CARD · EVIDENCE-GROUNDED · BUILT BY SCIENTISTS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
