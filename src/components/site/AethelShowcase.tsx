import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

/**
 * Brief Aethel section on main page — technical, not marketing.
 * Positioned after ProductShowcase (after Parallax).
 */

export function AethelShowcase() {
  return (
    <section className="border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-background p-8">
              <img
                src="/paintings/aethel-main-preview.jpg"
                alt="Aethel foundation model visualization"
                className="relative z-10 h-full w-full object-contain opacity-90"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120}>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="label-mono text-violet-400">Ongoing Research</span>
              </div>

              <p className="mt-6 font-display text-xs italic tracking-wide text-muted-foreground">
                Αἰθήρ · The upper air
              </p>
              
              <h3 className="font-display mt-2 text-[clamp(2.4rem,4.5vw,3.6rem)] font-light leading-[0.95] tracking-[-0.03em]">
                Aethel
              </h3>
              
              <p className="mt-4 text-lg font-light leading-snug">
                A foundation model built to reason like a scientist.
              </p>
              
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                Mixture-of-Experts architecture with native fluency across molecular structures, 
                biological sequences, crystallographic data, and scientific imaging. Built to operate 
                in an iterative research loop, not answer single-shot questions.
              </p>

              <ul className="mt-7 space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  ~1 trillion parameter class, ~22B active per query
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  Chemistry, materials science, biology, earth sciences, mathematics
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  Iterative agentic reasoning: propose → observe → reason → revise
                </li>
              </ul>

              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-display text-2xl font-light text-violet-400">5</p>
                  <p className="label-mono mt-0.5">Scientific Domains</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-light text-violet-400">6</p>
                  <p className="label-mono mt-0.5">Modalities</p>
                </div>
              </div>

              <Link
                to="/aethel"
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-violet-400/40 px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-violet-400 transition-all hover:gap-3 hover:border-violet-400/60"
              >
                Technical Details
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
