import { Reveal } from "./Reveal";

/**
 * Two streaming logo rows fading in opposite directions.
 * Logos are served from /public/logos/<file>. Force-normalized to a soft
 * monochrome so mismatched brand colors read as one classical row.
 * See the download manifest for the exact filenames expected.
 */

interface Logo {
  file: string; // under /public/logos/
  name: string;
}

// Row 1 — Trusted by researchers from (institutions), scrolls left
const INSTITUTIONS: Logo[] = [
  { file: "harvard.png", name: "Harvard" },
  { file: "mit.png", name: "MIT" },
  { file: "stanford.png", name: "Stanford" },
  { file: "oxford.png", name: "Oxford" },
  { file: "cambridge.png", name: "Cambridge" },
  { file: "princeton.png", name: "Princeton" },
  { file: "yale.png", name: "Yale" },
  { file: "caltech.png", name: "Caltech" },
  { file: "berkeley.png", name: "UC Berkeley" },
  { file: "cornell.png", name: "Cornell" },
  { file: "eth-zurich.png", name: "ETH Zurich" },
  { file: "imperial.png", name: "Imperial College" },
];

// Row 2 — Partners (frontier labs + accelerators), scrolls right
const PARTNERS: Logo[] = [
  { file: "openai.png", name: "OpenAI" },
  { file: "anthropic.png", name: "Anthropic" },
  { file: "deepmind.png", name: "DeepMind" },
  { file: "nvidia.png", name: "NVIDIA" },
  { file: "google-research.png", name: "Google Research" },
  { file: "microsoft-research.png", name: "Microsoft Research" },
  { file: "ycombinator.png", name: "Y Combinator" },
  { file: "a16z.png", name: "Andreessen Horowitz" },
  { file: "sequoia.png", name: "Sequoia" },
  { file: "techstars.png", name: "Techstars" },
  { file: "nvidia-inception.png", name: "NVIDIA Inception" },
  { file: "huggingface.png", name: "Hugging Face" },
];

const FADE =
  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <span className="mx-8 inline-flex shrink-0 items-center" title={logo.name}>
      <img
        src={`/logos/${logo.file}`}
        alt={logo.name}
        className="h-7 w-auto max-w-[150px] object-contain opacity-55 grayscale transition-opacity duration-300 hover:opacity-90"
        style={{ filter: "grayscale(1) brightness(0) invert(0.85)" }}
        loading="lazy"
        onError={(e) => {
          // graceful fallback to the institution name if the file is absent
          const el = e.currentTarget;
          el.style.display = "none";
          const sib = el.nextElementSibling as HTMLElement | null;
          if (sib) sib.style.display = "inline";
        }}
      />
      <span
        className="hidden font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60"
      >
        {logo.name}
      </span>
    </span>
  );
}

function Row({ logos, dir, speed }: { logos: Logo[]; dir: "left" | "right"; speed: number }) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className="relative overflow-hidden"
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
    >
      <div
        className="flex w-max items-center py-2"
        style={{
          animation: `${dir === "left" ? "scroll-left" : "scroll-right"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((l, i) => (
          <LogoItem key={`${l.file}-${i}`} logo={l} />
        ))}
      </div>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="hidden overflow-hidden border-t border-border py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="rule-ornament w-12" />
            <p className="label-mono">Trusted by researchers from</p>
            <span className="rule-ornament w-12" />
          </div>
        </Reveal>
        <div className="mt-10">
          <Row logos={INSTITUTIONS} dir="left" speed={40} />
        </div>

        <div className="mx-auto my-14 h-px max-w-md bg-border/40" />

        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="rule-ornament w-12" />
            <p className="label-mono">Partners &amp; backers</p>
            <span className="rule-ornament w-12" />
          </div>
        </Reveal>
        <div className="mt-10">
          <Row logos={PARTNERS} dir="right" speed={46} />
        </div>
      </div>
    </section>
  );
}
