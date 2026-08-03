import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useParallax } from "./useParallax";
import bust from "@/assets/greek-bust.jpg";

const TELEMETRY = "AUTONOMOUS DISCOVERY // AGENTIC AI // SCIENTIFIC INFRASTRUCTURE // ORBITIQ LABS //";

export function Hero() {
  const bustRef = useParallax<HTMLDivElement>(0.1);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        {/* Greek bust — the hero's centrepiece (parallax) */}
        <div ref={bustRef} className="parallax-layer absolute inset-y-[-8%] right-0 h-[116%] w-[78%]">
          <img
            src={bust}
            alt=""
            width={1280}
            height={1600}
            className="h-full w-full object-contain object-right opacity-[0.62] contrast-[1.15] grayscale"
            style={{
              maskImage:
                "radial-gradient(ellipse 60% 85% at 86% 50%, black 20%, rgba(0,0,0,0.5) 60%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 85% at 86% 50%, black 20%, rgba(0,0,0,0.5) 60%, transparent 90%)",
            }}
          />
        </div>

        {/* Subtle accent color wash */}
        <div
          className="absolute inset-0 mix-blend-color"
          style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 48% 50%, transparent 30%, var(--background) 100%)",
          }}
        />

        {/* Film grain */}
        <div className="film-grain absolute inset-0" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Copy */}
      <div className="relative mx-auto w-full max-w-[1400px] px-10 pt-32 pb-28 lg:px-16">
        <Reveal variant="left">
          <h1 className="font-display max-w-4xl text-[clamp(2.8rem,6.8vw,5.6rem)] leading-[0.93] font-light tracking-[-0.035em] text-balance">
            The Infrastructure of
            <br />
            <span className="text-accent italic">Autonomous Science.</span>
          </h1>
        </Reveal>

        <Reveal delay={180} variant="left">
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            Frontier AI systems for autonomous scientific discovery, agentic research, and the
            researchers building what&rsquo;s next.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button asChild variant="solid" size="xl">
              <a href="#what-we-do">Enter the Lab ↓</a>
            </Button>
            <Button asChild variant="wire" size="xl">
              <a href="#systems">Explore the Systems →</a>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Bottom marquee ticker */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-border/50 bg-background/60 py-3 backdrop-blur-sm">
        <div
          className="flex w-max gap-10 whitespace-nowrap opacity-35"
          style={{ animation: "marquee-x 42s linear infinite" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="label-mono">
              {TELEMETRY}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
