import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface Plate {
  badge: string;
  title: string;
  body: string;
}

const PLATES: Plate[] = [
  { badge: "SOC 2 · TYPE II", title: "Independently audited", body: "Controls audited against security, availability, and confidentiality criteria." },
  { badge: "HIPAA · READY", title: "Regulated-data safe", body: "Architected for protected health and clinical data workflows." },
  { badge: "AES-256 · TLS 1.3", title: "Encrypted end to end", body: "At rest and in transit — no plaintext ever leaves your boundary." },
  { badge: "ZERO · TRAINING", title: "Never trained on your data", body: "Your literature, results, and IP are never used to train shared models." },
  { badge: "SSO · SAML / SCIM", title: "Enterprise identity", body: "Provision, deprovision, and enforce access through your own IdP." },
  { badge: "IMMUTABLE · LOGS", title: "Full audit trail", body: "Every query, retrieval, and agent action is logged and reproducible." },
  { badge: "RBAC · GRANULAR", title: "Role-based access", body: "Scope data, agents, and knowledge graphs down to the individual." },
  { badge: "REGION · PINNED", title: "Data residency", body: "Pin storage and compute to your required geographic region." },
];

export function Security() {
  return (
    <section id="trust" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeader
              numeral="VII"
              eyebrow="Trust & Security"
              title={
                <>
                  Built for institutions that can&rsquo;t afford to <span className="italic text-accent">guess.</span>
                </>
              }
              lede="Frontier capability means nothing without defensible security. OrbitIQ is engineered for the compliance, privacy, and auditability that regulated research demands."
            />
            <Reveal delay={240}>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/60 bg-surface/40 px-5 py-3">
                <span className="h-2 w-2 rounded-full bg-accent" style={{ animation: "soft-blink 1.6s ease-in-out infinite" }} />
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  ALL SYSTEMS · COMPLIANT
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
            {PLATES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <div className="group flex h-full flex-col gap-3 bg-[oklch(0.13_0.01_265)] p-7 transition-colors hover:bg-surface/50">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70 transition-all group-hover:shadow-[0_0_10px_2px_color-mix(in_oklab,var(--accent)_60%,transparent)]" />
                    <span className="font-mono text-[9px] tracking-[0.2em] text-accent/90">{p.badge}</span>
                  </div>
                  <h3 className="font-display text-lg font-light tracking-tight">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
