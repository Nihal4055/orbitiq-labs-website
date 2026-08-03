import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ChevronDown, ArrowRight, CheckCircle2, Users, Sparkles,
  BookOpen, Code2, TrendingUp, Microscope, Award, Calendar,
} from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ResidencyApplicationForm } from "./ResidencyApplicationForm";

/* ============================================================================
   THE ORBITIQ RESIDENCY — stellar-style self-contained cinematic page.
   All tokens, animation primitives and effects live in this file.
   ========================================================================== */

const SCOPE = "orbitiq-residency";

const Tokens = () => (
  <style>{`
  .${SCOPE}{
    --bg: oklch(0.115 0.021 264);
    --bg-deep: oklch(0.075 0.018 264);
    --surface: oklch(0.165 0.024 264);
    --line: oklch(0.32 0.02 264 / 0.45);
    --fg: oklch(0.965 0.006 260);
    --muted: oklch(0.72 0.021 262);
    --accent: oklch(0.84 0.145 88);
    --morbius: oklch(0.76 0.145 245);
    --prometheus: oklch(0.80 0.145 62);
    --parallax: oklch(0.79 0.132 168);
    --violet: oklch(0.74 0.150 300);

    background: var(--bg);
    color: var(--fg);
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    position: relative;
    isolation: isolate;
  }
  .${SCOPE} ::selection{ background: var(--accent); color: var(--bg-deep); }

  .${SCOPE} .display{
    font-family: "Didot", "Bodoni MT", "Playfair Display", ui-serif, Georgia, serif;
    font-weight: 300; letter-spacing: -0.03em;
  }
  .${SCOPE} .mono{
    font-family: ui-monospace, "SFMono-Regular", "JetBrains Mono", Menlo, monospace;
  }
  .${SCOPE} .label{
    font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
    font-size: 10.5px; letter-spacing: 0.32em; text-transform: uppercase;
    color: var(--muted);
    display: inline-flex; align-items: center; gap: 0.75rem;
  }
  .${SCOPE} .label::before{
    content:""; width: 34px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent));
  }

  /* --- shimmering headline gradient --- */
  .${SCOPE} .aurora-text{
    background: linear-gradient(100deg,
      oklch(0.99 0 0) 0%, oklch(0.86 0.13 88) 26%,
      oklch(0.99 0 0) 44%, oklch(0.78 0.13 245) 66%, oklch(0.99 0 0) 88%);
    background-size: 260% 100%;
    -webkit-background-clip: text; background-clip: text; color: transparent;
    animation: sweep 14s linear infinite;
  }
  @keyframes sweep{ to{ background-position: 260% 0; } }

  /* --- reveal primitive --- */
  .${SCOPE} .rv{
    opacity: 0; will-change: transform, opacity, filter;
    transition: opacity 1s cubic-bezier(.16,1,.3,1),
                transform 1.15s cubic-bezier(.16,1,.3,1),
                filter 1s cubic-bezier(.16,1,.3,1);
  }
  .${SCOPE} .rv-up{ transform: translate3d(0,42px,0); }
  .${SCOPE} .rv-left{ transform: translate3d(-46px,0,0); }
  .${SCOPE} .rv-right{ transform: translate3d(46px,0,0); }
  .${SCOPE} .rv-scale{ transform: scale(.94) translate3d(0,26px,0); }
  .${SCOPE} .rv-blur{ filter: blur(14px); transform: translate3d(0,16px,0); }
  .${SCOPE} .rv.in{ opacity: 1; transform: none; filter: none; }

  /* --- glass card --- */
  .${SCOPE} .glass{
    background: linear-gradient(150deg,
      oklch(0.26 0.025 264 / .55), oklch(0.14 0.02 264 / .72));
    border: 1px solid var(--line);
    backdrop-filter: blur(22px) saturate(1.3);
    -webkit-backdrop-filter: blur(22px) saturate(1.3);
    box-shadow: 0 30px 90px -40px oklch(0 0 0 / .9),
                inset 0 1px 0 oklch(1 0 0 / .07);
    position: relative; overflow: hidden;
  }
  .${SCOPE} .glow::after{
    content:""; position:absolute; inset:-1px; pointer-events:none;
    background: radial-gradient(340px circle at var(--mx,50%) var(--my,0%),
      oklch(0.9 0.14 88 / .16), transparent 62%);
    opacity: 0; transition: opacity .5s ease;
  }
  .${SCOPE} .glow:hover::after{ opacity: 1; }
  .${SCOPE} .lift{ transition: transform .7s cubic-bezier(.16,1,.3,1), border-color .5s ease; }
  .${SCOPE} .lift:hover{ transform: translateY(-8px); border-color: oklch(0.62 0.09 88 / .55); }

  /* --- misc motion --- */
  @keyframes floaty{ 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-16px) } }
  @keyframes spin-slow{ to{ transform: rotate(360deg) } }
  @keyframes spin-rev{ to{ transform: rotate(-360deg) } }
  @keyframes pulse-ring{
    0%{ transform: scale(.85); opacity:.55 } 70%{ transform: scale(1.35); opacity:0 } 100%{ opacity:0 }
  }
  @keyframes caret{ 0%,49%{ opacity:1 } 50%,100%{ opacity:0 } }
  @keyframes drift{
    0%{ transform: translate3d(-6%, -4%, 0) scale(1) }
    50%{ transform: translate3d(6%, 5%, 0) scale(1.15) }
    100%{ transform: translate3d(-6%, -4%, 0) scale(1) }
  }
  @keyframes scan{ to{ transform: translateY(100%) } }

  .${SCOPE} .grain::before{
    content:""; position:fixed; inset:-50%; pointer-events:none; z-index:5;
    opacity:.05; mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .${SCOPE} .rule{
    height:1px; background: linear-gradient(90deg, transparent, var(--line), transparent);
  }

  .${SCOPE} .no-bar{ scrollbar-width: thin; scrollbar-color: oklch(0.6 0.1 88 / .5) transparent; }
  .${SCOPE} .no-bar::-webkit-scrollbar{ height: 6px; }
  .${SCOPE} .no-bar::-webkit-scrollbar-thumb{ background: oklch(0.6 0.1 88 / .4); border-radius: 99px; }

  @media (prefers-reduced-motion: reduce){
    .${SCOPE} *{ animation-duration: .001ms !important; transition-duration: .1ms !important; }
    .${SCOPE} .rv{ opacity:1 !important; transform:none !important; filter:none !important; }
  }
  `}</style>
);

/* ------------------------------- primitives ------------------------------- */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "blur";
  className?: string;
};

function Reveal({ children, delay = 0, variant = "up", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`rv rv-${variant} ${className}`}>
      {children}
    </div>
  );
}

function useSheen<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}

function Counter({ to, suffix = "", prefix = "", duration = 1600 }: {
  to: number; suffix?: string; prefix?: string; duration?: number;
}) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{v.toLocaleString()}{suffix}</span>;
}

/* --------------------------- starfield / nebula --------------------------- */

function CosmicField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; z: number; r: number; tw: number; hue: number };
    let stars: Star[] = [];

    const seed = () => {
      const count = Math.round(Math.min(320, (w * h) / 5200));
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: 0.25 + Math.random() * 0.75,
        r: 0.35 + Math.random() * 1.5,
        tw: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.16 ? 62 : Math.random() < 0.4 ? 245 : 0,
      }));
    };

    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };
    resize();
    window.addEventListener("resize", resize);

    let scroll = window.scrollY;
    const onScroll = () => { scroll = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const render = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      mx += (tx - mx) * 0.045;
      my += (ty - my) * 0.045;

      for (const s of stars) {
        const par = s.z * 60;
        const x = ((s.x * w) + mx * par - (scroll * s.z * 0.12) % (w + 200) + w) % w;
        const y = ((s.y * h) + my * par + (scroll * s.z * 0.05)) % h;
        const twinkle = 0.45 + 0.55 * Math.sin(t * 0.0013 * s.z + s.tw);
        const alpha = twinkle * (0.25 + s.z * 0.55);
        ctx.beginPath();
        ctx.arc(x, y < 0 ? y + h : y, s.r * s.z * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = s.hue === 62
          ? `rgba(255, 214, 140, ${alpha})`
          : s.hue === 245
            ? `rgba(150, 190, 255, ${alpha})`
            : `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 50% -10%, oklch(0.22 0.045 268) 0%, var(--bg) 45%, var(--bg-deep) 100%)" }} />
      <div style={{
        position: "absolute", width: "70vw", height: "70vw", left: "-14vw", top: "-16vw",
        background: "radial-gradient(circle, oklch(0.52 0.19 268 / .30), transparent 62%)",
        filter: "blur(30px)", animation: "drift 34s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: "62vw", height: "62vw", right: "-16vw", top: "28vh",
        background: "radial-gradient(circle, oklch(0.60 0.16 62 / .22), transparent 64%)",
        filter: "blur(34px)", animation: "drift 46s ease-in-out infinite reverse",
      }} />
      <div style={{
        position: "absolute", width: "58vw", height: "58vw", left: "18vw", bottom: "-22vw",
        background: "radial-gradient(circle, oklch(0.55 0.15 168 / .18), transparent 62%)",
        filter: "blur(36px)", animation: "drift 56s ease-in-out infinite",
      }} />
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.14,
        backgroundImage:
          "linear-gradient(oklch(1 0 0 / .10) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / .10) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        maskImage: "radial-gradient(90% 70% at 50% 30%, #000 20%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(90% 70% at 50% 30%, #000 20%, transparent 78%)",
      }} />
    </div>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full" style={{ background: "oklch(1 0 0 / .05)" }}>
      <div
        style={{
          height: "100%", width: `${p * 100}%`,
          background: "linear-gradient(90deg, var(--morbius), var(--accent), var(--prometheus))",
          boxShadow: "0 0 18px oklch(0.84 0.14 88 / .7)",
          transition: "width .12s linear",
        }}
      />
    </div>
  );
}

export function ConsortiumPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  return (
    <>
      <div className={`${SCOPE} min-h-screen`}>
        <SiteNav />
        <Tokens />
        <CosmicField />
        <ScrollProgress />

        <div>
          <ResidencyHero />
          <TheProblemSpace />
          <TheThreeSystems />
          <TheTeamBehindIt />
          <TheJourneyCarousel />
          <ResearchOpportunities />
          <CommunityAndGrowth />
          <FinalApplication onApply={() => setShowApplicationForm(true)} />
        </div>
        <SiteFooter />
      </div>
      
      {/* Residency Application Form Modal */}
      <ResidencyApplicationForm 
        isOpen={showApplicationForm} 
        onClose={() => setShowApplicationForm(false)} 
      />
    </>
  );
}

/* ---------------------------------- HERO ---------------------------------- */

function ResidencyHero() {
  const [y, setY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const fade = Math.max(0, 1 - y / 620);
  const parallax = y * 0.3;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      {/* Greek painting background with parallax - More visible on mobile with increased opacity */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 blur-[2px] md:opacity-100 md:blur-0"
        style={{ 
          transform: `translateY(${parallax}px) scale(1.1)`, 
          transition: "opacity 0.3s ease",
        }}
      >
        <img 
          src="/paintings/greek-hero-bg.jpg" 
          alt="" 
          className="h-full w-full object-cover"
          style={{ 
            opacity: fade * 0.4,
            filter: "blur(2px)"
          }}
        />
      </div>

      {/* Dark overlays for legibility */}
      <div className="pointer-events-none absolute inset-0" 
        style={{ background: "linear-gradient(180deg, var(--bg-deep) 0%, transparent 30%, transparent 70%, var(--bg) 100%)" }} />
      <div className="pointer-events-none absolute inset-0" 
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--bg) 85%)" }} />

      {/* horizon glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46vh]"
        style={{ background: "radial-gradient(60% 100% at 50% 130%, oklch(0.72 0.15 88 / .30), transparent 70%)" }}
      />

      <div
        className="relative z-10 mx-auto max-w-5xl text-center"
        style={{ transform: `translateY(${y * -0.12}px)`, opacity: fade }}
      >
        <div
          className="mb-10 inline-flex items-center gap-3 rounded-full px-5 py-2"
          style={{
            border: "1px solid var(--line)",
            background: "oklch(1 0 0 / .04)",
            backdropFilter: "blur(10px)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(14px)",
            transition: "all 1s cubic-bezier(.16,1,.3,1) .15s",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "var(--accent)", animation: "pulse-ring 2.4s ease-out infinite" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>
            Applications Open
          </span>
        </div>

        <h1
          className="display text-[clamp(3.1rem,10.5vw,9rem)] leading-[0.88]"
          style={{
            opacity: mounted ? 1 : 0,
            filter: mounted ? "blur(0)" : "blur(18px)",
            transform: mounted ? "none" : "scale(1.04)",
            transition: "all 1.5s cubic-bezier(.16,1,.3,1) .3s",
          }}
        >
          <span className="block aurora-text">The OrbitIQ</span>
          <span className="block aurora-text italic" style={{ animationDelay: "-4s" }}>Residency</span>
        </h1>

        <p
          className="mx-auto mt-10 max-w-2xl text-[clamp(1rem,1.55vw,1.32rem)] font-light leading-relaxed"
          style={{
            color: "var(--muted)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "all 1.2s cubic-bezier(.16,1,.3,1) .75s",
          }}
        >
          21 weeks. Three frontier systems. Real research infrastructure.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "all 1.2s cubic-bezier(.16,1,.3,1) .95s",
          }}
        >
          <a href="#apply" className="group relative overflow-hidden rounded-full px-9 py-4"
            style={{ background: "var(--accent)", color: "oklch(0.15 0.02 264)" }}>
            <span className="mono relative z-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]">
              Apply to Residency
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </span>
            <span className="absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
              style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / .55), transparent)" }} />
          </a>
          <a href="#systems" className="rounded-full px-9 py-4 mono text-[11px] uppercase tracking-[0.24em] transition-colors duration-500"
            style={{ border: "1px solid var(--line)", color: "var(--fg)" }}>
            See the systems
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ opacity: fade }}>
        <ChevronDown className="h-6 w-6" style={{ color: "var(--muted)", animation: "floaty 2.6s ease-in-out infinite" }} />
      </div>
    </section>
  );
}


/* ------------------------------- PROBLEM SPACE ---------------------------- */

function TheProblemSpace() {
  const tiles = [
    {
      span: "md:col-span-2 md:row-span-2",
      tint: "oklch(0.52 0.16 268 / .22)",
      content: (
        <>
          <p className="display text-[clamp(1.7rem,3vw,2.9rem)] leading-[1.06]">
            Research infrastructure that scales with ambition doesn't exist for most.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Students, researchers, and professionals lack access to AI-powered systems that can
            accelerate discovery. The tools exist at OpenAI, Anthropic, and DeepMind — but not
            for the people doing the actual research work.
          </p>
        </>
      ),
    },
    { tint: "oklch(0.58 0.16 62 / .20)", accent: "oklch(0.86 0.13 62)", value: "18–24mo", label: "average time from curiosity to first meaningful research output without infrastructure" },
    { tint: "oklch(0.55 0.15 160 / .20)", accent: "oklch(0.83 0.12 160)", value: "No access", label: "to production-grade AI research systems for independent researchers" },
    { span: "md:col-span-2", tint: "oklch(0.52 0.14 220 / .20)", accent: "oklch(0.80 0.12 220)", value: "Productivity gap", label: "Researchers without AI infrastructure operate at a fraction of potential throughput" },
    { tint: "oklch(0.58 0.15 88 / .20)", accent: "oklch(0.86 0.13 88)", value: "Limited paths", label: "Few programs exist that combine real systems, mentorship, and research goals" },
  ];

  return (
    <Section>
      <Reveal><p className="label">The gap we're filling</p></Reveal>
      <Reveal delay={90}>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
          AI-powered research infrastructure shouldn't be <span className="italic" style={{ color: "var(--accent)" }}>a privilege</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid auto-rows-[180px] gap-4 md:grid-cols-3">
        {tiles.map((t, i) => (
          <Reveal key={i} delay={i * 80} variant="scale" className={t.span || ""}>
            <BentoTile tint={t.tint}>
              {t.content ?? (
                <>
                  <p className="display text-[clamp(2rem,3.4vw,3.1rem)]" style={{ color: t.accent }}>{t.value}</p>
                  <p className="mono mt-3 text-[10px] uppercase leading-relaxed tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                    {t.label}
                  </p>
                </>
              )}
            </BentoTile>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BentoTile({ tint, children }: { tint: string; children: ReactNode }) {
  const ref = useSheen<HTMLDivElement>();
  return (
    <div ref={ref} className="glass glow lift flex h-full flex-col justify-center rounded-[22px] p-8">
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(120% 100% at 0% 0%, ${tint}, transparent 70%)` }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ------------------------------- THREE SYSTEMS ---------------------------- */

const SYSTEMS = [
  {
    name: "Morbius", domain: "Scientific Discovery", color: "var(--morbius)", icon: BookOpen,
    metric: "210M+ papers indexed",
    terminal: [
      "> Analyzing citation network for 'metacognition'...",
      "> Found 12,847 papers across 6 disciplines",
      "> Extracting theoretical frameworks...",
      "> 3 emergent clusters identified",
      "> Generating synthesis document...",
    ],
  },
  {
    name: "Prometheus", domain: "Biomedical Research", color: "var(--prometheus)", icon: Microscope,
    metric: "450k+ molecules screened",
    terminal: [
      "> Optimizing drug candidate AMODO-447...",
      "> Running multi-objective fitness function",
      "> Toxicity: 0.12 | Efficacy: 0.89 | Synthesis: feasible",
      "> Proposing 3 molecular modifications",
      "> Generating experimental protocol...",
    ],
  },
  {
    name: "Parallax", domain: "Quantitative Research", color: "var(--parallax)", icon: TrendingUp,
    metric: "Real-time signal engine",
    terminal: [
      "> Scanning market microstructure...",
      "> 47 anomalies detected in order flow",
      "> Backtesting strategy across 8 years",
      "> Sharpe: 2.3 | Max DD: 12%",
      "> Signal confidence: high",
    ],
  },
];

function TheThreeSystems() {
  return (
    <Section id="systems" divider>
      <Reveal><p className="label">What you'll work with</p></Reveal>
      <Reveal delay={90}>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
          Three production systems. Built to compete with the best labs in the world.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-7 lg:grid-cols-3">
        {SYSTEMS.map((sys, idx) => (
          <Reveal key={sys.name} delay={idx * 130} variant="scale">
            <SystemCard sys={sys} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function SystemCard({ sys }: { sys: (typeof SYSTEMS)[number] }) {
  const Icon = sys.icon;
  const ref = useSheen<HTMLElement>();
  return (
    <article ref={ref} className="glass glow lift group h-full rounded-[24px]">
      <div className="relative border-b p-6" style={{ borderColor: "var(--line)", background: "oklch(0.10 0.018 264 / .7)" }}>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-40"
          style={{
            background: `linear-gradient(180deg, ${sys.color}, transparent)`,
            filter: "blur(24px)",
            animation: "scan 6s linear infinite",
          }}
        />
        <div className="relative mb-4 flex items-center gap-3">
          <span className="flex gap-1.5">
            {["oklch(0.7 0.16 25)", "oklch(0.82 0.14 88)", "oklch(0.75 0.14 150)"].map((c) => (
              <span key={c} className="h-2 w-2 rounded-full" style={{ background: c, opacity: 0.7 }} />
            ))}
          </span>
          <Icon className="ml-2 h-4 w-4" style={{ color: sys.color }} />
          <span className="mono text-[9.5px] uppercase tracking-[0.24em]" style={{ color: sys.color }}>Live preview</span>
        </div>
        <Terminal lines={sys.terminal} color={sys.color} />
      </div>

      <div className="p-8">
        <h3 className="display text-3xl">{sys.name}</h3>
        <p className="mt-1.5 text-sm" style={{ color: "var(--muted)" }}>{sys.domain}</p>
        <div className="my-6 rule" />
        <p className="mono text-[10px] uppercase tracking-[0.2em]" style={{ color: sys.color }}>{sys.metric}</p>
        <a href={`#${sys.name.toLowerCase()}`}
          className="mono mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] transition-all duration-500 hover:gap-4"
          style={{ color: sys.color }}>
          Explore system <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function Terminal({ lines, color }: { lines: string[]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) { setN(0); setChars(0); io.disconnect(); start(); }
    }, { threshold: 0.4 });
    let raf = 0, i = 0, c = 0, last = 0;
    const start = () => {
      const tick = (t: number) => {
        if (t - last > 16) {
          last = t;
          c += 2;
          if (c >= (lines[i]?.length ?? 0)) {
            c = 0; i += 1;
            if (i >= lines.length) { setN(lines.length); setChars(0); return; }
          }
          setN(i); setChars(c);
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [lines]);

  return (
    <div ref={ref} className="mono relative space-y-1.5 text-[10.5px] leading-relaxed" style={{ minHeight: 92, color: "oklch(0.82 0.02 260)" }}>
      {lines.slice(0, n).map((l) => <p key={l} style={{ opacity: 0.62 }}>{l}</p>)}
      {n < lines.length && (
        <p>
          {(lines[n] ?? "").slice(0, chars)}
          <span style={{ color, animation: "caret 1s steps(1) infinite" }}>▌</span>
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- TEAM ---------------------------------- */

function TheTeamBehindIt() {
  return (
    <Section divider>
      <Reveal><p className="label">Who you'll work with</p></Reveal>
      <Reveal delay={90}>
        <h2 className="display mt-8 max-w-4xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
          The researchers and engineers building the foundational models and agentic frameworks.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal delay={120} variant="left">
          <div className="glass lift h-full rounded-[24px] p-10">
            <h3 className="display text-2xl">Research Infrastructure</h3>
            <div className="my-6 rule" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              You'll work directly with the team building Morbius, Prometheus, and Parallax — 
              production AI research systems designed to accelerate scientific discovery across domains.
            </p>
            <ul className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {[
                "Direct access to researchers building frontier AI systems",
                "Learn from teams working on agentic frameworks and foundation models",
                "Collaborate with engineers solving real infrastructure problems at scale",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] flex-shrink-0" style={{ color: "var(--accent)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={220} variant="right">
          <div className="glass lift h-full rounded-[24px] p-10">
            <h3 className="display text-2xl">The Systems</h3>
            <div className="my-6 rule" />
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              These aren't demos. Morbius, Prometheus, and Parallax are production research 
              infrastructure actively used to accelerate discovery in scientific literature, 
              biomedical research, and quantitative analysis.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { name: "Morbius", node: <><Counter to={210} />M+</>, color: "var(--morbius)" },
                { name: "Prometheus", node: <><Counter to={450} />k+</>, color: "var(--prometheus)" },
                { name: "Parallax", node: <>Real-time</>, color: "var(--parallax)" },
              ].map((s) => (
                <div key={s.name} className="text-center">
                  <p className="display text-[clamp(1.1rem,2vw,1.8rem)]" style={{ color: s.color }}>{s.node}</p>
                  <p className="mono mt-2 text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- INTERLUDE -------------------------------- */

function Interlude({ aphorism, caption, imagePath }: { aphorism: string; caption: string; imagePath: string }) {
  const [y, setY] = useState(0);

  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const parallax = y * 0.18;

  return (
    <section 
      className="relative overflow-hidden border-y border-border/60" 
      style={{ height: "clamp(420px, 62vh, 640px)" }}
    >
      {/* Parallax image layer (oversized so drift never reveals edges) */}
      <div 
        className="absolute inset-x-0 top-[-12%] h-[124%]"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <img
          src={imagePath}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Darkening scrims for legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.09 0.01 265 / 0.55), oklch(0.09 0.01 265 / 0.35) 50%, oklch(0.09 0.01 265 / 0.75))" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, oklch(0.09 0.01 265 / 0.6))" }} />

      {/* Text content */}
      <div className="relative flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <Reveal variant="blur">
            <p className="mono mb-10 text-[10px] uppercase tracking-[0.4em]" style={{ color: "var(--muted)" }}>
              {caption}
            </p>
          </Reveal>
          <Reveal variant="blur" delay={140}>
            <p className="display text-[clamp(1.35rem,2.8vw,2.4rem)] italic leading-[1.35]">
              "{aphorism}"
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mx-auto mt-12 h-px w-24" style={{ background: "var(--accent)", opacity: 0.6 }} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* --------------------------------- JOURNEY -------------------------------- */

const STAGES = [
  {
    phase: "21-Week Research Program",
    weeks: "Weeks 1–21",
    steps: [
      { name: "Application", detail: "Research proposal + technical background evaluation" },
      { name: "Evaluation", detail: "Review by research team, alignment with systems" },
      { name: "Onboarding", detail: "System architecture, API access, infrastructure training" },
      { name: "Project Scoping", detail: "Define research objectives with team guidance" },
      { name: "Research Execution", detail: "Work with foundational models and agentic frameworks" },
      { name: "Output Development", detail: "Paper, system, or benchmark artifact completion" },
      { name: "Review & Synthesis", detail: "Research validation and future direction discussion" },
    ],
  },
];

function TheJourneyCarousel() {
  return (
    <Section divider>
      <Reveal><p className="label">The program structure</p></Reveal>
      <Reveal delay={90}>
        <h2 className="display mt-8 max-w-4xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
          21 weeks of structured research with production infrastructure.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          Work alongside the team building the foundational models and agentic frameworks that power
          Morbius, Prometheus, and Parallax. Real systems, real research, real output.
        </p>
      </Reveal>

      <div className="mt-16">
        {STAGES.map((phase, pi) => (
          <PhaseRail key={phase.phase} phase={phase} index={pi} />
        ))}
      </div>
    </Section>
  );
}

function PhaseRail({ phase, index }: { phase: (typeof STAGES)[number]; index: number }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProg(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <div>
      <Reveal delay={index * 100}>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="display text-2xl">{phase.phase}</p>
            <p className="mono mt-1 text-[10px] uppercase tracking-[0.24em]" style={{ color: "var(--muted)" }}>{phase.weeks}</p>
          </div>
          <div className="h-[2px] w-40 overflow-hidden rounded-full" style={{ background: "oklch(1 0 0 / .07)" }}>
            <div style={{ height: "100%", width: `${Math.max(12, prog * 100)}%`, background: "var(--accent)", transition: "width .2s linear" }} />
          </div>
        </div>
      </Reveal>

      <div ref={railRef} onScroll={onScroll}
        className="no-bar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
        style={{ scrollPaddingLeft: 0 }}>
        {phase.steps.map((step, i) => (
          <Reveal key={step.name} delay={i * 70} variant="scale">
            <StepCard step={step} i={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function StepCard({ step, i }: { step: { name: string; detail: string }; i: number }) {
  const ref = useSheen<HTMLDivElement>();
  const hue = 88 + i * 26;
  return (
    <div ref={ref} className="glass glow lift w-[300px] flex-shrink-0 snap-start rounded-[26px] sm:w-[360px]">
      <div className="relative h-44 overflow-hidden" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(90% 120% at 30% 0%, oklch(0.55 0.16 ${hue} / .40), transparent 70%)` }} />
        <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" style={{ opacity: 0.55 }}>
          {Array.from({ length: 9 }).map((_, k) => (
            <path key={k}
              d={`M0 ${20 + k * 10} Q 50 ${8 + k * 12}, 100 ${24 + k * 9} T 200 ${16 + k * 11}`}
              fill="none" stroke={`oklch(0.8 0.12 ${hue})`} strokeWidth="0.35" opacity={0.5 - k * 0.03} />
          ))}
        </svg>
        <span className="display absolute bottom-3 right-5 text-[4.6rem] leading-none" style={{ color: "oklch(1 0 0 / .07)" }}>
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-8">
        <h3 className="display text-2xl">{step.name}</h3>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.detail}</p>
      </div>
    </div>
  );
}

/* ------------------------ RESEARCH OPPORTUNITIES -------------------------- */

function ResearchOpportunities() {
  const railRef = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProg(max > 0 ? el.scrollLeft / max : 0);
  };

  const opportunities = [
    { 
      title: "Conference Publications", 
      detail: "Develop research worthy of flagship international conferences. Present at venues where breakthrough work gets recognized.",
      color: "var(--morbius)",
      image: "/paintings/conference-talk.jpg", // User's IISC photo
      tags: ["Oral presentations", "Flagship venues", "International recognition", "Peer review"],
    },
    { 
      title: "Journal Articles", 
      detail: "Contribute to top-tier peer-reviewed journals. Build publication record in high-impact academic venues.",
      color: "var(--prometheus)",
      image: "/paintings/journal-publication.jpg",
      tags: ["Peer-reviewed", "High impact", "Citation record", "Academic credibility"],
    },
    { 
      title: "Research Community", 
      detail: "Connect with international research networks. Build relationships with researchers working on frontier problems.",
      color: "var(--parallax)",
      image: "/paintings/research-community.jpg",
      tags: ["Global network", "Collaboration", "Knowledge exchange", "Mentorship"],
    },
    { 
      title: "Career Advancement", 
      detail: "Build credentials for academic and industry positions. Create portfolio that opens doors to research roles.",
      color: "oklch(0.84 0.13 88)",
      image: "/paintings/career-growth.jpg",
      tags: ["Academia", "Industry", "Research roles", "Portfolio building"],
    },
    { 
      title: "International Recognition", 
      detail: "Present work on global stages and build reputation. Establish yourself in the international research community.",
      color: "var(--violet)",
      image: "/paintings/international-stage.jpg",
      tags: ["Global stages", "Reputation", "Visibility", "Impact"],
    },
  ];

  return (
    <Section divider>
      <Reveal><p className="label">Research opportunities</p></Reveal>
      <Reveal delay={90}>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
          Pathways to recognition, not certificates.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          Equip yourself with tools and infrastructure to reach international conferences, 
          publish in top-tier journals, and build a research profile that opens doors.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-12 mb-5 flex items-center justify-between gap-4">
          <p className="mono text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--muted)" }}>
            Scroll to explore
          </p>
          <div className="h-0.5 flex-1" style={{ background: "var(--line)" }}>
            <div className="h-full origin-left" style={{ background: "var(--accent)", transform: `scaleX(${prog})` }} />
          </div>
        </div>
      </Reveal>

      <div
        ref={railRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 pb-8 lg:-mx-10 lg:px-10"
      >
        {opportunities.map((opp, i) => (
          <Reveal key={opp.title} delay={i * 80} variant="scale" className="shrink-0">
            <div 
              className="glass glow lift w-[420px] overflow-hidden rounded-[24px]"
              style={{ height: 520 }}
            >
              {/* Large image on top */}
              <div 
                className="relative h-56 overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${opp.color}15, ${opp.color}08)`,
                  borderBottom: "1px solid var(--line)"
                }}
              >
                <img 
                  src={opp.image}
                  alt={opp.title}
                  className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                  style={{ filter: "saturate(0.9)" }}
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg, transparent 40%, ${opp.color}12 100%)` }}
                />
              </div>

              {/* Content below */}
              <div className="flex h-[calc(520px-14rem)] flex-col p-8">
                <h3 className="display text-2xl mb-3" style={{ color: opp.color }}>
                  {opp.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                  {opp.detail}
                </p>

                {/* Tags/chips */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {opp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors hover:bg-surface/60"
                      style={{ 
                        borderColor: `color-mix(in oklab, ${opp.color} 35%, transparent)`,
                        color: opp.color
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- COMMUNITY AND GROWTH --------------------------- */

function CommunityAndGrowth() {
  const items = [
    { 
      icon: Users, 
      title: "Research Network", 
      detail: "Connect with researchers, engineers, and scientists working on frontier AI systems. Collaborative environment for feedback, knowledge sharing, and ongoing research discussions." 
    },
    { 
      icon: Sparkles, 
      title: "Continued Collaboration", 
      detail: "Opportunity to continue working on research projects beyond the 21-week program. Exceptional work can lead to co-authorship paths and deeper involvement with OrbitIQ systems." 
    },
    { 
      icon: Code2, 
      title: "Infrastructure Access", 
      detail: "Graduates receive continued access to Morbius, Prometheus, and Parallax infrastructure to support ongoing research initiatives and maintain research momentum." 
    },
  ];

  return (
    <Section divider>
      <Reveal><p className="label">Beyond the program</p></Reveal>
      <Reveal delay={90}>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.04]">
          A research community, not a <span className="italic" style={{ color: "var(--accent)" }}>graduation</span>.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-7 lg:grid-cols-2">
        <div className="space-y-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 110} variant="left">
                <div className="glass lift flex gap-6 rounded-[22px] p-7">
                  <Icon className="h-7 w-7 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  <div>
                    <h3 className="display text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={280} variant="right">
          <div className="glass relative flex h-full flex-col justify-center rounded-[26px] p-10">
            <div className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(80% 60% at 50% 0%, oklch(0.6 0.15 88 / .14), transparent 70%)" }} />
            <p className="mono relative mb-10 text-center text-[10px] uppercase tracking-[0.28em]" style={{ color: "var(--muted)" }}>
              Program outcomes
            </p>
            <div className="relative grid gap-10 sm:grid-cols-2">
              {[
                { node: <>Research infrastructure</>, label: "Production AI systems access" },
                { node: <>Global network</>, label: "International research connections" },
                { node: <>Real output</>, label: "Published papers and artifacts" },
                { node: <>Career growth</>, label: "Academic and industry pathways" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="display text-2xl mb-2" style={{ color: "var(--accent)" }}>{s.node}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------- APPLICATION ----------------------------- */

function FinalApplication({ onApply }: { onApply: () => void }) {
  return (
    <Section id="apply" divider>
      <Reveal variant="scale">
        <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[32px]">
          <div className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(90% 70% at 50% -10%, oklch(0.6 0.16 88 / .18), transparent 68%)" }} />

          <div className="relative p-12 sm:p-16 lg:p-20 text-center">
            <p className="mono mb-5 text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>
              Applications Open
            </p>
            
            <h2 className="display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] mb-8">
              <span className="aurora-text">Apply to the</span>
              <br />
              <span className="aurora-text italic" style={{ animationDelay: "-3s" }}>OrbitIQ Residency</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed mb-12" style={{ color: "var(--muted)" }}>
              Join researchers and engineers building AI systems that accelerate scientific discovery. 
              21 weeks of structured research with production infrastructure.
            </p>

            <button 
              onClick={onApply}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-12 py-6"
              style={{ background: "var(--accent)", color: "oklch(0.15 0.02 264)" }}
            >
              <span className="mono relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] font-medium">
                Submit Application
                <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
                style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / .55), transparent)" }} />
            </button>

            <div className="mt-16 pt-10 border-t" style={{ borderColor: "var(--line)" }}>
              <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                Questions about the program?
              </p>
              <a 
                href="mailto:support@orbitiqlabs.space" 
                className="mono inline-flex items-center gap-2 text-[11px] uppercase tracking-wider transition-all hover:gap-3"
                style={{ color: "var(--accent)" }}
              >
                Contact us <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- LAYOUT --------------------------------- */

function Section({ children, id, divider }: { children: ReactNode; id?: string; divider?: boolean }) {
  return (
    <section id={id} className="relative py-24 lg:py-36">
      {divider && <div className="absolute inset-x-0 top-0 rule" />}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">{children}</div>
    </section>
  );
}

