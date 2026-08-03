import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

type FootLink = { label: string; to?: string; slug?: string; hash?: string };

const COLUMNS: { title: string; items: FootLink[] }[] = [
  {
    title: "Systems",
    items: [
      { label: "Morbius", slug: "morbius" },
      { label: "Prometheus · Beta", slug: "prometheus" },
      { label: "Parallax · Beta", slug: "parallax" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", hash: "about" },
      { label: "Research", hash: "research" },
      { label: "Enterprise", hash: "solutions" },
      { label: "Trust & Security", hash: "trust" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Contact", hash: "contact" },
      { label: "Careers", hash: "contact" },
      { label: "Research Blog", hash: "contact" },
    ],
  },
];

const SOCIALS = [
  { label: "X", url: "https://x.com/orbitiqlabs" },
  { label: "LinkedIn", url: "https://linkedin.com/company/orbitiqlabs" },
  { label: "YouTube", url: "https://youtube.com/@orbitiqlabs" },
  { label: "Instagram", url: "https://instagram.com/orbitiqlabs" },
];

function FooterLink({ item }: { item: FootLink }) {
  const cls = "text-sm text-muted-foreground/70 transition-colors hover:text-foreground";
  if (item.slug) {
    return (
      <Link to="/$slug" params={{ slug: item.slug }} className={cls}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={`/#${item.hash}`} className={cls}>
      {item.label}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border/60">
      {/* Greek-key ornamental band */}
      <div className="greek-key opacity-40" aria-hidden="true" />

      {/* Newsletter band */}
      <div className="border-b border-border/40">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="label-mono">Field notes from the frontier</p>
            <h3 className="font-display mt-3 text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-tight tracking-[-0.02em]">
              Dispatches on autonomous discovery.
            </h3>
          </div>
          <form
            className="flex w-full max-w-md items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector("input") as HTMLInputElement;
              if (input && input.value) {
                const mailtoLink = `mailto:support@orbitiqlabs.space?subject=Newsletter Subscription&body=Please subscribe ${encodeURIComponent(input.value)} to the OrbitIQ Labs newsletter.`;
                window.location.href = mailtoLink;
                input.value = "";
              }
            }}
          >
            <input
              type="email"
              required
              placeholder="you@institution.edu"
              className="h-12 flex-1 rounded-full border border-border/60 bg-surface/40 px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent/60"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-full bg-accent px-6 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-16 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1.4fr]">
          <Reveal>
            <Link to="/" className="group inline-flex items-center">
              <img 
                src="/paintings/company-logo-transparent.png" 
                alt="OrbitIQ Labs" 
                className="h-24 w-auto"
              />
            </Link>
            <p className="mt-4 font-display text-xl font-light italic text-muted-foreground">
              Intelligence in orbit around discovery.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground/70">
              Advancing the frontier of autonomous discovery, agentic intelligence, and scientific
              literacy — for the researchers who move the world forward.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="label-mono text-xs">Support</span>
              <br />
              <a href="mailto:support@orbitiqlabs.space" className="text-violet-400 hover:underline">
                support@orbitiqlabs.space
              </a>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              {SOCIALS.map((s) => (
                <a 
                  key={s.label} 
                  href={s.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((col, i) => (
              <Reveal key={col.title} delay={i * 80}>
                <p className="label-mono">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <FooterLink item={item} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border/40 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono opacity-50">© 2026 OrbitIQ Labs · Mangaluru, Karnataka, India</p>
          <p className="label-mono opacity-50">Built by scientists. For scientists.</p>
        </div>
      </div>
    </footer>
  );
}
